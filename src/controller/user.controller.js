const User = require("../models/user");
const { generateToken } = require("../services/jwtService");
const { createHash } = require('crypto');

function hashPassword(password) {
    return createHash('sha256').update(password).digest('base64');
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const findUser = await User.findOne({ username });

        if (!findUser) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
                error: true
            });
        }
        if (findUser.password !== hashPassword(password)) {
            return res.status(401).json({
                message: 'Credenciales incorrectas',
                error: true
            });
        }
        const payload = { id: findUser.id, username: findUser.username, rol: findUser.rol };
        res.status(200).json({
            message: 'Login exitoso',
            token: generateToken(payload),
            rol: findUser.rol,
            id: findUser.id,
            error: false,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const createUser = async (req, res) => {
    try {
        const body = req.body;
        
        const newUser = new User({
            rol: body.rol,
            username: body.username,
            dni: body.dni,
            socialwork: body.socialwork,
            password: hashPassword(body.password)
        });

        const savedUser = await newUser.save();
        const payload = { id: savedUser.id, username: savedUser.username, rol: savedUser.rol };
        res.status(201).json({
            message: 'Usuario creado exitosamente',
            token: generateToken(payload),
            rol: savedUser.rol,
            id: savedUser.id,
            error: false
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
};

module.exports = {
    createUser,
    loginUser
}
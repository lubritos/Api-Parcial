const User = require("../models/user");
const { ClientConnection } = require("../config/db");

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const findUser = await User.findOne({ username });

        if (!findUser) {
            res.status(404).json({
                message: 'Usuario no encontrado',
                error: true
            });
        }
        if (findUser.password !== password) {
            res.status(401).json({
                message: 'Credenciales incorrectas',
                error: true
            });
        }
        res.status(200).json({
            message: 'Login exitoso',
            token: generateToken(findUser),
            rol: findUser.rol,
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
            password: body.password
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'Usuario creado exitosamente',
            token: generateToken(savedUser),
            rol: findUser.rol,
        });

    } catch (error) {
        console.error(error);
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
const request = require('supertest');
const app = require('../app');

jest.mock('bcrypt', () => ({
    compare: () => true
}));

describe('loginUser', () => {

    test('Debe loguear correctamente', async () => {

        const res = await request(app)
        .post('/login')
        .send({
        username: 'luciano',
        password: 'hash_guardado',
        });

        expect(res.body.message).toBe('Login exitoso');
        expect(res.body.error).toBe(false);

    });

});
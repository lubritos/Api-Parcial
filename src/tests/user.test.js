const request = require('supertest');
const app = require('../app');

jest.mock('bcrypt', () => ({
    compare: () => true
}));

describe('loginUser', () => {

    test('Debe loguear correctamente', async () => {

        const res = await request(app)
        .post('/api/login')
        .send({
        username: 'luciana.britos@test.com',
        password: 'Naranja18',
        });

        expect(res.body.message).toBe('Login exitoso');
        expect(res.body.error).toBe(false);

    });

});
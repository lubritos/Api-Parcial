const request = require('supertest');
const app = require('../app');

describe('POST /profesionales', () => {

  test('Debe crear un profesional correctamente', async () => {
    const user = await request(app)
            .post('/api/login')
            .send({
            username: 'luciana.britos@test.com',
            password: 'Naranja18',
            });
    const res = await request(app)
      .post('/api/profesional')
      .set('Authorization', `Bearer ${user.body.token}`)
      .send({
        nombre: 'Juan Pérez',
        especialidad: 'Cardiología',
        descripcion: 'Especialista en cardiología'
      });

    expect(res.body.message).toBe('Profesional creado exitosamente');
    expect(res.body.error).toBe(false);

  });

});
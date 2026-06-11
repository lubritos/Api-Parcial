const request = require('supertest');
const app = require('../app');

describe('POST /profesionales', () => {

  test('Debe crear un profesional correctamente', async () => {

    const res = await request(app)
      .post('/profesionales')
      .set('Authorization', 'Bearer TOKEN_ADMIN')
      .send({
        nombre: 'Juan Pérez',
        especialidad: 'Cardiología',
        descripcion: 'Especialista en cardiología'
      });

    expect(res.body.message).toBe('Profesional creado exitosamente');
    expect(res.body.error).toBe(false);

  });

});
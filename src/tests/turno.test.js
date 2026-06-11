const request = require('supertest');
const app = require('../app');

jest.mock('bcrypt', () => ({
    compare: () => true
}));


describe('POST /turnos', () => {

  test('Debe crear un turno correctamente', async () => {

    const res = await request(app)
      .post('/turnos')
      .send({
        profesional: '684a123456',
        especialidad: 'Cardiología',
        fecha: '2026-06-20',
        hora: '10:00',
        paciente: '684b987654',
        estado: 'Pendiente'
      });

    expect(res.body.message).toBe('Turno creado exitosamente');
    expect(res.body.error).toBe(false);

  });

});
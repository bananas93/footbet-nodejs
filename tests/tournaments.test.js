const request = require('supertest');
const app = require('../app');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjMxNDUxNTIyfQ.ph6uhFrK03JsgbHOEhzk4mG5yhBJxe3v3HhCcDKASkQ';

describe('Test tournaments root path', () => {
  test('It should 401 error', async () => {
    const response = await request(app).get('/api/tournaments');
    expect(response.statusCode).toBe(401);
  });
  test('It should response all tournaments', async () => {
    const response = await request(app).get('/api/tournaments').set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
  });
});

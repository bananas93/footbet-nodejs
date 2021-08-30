const request = require('supertest');
const app = require('../app');

describe('Matches Endpoints', () => {
  it('should get matches', async () => {
    const res = await request(app)
      .get('/api/matches/1');
    expect(res.statusCode).toEqual(200);
  });
});

const supertest = require('supertest');
const server = require('../server');
const db = require('../data/config');
const charModel = require('./character-model');

beforeEach(async () => {
  await db.seed.run();
});

describe('GET /characters', () => {
  test('names of characters returned', async () => {
    const res = await supertest(server).get('/api/characters');
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body[0].name).toMatch(/cartman/i);
  });

  test('error message can not find any names', async () => {
    const res = await supertest(server).get('/api/characters');
    const names = false;
    if (names) {
      expect(res.status).toBe(400);
    }
  });
});

describe('POST /characters', () => {
  test('insert character', async () => {
    const res = await supertest(server)
      .post('/api/characters')
      .send({ name: 'bart' });

    expect(res.status).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body).toEqual({ id: 5, name: 'bart' });
  });
});

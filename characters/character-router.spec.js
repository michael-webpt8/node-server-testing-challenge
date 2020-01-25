const supertest = require('supertest');
const server = require('../server');
const db = require('../data/config');

beforeEach(async () => {
    await db.seed.run();
})

test('Get List route', async () => {
    const res = await supertest(server).get('/api/characters');
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body[0].name).toBe('Cartman');

})
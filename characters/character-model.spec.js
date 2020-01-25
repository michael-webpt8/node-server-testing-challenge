const db = require('../data/config');
const charModel = require('./character-model');

beforeEach(async () => {
    await db.seed.run();
})

describe('characters model', () => {
    test('list', async () => {
        const res = await charModel.list();
        expect(res.length).toBeGreaterThan(0);
    })

    test('findBy', async () => {
        const res = await charModel.findBy({ name: 'Kenny' }).first();
        expect(res).toEqual({ id: 2, name: "Kenny" })
    })

    test('findById', async () => {
        const res = await charModel.findById(1);
        expect(res.name).toMatch(/cartman/i);
    })

    test('insert', async () => {
        await charModel.insert({ name: 'ernie' });
        const characters = await charModel.list();
        expect(characters).toHaveLength(5);
    })

    test('update', async () => {
        await charModel.update(1, { name: 'Stan' });
        const stan = await charModel.findById(1);
        expect(stan.name).toMatch(/stan/i);
    })

    test('remove', async () => {
        await charModel.remove(1);
        const names = await charModel.list();
        expect(names).toHaveLength(3);
    })
})


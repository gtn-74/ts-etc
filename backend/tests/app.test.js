const request = require('supertest');
const app = require('../src/index.ts').default;

describe('GET /', () => {
  it('returns Hello, takeshi!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, takeshi!');
  });
});

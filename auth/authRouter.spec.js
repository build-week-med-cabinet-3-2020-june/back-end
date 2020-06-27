const request = require("supertest");
const router = require("./authRouter");

describe('Register new user', () => {
    it('should return 201 OK', () => {
        return request(router).get('/register')
            .then(res => {
                expect(res.status).toBe(201);
            });
    });
});
    
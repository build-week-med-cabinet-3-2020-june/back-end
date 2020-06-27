const request = require("supertest");
const router = require("./userRouter");

describe('GETS all users', () => {
    it('should return 200 OK', () => {
        return request(router).get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
    });
    

describe('GETS user by id', () => {
    it('should return 200 OK', () => {
        return request(router).get('/:id/')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});

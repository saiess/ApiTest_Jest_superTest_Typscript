import request from "supertest";
import app from "../app";

// test routes for user
describe('User', () => {
  // test get all users
  it('should get all users', async () => {
    try {
      const response = await request(app).get('/api/users/all');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('users');
    } catch (error) {
      expect(error).toBe(error);
    }
  });
  // test create user
  it('should create a user', async () => {
    try {
      const response = await request(app)
        .post('/api/users/create')
        .send({
          name: 'test',
          company_name: 'test',
          users: [
            {
              name: 'test',
              email: 'test@email.com',
            },
          ],
        });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
    } catch (error) {
      expect(error).toBe(error);
    }
  });
  // test delete user
  it('should delete a user', async () => {
    try {
      const response = await request(app)
        .delete('/api/users/delete/5e8f8f8f8f8f8f8f8f8f8f8');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
    } catch (error) {
      expect(error).toBe(error);
    }
  });
});



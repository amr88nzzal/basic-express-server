'use strict';

const { app } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Web server', () => {
  // Check if server is alive

  test('/hello works', async () => {

    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);

  });


  // Check if 404 is handled 

  test('Should respond with 404 status on an invalid method', async () => {

    const response = await mockRequest.get('/xxx');
    expect(response.status).toBe(404);

  });


  // Check if general error handling is working

  test('should respond with 500 on an error', async () => {

    const response = await mockRequest.get('/person');
    expect(response.status).toBe(500);

  });
  test('/404 on a bad route', async () => {
    const response = await mockRequest.get('/zzzzz');
    expect(response.status).toBe(404);
  });
  test('404 on a bad method', async () => {
    const response = await mockRequest.post('/person?name=Amr');
    expect(response.status).toBe(404);
  });
});
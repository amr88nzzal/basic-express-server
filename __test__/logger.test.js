'use strict';
const loggerTester = require('../src/middleware/logger');

describe('test logger', () => {
  let consoleSpy;// global variable that will be used to keep an on any operation that is a console log
  let req = {}; // mock req
  let res = {}; // mock res
  let next = jest.fn(); // spy method. mock function
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  test('properly logs some output', () => {
    loggerTester(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  test('check if properly moved to the next middleware', () => {
    loggerTester(req, res, next);
    expect(next).toHaveBeenCalled();
  });


})

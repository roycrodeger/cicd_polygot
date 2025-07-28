const request = require('supertest');
const { expect } = require('chai');

// We need to import the app and start it for testing
const app = require('../index');

describe('Gateway Service', () => {
  it('should return status on /gateway/status', (done) => {
    request('http://localhost:3000')
      .get('/gateway/status')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.service).to.equal('nodejs-gateway');
        expect(res.body.status).to.equal('running');
        done();
      });
  });
});
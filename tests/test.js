// Import the dependencies for testing
const chai  = require('chai');
const chaiHttp = require('chai-http');
const app =  require('../server');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Characters", () => {
  describe("GET /", () => {
    // Test to get all character records
    it("should get all character records", (done) => {
      chai.request(app)
        .get('/api/v1/characters')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
      });
  });
});
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";  // Ensure this path correctly points to app.js

chai.use(chaiHttp);
const { expect } = chai;

describe("FAQ API", () => {
  it("should GET all FAQs", (done) => {
    chai.request(app)
      .get("/api/faqs")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});

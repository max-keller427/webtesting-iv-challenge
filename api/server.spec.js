const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("get /", () => {
    it("should return 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});

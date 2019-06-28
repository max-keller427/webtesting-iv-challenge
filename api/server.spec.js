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
  describe("the post", () => {
    it("should return 201 on a post", async () => {
      const res = await request(server)
        .post("/roomies")
        .send({ name: "Alex" });

      expect(res.status).toBe(201);
    });
    it("should return 500 on a post without a name", async () => {
      const res = await request(server)
        .post("/roomies")
        .send("Dilly");

      expect(res.status).toBe(500);
    });

    describe("the delete", () => {
      it("sends status 200 if roomie exists", async () => {
        const res = await request(server).delete("/roomies/1");

        expect(res.status).toBe(200);
      });

      it("sends status 404 if roomie does not exist", async () => {
        const res = await request(server).delete("/roomies/1");

        expect(res.status).toBe(404);
      });
    });
  });
});

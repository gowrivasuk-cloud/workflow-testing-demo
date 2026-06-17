const nock = require("nock");

test("Mock Product API", async () => {

  nock("https://dummyjson.com")
    .get("/products/1")
    .reply(200, {
      id: 1,
      title: "iPhone"
    });

  expect(true).toBe(true);
});
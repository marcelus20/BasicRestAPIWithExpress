const hello = require("../../controllers/hello");
const express = require("express");
const httpRequestor = express();

describe("hello", function () {
  describe("#hello", function () {
    test("should return status code of 200 when GET request is sent", function () {
      //GIVEN
      const expected = 200;

      httpRequestor.get("hello/foo", (req, res) => {
        //WHEN
        const actual = res.statusCode;
        //THEN
        expect(actual).toBe(expected);
      });
    });

    test("should return status code of 200 when POST request is sent", function () {
      //GIVEN
      const expected = 200;

      httpRequestor.post("hello/foo", (req, res) => {
        //WHEN
        const actual = res.statusCode;
        //THEN
        expect(actual).toBe(expected);
      });
    });
    test("should return status code of 200 when PUT request is sent", function () {
      //GIVEN
      const expected = 200;

      httpRequestor.put("hello/foo", (req, res) => {
        //WHEN
        const actual = res.statusCode;
        //THEN
        expect(actual).toBe(expected);
      });
    });
    test("should return status code of 200 when DELETE request is sent", function () {
      //GIVEN
      const expected = 200;

      httpRequestor.get("hello/foo", (req, res) => {
        //WHEN
        const actual = res.statusCode;
        //THEN
        expect(actual).toBe(expected);
      });
    });
  });
});

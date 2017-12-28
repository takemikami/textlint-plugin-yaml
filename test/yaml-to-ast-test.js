"use strict";
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const assert = require("power-assert");
const test = require("textlint-ast-test").test;
import {parse_yaml} from "../src/yaml-to-ast";

describe("html-to-ast-test", function () {
  it("should return AST that passed isTxtAST", function () {
    const fixture = fs.readFileSync(path.join(__dirname, "fixtures/rails_en.yml"), "utf-8");
    const AST = parse_yaml(fixture);
    test(AST);
  });
  // test cases
  context("test-case", () => {
    const htmls = glob.sync(__dirname + "/ast-test-case/*/en.yml");
    const directories = htmls.map(filePath => {
      return path.dirname(filePath);
    });
    directories.forEach(directory => {
      it(`should parse to ast ${path.basename(directory)}`, () => {
        const content = fs.readFileSync(path.join(directory, "en.yml"), "utf-8");
        const expected = JSON.parse(fs.readFileSync(path.join(directory, "en.json"), "utf-8"));
        const AST = parse_yaml(content);
        test(AST);
        assert.deepEqual(JSON.parse(JSON.stringify(AST)), expected);
      });
    });
  });
})

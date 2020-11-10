// LICENSE : MIT
"use strict";
const assert = require("assert");
const rules = require("../lib/textlint-rule-preset-ja-tech-loose").rules;
const rulesConfig = require("../lib/textlint-rule-preset-ja-tech-loose")
  .rulesConfig;
describe("textlint-rule-preset-ja-tech-loose", function () {
  it("not missing key", function () {
    const ruleKeys = Object.keys(rules).sort();
    const ruleConfigKeys = Object.keys(rulesConfig).sort();
    assert.deepEqual(ruleKeys, ruleConfigKeys);
  });
});

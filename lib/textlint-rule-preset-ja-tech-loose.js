"use strict";

const { moduleInterop } = require("@textlint/module-interop");
const jtfRules = moduleInterop(require("textlint-rule-preset-jtf-style")).rules;
const jaSpacing = moduleInterop(require("textlint-rule-preset-ja-spacing"));

module.exports = {
  rules: {
    ...jaSpacing.rules,
    "@textlint-ja/no-insert-dropping-sa": moduleInterop(
      require("@textlint-ja/textlint-rule-no-insert-dropping-sa")
    ),
    "@textlint-ja/no-synonyms": moduleInterop(
      require("@textlint-ja/textlint-rule-no-synonyms")
    ),
    "@textlint-rule/no-invalid-control-character": moduleInterop(
      require("@textlint-rule/textlint-rule-no-invalid-control-character")
    ),
    "@textlint-rule/no-unmatched-pair": moduleInterop(
      require("@textlint-rule/textlint-rule-no-unmatched-pair")
    ),
    "arabic-kanji-numbers": jtfRules["2.2.2.算用数字と漢数字の使い分け"],
    "ja-hiragana-fukushi": moduleInterop(
      require("textlint-rule-ja-hiragana-fukushi")
    ),
    "ja-hiragana-hojodoushi": moduleInterop(
      require("textlint-rule-ja-hiragana-hojodoushi")
    ),
    "ja-hiragana-keishikimeishi": moduleInterop(
      require("textlint-rule-ja-hiragana-keishikimeishi")
    ),
    "ja-no-abusage": moduleInterop(require("textlint-rule-ja-no-abusage")),
    "ja-no-mixed-period": moduleInterop(
      require("textlint-rule-ja-no-mixed-period")
    ),
    "ja-no-redundant-expression": moduleInterop(
      require("textlint-rule-ja-no-redundant-expression")
    ),
    "ja-unnatural-alphabet": moduleInterop(
      require("textlint-rule-ja-unnatural-alphabet")
    ),
    "max-kanji-continuous-len": moduleInterop(
      require("textlint-rule-max-kanji-continuous-len")
    ),
    "max-ten": moduleInterop(require("textlint-rule-max-ten")),
    "no-double-negative-ja": moduleInterop(
      require("textlint-rule-no-double-negative-ja")
    ),
    "no-doubled-conjunction": moduleInterop(
      require("textlint-rule-no-doubled-conjunction")
    ),
    "no-doubled-conjunctive-particle-ga": moduleInterop(
      require("textlint-rule-no-doubled-conjunctive-particle-ga")
    ),
    "no-doubled-joshi": moduleInterop(
      require("textlint-rule-no-doubled-joshi")
    ),
    "no-dropping-the-ra": moduleInterop(
      require("textlint-rule-no-dropping-the-ra")
    ),
    "no-mix-dearu-desumasu": moduleInterop(
      require("textlint-rule-no-mix-dearu-desumasu")
    ),
    "no-mixed-zenkaku-and-hankaku-alphabet": moduleInterop(
      require("textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet")
    ),
    "no-nfd": moduleInterop(require("textlint-rule-no-nfd")),
    "period-in-list-item": moduleInterop(
      require("textlint-rule-period-in-list-item")
    ),
    prh: moduleInterop(require("textlint-rule-prh")),
    "sentence-length": moduleInterop(require("textlint-rule-sentence-length")),
    "spellcheck-tech-word": moduleInterop(
      require("textlint-rule-spellcheck-tech-word")
    ),
  },
  rulesConfig: {
    ...jaSpacing.rulesConfig,
    "@textlint-ja/no-insert-dropping-sa": true,
    "@textlint-ja/no-synonyms": true,
    "@textlint-rule/no-invalid-control-character": true,
    "@textlint-rule/no-unmatched-pair": true,
    "arabic-kanji-numbers": true,
    "ja-hiragana-fukushi": true,
    "ja-hiragana-hojodoushi": true,
    "ja-hiragana-keishikimeishi": true,
    "ja-no-abusage": true,
    "ja-no-mixed-period": {
      allowPeriodMarks: ["："],
      allowEmojiAtEnd: true,
      forceAppendPeriod: true,
    },
    "ja-no-redundant-expression": true,
    "ja-unnatural-alphabet": true,
    "max-kanji-continuous-len": true,
    "max-ten": {
      max: 3,
    },
    "no-double-negative-ja": true,
    "no-doubled-conjunction": true,
    "no-doubled-conjunctive-particle-ga": true,
    "no-doubled-joshi": {
      allow: ["も"],
    },
    "no-dropping-the-ra": true,
    "no-mix-dearu-desumasu": {
      preferInHeader: "である",
      preferInBody: "ですます",
      preferInList: "ですます",
      strict: true,
    },
    "no-mixed-zenkaku-and-hankaku-alphabet": true,
    "no-nfd": true,
    "period-in-list-item": {
      allowEmoji: true,
    },
    prh: {
      rulePaths: [require.resolve("prh-rules/media/WEB+DB_PRESS.yml")],
      checkEmphasis: true,
    },
    "sentence-length": {
      max: 100,
    },
    "spellcheck-tech-word": true,
  },
};

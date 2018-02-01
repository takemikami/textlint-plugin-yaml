textlint-plugin-yaml
---

[![Build Status](https://travis-ci.org/takemikami/textlint-plugin-yaml.svg?branch=master)](https://travis-ci.org/takemikami/textlint-plugin-yaml)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46b4555f7d3c4cceba8aaa84a8dbec01)](https://www.codacy.com/app/takemikami/textlint-plugin-yaml?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=takemikami/textlint-plugin-yaml&amp;utm_campaign=Badge_Grade)
[![Dependency Status](https://gemnasium.com/badges/github.com/takemikami/textlint-plugin-yaml.svg)](https://gemnasium.com/github.com/takemikami/textlint-plugin-yaml)
[![npm](https://img.shields.io/npm/v/textlint-plugin-yaml.svg)](https://www.npmjs.com/package/textlint-plugin-yaml)

for yaml style resource supoprt for textlint

## Installation

```
npm install -g takemikami/textlint-plugin-yaml#master
```

## Usage

add plugin to your ``.textlintrc``

```
{
  "plugins": [
    "yaml"
  ]
}
```

execute textlint

```
textlint config/locales/**/*.yml
```

## Build

```
npm install
babel -s -d lib src
```

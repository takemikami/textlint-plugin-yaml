# textlint-plugin-yaml
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

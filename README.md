# textlint-plugin-rails
for rails view template and resource supoprt for textlint

## Installation

```
npm install -g takemikami/textlint-plugin-rails#master
```

## Usage

add plugin to your ``.textlintrc``

```
{
  "plugins": [
    "rails"
  ]
}
```

execute textlint

```
textlint app/views/**/*.erb config/locales/**/*.yml
```

## Build

```
npm install
babel -s -d lib src
```

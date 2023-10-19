# Doks core

Official Doks core integration for the Doks theme.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@hyas/doks-core?style=flat-square)](https://www.npmjs.com/package/@hyas/doks-core)


## Installation

```bash
npm i @hyas/doks-core
```

## Setup

Add mounts to `./config/_default/module.toml`:

```toml
# mounts
## archetypes
[[mounts]]
  source = "node_modules/@hyas/doks-core/archetypes"
  target = "archetypes"

[[mounts]]
  source = "archetypes"
  target = "archetypes"

## assets
[[mounts]]
  source = "node_modules/@hyas/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/images/assets"
  target = "assets"
  excludeFiles = "/scss/**.scss"

[[mounts]]
  source = "node_modules/@hyas/doks-core/assets"
  target = "assets"
  excludeFiles = ["scss/common/_variables-custom.scss", "scss/common/_custom.scss"]

[[mounts]]
  source = "node_modules/flexsearch"
  target = "assets/js/vendor/flexsearch"

[[mounts]]
  source = "node_modules/katex"
  target = "assets/js/vendor/katex"

[[mounts]]
  source = "node_modules/mermaid"
  target = "assets/js/vendor/mermaid"

[[mounts]]
  source = "node_modules/@tabler/icons/icons"
  target = "assets/svgs/tabler-icons"

[[mounts]]
  source = "assets"
  target = "assets"

## content
[[mounts]]
  source = "content"
  target = "content"

## data
[[mounts]]
  source = "node_modules/@hyas/doks-core/data"
  target = "data"

[[mounts]]
  source = "config/_default/hyas"
  target = "data"

[[mounts]]
  source = "data"
  target = "data"

## i18n
[[mounts]]
  source = "node_modules/@hyas/doks-core/i18n"
  target = "i18n"

[[mounts]]
  source = "i18n"
  target = "i18n"

## layouts
[[mounts]]
  source = "node_modules/@hyas/core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/images/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/doks-core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/inline-svg/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"

## static
[[mounts]]
  source = "node_modules/@hyas/doks-core/static"
  target = "static"

[[mounts]]
  source = "static"
  target = "static"
```

## How to use

See the Hyas documentation:

- [Doks core](https://docs.gethyas.com/guides/integrations-guide/docs-core/)

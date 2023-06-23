# Doks core

Official Doks core integration for the Doks theme.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@hyas/doks-core?style=flat-square)](https://www.npmjs.com/package/@hyas/doks-core)


## Installation

```bash
npm i -D @hyas/doks-core
```

## Setup

Add mounts to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/doks-core/archetypes"
  target = "archetypes"

[[mounts]]
  source = "node_modules/@hyas/doks-core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/doks-core/content"
  target = "content"

[[mounts]]
  source = "node_modules/@hyas/doks-core/data"
  target = "data"

[[mounts]]
  source = "node_modules/@hyas/doks-core/i18n"
  target = "i18n"

[[mounts]]
  source = "node_modules/@hyas/doks-core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/doks-core/static"
  target = "static"

[[mounts]]
  source = "node_modules/flexsearch"
  target = "assets/js/vendor/flexsearch"

[[mounts]]
  source = "archetypes"
  target = "archetypes"

[[mounts]]
  source = "assets"
  target = "assets"

[[mounts]]
  source = "content"
  target = "content"

[[mounts]]
  source = "data"
  target = "data"

[[mounts]]
  source = "i18n"
  target = "i18n"

[[mounts]]
  source = "layouts"
  target = "layouts"

[[mounts]]
  source = "static"
  target = "static"
```

## How to use

See the Hyas documentation:

- [Doks core](https://docs.gethyas.com/guides/integrations-guide/docs-core/)

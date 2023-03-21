# Doks Core

Doks core for Doks theme.

## Requirements

- [hyas](https://www.npmjs.com/package/hyas)

### Optional, recommended

- [@hyas/seo](https://www.npmjs.com/package/@hyas/seo)
- [@hyas/images](https://www.npmjs.com/package/@hyas/images)

## Installation

```bash
npm i -D @hyas/doks-core
```

Optional, if used:

```bash
npm i -D flexsearch katex mermaid
```

## Setup

Add to `./config/_default/module.toml`:

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
  source = "node_modules/katex"
  target = "assets/js/vendor/katex"

[[mounts]]
  source = "node_modules/mermaid"
  target = "assets/js/vendor/mermaid"

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

## Usage

See the Hyas docs: [Themes](https://gethyas.com/docs/reference-guides/themes/)

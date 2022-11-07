# Hyas Doks theme

Doks theme for Hyas sites.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@hyas/themes-doks?style=flat-square)](https://www.npmjs.com/package/@hyas/themes-doks) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/h-enk/hyas-themes-doks/CodeQL?style=flat-square)]((https://github.com/h-enk/hyas-themes-doks/actions/workflows/codeql.yml))

## Requirements

- [hyas](https://www.npmjs.com/package/hyas)

### Optional, recommended

- [@hyas/seo](https://www.npmjs.com/package/@hyas/seo)
- [@hyas/images](https://www.npmjs.com/package/@hyas/images)

## Installation

```bash
npm i -D @hyas/themes-doks
```

Optional, if used:

```bash
npm i -D flexsearch katex mermaid
```

## Setup

Add to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/themes-doks/archetypes"
  target = "archetypes"

[[mounts]]
  source = "node_modules/@hyas/themes-doks/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/themes-doks/content"
  target = "content"

[[mounts]]
  source = "node_modules/@hyas/themes-doks/data"
  target = "data"

[[mounts]]
  source = "node_modules/@hyas/themes-doks/i18n"
  target = "i18n"

[[mounts]]
  source = "node_modules/@hyas/themes-doks/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/themes-doks/static"
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

Add to `./config/_default/config.toml`:

```toml
# disableKinds = ["taxonomy", "term"]

# Multilingual
defaultContentLanguage = "en"
disableLanguages = ["de", "nl"]
# defaultContentLanguageInSubdir = true

[outputs]
  home = ["HTML", "RSS"]
  section = ["HTML", "RSS", "SITEMAP"]

# Add output format for section sitemap.xml
[outputFormats.SITEMAP]
mediaType = "application/xml"
baseName = "sitemap"
isHTML = false
isPlainText = true
noUgly = true
rel  = "sitemap"

[taxonomies]
  contributor = "contributors"
  category = "categories"
  tag = "tags"

[permalinks]
  blog = "/blog/:title/"
# docs = "/docs/1.0/:sections[1:]/:title/"

[related]
  threshold = 80
  includeNewer = true
  toLower = false
    [[related.indices]]
    name = "categories"
    weight = 100
    [[related.indices]]
    name = "tags"
    weight = 80
    [[related.indices]]
    name = "date"
    weight = 10
```

Add to `./config/_default/params.toml`:

```toml
## Documentation
# docsVersion = "0.3"


# Edit Page
# repoHost [Github | Gitea | GitLab | Bitbucket | BitbucketServer ] is used for building the edit link based on git hoster
repoHost = "GitHub"
#repoHost = "Gitea"
docsRepo = "https://github.com/h-enk/doks"
docsRepoBranch = "master"
docsRepoSubPath = ""
editPage = false
lastMod = false

[sections]
  sectionNav = ["docs", "guides"]

[options]
  lazySizes = true
  clipBoard = true
  instantPage = true
  flexSearch = true
  searchSectionsShow = []
  searchSectionsIndex = []
  darkMode = true
  bootStrapJs = true
  breadCrumb = false
  highLight = true
  kaTex = false
  multilingualMode = false
  docsVersioning = false
  fullWidth = false
  navbarSticky = true
  toTopButton = false
  scrollSpy = false # experimental; needs Bootstrap >= 5.2.0-beta1

[menu]
  [menu.section]
    auto = true
    collapsibleSidebar = true
```

Add other configuration files:

- `./config/_default/languages.toml`
- `./config/_default/menus/menus.en.toml`
- `./config/_default/menus/menus.nl.toml`

Update `content`, `safelist`, and `...whitelister` sections in:

- `./config/postcss.config.js`

## Usage

See the Hyas docs: [Themes](https://gethyas.com/docs/reference-guides/themes/)

---
title: "{{ replace .Name "-" " " | title }}"
description: ""
summary: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
menu:
  {{ .Section }}:
    parent: "lorem"
    identifier: "{{ .Name }}-{{ delimit (shuffle (split (md5 .Name) "" )) "" }}"
weight: 100
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

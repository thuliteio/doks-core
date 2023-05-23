---
title: "{{ replace .Name "-" " " | title }}"
description: ""
summary: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
images: []
menu:
  {{ .Section }}:
    parent: "lorem"
    identifier: "{{ .Name }}-{{ delimit (shuffle (split (md5 .Name) "" )) "" }}"
weight: 100
toc: true
---

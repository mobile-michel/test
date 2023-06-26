---
title: Éléments d'Eleventy
description: Liste de tous les éléments constituant Eleventy, classés par catégories.
layout: base
tags: testTag
date: 2023-06-25
---

## Frontmatter

- layout
- title
- permalink (with slugify filter): {{ title | slugify }}
- dynamicPermalink (false)
- permalinkBypassOutputDir (true)
- tags
- override:tags
- pagination (data, size, alias, resolve, generatePageOnEmptyData, reverse, filter, addAllPagesToCollections)
- date (2023-06-26, Last Modified, Created, git Last Modified, git Created)
- eleventyImport.collections
- eleventyExcludeFromCollections
- templateEngineOverride
- eleventyComputed

## Content

- {% raw %}{{content}}{% endraw %}
- {% raw %}{{collections.post}}{% endraw %}
- {% raw %}{{collections.all}}{% endraw %}
- {% raw %}{{post.data.title}}{% endraw %}

## Page variables

- **page.inputPath**: {{page.inputPath}}
- **page.url**: {{page.url}}
- **page.fileSlug**: {{page.fileSlug}}
- **page.filePathStem**: {{page.filePathStem}}
- **page.date**: {{page.date | date: '%d-%m-%Y' }} (Last modified)
- **inputPath**: {{page.inputPath}}
- **outputPath**: {{page.outputPath}}
- **outputFileExtension**: {{page.outputFileExtension}}
- **lang** (needs i18n plugin)
- **this.page** (Shortcodes)
- **this.page** (Filters, Transforms & Linters)
- **page** (Collection entries)

## Collection item data structure

- **data.title**: {{title}}
- **data.tags**: {{tags}}
- **data.date**: {{date}}
- **content**: {{content}}

## Pagination
- **pagination.items**
- **pagination.pages**
- **pagination.pageNumber**
- **pageEntry**
- **pagination.hrefs**
- **pagination.href.next**
- **pagination.href.previous**
- **pagination.href.first**
- **pagination.href.last**
- **pagination.page.next**
- **pagination.page.previous**
- **pagination.page.first**
- **pagination.page.last**

## Filters
- url
- slugify
- log (console.log)
- get*CollectionItem

## Eleventy variables

- **eleventy.version**: {{eleventy.version}}
- **eleventy.generator**: {{eleventy.generator}}
- **eleventy.env:root**: {{eleventy.env.root}}
- **eleventy.env:config**: {{eleventy.env.config}}
- **eleventy.env:source**: {{eleventy.env.source}}
- **eleventy.env:runMode**: {{eleventy.env.runMode}}
- **eleventy.serverless:path**: {{eleventy.serverless.path}}
- **eleventy.serverless:query**: {{eleventy.serverless.query}}
- **this.eleventy** (Shortcodes)
- **this.eleventy** (Filters)
- **eleventy.before**
- **eleventy.after**
- **eleventy.beforeWatch**

## Eleventy supplied

- process.env.ELEVENTY_ROOT
- process.env.ELEVENTY_SOURCE
- process.env.ELEVENTY_SERVERLESS
- process.env.ELEVENTY_RUN_MODE

## eleventy.config.js

- addCollection
- addPassthroughCopy
- addShortcode
- addAsyncShortcode
- addPairedShortcode
- addPairedAsyncShortcode
- addFilter
- addAsyncFilter
- addWatchTarget
- setTemplateFormats
- setServerPassthroughCopyBehavior

## Others

- URL.searchParams
- event.queryStringParameters
- reversed
- forloop.index

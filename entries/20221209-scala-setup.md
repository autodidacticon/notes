---
title: Scala Setup
slug: scala-setup
date: '2022-12-09'
summary: Scala's development toolchain is improving.
---
### Prerequisites
* [Homebrew](https://brew.sh/)
* [openJDK8](https://formulae.brew.sh/formula/openjdk@8#default)

### [Install Coursier](https://get-coursier.io/docs/cli-installation#macos-brew-based-installation)
```shell
brew install coursier/formulas/coursier && cs setup
```

### Install Scala Version
```shell
cs install scala:2.13.10 scalac:2.13.10
```

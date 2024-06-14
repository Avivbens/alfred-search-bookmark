## [2.2.1](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.2.0...v2.2.1) (2024-06-14)


### Bug Fixes

* bump-up `fast-alfred`, align to Alfred best-practices ([11ea0cd](https://github.com/Avivbens/alfred-search-bookmark/commit/11ea0cd531eda2e59ed095908a0033ce5e4fad47))

# [2.2.0](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.1.4...v2.2.0) (2024-06-11)


### Features

* support no close after opening bookmark ([a867588](https://github.com/Avivbens/alfred-search-bookmark/commit/a8675880b8e48bca0b2d1705383dc3a82760dc96))

## [2.1.4](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.1.3...v2.1.4) (2024-06-11)


### Bug Fixes

* add global error handler ([1b1cc44](https://github.com/Avivbens/alfred-search-bookmark/commit/1b1cc4410c6897324e37f8e9833b2127402fb35c))

## [2.1.3](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.1.2...v2.1.3) (2024-06-09)


### Bug Fixes

* set `uid` to include profile ([5f0b376](https://github.com/Avivbens/alfred-search-bookmark/commit/5f0b376c2109201944fadbb69b0cce7608a02b77))

## [2.1.2](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.1.1...v2.1.2) (2024-06-09)


### Bug Fixes

* add `uid` to allow alfred knowledge ([e2b2508](https://github.com/Avivbens/alfred-search-bookmark/commit/e2b250889fbaed4a6861a0d5614f9aae5ee38b32))

## [2.1.1](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.1.0...v2.1.1) (2024-06-08)


### Bug Fixes

* remove `prefs` file ([248f52c](https://github.com/Avivbens/alfred-search-bookmark/commit/248f52c51fcd8e05baa0cc7b40045b63713be25c))

# [2.1.0](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.6...v2.1.0) (2024-06-08)


### Bug Fixes

* install latest `fast-alfred` 🥷 ([6139472](https://github.com/Avivbens/alfred-search-bookmark/commit/61394723514a80f12b6e89392557754cdc328d0d))
* move to `cjs` moduling ([399b2da](https://github.com/Avivbens/alfred-search-bookmark/commit/399b2da48e596e2cd3abf5491a2948ae20bd10ab))


### Features

* support fuzzy search across all bookmarks 🥷 ([ec33acb](https://github.com/Avivbens/alfred-search-bookmark/commit/ec33acb52f476834547e9094ea17efbfa8eb49c1))

## [2.0.6](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.5...v2.0.6) (2024-06-06)


### Bug Fixes

* bump-up `fast-alfred` ([f7d0ea7](https://github.com/Avivbens/alfred-search-bookmark/commit/f7d0ea7fad1d7a90e706e9bdcaf13a54e0636682))
* remove unused code ([e0eb3b4](https://github.com/Avivbens/alfred-search-bookmark/commit/e0eb3b4181e6faa8058f29a82e7421a8519227b9))

## [2.0.5](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.4...v2.0.5) (2024-06-03)


### Bug Fixes

* using `fast-alfred` CLI ([e612659](https://github.com/Avivbens/alfred-search-bookmark/commit/e6126590c20585faa2fc1ee9187414c99bc5ac36))

## [2.0.4](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.3...v2.0.4) (2024-06-03)


### Bug Fixes

* latest `fast-alfred` 🥷 ([b6812de](https://github.com/Avivbens/alfred-search-bookmark/commit/b6812dee8a8ed136f896ab9b303e50f66c0b279e))

## [2.0.3](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.2...v2.0.3) (2024-06-02)


### Bug Fixes

* use `fast-alfred` mechanism for `info.plist` file ([f1ad476](https://github.com/Avivbens/alfred-search-bookmark/commit/f1ad476a5293d5c0b338da8fae7d9b24da4f00bf))

## [2.0.2](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.1...v2.0.2) (2024-06-02)


### Bug Fixes

* add description for `info.plist` file ([4114cbf](https://github.com/Avivbens/alfred-search-bookmark/commit/4114cbf042b0aae637ffa1b7528d8b7a2b5d945c))

## [2.0.1](https://github.com/Avivbens/alfred-search-bookmark/compare/v2.0.0...v2.0.1) (2024-06-02)


### Bug Fixes

* include `info.plist` file in releases commits ([64247be](https://github.com/Avivbens/alfred-search-bookmark/commit/64247bee1a9ce43c48fff80fd5e171d9c6279663))

# [2.0.0](https://github.com/Avivbens/alfred-search-bookmark/compare/v1.1.3...v2.0.0) (2024-06-02)


### Bug Fixes

* drop `alfy` dependency - all logic implemented over this repo ([b1de770](https://github.com/Avivbens/alfred-search-bookmark/commit/b1de77047bd0981a5a72851b569c37b3fda9a44a))


### Features

* migrate to `FastAlfred` ✨ ([d1eee68](https://github.com/Avivbens/alfred-search-bookmark/commit/d1eee6843e5315dbfc566b5da0c492c00a929792))
* support `esbuild` system - replace need for npm ✨ ([16c7641](https://github.com/Avivbens/alfred-search-bookmark/commit/16c7641b106acb52f0d4743692e951f83365bccf))


### BREAKING CHANGES

* `esbuild` is now the default system for building the project.
This means that `npm` is no longer suported, and the `npm` scripts have been removed.

Please install the workflow via GitHub Releases files 🥷

## [1.1.3](https://github.com/Avivbens/alfred-search-bookmark/compare/v1.1.2...v1.1.3) (2024-06-02)

### Bug Fixes

-   deprecate NPM deployment - fix readme ([f78c293](https://github.com/Avivbens/alfred-search-bookmark/commit/f78c29376c80af2a8e7a11abdb6380531a16266e))

## [1.1.2](https://github.com/Avivbens/alfred-search-bookmark/compare/v1.1.1...v1.1.2) (2024-06-02)

### Bug Fixes

-   deprecate NPM deployment ([794dae3](https://github.com/Avivbens/alfred-search-bookmark/commit/794dae34b4483dfdbe45ef4f190784db02392643))

## [1.1.1](https://github.com/Avivbens/alfred-search-bookmark/compare/v1.1.0...v1.1.1) (2024-05-29)

### Bug Fixes

-   **deps:** bump-up all deps ([402e139](https://github.com/Avivbens/alfred-search-bookmark/commit/402e139a5c2688c3579f144efe7cacce2200f56e))
-   use `execPrm` ([fbecdaa](https://github.com/Avivbens/alfred-search-bookmark/commit/fbecdaa44f142ea5178418b68ce8ab3e8713da8f))

# [1.1.0](https://github.com/Avivbens/alfred-search-bookmark/compare/v1.0.6...v1.1.0) (2024-01-15)

### Bug Fixes

-   remove usused code ([1f2aa6f](https://github.com/Avivbens/alfred-search-bookmark/commit/1f2aa6f0622353fc542f3df24b0a542d9d4a1fd7))

### Features

-   support clear cache, increase ttl time to 6 hours ([76ee39d](https://github.com/Avivbens/alfred-search-bookmark/commit/76ee39df0bbd0bc85fbb5df8337aed46b62fb2af))

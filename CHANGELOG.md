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

<div align="center">

# Alfred Search Bookmark

<br>

[![Latest Version Downloads](https://img.shields.io/github/downloads/avivbens/alfred-search-bookmark/latest/total?label=Latest%20Version%20Downloads&color=green)](https://github.com/avivbens/alfred-search-bookmark/releases/latest)
[![Latest Version](https://img.shields.io/github/v/release/avivbens/alfred-search-bookmark?label=Latest%20Version&color=green)](https://github.com/avivbens/alfred-search-bookmark/releases/latest)
[![Total Downloads](https://img.shields.io/github/downloads/avivbens/alfred-search-bookmark/total?label=Total%20Downloads&color=blue)](https://github.com/avivbens/alfred-search-bookmark/releases)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kcao7snkgx)

</div>

## Description

Search browser bookmarks with [Alfred](https://www.alfredapp.com/).

## Usage

Search browser bookmarks via the keyword `bm`.
Once you select a bookmark, it will be opened in the dedicated browser.

Incognito mode will be opened with the dedicated browser as well.

### Install via GitHub Releases :sparkles:

```bash
repo_name="Avivbens/alfred-search-bookmark"
download_url=$(curl -s "https://api.github.com/repos/$repo_name/releases/latest" | grep "browser_download_url.*alfredworkflow" | cut -d '"' -f 4)

curl -fsSLk $download_url -o ~/Desktop/alfred-search-bookmark.alfredworkflow
open ~/Desktop/alfred-search-bookmark.alfredworkflow
```

<hr>

## Examples

### Search bookmarks with keyword `bm`:

![Alfred Search Bookmark](https://raw.githubusercontent.com/avivbens/alfred-search-bookmark/HEAD/demo/list.png)

<br>

### Search bookmarks across multiple profiles:

![Alfred Search Bookmark](https://raw.githubusercontent.com/avivbens/alfred-search-bookmark/HEAD/demo/profiles.png)

<br>

### Enter a bookmark via incognito mode:

![Alfred Search Bookmark](https://raw.githubusercontent.com/avivbens/alfred-search-bookmark/HEAD/demo/incognito.png)

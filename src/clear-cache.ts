import alfy from 'alfy'
import { CACHE_BOOKMARKS_KEY } from './common/constants.js'
;(() => {
    alfy.cache.set(CACHE_BOOKMARKS_KEY, null)

    alfy.output([
        {
            title: 'Cache Cleared ✅',
            subtitle: 'Bookmarks will be re-fetched on next use',
        },
    ])
})()

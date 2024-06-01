import { FastAlfred } from 'fast-alfred'
import { CACHE_BOOKMARKS_KEY } from '@common/constants.js'

;(() => {
    const alfredClient = new FastAlfred()

    alfredClient.cache.delete(CACHE_BOOKMARKS_KEY)

    alfredClient.output({
        items: [
            {
                title: 'Cache Cleared ✅',
                subtitle: 'Bookmarks will be re-fetched on next use',
            },
        ],
    })
})()

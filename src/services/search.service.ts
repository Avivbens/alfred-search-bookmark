import type { IUIBookmark } from '@models/bookmark.model.js'
import { SEARCH_FIELDS_CONFIG } from './search.config.js'

export async function searchBookmarks(
    bookmarks: IUIBookmark[],
    searchTerm: string,
    limit: number,
): Promise<IUIBookmark[]> {
    const Fuse = (await import('fuse.js/min-basic')).default

    const fuse = new Fuse(bookmarks, {
        keys: SEARCH_FIELDS_CONFIG,
        isCaseSensitive: false,
        shouldSort: true,
        threshold: 0.4,
    })

    const res = fuse.search(searchTerm, { limit })

    return res.map((item) => item.item)
}

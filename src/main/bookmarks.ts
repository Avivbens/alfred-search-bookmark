import type { AlfredScriptFilter } from 'fast-alfred'
import { FastAlfred } from 'fast-alfred'
import { CACHE_BOOKMARKS_KEY, CACHE_TTL } from '@common/constants'
import { Variables } from '@common/variables'
import type { IUIBookmark } from '@models/bookmark.model'
import { getBookmarks } from '@services/fetch-bookmarks'
import { searchBookmarks } from '@services/search.service'

;(async () => {
    const alfredClient = new FastAlfred()

    const profilesConfig: string = alfredClient.env.getEnv(Variables.PROFILES_LOOKUP, { defaultValue: '' })
    const sliceAmount: number = alfredClient.env.getEnv(Variables.SLICE_AMOUNT, {
        defaultValue: 10,
        parser: Number,
    })

    const profiles: string[] = profilesConfig.split(',')

    try {
        let bookmarks: IUIBookmark[] | null = alfredClient.cache.get<IUIBookmark[]>(CACHE_BOOKMARKS_KEY)
        if (!bookmarks) {
            bookmarks = await getBookmarks(profiles)
            alfredClient.cache.setWithTTL(CACHE_BOOKMARKS_KEY, bookmarks, { maxAge: CACHE_TTL })
        }

        const filteredBookmarks = await searchBookmarks(bookmarks, alfredClient.input, sliceAmount)

        const items: AlfredScriptFilter['items'] = filteredBookmarks.map(({ name, url, profile }) => {
            const subtitle = `[${profile}] - ${url}`

            return {
                title: name,
                subtitle,
                arg: JSON.stringify({ url, profile }),
                mods: {
                    cmd: {
                        subtitle: `Open in Incognito Mode`,
                        arg: JSON.stringify({ url, profile, incognito: true }),
                    },
                },
                uid: subtitle,
            }
        })

        const sliced = items.slice(0, sliceAmount)

        alfredClient.output({ items: sliced })
    } catch (error) {
        alfredClient.error(error)
    }
})()

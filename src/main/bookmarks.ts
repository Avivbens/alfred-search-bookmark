import type { AlfredScriptFilter } from 'fast-alfred'
import { FastAlfred } from 'fast-alfred'
import { CACHE_BOOKMARKS_KEY, CACHE_TTL } from '@common/constants'
import { Variables } from '@common/variables'
import type { IUIBookmark } from '@models/bookmark.model'
import { getBookmarks } from '@services/fetch-bookmarks'

;(async () => {
    const alfredClient = new FastAlfred()

    const profilesConfig: string = alfredClient.env.getEnv(Variables.PROFILES_LOOKUP, { defaultValue: '' })
    const sliceAmount: number = alfredClient.env.getEnv(Variables.SLICE_AMOUNT, { defaultValue: 10, parser: Number })

    const profiles: string[] = profilesConfig.split(',')

    const data: IUIBookmark[] =
        alfredClient.cache.get<IUIBookmark[]>(CACHE_BOOKMARKS_KEY) ?? (await getBookmarks(profiles))

    alfredClient.cache.setWithTTL(CACHE_BOOKMARKS_KEY, data, { maxAge: CACHE_TTL })

    const items: AlfredScriptFilter['items'] = alfredClient
        .inputMatches(
            data.map(({ name, url, profile }) => ({ name, url, profile })),
            ({ name }) => name,
        )
        .map(({ name, url, profile }) => ({
            title: name,
            subtitle: `[${profile}] - ${url}`,
            arg: JSON.stringify({ url, profile }),
            mods: {
                cmd: {
                    subtitle: `Open in Incognito Mode`,
                    arg: JSON.stringify({ url, profile, incognito: true }),
                },
            },
        }))

    const sliced = items.slice(0, sliceAmount)

    alfredClient.output({ items: sliced })
})()

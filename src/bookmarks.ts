import { alfy } from '@framework/alfy.js'
import { CACHE_BOOKMARKS_KEY, CACHE_TTL } from './common/constants.js'
import { Variables } from './common/variables.js'
import type { IUIBookmark } from './models/bookmark.model.js'
import { getBookmarks } from './services/fetch-bookmarks.js'

;(async () => {
    const profilesConfig: string = process.env[Variables.PROFILES_LOOKUP] ?? ''
    const profiles: string[] = profilesConfig.split(',')

    alfy.config.set(Variables.PROFILES_LOOKUP, profilesConfig)

    const data: IUIBookmark[] = (alfy.cache.get(CACHE_BOOKMARKS_KEY) as IUIBookmark[]) ?? (await getBookmarks(profiles))

    alfy.cache.set(CACHE_BOOKMARKS_KEY, data, { maxAge: CACHE_TTL })

    data.map(({ name, url, profile }) => ({ name, url, profile }) as any).filter(({ name }) => name === alfy.input)

    const items = alfy
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

    const sliced = items.slice(0, 9)

    alfy.output(sliced)
})()

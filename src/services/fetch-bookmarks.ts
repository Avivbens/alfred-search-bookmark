import { readFile } from 'fs/promises'
import { join } from 'path'
import type { IBookmark, IBookmarkRes, IUIBookmark } from '../models/bookmark.model'
import { Type } from '../models/bookmark.model'

const BOOKMARKS_PATH = (profiles: string[]): string[] =>
    profiles.map((profileName) =>
        join(process.env.HOME as string, `/Library/Application Support/Google/Chrome/${profileName}/Bookmarks`),
    )

export async function getBookmarks(profiles: string[]): Promise<IUIBookmark[]> {
    const paths: string[] = BOOKMARKS_PATH(profiles)

    const data: { payload: Buffer; profile: string }[] = await Promise.all(
        paths.map(async (path: string, index: number) => {
            const profile = profiles[index]
            const payload = await readFile(path)

            return {
                profile,
                payload,
            }
        }),
    )

    const res = data.flatMap(({ payload, profile }) => {
        const { roots }: IBookmarkRes = JSON.parse(payload.toString())
        const { bookmark_bar, other } = roots
        const bookmarks: IUIBookmark[] = [
            ...recursivelyFlatBookmarks(bookmark_bar.children ?? [], profile),
            ...recursivelyFlatBookmarks(other.children ?? [], profile),
        ]

        return bookmarks
    })

    return res
}

function recursivelyFlatBookmarks(bookmarks: IBookmark[], profile: string, prefix = ''): IUIBookmark[] {
    const flatBookmarks: IUIBookmark[] = []
    bookmarks.forEach(({ name, url, type, children }: IBookmark) => {
        if (type === Type.Folder) {
            flatBookmarks.push(...recursivelyFlatBookmarks(children ?? [], profile, `${prefix}${name} > `))
        } else {
            flatBookmarks.push({
                name: `${prefix}${name}`,
                url: url ?? '',
                type,
                profile,
            })
        }
    })

    return flatBookmarks
}

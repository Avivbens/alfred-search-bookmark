import alfy, { ScriptFilterItem } from 'alfy';
import { Variables } from './common/variables';
import { IUIBookmark } from './models/bookmark.model';
import { getBookmarks } from './services/fetch-bookmarks';

(async () => {
    const profilesConfig: string = process.env[Variables.PROFILES_LOOKUP] ?? '';
    const profiles: string[] = profilesConfig.split(',');

    const existsConfig = alfy.config.get(Variables.PROFILES_LOOKUP);
    alfy.config.set(Variables.PROFILES_LOOKUP, profilesConfig);

    existsConfig !== existsConfig && alfy.cache.clear();

    // const data: IUIBookmark[] =
    //     alfy.cache.get(CACHE_BOOKMARKS_KEY) ?? (await getBookmarks(profiles));

    // alfy.cache.set(CACHE_BOOKMARKS_KEY, data, { maxAge: CACHE_TTL });

    const data: IUIBookmark[] = await getBookmarks(profiles);

    const items: ScriptFilterItem[] = alfy
        .inputMatches(
            data.map(
                ({ name, url, profile }) => ({ name, url, profile } as any)
            ),
            'name'
        )
        .map(({ name, url, profile }: IUIBookmark) => ({
            title: `${name} [${profile}]`,
            subtitle: url,
            arg: JSON.stringify({ url, profile })
        }));

    const sliced = items.slice(0, 9);

    alfy.output(sliced);
})();

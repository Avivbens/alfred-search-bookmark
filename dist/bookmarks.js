var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import alfy from 'alfy';
import { Variables } from './common/variables.js';
import { getBookmarks } from './services/fetch-bookmarks.js';
import { CACHE_BOOKMARKS_KEY, CACHE_TTL } from './common/constants.js';
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const profilesConfig = (_a = process.env[Variables.PROFILES_LOOKUP]) !== null && _a !== void 0 ? _a : '';
    const profiles = profilesConfig.split(',');
    const existsConfig = alfy.config.get(Variables.PROFILES_LOOKUP);
    alfy.config.set(Variables.PROFILES_LOOKUP, profilesConfig);
    existsConfig !== existsConfig && alfy.cache.clear();
    const data = (_b = alfy.cache.get(CACHE_BOOKMARKS_KEY)) !== null && _b !== void 0 ? _b : (yield getBookmarks(profiles));
    alfy.cache.set(CACHE_BOOKMARKS_KEY, data, { maxAge: CACHE_TTL });
    // const data: IUIBookmark[] = await getBookmarks(profiles);
    const items = alfy
        .inputMatches(data.map(({ name, url, profile }) => ({ name, url, profile })), 'name')
        .map(({ name, url, profile }) => ({
        title: name,
        subtitle: `[${profile}] - ${url}`,
        arg: JSON.stringify({ url, profile }),
        mods: {
            cmd: {
                subtitle: `Open in Incognito Mode`,
                arg: JSON.stringify({ url, profile, incognito: true })
            }
        }
    }));
    const sliced = items.slice(0, 9);
    alfy.output(sliced);
}))();

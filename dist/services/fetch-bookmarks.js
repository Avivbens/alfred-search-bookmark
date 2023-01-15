var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readFile } from 'fs/promises';
import { join } from 'path';
import { Type } from '../models/bookmark.model.js';
const BOOKMARKS_PATH = (profiles) => profiles.map((profileName) => join(process.env.HOME, `/Library/Application Support/Google/Chrome/${profileName}/Bookmarks`));
export function getBookmarks(profiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const paths = BOOKMARKS_PATH(profiles);
        const data = yield Promise.all(paths.map((path, index) => __awaiter(this, void 0, void 0, function* () {
            const profile = profiles[index];
            const payload = yield readFile(path);
            return {
                profile,
                payload
            };
        })));
        const res = data.flatMap(({ payload, profile }) => {
            var _a, _b;
            const { roots } = JSON.parse(payload.toString());
            const { bookmark_bar, other } = roots;
            const bookmarks = [
                ...recursivelyFlatBookmarks((_a = bookmark_bar.children) !== null && _a !== void 0 ? _a : [], profile),
                ...recursivelyFlatBookmarks((_b = other.children) !== null && _b !== void 0 ? _b : [], profile)
            ];
            return bookmarks;
        });
        return res;
    });
}
function recursivelyFlatBookmarks(bookmarks, profile, prefix = '') {
    const flatBookmarks = [];
    bookmarks.forEach(({ name, url, type, children }) => {
        if (type === Type.Folder) {
            flatBookmarks.push(...recursivelyFlatBookmarks(children !== null && children !== void 0 ? children : [], profile, `${prefix}${name} > `));
        }
        else {
            flatBookmarks.push({
                name: `${prefix}${name}`,
                url: url !== null && url !== void 0 ? url : '',
                type,
                profile
            });
        }
    });
    return flatBookmarks;
}

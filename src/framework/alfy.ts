/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import AlfredConfig from 'alfred-config'
import conf from 'conf'
import os from 'node:os'
import process, { cwd } from 'node:process'
import { CacheConf } from './cache.js'

const getIcon = (name: string) => `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/${name}.icns`
const getEnv = (key: string) => process.env[`alfred_${key}`]

/**
 * @note This is a local version of the `Alfy` class from the `alfy` package.
 * @see [Alfy](https://github.com/sindresorhus/alfy)
 */
export class Alfy {
    meta: any
    alfred: any
    input: any
    config: any
    userConfig: any
    cache: any
    debug: any
    icon: any

    constructor() {
        this.meta = {
            name: getEnv('workflow_name'),
            version: getEnv('workflow_version'),
            uid: getEnv('workflow_uid'),
            bundleId: getEnv('workflow_bundleid'),
        }

        this.alfred = {
            version: getEnv('version'),
            theme: getEnv('theme'),
            themeBackground: getEnv('theme_background'),
            themeSelectionBackground: getEnv('theme_selection_background'),
            themeSubtext: Number(getEnv('theme_subtext')),
            data: getEnv('workflow_data'),
            cache: getEnv('workflow_cache'),
            preferences: getEnv('preferences'),
            preferencesLocalHash: getEnv('preferences_localhash'),
        }

        this.input = process.argv[2]

        this.config = new conf({
            projectName: 'alfy',
            cwd: this.alfred.data,
        })

        this.userConfig = new AlfredConfig()

        this.debug = getEnv('debug') === '1'

        this.icon = {
            get: getIcon,
            info: getIcon('ToolbarInfo'),
            warning: getIcon('AlertCautionIcon'),
            error: getIcon('AlertStopIcon'),
            alert: getIcon('Actions'),
            like: getIcon('ToolbarFavoritesIcon'),
            delete: getIcon('ToolbarDeleteIcon'),
        }

        this.cache = new CacheConf({
            configName: 'alfy',
            cwd: cwd(),
            version: this.meta.version,
        })
    }

    output(items: any, { rerunInterval }: any = {}) {
        console.log(JSON.stringify({ items, rerun: rerunInterval }, null, '\t'))
    }

    log(text: string) {
        console.error(text)
    }

    matches<K = any>(input: string, list: K[], item: (item: K, searchTerm: string) => string): K[] {
        const normal = (str: string) => str.toLowerCase().normalize()

        const filtered = list.filter((listItem) => {
            const targededTerm = typeof listItem === 'string' ? listItem : item(listItem, input)

            return normal(targededTerm).includes(normal(input))
        })

        return filtered
    }

    inputMatches<K = any>(list: K[], item: (item: K, searchTerm: string) => string) {
        return this.matches(this.input, list, item)
    }

    error(error: Error) {
        const copy = `
\`\`\`
${error.stack}
\`\`\`

-
${this.meta.name} ${this.meta.version}
Alfred ${this.alfred.version}
${process.platform} ${os.release()}
    `.trim()

        this.output([
            {
                title: error.stack ? `${error.name}: ${error.message}` : error,
                subtitle: 'Press ⌘L to see the full error and ⌘C to copy it.',
                valid: false,
                text: {
                    copy,
                    largetype: error,
                },
                icon: {
                    path: this.icon.error,
                },
            },
        ])
    }
}

export const alfy = new Alfy()

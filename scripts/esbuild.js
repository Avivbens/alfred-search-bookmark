import * as esbuild from 'esbuild'
import { globSync } from 'glob'
import { copyFile, mkdir, rm } from 'node:fs/promises'
import { basename } from 'node:path'

const TARGET_DIR = 'esbuild'
const ASSETS_DIR = `${TARGET_DIR}/assets`

const ALL_ASSETS = [
    /**
     * Alfy run-time
     */
    `./src/scripts/run-node.sh`,
]

const cleanTarget = async () => {
    try {
        await rm(TARGET_DIR, { recursive: true, force: true })
    } catch (error) {
        console.error(error)
    }
}

const copyAssets = async (assets) => {
    try {
        await mkdir(ASSETS_DIR, { recursive: true })

        const matches = globSync(assets)

        const copiesPrm = matches.map((filePath) => {
            const fileName = basename(filePath)
            return copyFile(filePath, `${ASSETS_DIR}/${fileName}`)
        })
        await Promise.all(copiesPrm)
    } catch (error) {
        console.error(`Error copying assets: ${error.stack}`)
        throw error
    }
}

;(async () => {
    await cleanTarget()

    await esbuild.build({
        platform: 'node',
        entryPoints: ['src/*.ts'],
        bundle: true,
        outdir: TARGET_DIR,
        treeShaking: true,
        external: ['alfred-notifier'],
        format: 'esm',
        /**
         * Fix `Error: Dynamic require of "buffer" is not supported` error
         */
        banner: {
            js: `
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import path22 from 'node:path';
import url22 from 'node:url';

globalThis.require = createRequire(import.meta.url);
globalThis.__filename = url22.fileURLToPath(import.meta.url);
globalThis.__dirname = path22.dirname(__filename);

globalThis.module = {
  parent: { filename: __filename }
}
`,
        },
    })

    await copyAssets(ALL_ASSETS)
})()

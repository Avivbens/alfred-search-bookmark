const { author, description, homepage } = require('./package.json')

const README = `
Search browser bookmarks via the keyword bm. Once you select a bookmark, it will be opened in the dedicated browser.

Incognito mode will be opened with the dedicated browser as well.

See the workflow codebase in here:
${homepage}
`.trim()

/**
 * @type {import('fast-alfred').FastAlfredConfig}
 */
module.exports = {
    bundlerOptions: {},
    workflowMetadata: {
        name: 'Search Bookmarks',
        category: 'Internet',
        createdby: author.name,
        webaddress: homepage,
        description,
        readme: README,
    },
    tabSize: 4,
}

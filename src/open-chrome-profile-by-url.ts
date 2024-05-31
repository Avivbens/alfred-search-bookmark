import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { alfy } from '@framework/alfy.js'

const execPrm = promisify(exec)

;(async () => {
    const { input } = alfy
    const { profile, url, incognito = false }: { profile: string; url: string; incognito: boolean } = JSON.parse(input)

    const command = `open -na 'Google Chrome' --args ${
        incognito ? '--incognito' : ''
    } --profile-directory='${profile}' '${url}'`
    await execPrm(command)
})()

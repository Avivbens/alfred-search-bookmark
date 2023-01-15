import alfy from 'alfy';
import { exec } from 'child_process';

(async () => {
    const { input } = alfy;
    const {
        profile,
        url,
        incognito = false
    }: { profile: string; url: string; incognito: boolean } = JSON.parse(
        input
    );

    const command = `open -na 'Google Chrome' --args ${
        incognito ? '--incognito' : ''
    } --profile-directory='${profile}' '${url}'`;
    exec(command);
})();

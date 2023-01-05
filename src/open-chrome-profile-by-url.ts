import alfy from 'alfy';
import { exec } from 'child_process';

(async () => {
    const { input } = alfy;
    const { profile, url }: { profile: string; url: string } =
        JSON.parse(input);

    const command = `open -na 'Google Chrome' --args --profile-directory='${profile}' '${url}'`;
    exec(command);
})();

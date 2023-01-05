import alfy from 'alfy';
import { execSync } from 'child_process';
import { IUIBookmark } from './models/bookmark.model';

(async () => {
    const { input } = alfy;
    const { profile, url }: Pick<IUIBookmark, 'url' | 'profile'> =
        JSON.parse(input);

        alfy.log(profile);
    const command = `open -na 'Google Chrome' --args --profile-directory='${profile}' '${url}'`;
    execSync(command);
})();

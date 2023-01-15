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
import { exec } from 'child_process';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const { input } = alfy;
    const { profile, url, incognito = false } = JSON.parse(input);
    const command = `open -na 'Google Chrome' --args ${incognito ? '--incognito' : ''} --profile-directory='${profile}' '${url}'`;
    exec(command);
}))();

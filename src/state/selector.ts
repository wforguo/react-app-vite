/**
 * @Author: forguo
 * @Date: 2022/6/11 17:30
 * @Description: selector
 */
import { selector } from 'recoil';
import { globalAtom } from './atom';

const themes = {
    dark: {
        color: '#000'
    },
    light: {
        color: '#000'
    }
}
const themeConfig = selector({
    key: 'themeConfig',
    get: ({ get }) => {
        const theme = get(globalAtom.systemConfig).theme;
        return themes[theme];
    }
});

export const globalSelector = {
    themeConfig
};

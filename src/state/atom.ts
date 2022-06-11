/**
 * @Author: forguo
 * @Date: 2022/6/11 17:29
 * @Description: atom
 */

import { atom } from "recoil";

interface SystemConfig {
    theme: 'dark' | 'light'
}

const systemConfig = atom<SystemConfig>({
    key: 'systemConfig',
    default: {
        theme: 'dark'
    }
});

const collapsed = atom({
    key: 'collapsed',
    default: false
});

export const globalAtom = {
    collapsed,
    systemConfig
}

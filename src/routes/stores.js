import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("zh-cn");
export const webStore = writable("https://cn.pattern.monster");

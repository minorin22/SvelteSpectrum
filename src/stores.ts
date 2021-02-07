import { writable } from 'svelte/store';

export const AppModes = {
  Paint: 'paint',
  Edit: 'edit',
  Preview: 'preview'
} as const;
export type AppModes = typeof AppModes[keyof typeof AppModes];

export const AppMode = writable<AppModes>(
  AppModes.Paint
)

export const mainColor = writable<string>('#000000');
export const subColor = writable<string>('#FFFFFF');
export const alpha = writable<number>(1);
export const isMainOrSub = writable<boolean>(true);
export const isPickerOrSwatch = writable<boolean>(true);

export const defaultSwatch = writable<string[]>(['#000000', '#FFFFFF', '#FF0000','#00FF00', '#0000FF', null , '#FF80FF', '#80FFC0', '#FFFF00', '#8080FF', null, null, '#FF8000', '#00C0FF', '#80FFFF', '#FF8080']);
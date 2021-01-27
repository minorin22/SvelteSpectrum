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
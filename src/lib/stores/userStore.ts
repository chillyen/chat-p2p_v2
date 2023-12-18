import { writable, type Writable } from 'svelte/store';
import type { Profile } from '../../types/types';

export const currentComponent:Writable<string> = writable('');
export const sex: Writable<string> = writable('');
export const mySex: Writable<string> = writable('');
export const quote:Writable<string> = writable('');
export const nickname: Writable<string> = writable('');
export const major: Writable<string> = writable('');
export const chatMode: Writable<boolean> = writable(false);
export const isLoading: Writable<boolean> = writable(false);
export const userUid: Writable<string> = writable('');
export const roomCreator: Writable<string> = writable('');
export const roomDeleted: Writable<boolean> = writable(false);
export const roomID: Writable<string> = writable('');
export const peerList: Writable<Profile[]> = writable([]);
export const joinVoiceChat: Writable<() => void> = writable();
export const exitVoiceChat: Writable<() => void> = writable();
export const micOn: Writable<boolean> = writable(false);
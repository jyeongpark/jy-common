import { atom } from 'recoil';

export const modalState = atom<{ id: string }[]>({
  key: 'modalState',
  default: [],
});

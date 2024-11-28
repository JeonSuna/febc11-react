import { atom } from 'recoil';

export const counterState = atom({
  key: 'count', //atom식별자로 모든 atom에서 고유해야함
  default: 8,
});

export const loginState = atom({
  key: 'loginUser', //atom식별자로 모든 atom에서 고유해야함
  default: null,
});

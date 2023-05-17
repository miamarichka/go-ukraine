/* eslint-disable no-console */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = persist(
  set => ({
    currentUser: { name: null, email: null, password: null },
    userImg: null,
    isLoggedIn: false,
    isHasAccount: false,
    isExist: false,
    users: [],
    registration: userData => set(state => ({
      currentUser: userData,
      users: [...state.users, userData],
      isLoggedIn: true,
    })),
    uploadPicture: file => set({ userImg: URL.createObjectURL(file) }),
    editData: (newData) => {
      set({
        currentUser: newData,
      });
    },
    hasAccount: () => set(state => ({ isHasAccount: true })),
    hasntAccount: () => set(state => ({ isHasAccount: false })),
    logIn: logInData => set((state) => {
      const isUserExist = state.users.find(
        user => user.email === logInData.email,
      );

      if (!isUserExist) {
        return {
          ...state,
          isExist: false,
        };
      }

      const user = {
        name: isUserExist.name,
        email: isUserExist.email,
        password: isUserExist.password,
      };

      return {
        ...state,
        currentUser: user,
        isLoggedIn: isUserExist.password === logInData.password,
      };
    }),
    logOut: () => set({
      currentUser: null,
      isLoggedIn: false,
      userImg: null,
      isHasAccount: false,
    }),
  }),
  {
    name: 'authStore',
    getStorage: () => localStorage,
  },
);

export const useStore = create(authStore);

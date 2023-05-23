/* eslint-disable no-console */
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = persist(
  (set, get) => ({
    currentUser: { name: null, email: null, password: null, id: null },
    userImg: null,
    isLoggedIn: false,
    isHasAccount: false,
    isExist: false,
    isLoading: false,
    isError: null,
    users: [],
    registration: async (userData) => {
      try {
        set({ isLoading: true, isError: null })
        const response = await axios.post("https://64521253bce0b0a0f73bdbe4.mockapi.io/city/users", userData)
        if (response) {
          set(state => ({
            currentUser: response.data[0],
            users: [...state.users, response.data[0]],
            isLoggedIn: true,
          }))
        }
      } catch (error) {
        set({
          currentUser: null,
          isLoggedIn: false,
          isError: error,
        })
      } finally {
        set(({ isLoading: false }))
      }
    },
    uploadPicture: file => {
      const img = URL.createObjectURL(file)
      set({ userImg: img })
    },
    editData: async (newData) => {
      try {
        set({ isLoading: true, isError: null })
        const id = get().currentUser.id;
        console.log(get().currentUser);
        const response = await axios.put(`https://64521253bce0b0a0f73bdbe4.mockapi.io/city/users/${id}`, newData)
        if (response) {
          set(state => ({
            currentUser: response.data,
            users: state.users.map(user => {
              return user.id === id ? response.data : user
            }),
          }))
        }
      } catch (error) {
        set({
          isError: error,
        })
      } finally {
        set(({ isLoading: false }))
      }
    },
    hasAccount: () => set({ isHasAccount: true }),
    hasntAccount: () => set({ isHasAccount: false }),
    logIn: async (logInData) => {
      try {
        set({ isLoading: true, isError: null, isNoSuchUser: false })
        const response = await axios.get("https://64521253bce0b0a0f73bdbe4.mockapi.io/city/users")
        if (!!response.data.length) {
          const isUserExist = response.data.find(user => user.email === logInData.email);
          if (isUserExist) {
            const user = {
              name: isUserExist.name,
              email: isUserExist.email,
              password: isUserExist.password,
              userId: isUserExist.id,
            };
            set(state => {
              return {
                ...state,
                currentUser: user,
                isExist: true,
                isLoggedIn: isUserExist.password === logInData.password,
              };
            });
          } else {
            set(state => ({ ...state, isExist: false, isLoggedIn: false}))
          }
        }
      } catch (error) {
        set({
          currentUser: null,
          isLoggedIn: false,
          isError: error,
        })
      } finally {
        set(({ isLoading: false }))
      }
    },
    reset: () => set({ isExist: false}),
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

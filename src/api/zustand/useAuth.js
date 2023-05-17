import { useStore } from './authStore';

export const selectIsLoggedIn = state => state.isLoggedIn;
export const selectUser = state => state.currentUser;
export const selectPicture = state => state.userImg;
export const selectIsHasAccount = state => state.isHasAccount;
export const selectIsExist = state => state.isExist;

export const useAuth = () => ({
  isLoggedIn: useStore(selectIsLoggedIn),
  user: useStore(selectUser),
  picture: useStore(selectPicture),
  isHasAccount: useStore(selectIsHasAccount),
  isExist: useStore(selectIsExist),
});

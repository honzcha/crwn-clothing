import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  //here the first argument bring the user from the select user const above. it will bring the user from state into this. than we use the user info to bring out what we need

  [selectUser],
  (user) => user.currentUser
);

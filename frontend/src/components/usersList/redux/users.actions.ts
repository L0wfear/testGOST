import { createRoutine } from "redux-saga-routines";

export const initUsersList = createRoutine("USERS_LIST_INIT");
export const fetchUserDetails = createRoutine("FETCH_USER_DETAILS");

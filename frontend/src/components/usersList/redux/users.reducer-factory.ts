import { IUsersReducer } from "../../../interfaces/usersReducer.interface";
import { handleActions } from "redux-actions";

const initializeUsersReducer = (): IUsersReducer => {
  return {
    usersListFetching: true,
    userDetailsFetched: false,
    usersList: [],
    userDetails: { id: "", username: "", fullName: "" }
  };
};

export const usersReducerFactory = (actions: any) => {
  return handleActions<IUsersReducer>(actions, initializeUsersReducer());
};

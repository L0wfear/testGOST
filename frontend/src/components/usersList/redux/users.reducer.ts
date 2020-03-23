//import { combineActions } from 'redux-actions';
import { usersReducerFactory } from "./users.reducer-factory";
import { IAction } from "../../../interfaces/i-actions";
import { IUsersReducer } from "../../../interfaces/usersReducer.interface";
import { initUsersList, fetchUserDetails } from "./users.actions";

export const usersReducer = usersReducerFactory({
  [initUsersList.TRIGGER]: (state: IUsersReducer): IUsersReducer => ({
    ...state,
    usersListFetching: true,
    usersList: state.usersList.length ? state.usersList : []
  }),
  [initUsersList.SUCCESS]: (
    state: IUsersReducer,
    action: IAction
  ): IUsersReducer => ({
    ...state,
    usersListFetching: false,
    usersList: action.payload
  }),
  [initUsersList.FAILURE]: (state: IUsersReducer): IUsersReducer => ({
    ...state,
    usersListFetching: false,
    usersList: []
  }),
  [fetchUserDetails.SUCCESS]: (
    state: IUsersReducer,
    action: IAction
  ): IUsersReducer => ({
    ...state,
    userDetailsFetched: true,
    userDetails: action.payload
  }),
  [fetchUserDetails.FAILURE]: (
    state: IUsersReducer,
    action: IAction
  ): IUsersReducer => ({
    ...state,
    userDetailsFetched: true,
  })
});

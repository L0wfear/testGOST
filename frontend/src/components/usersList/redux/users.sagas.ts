import { IAction } from '../../../interfaces/i-actions';
import { usersAPI } from '../../../api/api';
import { all, call, put, takeLatest, putResolve } from "redux-saga/effects";
import * as usersActions from "./users.actions";

function* initUsersList() {
  try {
    const response = yield call(usersAPI.getUsersList);
    yield put(usersActions.initUsersList.success(response.data));
  } catch (e) {
    yield put(usersActions.initUsersList.failure(e));
  }
}

function* getUserDetails(action: IAction) {
  try {
    const response = yield call(usersAPI.getUserDetails, action.payload);
    yield putResolve(usersActions.fetchUserDetails.success(response.data));
  } catch (e) {
    yield put(usersActions.fetchUserDetails.failure(e));
  }
}

export function* usersWatcher() {
  yield all([
    takeLatest(
      usersActions.initUsersList.TRIGGER,
      initUsersList
    ),
    takeLatest(
      usersActions.fetchUserDetails.TRIGGER,
      getUserDetails
    )
  ]);
}

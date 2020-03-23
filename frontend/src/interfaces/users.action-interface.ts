import {initUsersList, fetchUserDetails} from '../components/usersList/redux/users.actions';

export interface IUsersActions {
  actions: {
    initUsersList: typeof initUsersList;
    fetchUserDetails: typeof fetchUserDetails;
  };
}

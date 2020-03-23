export interface IUsersReducer {
  usersListFetching: boolean;
  userDetailsFetched: boolean;
  usersListError?: string | null;
  userDetailsError?: string | null;
  usersList: any[];
  userDetails: UserDetails;
}

type UserDetails = {
  id: string,
  username: string,
  fullName: string
}
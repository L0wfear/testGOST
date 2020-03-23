import React, { useEffect, useState } from "react";
import preloader from "../../img/preloader.svg";
import styles from "./users.module.scss";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import { usersModule } from "./redux/users.module";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as usersActions from "./redux/users.actions";
import { IRootState } from "../../interfaces/i-root-state.interface";
import { IUsersReducer } from "../../interfaces/usersReducer.interface";
import { IUsersActions } from "../../interfaces/users.action-interface";

export default () => (
  <DynamicModuleLoader modules={[usersModule()]}>
    <UserContainer />
  </DynamicModuleLoader>
);

type AllProps = IUsersActions & IUsersReducer;

const Users: React.FC<AllProps> = ({
  actions,
  userDetails,
  userDetailsFetched,
  usersList,
  usersListFetching
}) => {
  useEffect(() => {
    let id = setInterval(() => {
      actions.initUsersList();
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    actions.initUsersList();
  }, []);

  const [isActive, setIsActive] = useState(null);

  const getUserId = (e: any) => {
    setIsActive(e.currentTarget.getAttribute("id"));
    actions.fetchUserDetails(e.currentTarget.getAttribute("id"));
  };

  return (
    <div className={styles.users}>
      <div className={styles.users_table}>
        {usersListFetching && <img src={preloader} alt="preloader" />}
        {!usersListFetching && (
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((u: any) => (
                <tr
                  className={u.id === isActive ? styles.active : ""}
                  key={u.id}
                  id={u.id}
                  onClick={e => {
                    getUserId(e);
                  }}
                >
                  <td>{u.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.user_details}>
        {!userDetailsFetched && <p>CLICK ON USER FOR DETAILS</p>}
        {userDetailsFetched && (
          <>
            <p>id: {userDetails.id} </p>
            <p>username: {userDetails.username} </p>
            <p>fullName: {userDetails.fullName} </p>
          </>
        )}
      </div>
    </div>
  );
};

const MapStateToProps = (state: IRootState): IUsersReducer => {
  return {
    usersList: state.users.usersList,
    userDetails: state.users.userDetails,
    userDetailsFetched: state.users.userDetailsFetched,
    usersListFetching: state.users.usersListFetching
  };
};
const MapDispatchToProps = (dispatch: Dispatch): IUsersActions => ({
  actions: bindActionCreators(usersActions, dispatch)
});

const UserContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(React.memo(Users));

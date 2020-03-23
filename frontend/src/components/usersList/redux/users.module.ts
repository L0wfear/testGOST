import { usersReducer } from "./users.reducer";
import { usersWatcher } from "./users.sagas";

export function usersModule() {
  return {
    // Unique id of the module
    id: "users",
    // Maps the Store key to the reducer
    reducerMap: {
      users: usersReducer
    },
    sagas: [usersWatcher]
  };
}

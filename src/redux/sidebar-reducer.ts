const UPDATE_NEW_FIRST_NAME = "UPDATE_NEW_FIRST_NAME";

const UPDATE_NEW_NAME_FRIENDS = "UPDATE_NEW_NAME_FRIENDS";

let initialState = {
  firstName: [{ id: 1, name: "Friends" }],

  friends: [
    { id: 2, name: "Dem" },
    { id: 3, name: "Flop" },
    { id: 4, name: "Fes" },
  ],
  newNameFriends: "",
};

const sidebarReducer = (state = initialState, action: any) => {
  let stateCopy;

  switch (action.type) {
    case UPDATE_NEW_FIRST_NAME:
      stateCopy = { ...state, newNameFriends: action.friend };

      return stateCopy;

    case UPDATE_NEW_NAME_FRIENDS:
      let friend = state.newNameFriends;
      return {
        ...state,
        newNameFriends: "",
        friends: [...state.friends, { id: 5, name: friend }],
      };
    default:
      return state;
  }
};

export const firstNameCreator = () => ({ type: UPDATE_NEW_FIRST_NAME });

export const updateNewNameFriendsCreator = (friend: any) => ({ type: UPDATE_NEW_NAME_FRIENDS, friend: friend });

export default sidebarReducer;

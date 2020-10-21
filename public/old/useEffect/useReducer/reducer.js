export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newData = [...state.users, action.payload];
    return {
      ...state,
      users: newData,
      showModal: true,
      modalContent: "new item added.",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "REMOVE_USER") {
    const filterUsers = state.users.filter(user => user.id !== action.payload);
    return {
      ...state,
      users: filterUsers,
      showModal: true,
      modalContent: "user removed successfully",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  }
  throw new Error("no action type found");
};

// Initial state for the forms
export const initialState = {
  email: "",
  username: "",
  password: "",
  errors: {
    email: "",
    username: "",
    password: "",
  },
};

// Reducer function to manage form state
export function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    default:
      return state;
  }
}

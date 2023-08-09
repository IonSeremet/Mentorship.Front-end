import { createStore } from "redux";

// Define initial state
export interface AppState {
  user: User | null;
}

interface User {
  email: string;
}

type AppAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

const storedUser = localStorage.getItem("user"); // Get stored user data

const initialState: AppState = {
  user: storedUser ? JSON.parse(storedUser) : null, // Set initial user data
};
// Define reducer
const reducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;

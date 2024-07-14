import { createContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  DarkMode: false
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ DarkMode: state.DarkMode, dispatch }}>
    { children }
    </DarkModeContext.Provider>
  );
};

DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
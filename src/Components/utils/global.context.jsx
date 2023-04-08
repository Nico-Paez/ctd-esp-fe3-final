import { createContext, useMemo, useReducer } from "react";

export const initialState = {theme: "", data: []}

export const actions = {
  SET_THEME_IN: 'SET_THEME_IN',
  SET_THEME_OUT: 'SET_THEME_OUT',
  SET_DATA_IN: 'SET_DATA_IN'
}

export const reducer = (state, action) =>{
  switch(action.type){
    case actions.SET_THEME_IN:
      return ({...state, theme: "dark"});
    case actions.SET_THEME_OUT:
      return ({...state, theme: ""});
    case actions.SET_DATA_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return ({...state, data: [action.payload]});
    default:
      return state;
  }
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state,dispatch] = useReducer(reducer, initialState)

  const providerState = useMemo(
    () => ({
      theme: state.theme,
      data: state.data,
      setInTheme: () => {
        dispatch({type: actions.SET_THEME_IN});
      },
      setOutTheme: () => {
        dispatch({type: actions.SET_THEME_OUT});
      },
      setInData: (identificador) => {
        dispatch({type: actions.SET_DATA_IN, payload:identificador});
      },
    }),
    [state.theme, state.data]
  );

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};


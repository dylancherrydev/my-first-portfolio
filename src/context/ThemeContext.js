import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DARKNESS':
      return { ...state, darkness: action.payload }
    default:
      return state
  }
}

export function ThemeProvider ({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    darkness: 'dark'
  })

  const changeDarkness = (darkness) => {
    dispatch({ type: 'CHANGE_DARKNESS' , payload: darkness})
  }

  return (
    <ThemeContext.Provider value={{...state, changeDarkness}}>
      {children}
    </ThemeContext.Provider>
  )
}
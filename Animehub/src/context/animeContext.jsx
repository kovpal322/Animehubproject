import { useReducer, createContext } from "react";

export const animeContext = createContext();
export const animeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMES":
      return { animes: action.payload };
  }
};
export const AnimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(animeReducer, { animes: [] });

  return (
    <animeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </animeContext.Provider>
  );
};

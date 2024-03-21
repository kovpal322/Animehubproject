import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimeContextProvider } from "./context/animeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimeContextProvider>
    <App />
  </AnimeContextProvider>
);

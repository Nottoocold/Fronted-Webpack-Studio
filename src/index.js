import { createRoot } from "react-dom/client"; // react 18+ version of createRoot, else react-dom
import App from "./App";
import React, { StrictMode } from "react";

const root = createRoot(document.getElementById("root")); // createRoot is used to render the app in the root element of the index.html file
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

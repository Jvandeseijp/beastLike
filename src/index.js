import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const APP_ID = "VxE5zqqPPwUBiOJ4vcYsgA529AVRSg6pJUDI08Jb";
const SERVER_URL = "https://wktq1kdcj6ca.usemoralis.com:2053/server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
     <App />
    </MoralisProvider>
  </React.StrictMode>
);

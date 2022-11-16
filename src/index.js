import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
// import { AuthContextProvider } from "./store/AuthorizationContextProvider";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   // document.getElementById('root')
// );




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   // <AuthContextProvider>
    <React.StrictMode>
<App />
    </React.StrictMode>

  // </AuthContextProvider>
);

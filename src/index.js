import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FronteggProvider } from "@frontegg/react";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const contextOptions = {
  baseUrl: "https://app-iidmu1k31897.frontegg.com",
  clientId: "2584354a-7c38-4734-94b6-5177186015d3",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    
      <App />
    
  </FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Components/AuthContext/context";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/query";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
   {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}> */}
   <GoogleOAuthProvider clientId="816267017448-7bdtdhcio3n7olsm7gqli90it40oub2u.apps.googleusercontent.com">
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

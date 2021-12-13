import React, { useState } from "react";
import Router from "./Router";
import UserContext from "./contexts/user";
import { instance } from "./apis";

function App() {
  const { token } = localStorage;

  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  }

  const [isLogin, setIsLogin] = useState(!!localStorage.token);
  const value = {
    isLogin,
    setIsLogin: (val) => setIsLogin(val),
  };

  // return <Router />;
  return (
    <UserContext.Provider value={value}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;

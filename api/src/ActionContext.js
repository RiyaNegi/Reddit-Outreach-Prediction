import React, { createContext, useState } from 'react'
import { Authenticated } from "./utils/isAuthenticated"


export const ActionContext = createContext()


export const ActionProvider = ({ children }) => {
  const [auth, setAuth] = useState(!!localStorage.token)

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  }

  const login = (username, password) => {
    fetch("http://127.0.0.1:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.access_token);
        window.location.reload();
      });
  }

  return (
    <ActionContext.Provider
      value={{
        auth: auth,
        setAuth: setAuth,
        handleLogout: handleLogout,
        login: login
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}

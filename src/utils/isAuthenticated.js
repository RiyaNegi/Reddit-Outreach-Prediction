import { ActionContext } from "../ActionContext"
import React, { useContext } from "react";


export const Authenticated = () => {
    const action = useContext(ActionContext)


    return action.setAuth(!!localStorage.token);
}

import React, { useContext } from 'react'
import Login from "./Auth/Login"
import "./Style.css"
import { ActionContext } from "../ActionContext"
import Form from "./Form"


const Home = () => {
  const action = useContext(ActionContext)

  return <div>
    <div className="main">
      <div className="card">
        {action.auth ? <Form /> : <Login />}
      </div>
    </div>
  </div>
}

export default Home
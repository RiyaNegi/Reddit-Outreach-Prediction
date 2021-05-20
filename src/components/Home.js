import React, { useContext } from 'react'
import Login from "./Auth/Login"
import "./Style.css"
import { ActionContext } from "../ActionContext"
import Details from "./Details"

const Home = () => {
  const action = useContext(ActionContext)

  return <div>
    <div className="main">
      <div className="card">
        {action.auth ? <Details /> : <Login />}
      </div>
    </div>
  </div>
}

export default Home
import React, { useContext } from 'react'
import "./Style.css"
import { ActionContext } from "../ActionContext"
import Form from "./Form"
import Prediction from "./Prediction"

const Details = () => {
  const action = useContext(ActionContext)

  return <div>
    {action.prediction.upvotes ? <Prediction /> : <Form />}
  </div>
}

export default Details
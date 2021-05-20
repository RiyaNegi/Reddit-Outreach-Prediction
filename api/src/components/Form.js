import React, { useState, useContext } from 'react'
import Login from "./Auth/Login"
import "./Style.css"
import { ActionContext } from "../ActionContext"


const Form = () => {
  const [state, setState] = useState({
    subreddit: "",
    title: "",
    time: "",
    date: ""
  })

  const handleChange = event => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const action = useContext(ActionContext)
  console.log(state)

  return <div>
    <form onSubmit={action.formSubmit} method="post">
      <div>
        <div className="Formtitle"> Post Details </div>
        <hr style={{ outline: "none", border: "none", backgroundColor: "rgb(54, 54, 54)", height: "0.5px", margin: "20px" }} />
      </div>
      <div>
        <div class="text">Subreddit</div>
        <input
          className="InputBox"
          name="subreddit"
          placeholder="Enter your Subreddit"
          value={state.subreddit}
          onChange={handleChange}
        />          </div>
      <div>
        <div class="text">Title</div>
        <input
          className="InputBox"
          type="Title"
          name="title"
          placeholder="Enter your Title"
          value={state.title}
          onChange={handleChange}
        />       </div>
      <div class="text">Date</div>
      <input
        className="InputBox"
        type="Date"
        name="date"
        placeholder="Enter your Date"
        value={state.date}
        onChange={handleChange}
      />
      <div class="text">Timeeee</div>
      <input
        className="InputBox"
        type="Time"
        name="time"
        placeholder="Enter your Time"
        value={state.time}
        onChange={handleChange}
      />
      <p>{state.message}</p>
      <div className="center mt-5">
        <input className="submit" type="submit" value="Login" />
      </div>
    </form>
  </div>
}

export default Form
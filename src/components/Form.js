import React, { useState, useContext } from 'react'
import Login from "./Auth/Login"
import "./Style.css"
import { ActionContext } from "../ActionContext"


const Form = () => {
  const [state, setState] = useState({
    subreddit: "",
    title: "",
    time: "",
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

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
    return action.formSubmit(state.subreddit, state.title, state.time)
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div className="Formtitle"> Post Details </div>
        <hr style={{ outline: "none", border: "none", backgroundColor: "rgb(54, 54, 54)", height: "0.5px", margin: "20px" }} />
      </div>
      <div>
        <div class="text">Subreddit of post</div>
        <input
          className="InputBox"
          name="subreddit"
          placeholder="Enter your Subreddit"
          value={state.subreddit}
          onChange={handleChange}
        />          </div>
      <div>
        <div class="text">Title of post </div>
        <input
          className="InputBox"
          type="Title"
          name="title"
          placeholder="Enter your Title"
          value={state.title}
          onChange={handleChange}
        />       </div>
      <div class="text">Time of posting</div>
      <input
        className="InputBox"
        type="time"
        name="time"
        placeholder="Enter your time of posting"
        value={state.time}
        onChange={handleChange}
        min="01:00" max="24:00"
      />
      <p>{state.message}</p>
      <div className="center mt-5">
        <button className="submit" type="submit">
          Predict
          </button>
      </div>
    </form>
  </div>
}

export default Form
import React, { useState, useContext } from "react";
import "./Auth.css"
import { ActionContext } from "../../ActionContext"


const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  })


  const action = useContext(ActionContext)


  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
    return action.login(state.username, state.password)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <div>
          <div className="Formtitle"> Login </div>
          <hr style={{ outline: "none", border: "none", backgroundColor: "rgb(54, 54, 54)", height: "0.5px", margin: "20px" }} />
        </div>
        <div>
          <div class="text">Username</div>
          <input
            className="InputBox"
            name="username"
            placeholder="Enter your Username"
            value={state.username}
            onChange={handleChange}
          />          </div>
        <div>
          <div class="text">Password</div>
          <input
            className="InputBox"
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={state.password}
            onChange={handleChange}
          />       </div>

        <p>{state.message}</p>
        <div className="center mt-5">
          <input className="submit" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;

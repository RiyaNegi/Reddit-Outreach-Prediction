import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./Style.css"
import { ActionContext } from "../ActionContext"


const NavSlide = () => {
  const action = useContext(ActionContext)
  return <div>
    <div className="navSlide">
      <div className="head">Reddit Outreach Prediction with JWT Authentication</div>
      {action.auth && <button className="logout" type="submit" value="Logout" onClick={action.handleLogout}>logout</button>}
    </div>
  </div>
}

export default NavSlide
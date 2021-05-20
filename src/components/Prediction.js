import React, { useContext } from 'react'
import "./Style.css"
import { ActionContext } from "../ActionContext"
import Upvote from "../assets/upvote.png"


const Prediction = () => {
    const action = useContext(ActionContext)

    const handleSubmit = event => {
        event.preventDefault();
        return action.setPrediction({ upvotes: "", time: "" })
    };

    return <div>
        <div>
            <div className="Formtitle"> Post Prediction </div>
            <hr style={{ outline: "none", border: "none", backgroundColor: "rgb(54, 54, 54)", height: "0.5px", margin: "20px" }} />
        </div>
        <div className="predict">
            <img src={Upvote} alt="Logo" style={{ height: 120, width: 120 }} />
            <div className="upvote ml-3">{action.prediction.upvotes}</div>
        </div>
        <div>
            <div className="Formtitle mt-5"> Tip for Better Results </div>
            <hr style={{ outline: "none", border: "none", backgroundColor: "rgb(54, 54, 54)", height: "0.5px", margin: "20px" }} />
        </div>
        <div className="time mt-5">
            Upload post at  {action.prediction.time} for better outreach and more upvotes.
        </div>
        <div className="center mt-5">
            <button className="submit" onClick={handleSubmit}>
                Re-Predict
          </button>
        </div>
    </div>
}

export default Prediction
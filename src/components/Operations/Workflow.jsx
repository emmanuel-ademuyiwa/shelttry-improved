import React from 'react'
import workflow_1 from "../../images/workflow_1.png";
import workflow_2 from "../../images/workflow_2.png";
import workflow_3 from "../../images/workflow_3.png";

const Workflow = () => {
  return (
    <div className="workflow">
      <div className="workflowSingle">
        <div className="imgContainer">
          <div className="cont">
            <div className="smallCont">
              <img src={workflow_1} alt="" />
            </div>
          </div>
        </div>
        <div className="description">
          <div className="title">
            <h3>Choose a location</h3>
          </div>
          <h4>
            Get the best suited location from the list of available houses.
          </h4>
        </div>
      </div>
      <div className="workflowSingle">
        <div className="imgContainer">
          <div className="cont">
            <div className="smallCont">
              <img className="workflow_2_img" src={workflow_2} alt="" />
            </div>
          </div>
        </div>
        <div className="description">
          <div className="title">
            <h3>Find the Perfect Home</h3>
          </div>
          <h4>
            With the affordable prices you can get yourself a place of comfort
            based upon your preferences.{" "}
          </h4>
        </div>
      </div>
      <div className="workflowSingle">
        <div className="imgContainer">
          <div className="cont">
            <div className="smallCont">
              <img className="workflow_3_img" src={workflow_3} alt="" />
            </div>
          </div>
        </div>
        <div className="description">
          <div className="title">
            <h3>Move in your new life</h3>
          </div>
          <h4>
            Your home is your world why wait when it's in front of you, take it
            and move in.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Workflow
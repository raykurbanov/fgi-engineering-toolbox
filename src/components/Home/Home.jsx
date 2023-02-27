import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  calculationsListHDD,
  calculationsListPipeline,
  referenceData,
} from "../../utils/CalculationsList";

function Home() {
  return (
    <div id="main-page-wrapper">
      <div className="additional-data"></div>
      <h1 id="calculations-header">Available Calculations</h1>
      <div className="calculations-list">
        <div className="available-calculations">
          {calculationsListHDD.map((el, idx) => {
            return (
              <Link to={el.link} key={idx} className="list-item">
                {el.name}
              </Link>
            );
          })}
        </div>
        <div className="available-calculations">
          {calculationsListPipeline.map((el, idx) => {
            return (
              <Link to={el.link} key={idx} className="list-item">
                {el.name}
              </Link>
            );
          })}
        </div>
        <div className="available-calculations">
          {referenceData.map((el, idx) => {
            return (
              <Link to={el.link} key={idx} className="list-item">
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

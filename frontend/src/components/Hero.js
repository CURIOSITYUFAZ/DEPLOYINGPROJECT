import React from "react";
import illustration1 from "../assets/heroimg.svg";

export default function Hero() {
  return (
    <div className="mainwrapper">
      <div className="left">
        <h2>Easier HR for local businesses</h2>
        <p>
          lorem lorem lrem lorem lorem With Eddy’s all-in-one HR Suite you can
          hire, onboard, manage, and pay employees with one easy-to-use
          platform. No headache required.
        </p>
        <button>See a Demo of website</button>
      </div>
      <div>
        <img src={illustration1} alt="illustration" />
      </div>
    </div>
  );
}

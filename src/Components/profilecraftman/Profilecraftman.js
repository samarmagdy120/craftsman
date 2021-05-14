import React from "react";
import RateAndComment from "../rateAndComment/RateAndComment";
import "./Profilecraftman.css";
const Profilecraftman = () => {
  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  return (
    <div className="profilecraft">
      <div className="container profilecraft-p" style={{ height: "500px" }}>
        <div className="row">
          <div className="col-lg-4">
            <label for="myinput">
              <img
                src={state.profileImg}
                style={{
                  margin: "auto",
                  borderRadius: "50%",
                  width: "78px",
                  textAlign: "center",
                  display: "block",
                }}
              />{" "}
              <input type="file" id="myinput" />
            </label>
          </div>
          <div className="col-lg-8">
            <ul className="list-unstyled" style={{ float: "right" }}>
              <li>الاسم</li>
              <li>الموبايل</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <RateAndComment state={state} />
      </div>
    </div>
  );
};

export default Profilecraftman;

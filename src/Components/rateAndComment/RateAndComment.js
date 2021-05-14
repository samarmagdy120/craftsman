import React from "react";
import "./RateAndComment.css";
const RateAndComment = () => {
  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  return (
    <div className="RateAndComment">
      <div>
        <input type="text" placeholder="أكتب تعليقا" />

        <ul className="list-unstyled comment-view">
          <li>
            <img src={state.profileImg} />
            <p>hbbbbbbbbbbbb</p>
          </li>
          <li>
            <img src />
            <p>hbbbbbbbbbbbb</p>
          </li>{" "}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default RateAndComment;

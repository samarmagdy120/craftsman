import React, { useState } from "react";
import Rate from "../rate/Rate";
import "./RateAndComment.css";
const RateAndComment = ({ state }) => {
  const [comment, setComment] = useState([]);
  const [current, setCurrent] = useState([]);

  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);

  const handleChange = (e) => {
    setCurrent({ ...comment, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setComment({ ...current, current });
  };
  return (
    <div className="RateAndComment">
      <div>
        <form onSubmit={handleChange}>
          <input
            type="text"
            placeholder="أكتب تعليقا ......................"
            name="comment"
            onChange={handleChange}
          />
        </form>

        <ul className="list-unstyled comment-view">
          <li>
            <img
              src={state.profileImg}
              style={{
                margin: "auto",
                borderRadius: "50%",
                width: "43px",
                textAlign: "center",
                position: "relative",
                top: "-41px",
              }}
            />
            <div className="comment">
              <h3>mohamed ahmed</h3>
              <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />

              <p>اتيتبينبنىيب منمنيسن سينسي</p>
            </div>
          </li>
          <li>
            <img
              src={state.profileImg}
              style={{
                margin: "auto",
                borderRadius: "50%",
                width: "43px",
                textAlign: "center",
                position: "relative",
                top: "-41px",
              }}
            />
            <div className="comment">
              <h3>mohamed ahmed</h3>
              <Rate rating={rating} onRating={(rate) => setRating(rate)} />

              <p>اتيتبينبنىيب منمنيسن سينسي</p>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default RateAndComment;

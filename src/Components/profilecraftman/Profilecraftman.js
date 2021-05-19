import React, { useState , useEffect,useContext} from "react";
import RateAndComment from "../rateAndComment/RateAndComment";
import "./Profilecraftman.css";
import ImageUploader from "react-images-upload";
// import Rating from "../rate/Rating";
import Rate from "../rate/Rate";
import { AuthContext } from "../../context/auth/AuthState";
import { ReviewContext } from "../../context/reviews/reviewState";

const Profilecraftman = ({ match }) => {

  const {uploadProfileImage , getProfileData , userProfile} = useContext(AuthContext);
  const {
    errors,
    loading,
    reviews,
    addReviews,
    getReviews} = useContext(ReviewContext);

    const id = match.params.id;

    useEffect(() => {
      getProfileData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(userProfile);

  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  const [rating, setRating] = useState(0);

  const handleFile=(e)=>{
    // console.log(e.target.files[0]);
    // uploadProfileImage(e.target.files[0]);
  }
  const handleChange=(e)=>{
    addReviews(id,{text : e.target.value, rating : rating })
  }

  return (
    <div className="profilecraft">
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock", marginTop: "20px" }}
      >
        <div className="row">
          <div className="col-lg-2">
            <div className="wrapper">
              <input type="file" className="my_file" />
            </div>
          </div>
          <div className="col-lg-10">
            <ul
              className="list-unstyled"
              style={{ float: "right", textAlign: "right", marginTop: "25px" }}
            >
              <li>الاسم</li>
              <li>الموبايل</li>
              <li>
                <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                <p>Rating - {rating}</p>{" "}
              </li>
              <li></li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="أكتب تعليقا ......................"
            name="comment"
            onChange={handleChange}
          />
        </div>
        <RateAndComment state={state} id={id} />
      </div>
    </div>
  );
};

export default Profilecraftman;

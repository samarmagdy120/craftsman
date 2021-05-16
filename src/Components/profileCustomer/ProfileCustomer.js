import React from "react";

const ProfileCustomer = () => {
  return (
    <div className="profileCustomer">
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock" }}
      >
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <ul className="list-unstyled" style={{ float: "right" }}>
              <li>الاسم</li>
              <li>الموبايل</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCustomer;

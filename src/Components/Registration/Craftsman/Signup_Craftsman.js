import React, { useContext, useState, createContext } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Craftsman/Signup_Craftsman.css";

const AuthContext = createContext();

const Signup_Craftsman = (props) => {
  const { userAuth, errors, registerCraftMan } = useContext(AuthContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    nationalId: "",
    mobile: "",
    email: "",
    address: "",
    job: "",
    password: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    nationalId,
    mobile,
    email,
    address,
    job,
    password,
    password2,
  } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Password does not match");
    } else {
      registerCraftMan({
        email,
        password,
      });
    }
  };
  return (
    <div className="Signup_Craftsman">
      <div className="container">
        <Form className="RegistationForm" onSubmit={handlesubmit}>
          <h1>انضم الينا كصنايعي !</h1>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="الاسم الاول"
              name="firstName"
              onChange={handleChange}
              value={firstName}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="الاسم الاخير"
              name="lastName"
              onChange={handleChange}
              value={lastName}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="الرقم القومي"
              name="nationalId"
              onChange={handleChange}
              value={nationalId}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="رقم الموبايل"
              name="mobile"
              onChange={handleChange}
              value={mobile}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="البريد الالكتروني"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="العنوان"
              name="address"
              onChange={handleChange}
              value={address}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="المهنه"
              name="job"
              onChange={handleChange}
              value={job}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="كلمة المرور"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="تأكيد كلمة المرور"
              name="password2"
              onChange={handleChange}
              value={password2}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            سجل الان
          </button>
        </Form>
        <p className="question forgot-password text-right">
          لدي حساب بالفعل <Link to="/Login">تسجيل دخول</Link>
        </p>{" "}
      </div>
    </div>
  );
};

export default Signup_Craftsman;

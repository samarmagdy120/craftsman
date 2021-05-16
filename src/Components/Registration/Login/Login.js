import React, { useContext, useState, createContext } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { AuthContext } from "../../../context/auth/AuthState";

const Login = (props) => {
  const { errors, login, userAuth } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    if (!errors) {
      props.history.push("/");
    }
  };

  return (
    <div className="Login">
      <Form className="RegistationForm" onSubmit={handlesubmit}>
        <h1>تسجيل دخول</h1>

        <img src={logo} alt="" />

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="أدخل البريد الالكتروني"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="أدخل كلمة المرور"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox float-right">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              تذكرني
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          تسجيل دخول
        </button>
      </Form>
      <p className="question forgot-password text-right">
        لدي حساب بالفعل <Link to="/Signup_Customer">تسجيل دخول</Link>
      </p>{" "}
    </div>
  );
};

export default Login;

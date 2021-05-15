import React,{useState,useContext} from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Customer/Signup_Customer.css";
import { AuthContext } from "../../../context/auth/AuthState";

const Signup_Customer = () => {

  const { userAuth, errors, registerClient } = useContext(AuthContext);

    const [user, setUser] = useState({
    fname: "",
    lname: "",
    nationalId: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  const {
    fname,
    lname,
    nationalId,
    phone,
    email,
    address,
    password,
  } = user;

    const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
      registerClient(
        {
          fname,
          lname,
          email,
          password,
          phone,
          nationalId,
          address
        }
      );
    }
 
  return (
    <div className="Signup_Customer">
      <Form className="RegistationForm" onSubmit={handlesubmit} >
        <h1>انضم الينا كعميل !</h1>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="الاسم الاول"
            name="fname"
            value={fname}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="الاسم الاخير"
            name="lname"
            value={lname}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="رقم الموبايل"
            name ="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email" 
            placeholder="البريد الالكتروني"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input type="text"
           className="form-control"
            placeholder="العنوان"
            name="address"
            value={address}
            onChange={handleChange}
            />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="كلمة المرور"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          سجل الان
        </button>
        <p className="forgot-password text-right">
          لدي حساب بالفعل <Link to="/Login">تسجيل دخول</Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup_Customer;

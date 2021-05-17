import React,{useEffect,useContext} from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import esraa from "../img/team.png";
import Abdallah from "../img/about/Abdallah.jpeg";
import Mohamed1 from "../img/about/Mohamed1.jpeg";
import Walaa from "../img/about/Walaa.jpeg";
import Esraa2 from "../img/about/Esraa2.jpeg";
import { Jumbotron, Container } from "react-bootstrap";
import "../About/About.css";
import { AuthContext } from "../../context/auth/AuthState";

const AllCrafts = () => {
  const {clearError,refershSuccess}=useContext(AuthContext);
  useEffect(()=>{
    clearError();
    refershSuccess();
  })
  return (
    <MDBCard className=" my-5 px-5 pb-5 text-center">
      <MDBCardBody>
        <Jumbotron fluid>
          <Container>
            <h2>أختار اصنايعى</h2>
            <p>صنايعي خبره هو بوابة اى حرفه</p>
            <hr />
          </Container>
        </Jumbotron>

        <div className="team-card">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img src={Mohamed1} width="190px" height="200px" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">
                محمد احمد عبد الرحيم
              </h5>
              <p className="text-uppercase blue-text">rate</p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img src={Mohamed1} width="190px" height="200px" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">
                محمد احمد عبد الرحيم
              </h5>
              <p className="text-uppercase blue-text">rate</p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img src={Mohamed1} width="190px" height="200px" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">
                محمد احمد عبد الرحيم
              </h5>
              <p className="text-uppercase blue-text">rate</p>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img src={Mohamed1} width="190px" height="200px" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">
                محمد احمد عبد الرحيم
              </h5>
              <p className="text-uppercase blue-text">rate</p>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default AllCrafts;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";

import "./LoginPage.style.scss";

const LoginPage: React.FC = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__backgroundImageContainer">
        <img
          className="loginPage__backgroundImage"
          src={require("../../assets/images/Gambar Untuk press Release-02.png")}
          srcSet={require("../../assets/images/Gambar Untuk press Release-02@2x.png")}
        ></img>
      </div>
      <div className="loginPage__topNav">
        <Logo className="loginPage__logo" />
      </div>
      <div className="loginPage__content">
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6}>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;

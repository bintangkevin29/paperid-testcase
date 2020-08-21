import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";

import Logo from "../../components/Logo";

import "./LoginPage.style.scss";
import { Helmet } from "react-helmet";

const LoginPage: React.FC = () => {
  return (
    <div className="loginPage">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="loginPage__backgroundImageContainer">
        <img
          className="loginPage__backgroundImage"
          alt=""
          src={require("../../assets/images/Gambar-Untuk-press-Release-02.png")}
          srcSet={`${require("../../assets/images/Gambar-Untuk-press-Release-02@2x.png")} 2x`}
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

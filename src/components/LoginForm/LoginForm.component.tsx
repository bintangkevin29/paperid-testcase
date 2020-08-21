import React from "react";
import { Form } from "react-bootstrap";

import TextInput from "../TextInput";

import "./LoginForm.style.scss";
import CustomButton from "../CustomButton";

const LoginForm: React.FC = () => {
  return (
    <div className="loginForm">
      <span className="loginForm__title">
        Masuk ke Paper.id{" "}
        <img alt="" src={require("../../assets/images/Tutorial.svg")} />
      </span>
      <span className="loginForm__subtitle">
        Masuk dengan akun yang terdaftar di Paper.id/PayPer
      </span>
      <div className="loginForm__formContainer">
        <Form className="loginForm__form">
          <TextInput
            icon={require("../../assets/images/icon_account_white.svg")}
            label="Email"
            type="email"
          />
          <TextInput
            icon={require("../../assets/images/icon_lock_white.svg")}
            label="Password"
            type="password"
          />
          <div className="loginForm__forgotPassword">
            <a href="http://www.google.com/">Lupa Kata Sandi?</a>
          </div>
          <CustomButton className="loginForm__submitButton" variant="secondary">
            Masuk
          </CustomButton>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { FormEvent, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../CustomButton";
import TextInput from "../TextInput";

import "./LoginForm.style.scss";
import {
  fetchLoginStart,
  fetchLoginError,
} from "../../redux/auth/auth.actions";
import { RootState } from "../../redux/root.reducer";

export interface LoginNode {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginNode>({
    username: "kevinsamosir24082020",
    password: "paper123",
  });

  const isLoading = useSelector((state: RootState) => state.auth.isFetching);
  const errorMessage = useSelector((state: RootState) => state.auth.errMsg);

  const dispatch = useDispatch();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchLoginStart(loginData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log(value);
    if (errorMessage) {
      dispatch(fetchLoginError(undefined));
    }
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

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
        <Form onSubmit={(e) => handleLogin(e)} className="loginForm__form">
          <TextInput
            icon={require("../../assets/images/icon_account_white.svg")}
            label="Email"
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            value={loginData.username}
          />
          <TextInput
            icon={require("../../assets/images/icon_lock_white.svg")}
            label="Password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
          />
          <div className="loginForm__forgotPassword">
            <a href="http://www.google.com/">Lupa Kata Sandi?</a>
          </div>
          <CustomButton
            isLoading={isLoading}
            type="submit"
            className="loginForm__submitButton"
            variant="secondary"
          >
            Masuk
          </CustomButton>
          {errorMessage && (
            <span className="loginForm__errorMessage">{errorMessage}</span>
          )}
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

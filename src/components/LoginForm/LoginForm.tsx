import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import "./LoginForm.css";
import { useAuth } from "../../context/AuthContext";

const InputField = styled(Field)`
  width: 100%;
  border: none;
  box-sizing: border-box;
  background-color: #444;
  color: #fff;
  font-size: 1em;
  padding: 1em 1em;
  text-decoration: none;
  border-radius: 5px;
`;

export const LoginForm: React.FC<{}> = () => {
  const { logInUser } = useAuth();
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="login">
      <img
        className="login__image"
        alt="main_banner"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/3823cff1-a0ce-4532-b99a-d47d99df9599/US-en-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      <div className="login__card">
        <Formik
          initialValues={{ email: "", password: "", remeber: false }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(4, "Must be at least 4 characters or more")
              .required("The password is required"),

            email: Yup.string()
              .email("Invalid email address")
              .required("The email is required"),
          })}
          onSubmit={async ({ email, password }, utils) => {
            const response = logInUser(email, password);

            if (response) {
              setError(response);
            }
          }}
        >
          {({ isSubmitting }: any) => (
            <Form>
              <div className="login__row">
                <h1 style={{ display: "block", color: "white", margin: "0" }}>
                  Sign In
                </h1>
              </div>

              <div className="login__row">
                <InputField type="email" name="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  className="login__error showError"
                  component="p"
                />
              </div>

              <div className="login__row">
                <InputField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  className="login__error showError"
                  component="p"
                />

                {error ? (
                  <p className="login__error showError">{error}</p>
                ) : null}
              </div>
              <div className="login__row">
                <button
                  disabled={isSubmitting}
                  className="login__submit"
                  type="submit"
                >
                  Sign In
                </button>
              </div>

              <div className="login__row login__row__flex">
                <div>
                  <Field name="remember" type="checkbox" />
                  <label style={{ marginLeft: "5px" }} htmlFor="remember">
                    Remember
                  </label>
                </div>
                <a className="login__link" href="/#">
                  Need Help
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

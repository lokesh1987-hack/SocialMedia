import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../Styles/LoginPage.scss";
import { login } from "../Libs/Apis/Auth";

function LoginPage({ loginCheck }) {
  const navigate = useNavigate();
  const [userData, setUserDAta] = useState({
    email: "",
    password: "",
  });

  const pageHandler = async (e) => {
    e.preventDefault();
    if (userData.email !== "" || userData.password !== "") {
      const result = await login(userData);
      localStorage.setItem("token", result.password);
      localStorage.setItem("user", result.username);
      localStorage.setItem("userId", result._id);
      loginCheck(true);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="position-relative background">
        <div className="container border shadow p-5 position-absolute top-50 translate-middle loginContainer">
          <div className="d-flex justify-content-center mt-5">
            <h1 className="h1 mb-5">Login Page</h1>
          </div>
          <div className="d-flex justify-content-center text-start">
            <Form
              onSubmit={(e) => {
                pageHandler(e);
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setUserDAta({ ...userData, email: e.target.value });
                  }}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserDAta({ ...userData, password: e.target.value });
                  }}
                  autoComplete="on"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className=""
                  type="checkbox"
                  label="Check me out"
                  required
                />
              </Form.Group>
              <div className="d-flex mt-3">
                <Link to="/forgetpassword" variant="primary">
                  Forget Password ?
                </Link>
                <Button className="ms-auto" variant="primary" type="submit">
                  Login
                </Button>
              </div>

              <hr />
            </Form>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/register"
            variant="primary"
            className="btn btn-success ps-5 pe-5 position-absolute registerationButton"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

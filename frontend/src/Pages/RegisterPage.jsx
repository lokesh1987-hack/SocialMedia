import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/RegisterPage.scss";
import { register } from "../Libs/Apis/Auth";
import { Alert, AlertIcon } from "@chakra-ui/react";

function Register() {
  const navigate = useNavigate();

  const [userData, setUserDAta] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState("");

  const { username, email, password } = userData;

  const OnChange = (e) => {
    setUserDAta({ ...userData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await register(userData);
      setAlert(result);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-light p-4 position-relative background">
      <div className="container w-25 border shadow p-5 position-absolute top-50 translate-middle registrationContainer">
        <div className="d-flex justify-content-center mt-5">
          <h1 className="h1 mb-5">Register</h1>
        </div>
        <div className=" d-flex justify-content-center text-start">
          <form onSubmit={(e) => submit(e)}>
            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                name="username"
                value={username}
                type="name"
                onChange={(e) => OnChange(e)}
                className="form-control"
                id="username"
                required
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email id{" "}
              </label>
              <input
                name="email"
                value={email}
                type="email"
                onChange={(e) => OnChange(e)}
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label for="Current_password" className="form-label">
                Password{" "}
              </label>
              <input
                name="password"
                value={password}
                type="password"
                onChange={(e) => OnChange(e)}
                className="form-control"
                id="password"
                autoComplete="on"
                required
              />
            </div>
            <hr />

            <div className="mb-3 ms-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="loginButton">
        <Link
          to="/login"
          variant="primary"
          className="btn btn-secondary ps-5 pe-5 login "
        >
          Login
        </Link>
      </div>
      <div className="alert">
        {alert && (
          <Alert status="success">
            <AlertIcon />
            {alert}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Register;

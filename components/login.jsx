import React, { useState } from "react";
import axios from "axios"; // Assuming you have axios installed
import { useNavigate } from "react-router-dom"; // Assuming you have react-router-dom installed

const Login = () => {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("http://localhost:5173/", {
        email,
        password,
      });

      if (response.data === "exist") {
        history("/home", { state: { id: email } }); // Navigate to home with user ID
      } else if (response.data === "notexist") {
        alert("User does not exist. Please sign up.");
      } else {
        alert("Invalid credentials. Please try again."); // Handle unexpected responses
      }
    } catch (error) {
      console.error("Error submitting login:", error);
      alert("An error occurred. Please try again later."); // User-friendly error message
    }
  };

  return (
    <>
      <h1 className="bg-primary">Voyagr</h1> {/* Use className for React */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 float-left">
            <img
              src="./images/register.jpeg"
              alt="Your Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="bg-primary m-4">Login Page</h2>
            <form onSubmit={submit}>
              {" "}
              {/* Bind submit function to onSubmit */}
              <div className="form-outline mb-4">
                <label className="form-label mb-4" htmlFor="form2Example1">
                  Email address
                </label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control m-4"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline m-4">
                <label className="form-label m-4" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control m-4"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
              <div className="row m-4">
                <div className="col m-4">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <button
                type="submit" // Corrected button type for form submission
                className="btn btn-primary btn-block mb-4"
                onClick={submit}
              >
                Sign in
              </button>
            </form>{" "}
            {/* Close form tag here */}
            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
                disabled // Disable social login for now (security reasons)
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
                disabled // Disable social login for now (security reasons)
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
                disabled // Disable social login for now (security reasons)
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
                disabled // Disable social login for now (security reasons)
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

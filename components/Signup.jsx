import React from "react";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [desc, setdesc] = useState("");
  console.log({ email }, { password }, { desc });

  async function submit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      axios.post("http://localhost:5173/signup", {
        email,
        password,
        desc,
      });

      // if (response.data === "exist") {
      //   history("/home", { state: { id: email } }); // Navigate to home with user ID
      // } else if (response.data === "notexist") {
      //   alert("User does not exist. Please sign up.");
      // } else {
      //   alert("Invalid credentials. Please try again."); // Handle unexpected responses
      // }
    } catch (error) {
      console.error("Error submitting login:", error);
      alert("An error occurred. Please try again later."); // User-friendly error message
    }
  }

  return (
    <>
      <h1 class="bg-primary">Voyagr</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6 float-left">
            <img
              src="./images/register.jpeg"
              alt="Your Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h2 class="bg-primary m-4">Register Page</h2>
            <div class="row mb-3">
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Email
              </label>
              <div class="col-sm-10 mb-4">
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="colFormLabel" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10 mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="colFormLabel"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="row mb-4">
              <label
                for="colFormLabelLg"
                class="col-sm-2 col-form-label col-form-label-lg"
              >
                Description
              </label>
              <div class="col-sm-10 mb-4">
                <input
                  type="paragraph"
                  class="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="description"
                  onChange={(e) => setdesc(e.target.value)}
                  required
                />
              </div>
              <div class="row m-4">
                <button class="btn-primary mt-5" onClick={submit}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

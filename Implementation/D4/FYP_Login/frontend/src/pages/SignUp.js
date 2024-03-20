import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function SignUpPage() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    isAuthenticated: false 
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    try {
      const response = await axios.post("http://localhost:8000/app1/signup/", {
        name,
        email,
        password
      });
      console.log(response.data);
      setState((prevState) => ({
        ...prevState,
        isAuthenticated: true
      }));
    } catch (error) {
      console.error("Error:", error); 
    }
  };

 
  if (state.isAuthenticated) {
    return <Redirect to="/SignInPage" />;
  }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        {/* Form fields */}
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {/* Submit button */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
import React, { useState } from "react";
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import "../css/FormStyle.css"




function FormPage() {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => 
    {
      if (text !== type) 
      {
        setType(text);
        return;
      }
    };

const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="signin-page">
      <h2>Sign In/Up Form</h2>
      <div className={containerClass} id="container">
        <SignUpPage />
        <SignInPage />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormPage;
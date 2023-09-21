import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../../../Firebase";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/gallery");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/gallery")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        
        if (error.code == "auth/email-already-in-use") {
            alert("The email address is already in use");
        } else if (error.code == "auth/invalid-email") {
            alert("The email address is not valid.");
        } else if (error.code == "auth/operation-not-allowed") {
            alert("Operation not allowed.");
        } else if (error.code == "auth/weak-password") {
            alert("The password is too weak.");
        }else if(errorCode =="auth/invalid-login-credentials"){
            alert("No username found!")
        }
    });
   
}


  return (
    <div className="login">
      <div className="inner-login-container">
        <div className="signInHead">
          <h1>Sign in</h1>
        </div>
        <div className="signInP">
          <p>Sign in and start managing your gallery!</p>
        </div>
        <form target="_blank" className="userInput">
          <input
            type="email"
            placeholder="Email address"
            className="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>
        <div className="authentication">
          <div>
            <input type="checkbox" name="remember" className="rmbCheckbox" />
            <label for="remember" className="rmbLabel">
              {" "}
              Remember me{" "}
            </label>
            <br />
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <div className="loginButton">
          <button type="submit" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
      <div><img src="/assets/Vectors.png"className="loginImg" /></div>
    </div>
  );
}

export default LoginPage;

      
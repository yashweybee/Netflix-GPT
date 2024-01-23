// Combination of Sign-In and Sign-Up form
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitBtn = () => {
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (message) return;

    if (!isSignIn) {
      // sign-up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // updating the user profile data
          updateProfile(auth.currentUser, {
            displayName: user.current.displayName,
            photoURL: "https://avatars.githubusercontent.com/u/86155339?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign-In

      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-hi-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 bg-opacity-80 rounded"
      >
        <h1 className="font-bold text-4xl text-white py-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="p-3 m-2 my-6 rounded w-full bg-gray-700 text-white"
          />
        )}

        <input
          ref={emailRef}
          type="text"
          name="Email"
          placeholder="Email Address"
          className="p-3 m-2 my-6 rounded w-full bg-gray-700 text-white"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 m-2 my-6 rounded w-full bg-gray-700 text-white"
        />
        <p className="text-red-700 font-semibold ">{errorMessage}</p>

        <button
          onClick={handleSubmitBtn}
          className="p-3 my-4 mx-2 bg-red-600 text-white cursor-pointer rounded w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white m-3 cursor-pointer "
          onClick={toggleSignInForm}
        >
          {" "}
          {isSignIn
            ? "New to netflix-GPT? Sign-Up now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

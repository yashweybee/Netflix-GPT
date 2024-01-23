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
import { useDispatch } from "react-redux";
import { BG_URL, AVATAR_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
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
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
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
        <img src={BG_URL} alt="background-img" />
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
            ref={nameRef}
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

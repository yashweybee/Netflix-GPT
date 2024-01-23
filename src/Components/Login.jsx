// Combination of Sign-In and Sign-Up form
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-hi-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        action=""
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
            className="p-3 m-2 my-6 rounded w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          name="Email"
          placeholder="Email Address"
          className="p-3 m-2 my-6 rounded w-full bg-gray-700"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 m-2 my-6 rounded w-full bg-gray-700"
        />

        <button className="p-3 my-4 mx-2 bg-red-600 text-white cursor-pointer rounded w-full">
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

import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }

  const handleSignOut = () => {
    signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        })
  };

  return (
    <div>
        {/* user ? logout : sign in */}

      {
      user ? 
        <button onClick={handleSignOut}>Sign Out</button> :
      <div>
        <button onClick={handleGoogleSignIn}>Google Login</button>
      <button onClick={handleGithubSignIn}>Github Login</button>
      </div>
      }
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h3>User: {user.displayName}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      )}
    </div>
  );
};

export default Login;

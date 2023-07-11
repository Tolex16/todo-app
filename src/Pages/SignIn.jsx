import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import './signin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

  
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert("Logged in successfully");
        navigate("/home");
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSignIn}>
          <h1> Sign in</h1>
          <label>Email: </label>
          <input type="email" placeholder="Enter your email" />
          <br />
          <br />
          <label>Password: </label>
          <input type="password" placeholder="Enter your password" />
          <br />
          <br />
          <button type="submit">Submit</button>
          {error && <p>Wrong username or password</p>}
        </form>
        <p>Don't have an account, <Link to={"/signup"}>Sign Up</Link></p>
      </div>
    );
  };
  
  export default SignIn;
  
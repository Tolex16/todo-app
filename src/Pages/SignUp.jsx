import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      await updateProfile(response.user, {
        displayName: username,
      });
     
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <br />
        <label>Password: </label>
        <input type="password" placeholder="Enter your password" />
        <br />
        <br />
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account, <Link to={"/signin"}>Sign In</Link></p>
    </div>
  );
};

export default SignUp;

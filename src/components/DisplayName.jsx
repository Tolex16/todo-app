import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const DisplayName = () => {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user.displayName}</h1>;
};

export default DisplayName;

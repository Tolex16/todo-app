import './signin.css'
import { useNavigate } from "react-router-dom";
import { signOut} from "firebase/auth"
import { addDoc,getDoc, collection} from "firebase/firestore"; 
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
import { db } from "../firebase";

const Create = ({ createTodo, todos }) => {
  const  navigate = useNavigate();

  const handlesignout = () => {
    signOut(auth)
    .then(() => {
      alert("Signed out successfully")
      navigate("/")
    })
    .catch ((err) => {
      navigate("*")
    });
  };
 
  
    const todoHandler = (e) =>{
      e.preventDefault()
      const title = e.target[0].value;
      const description = e.target[1].value;
      const date = e.target[2].value;
      const time = e.target[3].value;

     createTodo([{title, description, date, time }, ...todos])
     alert("todo added")
    addDoc(collection(db, "todo"), {
      title: title,
      description: description,
      time: time,
      date: date
      
    });
    
  }
  
    async function getDocument(id) {
      const docSnap = await getDoc(collection(db, "todo", [ id ]));
  
      if (docSnap.exists()) { 
        todos= docSnap.data().todo;
      } else {
        alert("Doc not available");
      }
    }


  return (
    <>
    <nav style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <span>
          <Link to={"/home"}>Home</Link>
        </span>
        <span>
        <Link to={"/create"}>Create Todo</Link>
        </span>
        <span>
          <Link to={"/content"}>Content</Link>
        </span>
        <span>
          <Link to={"/about"}>About</Link>
        </span>
      </nav>
    
 
    <br />
    <form className="form"  onSubmit={todoHandler}>
    <div>Create your Todo below 👇 </div>
        <br />
        <label >Title</label>
        <input type="text"  placeholder="Enter the title here" />
        <br />
        <br />
        <label >Description</label>
        <input type="text" placeholder="Enter the description" />
        <br />
        <br />
        <label >Date</label>
        <input type="date" placeholder="Enter the date" />
        <br />
        <br />
        <label>Time</label>
        <input type="time" placeholder="Enter the time" />
        <br />
        <br />
        <br />
        <button  onClick={() => getDocument()} type='submit'>Submit</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <button type="submit" onClick={handlesignout}>Sign out</button>
    
    </form>
    </>
  );
};

export default Create;

import "./content.css";
import React from "react";
import { Link } from "react-router-dom";
import { updateDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import list from "../img/checkcard.jpg"

const Content = ({ createTodo, todos }) => {
  const  navigate = useNavigate();
  const handleDelete = async (id) => {
    console.log("right");
    const newTodo = todos.filter((todo) => todo.description !== id);
    createTodo(newTodo);
    const oohTodo = await deleteDoc(collection(db, "todo", id ))
    createTodo(oohTodo)
    .then(() => {
      alert("Deleted successfully");
    })
    .catch((error) =>{
      navigate('*'+ error)
    })
  };


  async function todoUpdate(id)  {
    updateDoc(collection(db, "todo", id ));
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

      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.description}>
            Todo Title : {todo.title}
            <br />
            <br />
            Todo Description : {todo.description}
            <br />
            <br />
            Todo Date : {todo.date}
            <br />
            <br />
            Todo Time : {todo.time}
            <br />
            <br />
            <br/>
            <button style={{marginLeft: "80px"}} onClick={() => todoUpdate(todo.title)}>Update</button>
            <button onClick={() => handleDelete(todo.description)}>
              Remove
            </button>
            <div>
            <img src={list} alt="checklist" />
            </div>
          </div>
        );
      })}
      <br />
      <br />
    </>
  );
};

export default Content;

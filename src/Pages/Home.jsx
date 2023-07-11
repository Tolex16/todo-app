import React from 'react'
import { Link } from 'react-router-dom';
import DisplayName from '../components/DisplayName';


const Home = () => {
  return(
    <div>
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

        <br/>
        <p style={{textAlign: "center"}}><DisplayName/></p>
        <br/>
        <h2 style={{ display: "flex", justifyContent: "center"}} > Create, edit and set reminders with us for various shopping lists, to-do list etc </h2>
        <p style={{ display: "flex", justifyContent: "center"}} > To create a Todo click on the create todo link and get started</p>
         </div>
  )
}
export default Home; 
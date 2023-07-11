import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return(
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
          <br/>
        <h2 style={{display: "flex", justifyContent: "center" }}><i> This App allows users save their todo and be able retrieve it at any point in time... </i></h2>
</>
    )
    }
    export default About;
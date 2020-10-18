import React, { Component } from "react";
//import "../index.css"
import "../navbar.css";
import Navbar_forum from './Navbar_forum';

class Forum extends Component{
    render(){
         return (
            <header>
               <Navbar_forum name_link="/Forum"/>
               <p>Forum</p>
            </header>
        );
    }
}

export default Forum;
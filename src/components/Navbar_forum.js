import React, { Component } from "react";
//import "../index.css"
import "../navbar.css"
import { Nav,NavDropdown, Navbar, Form, FormControl,Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import $ from 'jquery';

class Navbar_forum extends Component{
    componentDidMount(){
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        
        });
    }
  render(){
    return (
      
<nav className="nav">
        <div className="container">
            <div className="logo">
            <NavLink  to="/">Totally Bizarre</NavLink>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink  to="/About">About</NavLink></li>
                    <li><NavLink  to="/Forum">Forum</NavLink></li>
                    <li><NavLink  to="/Quiz">Quiz</NavLink></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
      );
      
  }
}

export default Navbar_forum;
import $ from 'jquery';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import "../index.css"
import "../navbar.css";


class NavbarPage extends Component{
    
    componentDidMount(){
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
            } else {
                $('.nav').removeClass('affix');
            }
        });
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        
        });
    }
    onLogoutHandler = () => {
        localStorage.clear();
      };

  render(){
       const login = localStorage.getItem("isLoggedIn");
    return (
    <nav className="nav">
        {login ? (
        <div className="container">
            <div className="logo">
            <NavLink  to="/">Totally Bizarre</NavLink>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><NavLink  to="/">Welcome</NavLink></li>
                    <li><NavLink  to="/About">About</NavLink></li>
                    <li><NavLink to="/Quiz">Quiz</NavLink></li>
                    <li><NavLink to="/Form">Form</NavLink></li>
                    {/* <li><NavLink to="/Logout">Logout</NavLink></li> */}
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
        ) : (
            <div className="container">
            <div className="logo">
            <NavLink  to="/">Totally Bizarre</NavLink>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink  to="/About">About</NavLink></li>
                    <li><NavLink to="/Quiz">Quiz</NavLink></li>
                    <li><NavLink to="/Form">Form</NavLink></li>
                    {/* <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                    <li><NavLink to="/sign-in">Sign In</NavLink></li> */}
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
            )} 
    </nav>
    );   
  }
}

export default NavbarPage;
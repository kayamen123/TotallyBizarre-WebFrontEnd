import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component{
    render(){
        const login = localStorage.getItem("isLoggedIn");
        if (login) {
          localStorage.clear();
          return <Redirect to="/" />;
        }
         return (
            <div>

            </div>
        );
    }
}
export default Logout;
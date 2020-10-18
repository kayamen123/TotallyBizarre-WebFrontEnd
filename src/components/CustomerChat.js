import $ from 'jquery';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import "../index.css"


class CustomerChat extends Component{
    componentDidMount(){
          (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render(){
        return(
            <div>
                <div id="fb-root"></div>
                    <div class="fb-customerchat" attribution="setup_tool"
                    page_id="1233503743467954">
                </div>
            </div>
        )
    }
}

export default CustomerChat;
import React, { Component } from "react";
import { Carousel1, CarouselGambar } from "./HomeSection";
//import "../index.css"
import NavbarPage from "../NavbarPage" ;
import CustomerChat from"../CustomerChat";

class Home extends Component{
    render(){
         return (
            <div>
                <NavbarPage />
                 <section className="home"> </section> 
                 <div style={ {paddingTop: 200 }}>               
                 <CarouselGambar />
                 <Carousel1 />
                 </div>   
            </div>
        );
    }
}

export default Home;

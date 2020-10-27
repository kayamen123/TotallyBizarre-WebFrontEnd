import React, { Component } from "react";
import "antd/dist/antd.css";
import { Pagination, Col, Row, Layout, Divider } from "antd";
import "antd/dist/antd.css";
import NavbarPage from "../NavbarPage" 
import L from "../../assets/Logo.png"
import P1 from "../../assets/P1.jpg"
import P2 from "../../assets/P2.jpg"
import C1 from "../../assets/CEO1.jpg"
import C2 from "../../assets/CEO2.jpg"
import C3 from "../../assets/CEO3.jpg"
import Fade from 'react-reveal/Fade';
import "./aboutcss.scss"
//import "../index.css"

const { Header, Footer, Sider, Content } = Layout;


class About extends Component{
    render(){
         return (
            <Layout>
            <NavbarPage/>
                <Header style={{  zIndex: 1, width: '100%', height: '100px' }}></Header>
                    <Layout className="site-layout">
                        <Content >
                              <h2 className="title">About Us</h2>
                              <Row>
                                <img src= { L } className="logo-image"></img>
                                <p className="header-logo"><i>"Think Weird, Think Bizarre"</i></p>
                              </Row>
                            <Row>
                            <Divider className="divider" />
                  
                            <Row>
                                <Col span={12} className="col-image"><Fade><img src={ C2 } className="ceo-image"></img></Fade></Col>
                                <Col span={12}><Fade><p className="content-about"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                        </p></Fade></Col>
                            </Row>
                            <Divider className="divider" />
                  
                  <Row>
                      
                      <Col span={12}><Fade><p className="content-about-middle"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
              </p></Fade></Col>
              <Col span={12} className="col-image"><Fade><img src={ C1 } className="ceo-image"></img></Fade></Col>
                  </Row>
                
                            <Divider className="divider" />
                  
                  <Row>
                      <Col span={12} className="col-image"><Fade><img src={ C3 } className="ceo-image"></img></Fade></Col>
                      <Col span={12}><Fade><p className="content-about"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
              </p></Fade></Col>
                  </Row>
                
                  <Divider className="divider" />



                            
                                <p className="content-about">This is a responsive fixed navbar animated on scroll. I took inspiration from  ABDO STEIF (<a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">https://codepen.io/abdosteif/pen/bRoyMb?editors=1100</a>)
                    and Dicson <a href="https://codepen.io/dicson/pen/waKPgQ">(https://codepen.io/dicson/pen/waKPgQ)</a></p>
                          
                            </Row>
                            <Row>
                                <p className="content-about"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam</p>
                                <img src={ P1 } className="profile-image"></img>
                                <img src={ P2 } className="profile-image"></img>
                            </Row>
                        </Content>
                    </Layout>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default About;
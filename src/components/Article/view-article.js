import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Pagination, Col, Row, Layout, } from "antd";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import "antd/dist/antd.css";
import Grid from '@material-ui/core/Grid';
import NavbarPage from "../NavbarPage" ;
import './articlecss.scss';

const { Header, Footer, Sider, Content } = Layout;

// Start App

class ViewArticle extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      minValue: 0,
      maxValue: 9,
      collapsed: false,
    };
  }


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * 9,
      maxValue: value * 9
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/article/')
      .then(res => {
        this.setState(() =>({
          posts: res.data,
      }))
      console.log(res.data.length);
    })
              
      .catch((error) => {
        console.log(error);
      })
  }
 

  render() {
    const { collapsed } = this.state;

    return (
      <Layout>
        <NavbarPage/>
        <Header style={{  zIndex: 1, width: '100%', height: '100px' }}></Header>

        <Layout className="site-layout">
          <Content >
            <div className="app-card-list tes" id="app-card-list">
            
            <Row justify="center"> 
              {
                this.state.posts &&
                this.state.posts.length > 0 &&
                this.state.posts.slice(this.state.minValue, this.state.maxValue).map((val, idx) => {
                  if((idx) % 3 === 0){
                    return[
                      <Col>
                        <article className="card" >
                          <CardHeader category={val.category} image={"http://localhost:8000/images/" + val.image}/>
                          <CardBody title={val.title} text={val.text} id={val.id} category={val.category}/>
                        </article>
                      </Col>,  
                  ];
                  }else{
                    return(
                      <Col>
                      <article className="card" >
                          <CardHeader category={val.category} image={"http://localhost:8000/images/" + val.image}/>
                          <CardBody title={val.title} text={val.text} id={val.id} category={val.category}/>
                        </article>
                        </Col>
                      );
                  }
                })
              }
              </Row>

              <Pagination 
                style={{
                  margin: '5px',
                }}
                
                responsive
                defaultCurrent={1}
                defaultPageSize={9}
                onChange={this.handleChange}
                total={this.state.posts.length}/>
            </div>
            </Content>
            
            <Sider
              className="ic"
              style={{
                overflow: 'auto',
              }}
              
              breakpoint="md"
              collapsedWidth="0"
              
              onBreakpoint={broken => {
                console.log(broken);
              }}

              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}>
                
              </Sider>
          </Layout>
      
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    )
  }
}


class Title extends Component {
  render() {
    return <div className="app-title-content">
        <h1>Latest News</h1>
        <p>Covering March & April 2015</p>
        
      </div>
    
  }
}


class Button extends Component {
  render() {
    return (
      <Link to={"/artdetail/"+this.props.id}>
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      </Link>
    )
  }
}


class CardHeader extends Component {
  render() {
    const { image, category } = this.props;
    console.log(this.props.image);
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    console.log(image);
    return (
      <header style={style} className="card-header">
        
      </header>
    )
  }
}


class CardBody extends Component {
  render() {
    const storedState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(this.props.text))
    );
    let title = this.props.title;
    if(this.props.title.split(" ").length > 20){
      title = this.props.title.split(" ").splice(0,4).join(" ");
    }
    
    return (
      <Link to={"/artdetail/"+this.props.id}>
<div className="card-body">
        <div className="con1">
          <Row gutter={[8,8]}>
            <Col span={12}><p className="date">March 20 2015</p></Col>
            <Col span={12}><p className="date" style={{textAlign: 'right'}}>{this.props.category}</p></Col>
          </Row>
          <hr ></hr> 
          <p className="fonttes">{this.props.title}</p>
        </div>
          <div className="con2">
            <Button id={this.props.id}/>
          </div>


        {/* <p className="body-content">{a}</p> */}


      </div>
      </Link>
    )
  }
}
export default ViewArticle;
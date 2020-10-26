import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";

import "./articlecss.scss";

import { Card, Pagination } from "antd";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { object } from "prop-types";
import  NavbarPage from "../NavbarPage";
import { Layout } from 'antd';
import {stateToHTML} from 'draft-js-export-html';

const { Header, Footer, Sider, Content } = Layout;


//Temporarily store data here

// Start App

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      text: EditorState.createEmpty(),
      text2: '{"blocks":[{"key":"eajl0","text":"qdwwqdqwddwq","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'
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
    axios
      .get("http://localhost:8000/api/article/" + this.props.match.params.id)
      .then((res) => {
        this.setState(() => ({
            post: res.data,
            text: EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.text))),
        }));
        console.log(res.data.text);
        console.log(this.state.post.image);
        console.log(this.state.text);
      })

      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    var image = "http://localhost:8000/images/" + this.state.post.image;
    const { collapsed } = this.state;
    //const { height , src , width } = this.state.text.getEntity('image').getData();
    return (
    <Layout>
      <NavbarPage/>
      <Header style={{  zIndex: 1, width: '100%', height: '100px' }}></Header>
      <Layout className="site-layout">
        <Content>
          <img src={image} alt="imaged-view"/>
          <h2>Category: {this.state.post.category}</h2>
          <Editor editorState={this.state.text} readOnly={true}/>
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
    );
  }
}

/*class Title extends React.Component {
  render() {
    return (
      <section className="app-title">
        <div className="app-title-content">
          <h1 style={{ color: "white" }}>Latest News</h1>
          <p style={{ color: "white" }}>Covering March & April 2015</p>
          <a
            className="designer-link"
            href="https://dribbble.com/shots/1978243-Latest-News"
            target="_blank"
          >
            Design from <i className="fa fa-dribbble"></i>
          </a>
        </div>
      </section>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardHeader extends Component {
  render() {
    const { image, category } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    );
  }
}

      function findImageEntities(contentBlock, callback, contentState) {
        contentBlock.findEntityRanges(
          (character) => {
            const entityKey = character.getEntity();
            return (
              entityKey !== null &&
              contentState.getEntity(entityKey).getType() === 'IMAGE'
            );
          },
          callback
        );
      }
class CardBody extends Component {
  render() {

    const contentState = convertFromRaw(this.props.text);
    const editorState = EditorState.createWithContent(contentState);
    //harusnya cuma convertToHTML terus render HTML nya, gaperlu parse manual
    // const storedState = EditorState.createWithContent(
    //   draftToHtml(JSON.parse(this.props.text))
    // );
    // <textarea
    //     readOnly
    //     className="rdw-storybook-textarea"
    //     value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
    //   />
    return (
      <div className="card-body">
        <p className="date">March 20 2015</p>
        {/* this date }

        <h2>{this.props.title}</h2>

          <Editor editorState={editorState} readOnly={true} />
      {/* <p className="body-content">{this.props.post.text}</p> }
      </div>
    );
  }
}

class Cardd extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader
          category={this.props.details.category}
          image={this.props.details.image}
        />
        <CardBody
          title={this.props.details.title}
          text={this.props.details.text}
        />
      </article>
    );
  }
}*/

export default Main;

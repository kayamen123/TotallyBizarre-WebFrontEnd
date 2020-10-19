import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";

import "./articlecss.scss";

import { Card, Pagination } from "antd";
import { Editor, EditorState, convertFromRaw ,RawDraftContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { object } from "prop-types";

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

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/article/" + this.props.match.params.id)
      .then((res) => {
        this.setState(() => ({
            post: res.data,
            text: EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.text))),
        }));
        console.log(res.data.text);
        console.log(this.state.post);
        console.log(this.state.text);
      })

      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="tes">
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">

                <div className="row"></div>,
                <article className="card">
                  <CardHeader
                    category={this.state.post.category}
                    image={"http://localhost:8000/images/" + this.state.post.image}
                  />
                        <div className="card-body">
                        <p className="date">March 20 2015</p>
                        {/* this date */}

                        <h2>{this.props.title}</h2>

                          <Editor editorState={this.state.text} readOnly={true} />
                      {/* <p className="body-content">{JSON.stringify(this.state.text)}</p> */}
                      </div>
                </article>
                     
        </div>
      </div>
    );
  }
}

class Title extends React.Component {
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
        {/* this date */}

        <h2>{this.props.title}</h2>

          <Editor editorState={editorState} readOnly={true} />
      {/* <p className="body-content">{this.props.post.text}</p> */}
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
}

export default Main;

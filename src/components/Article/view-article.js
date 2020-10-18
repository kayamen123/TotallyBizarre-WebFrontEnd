import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";

import "./articlecss.scss";

import { Card, Pagination } from "antd";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

//Temporarily store data here
const PostsData = [
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEMEasd",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyleasd",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },

  {
    category: "Development",
    title: "React and the WP-API11asd",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME11",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle11",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API11",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME11",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },

  {
    category: "Travel",
    title: "Nomad Lifestyle22",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API22",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },

  {
    category: "News",
    title: "CNN Acquire BEME22",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle22",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API22",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME33",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle33",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
];

// Start App

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      minValue: 0,
      maxValue: 9,
    };
  }
  handleChange = (value) => {
    this.setState({
      minValue: (value - 1) * 9,
      maxValue: value * 9,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/article/")
      .then((res) => {
        this.setState(() => ({
          posts: res.data,
        }));
        console.log(res.data.length);
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
          {
            this.state.posts &&
              this.state.posts.length > 0 &&
              this.state.posts
                .slice(this.state.minValue, this.state.maxValue)
                .map((val, idx) => {
                  if (idx % 3 == 0) {
                    return [
                      <div className="row"></div>,
                      <article className="card">
                        <CardHeader
                          category={val.category}
                          image={"http://localhost:8000/images/" + val.image}
                        />
                        <CardBody title={val.title} text={val.text} />
                      </article>,
                    ];
                  } else {
                    return (
                      <article className="card">
                        <CardHeader
                          category={val.category}
                          image={"http://localhost:8000/images/" + val.image}
                        />
                        <CardBody title={val.title} text={val.text} />
                      </article>
                    );
                  }
                })
            // Object
            // .keys(this.state.posts)
            // .map(key => <Cardd key={key} index={key} details={this.state.posts[key]}/>)
          }
          <Pagination
            defaultCurrent={1}
            defaultPageSize={9}
            onChange={this.handleChange}
            total={this.state.posts.length}
          />
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

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardHeader extends React.Component {
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

class CardBody extends React.Component {
  render() {
    const storedState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(this.props.text))
    );
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

        <Editor editorState={storedState} readOnly={true} />
        {/* <p className="body-content">{this.props.text}</p> */}

        <Button />
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

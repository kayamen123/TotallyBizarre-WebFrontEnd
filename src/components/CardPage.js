//Temporarily store data here
import React, { Component } from "react";
import "./Card.scss"


const PostsData = [
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    }
  ]
  
  
  // Start App
  
  class Main extends Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  export default Main;
  
  class Title extends Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1>Latest News</h1>
          <p>Covering March & April 2015</p>
          <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
        </div>
      </section>
    }
  }
  
  
  class Button extends Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
  
  class CardHeader extends Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
// import FroalaEditorComponent from "react-froala-wysiwyg";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      title: "",
      text: EditorState.createEmpty(),
      image: "",
      url: "",
      img: "",
      upl: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    // this.onChange3 = (text) => this.setState({ text });
    this.onChange4 = this.onChange4.bind(this);

    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
  }

  onChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.setState({
      url: URL.createObjectURL(e.target.files[0]),
      img: e.target.files[0],
      upl: true,
    });

    this.createImage(files[0]);
  }
  createImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        image: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  }

  onChange1(e) {
    this.setState({ category: e.target.value });
  }

  onChange2(e) {
    this.setState({ title: e.target.value });
  }

  onChange3(text) {
    this.setState({ text });
  }

  onEditorStateChange = (text) => {
    this.setState({
      text,
    });
  };

  onChange4(e) {
    this.setState({
      url: URL.createObjectURL(e.target.files[0]),
      image: e.target.files[0],
      upl: true,
    });
  }

  uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader(
        "Authorization",
        "Bearer 4cf3528e120c94429a36f4dbc34ef6202d918254"
      );
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
        console.log(response.data.link);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  onSubmitButton(e) {
    e.preventDefault();
    const artic = {
      category: this.state.category,
      title: this.state.title,
      text: JSON.stringify(convertToRaw(this.state.text.getCurrentContent())),
      image: this.state.image,
    };

    axios
      .post("http://localhost:8000/api/article/", artic)
      .then((res) => console.log(res.data))
      .catch(function (error) {
        console.log(error.response.data);
        // console.log(this.state.text);
      });

    this.setState({
      category: "",
      title: "",
      text: EditorState.createEmpty(),
      image: "",
      url: "",
      upl: false,
    });
  }

  componentDidMount() {}

  render() {
    const { text } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="cardForm">
              {/* ^ editor css */}
              <div className="card-body">
                <form onSubmit={this.onSubmitButton}>
                  <strong>title:</strong>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange2}
                  />

                  <strong>category:</strong>
                  <textarea
                    className="form-control"
                    value={this.state.category}
                    onChange={this.onChange1}
                  ></textarea>

                  <strong>text:</strong>
                  <Editor
                    editorState={this.state.text}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="form-control"
                    // onEditorStateChange={this.onChange3}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: this.uploadImageCallBack,
                        alt: { present: true, mandatory: false },
                      },
                    }}
                  />

                  <strong>image:</strong>
                  <input type="file" onChange={this.onChange} />
                  <div>
                    {this.state.upl ? (
                      <img src={this.state.url} className="imgPrev" />
                    ) : (
                      <p>Input Image</p>
                    )}
                  </div>

                  {/* <textarea className="form-control" value={this.state.image} onChange={this.onChange4}></textarea> */}

                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Example;

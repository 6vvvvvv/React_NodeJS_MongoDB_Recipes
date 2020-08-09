import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

const Myspace = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgpath, setImgpath] = useState("");
  const [author, setAuthor] = useState("");
  const [saveSuccess, setsaveSuccess] = useState(false);

  useEffect(() => {
    if (!localStorage.length) {
      return props.history.push("/user/login");
    }

    var userinfo = JSON.parse(localStorage.getItem("user"));
    var token = userinfo.token;

    axios
      .get("http://localhost:4000/user/me", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        if (res.data.user) {
          props.history.push("/user/me");
        }
      })
      .catch((error) => {
        console.error(error);
        return props.history.push("/user/login");
      });
  }, [props.history]);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const ImgpathChange = (e) => {
    setImgpath(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const setEmpty = () => {
    setImgpath("");
    setDescription("");
    setTitle("");
    setAuthor("");
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/me/post", {
        title: title,
        description: description,
        imgpath: imgpath,
        author: author,
      })
      .then((res) => {
        console.log(res);
        setsaveSuccess(true);

        setEmpty();
        setTimeout(() => setsaveSuccess(false), 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row">
        {" "}
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="title"
          name="title"
          value={title}
          onChange={titleChange}
        />
      </div>
      <div className="row">
        <label htmlFor="description">description</label>
        <input
          id="description"
          type="text"
          className="description"
          name="description"
          value={description}
          onChange={descriptionChange}
        />
      </div>
      <div className="row">
        <label htmlFor="imgpath">Imgpath</label>
        <input
          id="imgpath"
          type="text"
          className="imgpath"
          name="imgpath"
          value={imgpath}
          onChange={ImgpathChange}
        />
      </div>
      <div className="row">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          className="author"
          name="author"
          value={author}
          onChange={authorChange}
        />
      </div>
      <div className="row">
        <button
          className="btn waves-effect waves-light pink"
          name="action"
          onClick={submit}
        >
          Submit
          <i className="material-icons right"></i>
        </button>
        <div className="row">
          <Link to="/">return to frontpage</Link>
        </div>
      </div>
      {saveSuccess && (
        <div className="row">you have successfully save the data</div>
      )}
    </div>
  );
};

export default withRouter(Myspace);

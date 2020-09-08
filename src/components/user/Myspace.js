import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import "../../static/css/Myspace.css";
import ImageUploader from "react-images-upload";

const Myspace = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgpath, setImgpath] = useState("");
  const [author, setAuthor] = useState("");
  const [saveSuccess, setsaveSuccess] = useState(false);
  const [imgGroup, setImgGroup] = useState([]);

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

  const onDrop = (pic) => {
    setImgGroup(imgGroup.concat(pic));
  };

  return (
    <div className="container ">
      <div className="my-space">
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
          <label htmlFor="description">Description</label>
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
          <label htmlFor="updaload">Upload</label>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            withPreview={true}
          />
        </div>

        <div className="row sub-btn">
          <button
            className="btn waves-effect waves-light pink "
            name="action"
            onClick={submit}
          >
            Submit
            <i className="material-icons right"></i>
          </button>
          <span className="sub-btn-text">
            {" "}
            <Link to="/">
              <i class="fas fa-undo-alt"></i>
            </Link>
          </span>
        </div>
        {saveSuccess && (
          <div className="row">you have successfully save the data</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Myspace);

import React from "react";
import { useNavigate } from "react-router";
import("./Post.css");

const Post = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="card max-width pointer mb-3"
      onClick={() => navigate(`detail-post/${props.data.id}`)}
    >
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://placeimg.com/350/350/tech"
            alt="Dummy 1"
            className="img-fluid rounded-start card-img"
          />
        </div>
        <div className="col-md-8 card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.body}</p>
          <button
            className="btn btn-warning me-3"
            onClick={(e) => props.update(props.data, e)}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => props.remove(props.data.id, e)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

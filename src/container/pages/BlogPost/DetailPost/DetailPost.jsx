import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPost = () => {
  const [post, setState] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3004/posts/${id}`)
      .then((res) => setState(res.data));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <p className="h4 text-primary">{post.title}</p>
        <p className="text-muted">{post.body}</p>
      </div>
    </Fragment>
  );
};

export default DetailPost;

import { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import API from "../../../services";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    comments: [],
  };

  postDataToAPI = () => {
    API.postNewBlog(this.state.formBlogPost).then(() => {
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  getPostAPI = () => {
    API.getNewBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
    API.getComments().then((result) => {
      this.setState({
        comments: result,
      });
    });
  };

  putDataToAPI = () => {
    API.updateNewBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(
      () => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
          isUpdate: false,
        });
      }
    );
  };

  handleRemove = (data, e) => {
    e.stopPropagation();
    API.deleteNewBlog(data).then(() => {
      this.getPostAPI();
    });
  };

  handleUpdate = (data, e) => {
    e.stopPropagation();
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    const formBlogPostNew = { ...this.state.formBlogPost };
    const timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    }
    this.postDataToAPI();
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="h4">Form</div>
          <hr />
          <div className="max-width mb-5 card p-3">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Add title"
                onChange={this.handleFormChange}
                value={this.state.formBlogPost.title}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Blog content</label>
              <textarea
                className="form-control"
                name="body"
                id="body"
                rows="3"
                placeholder="Add blog content"
                onChange={this.handleFormChange}
                value={this.state.formBlogPost.body}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary col-3"
              onClick={this.handleSubmit}
            >
              Simpan
            </button>
          </div>
          <div className="h4">Blog</div>
          <hr />
          {this.state.post.map((post) => {
            return (
              <Post
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
              />
            );
          })}
          <div className="h4 mt-5">Comment</div>
          <hr />
          {this.state.comments.map((comment) => {
            return (
              <p key={comment.id}>
                {comment.name} - {comment.email}
              </p>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;

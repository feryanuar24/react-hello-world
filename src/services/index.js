import Post from "./Post";
import Get from "./Get";
import Put from "./Put";
import Delete from "./Delete";

const postNewBlog = (data) => Post("posts", false, data);
const getNewBlog = () => Get("posts?_sort=id&_order=desc", false);
const updateNewBlog = (data, id) => Put(`posts/${id}`, false, data);
const deleteNewBlog = (data) => Delete(`posts/${data}`, false);
const getComments = () => Get("comments", true);

const API = {
  postNewBlog,
  getNewBlog,
  updateNewBlog,
  deleteNewBlog,
  getComments,
};

export default API;

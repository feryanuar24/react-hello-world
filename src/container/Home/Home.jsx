import { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Product from "../pages/Product/Product";
import LifecycleComp from "../pages/LifecycleComp/LifecycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Hooks from "../pages/Hooks/Hooks";

class Home extends Component {
  state = {
    showComponent: true,
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className=" bg-dark p-3 mb-3">
            <div className="container">
              <Link to="/" className="btn btn-primary me-3">
                Home
              </Link>
              <Link to="/product" className="btn btn-primary me-3">
                Product
              </Link>
              <Link to="/lifecycle" className="btn btn-primary me-3">
                LifeCycle
              </Link>
              <Link to="/youtube-component" className="btn btn-primary me-3">
                Youtube
              </Link>
              <Link to="/hooks" className="btn btn-primary me-3">
                Hooks
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/detail-post/:id" element={<DetailPost />} />
            <Route path="/product" element={<Product />} />
            <Route path="/lifecycle" element={<LifecycleComp />} />
            <Route path="/youtube-component" element={<YoutubeCompPage />} />
            <Route path="/hooks" element={<Hooks />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;

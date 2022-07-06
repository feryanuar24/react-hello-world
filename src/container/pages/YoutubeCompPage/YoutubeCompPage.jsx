import { Component, Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="h4">YouTube</div>
          <hr />
          <div className="d-flex flex-inline mb-5">
            <YoutubeComp title="Tutorial ReactJS #1" desc="Simple component" />
            <YoutubeComp
              title="Tutorial ReactJS #2"
              desc="Add react to exiting project"
            />
            <YoutubeComp title="Tutorial ReactJS #3" desc="Create react app" />
            <YoutubeComp
              title="Tutorial ReactJS #4"
              desc="StateLess StateFul"
            />
            <YoutubeComp title="Tutorial ReactJS #5" desc="Dynamic component" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default YoutubeCompPage;

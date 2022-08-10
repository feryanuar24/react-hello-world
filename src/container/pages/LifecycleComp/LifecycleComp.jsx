import { Component } from "react";
import { connect } from "react-redux";

class LifecyleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="h4">LifeCycle</div>
        <hr />
        <button className="btn btn-primary" onClick={this.changeCount}>
          Commponent Button {this.state.count}
        </button>
        <div className="h4 mt-5">Order</div>
        <hr />
        <p>Total order: {this.props.order}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { order: state.totalOrder };
};

export default connect(mapStateToProps)(LifecyleComp);

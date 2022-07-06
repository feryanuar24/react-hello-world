import { Component } from "react";
import { connect } from "react-redux/es/exports";

class Counter extends Component {
  render() {
    return (
      <div>
        <div
          className="me-3 btn btn-dark d-flex-inline"
          onClick={this.props.handleMinus}
        >
          -
        </div>
        <input
          type="text"
          name="counter2"
          id="counter2"
          value={this.props.order}
          onChange={(newValue) => this.handleCounterChange(newValue)}
          className="h5 text-center col-md-2 pb-2"
        />
        <div
          className="ms-3 btn btn-dark counter2 d-flex-inline"
          onClick={this.props.handlePlus}
        >
          +
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { order: state.totalOrder };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
    handleMinus: () => dispatch({ type: "MINUS_ORDER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

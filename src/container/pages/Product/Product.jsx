import { Component, Fragment } from "react";
import CardProduct from "../../CardProduct/CardProduct";
import { connect } from "react-redux/es/exports";

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="h4">Product</div>
          <hr />
          <div className="row">
            <div className="col h1 mb-5">GoResto</div>
            <div className="col">
              <button
                type="button"
                className="btn btn-dark position-relative float-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  fill="currentColor"
                  className="bi bi-cart-fill position-relative"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {this.props.order}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          </div>
          <CardProduct />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { order: state.totalOrder };
};

export default connect(mapStateToProps)(Product);

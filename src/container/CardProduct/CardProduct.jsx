import { Component } from "react";
import Produk from "./mie-tiaw.jpg";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <img
              src={Produk}
              alt="Mie Tiaw"
              width={290}
              className="card mb-3"
            />
          </div>
        </div>
        <div className="row">
          <div className="col h5">Mie Tiaw</div>
        </div>
        <div className="row">
          <div className="col text-muted mb-3">Rp 20,000</div>
        </div>
        <Counter />
      </div>
    );
  }
}

export default CardProduct;

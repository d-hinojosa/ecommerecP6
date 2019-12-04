import React from "../../../node_modules/react";
import ProductsHeader from "./ProductsHeader";

// const productsEndpoint = "/products";

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: false
    };
  }

  fetchData = async () => {
    let data = await fetch("/products")
    const jsonData = await data.json()
    this.setState({products: jsonData})
  }

  async componentDidMount() {
    this.fetchData()
  }

  render() {
    const mappedProducts = this.state.products.map((product, index) => {
      return (
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img
              id={index}
              src={product.product_image}
              alt={product.product_description}
            />
            <div className="card-body">
              <p className="card-text font-weight-bold lead">
                {product.product_name}
              </p>
              <p className="card-text">{product.product_description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Buy
                  </button>
                </div>
                <large className="text-muted font-weight-bold lead">
                  ${product.product_price}
                </large>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      // Products
      <div>
          <ProductsHeader/>
        <select onChange={this.handleFilter}>
          <option value="Necklaces">Necklaces</option>
          <option value="Rings">Rings</option>
          <option value="Watches">Watches</option>
        </select>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">{mappedProducts}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

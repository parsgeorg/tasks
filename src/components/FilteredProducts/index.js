import React from "react";
import View from "./View";

class FilteredProducts extends React.Component {
  state = {
    products: []
  };

  setProducts = products => this.setState({ products });

  filterProducts = value => {
    value = value.trim();

    if (value === "") return this.setProducts(this.props.products);

    const filteredProducts = this.props.products.filter(
      product =>
        product.username.indexOf(value) !== -1 ||
        product.email.indexOf(value) !== -1 ||
        product.text.indexOf(value) !== -1
    );

    this.setProducts(filteredProducts);
  };

  onEnter = ({ keyCode, currentTarget: { value } }) =>
    keyCode === 13 && this.filterProducts(value);

  render() {
    return (
      <div>
        <View products={this.props.products} />
      </div>
    );
  }
}

export default FilteredProducts;

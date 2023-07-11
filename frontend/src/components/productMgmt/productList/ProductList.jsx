import React from "react";
import "./ProductList.scss";
import SpinnerImg from "../../loader/Loader";
const ProductList = ({ products, isLoading }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");

      return shortenedText;
    }
    return text;
  };
  return (
    <div className="product-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Inventory Details</h3>
          </span>
          <span>
            <h3>Search</h3>
          </span>
        </div>
        {isLoading && <SpinnerImg />}
        <div className="table">
          {!isLoading && products && products.length === 0 ? (
            <p>No Product Found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Sn</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              {products && (
                <tbody>
                  {products.map((product, index) => {
                    const { _id, name, category, price, quantity } = product;
                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(name, 16)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

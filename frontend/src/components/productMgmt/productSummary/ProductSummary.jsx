import React, { useEffect } from "react";
import "./ProductSummary.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import StoreInfo from "../../storeInfo/StoreInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_STORE_VALUE,
  selectTotalStoreValue,
} from "../../../redux/features/product/productSlice";

// Icons
const earningIcon = <AiFillDollarCircle size={40} color="#fff" />;
const productIcon = <BsCart4 size={40} color="#fff" />;
const categoryIcon = <BiCategory size={40} color="#fff" />;
const outOfStockIcon = <BsCartX size={40} color="#fff" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue);

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
  }, [dispatch, products]);

  return (
    <div className="product-summary">
      <h3 className="--mt">Inventory Stats</h3>
      <div className="info-summary">
        <StoreInfo
          icon={productIcon}
          title={"Total Products"}
          count={products.length}
          bgColor="card1"
        />
        <StoreInfo
          icon={earningIcon}
          title={"Total Value"}
          count={`$ ${formatNumbers(totalStoreValue)}`}
          bgColor="card2"
        />
        <StoreInfo
          icon={outOfStockIcon}
          title={"Out Of Stock"}
          count={0}
          bgColor="card3"
        />
        <StoreInfo
          icon={categoryIcon}
          title={"All Categories"}
          count={0}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default ProductSummary;

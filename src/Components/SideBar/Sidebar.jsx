// import React from 'react'
import "./sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.png";
import list_product_icon from "../../assets/Product_List.png";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            style={{ width: "30px" }}
            src={add_product_icon}
            alt="Cart-icon"
          />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            style={{ width: "30px" }}
            src={list_product_icon}
            alt="Cart-icon"
          />
          <p>Product List</p>
        </div>
      </Link>

    </div>
  );
};

export default Sidebar;

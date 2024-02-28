// import React from 'react'
import "./addproduct.css";
import uploadImgLogo from "../../assets/Upload_img_logo.png";
import { useState } from "react";

const AddProduct = () => {
  // LOGIC FOR ADDING A IMAGE TO THE DATABASE GOES HERE
  const [image, setImage] = useState(false);
  // LOGIC FOR GETTING THE DATA OF THE PRODUCT FROM USER INPUT FIELDS
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  // FUCTION FOR ADDING THE IMG'S
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // FUCTION FOR INPUT FIELDS
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch('https://ecombackend-gyea.onrender.com/upload', {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('https://ecombackend-gyea.onrender.com/addproduct',{
        method:'POST',
        headers:{
          Accept: 'applicatipn/json',
          "Content-Type": "application/json"
        },
        body : JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success ? alert("Product Added") : alert("Failed!")
      })
    }
  };

  return (
    <div className="AddProduct">
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>

        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="number"
              name="old_price"
              placeholder="Type Here"
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="number"
              name="new_price"
              placeholder="Type Here"
            />
          </div>
        </div>

        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="add-product-selector"
          >
            <option >Select</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
          </select>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : uploadImgLogo}
              className="addproduct-thumnail-img"
              alt=""
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button
          onClick={() => {
            Add_Product();
          }}
          className="addproduct-btn"
        >
          Upload Photo
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

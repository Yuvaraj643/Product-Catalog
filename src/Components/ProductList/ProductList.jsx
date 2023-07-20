import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RatingStars from "./RatingStar/RatingStar";
import "./style.css";
import { Carousel } from "react-bootstrap";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const carouselStyle = {
    height: '250px',
    borderRadius: '10px', 
    overflow: 'hidden', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const fetchProductData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="main">
        <h1>Explore All Products</h1>
        <input
          className="input"
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={handleChange}
          
        />
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {products &&
            products
              .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
              .map((product) => {
                return (
                  <div class="col">
                    <div class="card h-100">
                    <div style={carouselStyle}>
                      <Carousel>
                        {product.images.map((image, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={image}
                              alt={`Slide ${index + 1}`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <RatingStars rating={product.rating} />
                        <button type="button" class="btn btn-danger">
                          {" "}
                          Up to {product.discountPercentage}% off
                        </button>
                        <p class="card-text">{product.description}</p>
                        <a href="#" class="btn btn-primary">
                            ₹{product.price}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default ProductList;

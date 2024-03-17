import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

import Card from "react-bootstrap/Card";

function Product() {
  const [products, setProducts] = useState(null);

  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product) => {
    console.log(product, 'added')
    dispatch(add(product))
  }

  const cards = products?.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: "20px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "80px", height: "130px" }}
          />{" "}
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>{" "}
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <div className="text-center">
            <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row" style={{ margin: 0 }}>
        {cards}
      </div>
    </>
  );
}

export default Product;

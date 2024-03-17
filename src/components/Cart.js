import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch } from 'react-redux'
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeToCart = (id) => {
        dispatch(remove(id))
    }
    const cards = cartProducts?.map((product) => (
        <div className="col-md-12" key={product.id} style={{ marginBottom: "20px" }}>
            <Card className="h-100">
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ width: "80px", height: "130px" }}
                    />{" "}
                </div>
                <Card.Body className="text-center">
                    <Card.Title>{product.title}</Card.Title>{" "}
                    <Card.Text>INR: {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: "white" }}>
                    <div className="text-center">
                        <Button variant="danger" onClick={() => removeToCart(product.id)} >Remove item</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    ));
    return (
        <div className="row">
            {cards}
        </div>
    )
}

export default Cart

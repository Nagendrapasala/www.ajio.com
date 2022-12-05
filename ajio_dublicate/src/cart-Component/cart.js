import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "../store/action";
import "./cart.css"
import Quenatity from "../cart-Component/quantity-cart";



function Cart() {
    let dispatch = useDispatch();
    let [bagtotal, setTotal] = useState("0");
    let [totalprice, setPrice] = useState("0");
    let [cartData, setCartData] = useState(localStorage.getItem("cart"));
    console.log(cartData);
    // let cartData = useSelector((storedata) => { return storedata.cart })
    useEffect(() => {
        setTotal(0);
        setPrice(0);
        cartData.map((elem) => {
            setTotal((prev) => (parseInt(prev) + (parseInt(elem.strikedoffPrice) * parseInt(elem.Quantity))))
            setPrice((prev) => (parseInt(prev) + (parseInt(elem.price) * parseInt(elem.Quantity))))
        })
    }, [cartData])

    const deleteItem = (ind) => {
        deleteCartAction(cartData, dispatch, ind)
    }
    
    return (
        <div className="cart_parent_div">
            <div className="cart_parent_child_div">
                <p>My Bag <span>({cartData.length})</span></p>
                {cartData.map((e, ind) => {
                    return <div key={ind + 1} className="cart_child_div">
                        <img src={e.elem.image} alt={elem.title} />
                        <p className="cart_div_child_p">{e.elem.title}</p>
                        <div className="cart_child_child1_div"><Quenatity value={{ index: ind, quantity: e.elem.Quantity }} /> {e.elem.Quantity}</div>
                        <div className="cart_child_child_div">
                            <p>Savings : <span className="price_brown_class">Rs. {parseInt((e.elem.price) + ((e.elem.offer_percent)/100) * (e.elem.price)) - e.elem.price}</span></p>
                            <p className="price_brown_class_line">Rs. {e.elem.strikedoffPrice}</p><span className="price_brown_class"> ({Math.floor((e.elem.strikedoffPrice - e.elem.price) * 100 / e.elem.strikedoffPrice)}%)</span>
                            <p>Rs. {e.elem.price}.00</p>
                            <button onClick={() => deleteItem(ind)}>Delete</button>
                        </div>
                    </div>
                })}
            </div>
            <div className="total_price_parent_div">
                <h4>Order Details</h4>
                <p>Bag total <span className="span1">Rs. {bagtotal}</span></p>
                <p>Bag discount<span className="span2">-Rs. {bagtotal - totalprice}</span></p>
                <p>Delivery Fee<span className="span3">Free <span>Rs. 99.00</span></span></p>
                <h4>Order Total<span className="span4">Rs. {totalprice}</span></h4>
                <button>PROCEED TO SHIPPING</button>
            </div>
        </div >
    )
}

export default Cart;
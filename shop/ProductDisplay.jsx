import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const desc = "Enjoy your delicious and healthy snacks with our wonderful cooking.Have a bite with little more love to dive into the delicious world!!!"

const ProductDisplay = ({item}) => {
    console.log(item)
    const {name, id, price, seller, ratingsCount, quantity, img} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [colour, setColour] = useState("Select Colour");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    const handleColourChange = (e) => {
        setColour(e.target.value);
    }

    const handleDecrease = () => {
         if(prequantity > 1){
            setQuantity(prequantity - 1)
         }
    }

    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            colour: colour,
            coupon: coupon
        }
        // console.log(product)
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }

        // ipdate local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // reset form page
        setQuantity(1);
        setSize("Select Size");
        setColour("Select Colour");
        setCoupon("");
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span> {ratingsCount} review </span>

            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        {/* cart components */}
        <div>
            <form onSubmit={handleSubmit}>

                {/* size */}
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                        <option>XX Large</option>
                    </select>
                    <i className='icofont-rounded-down'></i>

                </div>

                {/* colour */}
                <div className='select-product colour'>
                    <select value={colour} onChange={handleColourChange}>
                        <option>Select Colour</option>
                        <option>Pink</option>
                        <option>Ash</option>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Black</option>
                    </select>
                    <i className='icofont-rounded-down'></i>

                </div>

                {/* cart plus minus */}
                <div className='cart-plus-minus'>
                    <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>

                </div>

                {/* coupon field */}
                <div className='discount-code mb-2'>
                    <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />

                </div>

                {/* btn sections */}
                <button type='submit' className='lab-btn'>
                     <span>Add to Cart</span>
                </button>
                <Link to="/cart-page" className='lab-btn bg-primary'>
                     <span>Check Out</span>
                </Link>
            </form>

        </div>
    </div>
  )
}

export default ProductDisplay
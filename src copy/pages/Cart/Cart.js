import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Listitem from "../../components/listItem/Listitem"
import "./Cart.css"
import CartItems from './CartItems';
import axios from 'axios';
function Cart() {

    const { setCart, cart, place, user } = useContext(ProductContext)
    const [data, setData] = useState([])

    console.log(cart);
    // console.log(cart);

    useEffect(() => {
        async function findDuplicateUsers() {
            const phoneNumberGroups = await cart.reduce((acc, user) => {
                if (!acc[user.id]) {
                    acc[user.id] = [];
                }
                acc[user.id].push(user);
                return acc;
            }, {});

            const duplicates = [];
            const singlebox = [];
            for (const phoneNumber in phoneNumberGroups) {
                if (phoneNumberGroups[phoneNumber].length > 1) {
                    duplicates.push(phoneNumberGroups[phoneNumber]);
                } else {
                    singlebox.push(phoneNumberGroups[phoneNumber]);
                }
            }

            return [...duplicates, ...singlebox];
        }

        findDuplicateUsers()
            .then(user => setData(user))
            .catch(error => console.log(error))
    }, []);


    const addOrder = async () => {
        const newObj = {
            ordernumber: 11,
            waitername: user.username,
            tablenumber: place,
            order: cart,
        }
        console.log(newObj)
        await axios.post("http://localhost:8000/order/create", newObj)
            .then(res => console.log(res))
            .catch(error => console.log(error))

    }



    return (
        <div className='cart'>
            <h1>{cart.length}</h1>
            <div className="cart_wrap">
                <h1>{place}</h1>
                {
                    data.map((item, index) => (
                        <CartItems key={index} item={item} />
                    ))
                }
            </div>
            <button onClick={() => addOrder()}>zakaz qilish11 </button>

        </div>
    )
}

export default Cart
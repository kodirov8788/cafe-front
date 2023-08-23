import React, { useEffect, useState } from 'react'
import './Issiq.css'
import img1 from "../../image/shopping-cart.png"

import { menu_items } from "../../Static_data"
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'
import { useContext } from 'react'
import Listitem from '../listItem/Listitem'



function Issiq() {

    const [data, setData] = useState([])
    // console.log(data);

    const { setCart, cart } = useContext(ProductContext)

    useEffect(() => {
        const getData = () => {
            let issiqIchimlik = menu_items.filter(drink => drink.category === "issiq ichimlik")
            setData(issiqIchimlik)
        }
        getData()
    }, [])

    return (
        <div className='Products'>
            <div className="issiq">
                <div className="icon">
                    <h1>Issiq ichimlik</h1>
                    {/* <img src={} alt="" /> */}
                </div>

                <ul>
                    {
                        data.map(item => (
                            <Listitem product={item} key={item.id} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Issiq
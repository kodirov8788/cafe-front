import React from 'react'
import './Menu.css'
function Menu() {
    return (
        <div className='Menu'>
            <div className="menu">
                <div className="">
                    <a href="/products/issiq">issiq ichimlik</a>
                </div>
                <div className="">
                    <a href="/products/gazlik">gazlik ichimlik</a>
                </div>
                <div className="">
                    <a href="/products/gazsiz">gazsiz ichimlik</a>
                </div>
                <div className="">
                    <a href="/products/taomlar">taomlar</a>
                </div>
            </div>
        </div>
    )
}

export default Menu
import { useEffect, useState } from "react";

import { createContext } from "react";

export const ProductContext = createContext()
export const ContextProvider = ({ children }) => {

    const [producttDate, setproducttDate] = useState('maxsulot')
    const [cart, setCart] = useState([])
    const [place, setPlace] = useState("")




    const [user, setUser] = useState({
        username: "Zilola11",
        name: "zilllola",
        role: "user",
        gender: "femele"
    })
    return <ProductContext.Provider value={{ producttDate, setproducttDate, cart, setCart, place, setPlace, user }}>{children}</ProductContext.Provider>
}
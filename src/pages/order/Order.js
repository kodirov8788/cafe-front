import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Order() {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {

        const getApi = async () => {
            await axios.get("http://localhost:8000/order/get")
                .then(res => setData(res.data))
                .catch(error => console.log(error))
        }
        getApi()
    }, [])

    return (
        <div>
            <h1>Order</h1>

            <div className="">
                {
                    data?.map((order, index) => (
                        <div className="">
                            <h1>{index + 1}</h1>
                            <li>{order.orders[0].tablenumber} va  {order.orders[0].waitername}</li>

                            {order.orders[0].order.map(order2 => (
                                <div className="">
                                    {order2.name}
                                </div>
                            ))}
                        </div>


                    ))
                }
            </div>
        </div>
    )
}

export default Order
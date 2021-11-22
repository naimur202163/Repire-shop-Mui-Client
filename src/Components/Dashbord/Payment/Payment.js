import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import useAuth from './../../../hooks/useAuth';


const Payment = () => {
    const { user } = useAuth()
    const { paymentId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/userProduct?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => setProducts(result))


    }, []);
    const order = products?.find(items => items._id === paymentId);
    console.log(order)

    return (
        <div>
            <h2>Payment Cooming {order.price} </h2>
            {/* <h2>Pya{order.price}</h2> */}
        </div>
    );
};

export default Payment;
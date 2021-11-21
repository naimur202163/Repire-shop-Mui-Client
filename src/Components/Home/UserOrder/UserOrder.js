import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const UserOrder = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const { user } = useAuth()
    useEffect(() => {
        const url = `http://localhost:5000/userProduct?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => console.log(result))


    }, [isDelete]);



    // Delet 
    const handleDeleteProduct = (id) => {
        console.log(id);

        fetch(`https://pure-garden-91979.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                    alert('Do You want to Delet it')
                } else {
                    setIsDelete(false);
                }
            });
    };





    return (
        <div>
            <h2>This is User Order</h2>
            {/* <Button onClick={() => handleDeleteProduct(product._id)} >This is Delet</Button> */}
        </div>
    );
};

export default UserOrder;
import React from 'react';
import { Button } from '@mui/material';

const UserOrder = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const { user } = useAuth()
    useEffect(() => {
        const url = `http://localhost:5000/userProducts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => setProducts(result))


    }, [isDelete]);


    console.log(products)

    const handleDeleteProduct = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/deleteProduct/${id}`, {
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
            <Button onClick={() => handleDeleteProduct(product._id)} >This is Delet</Button>
        </div>
    );
};

export default UserOrder;
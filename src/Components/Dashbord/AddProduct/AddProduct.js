// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';

// const AddProduct = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [image, setImage] = useState(null);
//     const [success, setSuccess] = useState(false);

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!image) {
//             return;
//         }
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('image', image);

//         fetch('https://stark-caverns-04377.herokuapp.com/doctors', {
//             method: 'POST',
//             body: formData
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     setSuccess('Doctor added successfully')
//                     console.log('doctor added successfully')
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     }
//     return (
//         <div>
//             <h2>this is Products</h2>
//             <form>
//                 <TextField
//                     sx={{ width: '50%' }}
//                     label="Name"
//                     required
//                     onChange={e => setName(e.target.value)}
//                     variant="standard" />
//                 <br />
//                 <TextField
//                     sx={{ width: '50%' }}
//                     label="Email"
//                     type="email"
//                     required
//                     onChange={e => setEmail(e.target.value)}
//                     variant="standard" />
//                 <br />
//                 <Input
//                     accept="image/*"
//                     type="file"
//                     onChange={e => setImage(e.target.files[0])}
//                 />
//                 <br />
//                 <Button variant="contained" type="submit">
//                     Add Doctor
//                 </Button>
//             </form>
//             {success && <p style={{ color: 'green' }}>{success}</p>}
//         </div>
//     );
// };

// export default AddProduct;
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproduct, readproduct, updateproduct } from '../features/productSlice';

import Header from './Header';
import { NavLink } from 'react-router';





function Product() {

    const { products, loading } = useSelector((data) => data.product)

    //    console.log(loading);
    //    console.log(products);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readproduct())
    }, [])

    const [editId, setEditId] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img,setimg]=useState("");
    const [productDetails,setproductDetails] =useState("");

    const update = () => {
        dispatch(updateproduct({ id: editId, name, price,img,productDetails}))
        setEditId(null)
        setName("")
        setPrice("")
        setimg("")
        setproductDetails("")
    }

    return (
        <div>
            <Header />

            <h1 className='text-center mb-5'> Product data show</h1>
            <div className="container">
           <div className="row ">
            <div className="col-12 col-md-6  p-4"><NavLink to="/product" className="border p-2 bg-primary text-light text-decoration-none rounded-3">Product</NavLink> </div>
            <div className="col-12 col-md-6  p-4 text-end "><NavLink to="/addproduct" className="border p-2 bg-success text-light text-decoration-none rounded-3"> Add Product</NavLink></div>
           </div>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Id</th>
                            <th scope="col">Img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Details</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((data, index) => {
                                return (
                                    <tr className='text-center'>
                                        <td>{data.id}</td>
                                        <td ><img src={data.img} alt="" width="100%" height="100%" /></td>
                                        <td className=' p-5'>{data.name}</td>
                                        <td className=' p-5'>{data.productDetails}</td>
                                        <td className=' p-5'>{data.price}</td>
                                        <td className=' p-5'>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-1 mt-2 mb-2' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                 onClick={() => { setEditId(data.id); setName(data.name); setPrice(data.price); setimg(data.img); setproductDetails(data.productDetails); }}
                                            >Edit</button>
                                            <button className='btn btn-danger' onClick={() => dispatch(deleteproduct(data.id)).then(() => dispatch(readproduct()))}>Delete</button>
                                        </td>
                                    </tr>
                                    
                                )
                            })
                        }


                    </tbody>
                </table>
                {editId &&  (
                <div className="modal" tabIndex={-1} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center">Update Product </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                              
                                    <div className="mb-3">
                                        <input
                                            className="form-control mb-2"
                                            value={name} type='name'
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Product Name"
                                        />
                                        <input
                                            className="form-control mb-2"
                                            value={img} type='url'
                                            onChange={(e) => setimg(e.target.value)}
                                            placeholder="Product img"
                                        />
                                        <input
                                            className="form-control mb-2"
                                            value={productDetails} type='text'
                                            onChange={(e) =>setproductDetails(e.target.value)}
                                            placeholder="Product Details "
                                        />

                                        <input
                                            className="form-control mb-2"
                                            value={price} type='price'
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="Product Price"
                                        />                                        
                                    </div>
                             
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal"  onClick={update}>Update Product</button>
                            </div>
                        </div>
                    </div>
                </div>
   )}
              

            </div>
        </div>
    )
}

export default Product

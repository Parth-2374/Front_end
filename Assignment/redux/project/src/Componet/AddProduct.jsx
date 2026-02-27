import React, { useState } from 'react'
import Header from './Header'
import { NavLink, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addproduct } from '../features/productSlice'

function AddProduct() {

    const [add, setadd] = useState({
        id: "",
        name: "",
        productDetails: "",
        price: "",
        img: ""
    })

    const change = (e) => {
        setadd({
            ...add,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        dispatch(addproduct(add))
        redirect("/product")
        setadd({
            id: "",
            name: "",
            productDetails: "",
            price: "",
            img: ""
        })
    }
    return (
        <div>
            <Header />
            <h1 className='text-center'> Add Product</h1>
           <div className="container">
           <div className="row  ">
                <div className="col-12 col-md-6  p-4"><NavLink to="/product" className="border p-2 bg-primary text-light text-decoration-none rounded-3">Product</NavLink> </div>
                <div className="col-12 col-md-6  p-4 text-end "><NavLink to="/addproduct" className="border p-2 bg-success text-light text-decoration-none rounded-3"> Add Product</NavLink></div>
            </div>
           </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto mt-3">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input name='name' type="text" className="form-control" value={add.name} onChange={change} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product details</label>
                                <input name='productDetails' type="text" className="form-control" value={add.productDetails} onChange={change} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input name='price' type="text" className="form-control" value={add.price} onChange={change} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">img - url</label>
                                <input name='img' type="url" className="form-control" value={add.img} onChange={change} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct

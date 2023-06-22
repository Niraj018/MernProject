import React, { useState } from 'react'
import ProductForm from '../../components/productForm/ProductForm';

const initialState = {
  name: "",
  category: "",
  quantity: "",
  prrice: "",
}

const AddProduct = () => {

  const [products,setProducts] = useState(initialState)
  const [productImage,setProductImage] = useState("")
  const [imagePreview, setImagePreview] = useState(null)
  const [description, setDescription] = useState("")


  return (
    <div>
      <h3 className='--mt'>Add New Product</h3>
      <ProductForm/>
    </div>
  )
}

export default AddProduct
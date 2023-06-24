import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./ProductForm.scss";
import Card from '../card/Card';

const ProductForm = ({
  product,
  productImage,
  imagePreview ,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
      }) => {
  return (
    <div className='add-product'>
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
      <Card cardClass={"group"}>
        <label>Product Image</label>
        <input type="file" name='image' onChange={(e) => handleImageChange(e)} />

        {imagePreview != null ? (
          <div className="image-preview">
            <img src="{imagePreview}" alt="Image" />
          </div>
        ) : (<p>No image is set</p>)}
        </Card>
        </form>

      </Card>
    </div>
  )
}

export default ProductForm
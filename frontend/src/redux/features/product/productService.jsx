import axios from "axios";

const BACKEND_URL = "http://localhost:8000";

const API_URL = `${BACKEND_URL}/api/products`;

// Create New Product

const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all products

const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
};

export default productService;

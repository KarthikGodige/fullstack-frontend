import {useState,useEffect} from "react";
function App(){
const[products,setProducts]=useState([]);
const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[editId,setEditID]=useState(null);

async function getProducts() {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Please log in first.");
    return;
  }

  try {
    const response = await fetch(
      "https://fullstack-backend-pdks.onrender.com/products",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Error:", data.message);
      return;
    }

    setProducts(data);
    console.log("Products loaded:", data);
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

async function addProduct() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in first.");
    return;
  }

  try {
    const response = await fetch(
      "https://fullstack-backend-pdks.onrender.com/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,
          price: Number(price)
        })
      }
    );

    const newProduct = await response.json();

    if (!response.ok) {
      alert(newProduct.message || "Failed to add product.");
      return;
    }

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setName("");
    setPrice("");

    alert("Product added successfully!");
  } catch (error) {
    console.error("Add product error:", error);
    alert("Could not connect to the backend.");
  }
}

async function deleteProduct(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in first.");
    return;
  }

  try {
    const response = await fetch(
      `https://fullstack-backend-pdks.onrender.com/products/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      const data = await response.json();
      alert(data.message || "Failed to delete product.");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );

    alert("Product deleted successfully!");
  } catch (error) {
    console.error("Delete product error:", error);
    alert("Could not connect to the backend.");
  }
}

async function updateProduct() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in first.");
    return;
  }

  try {
    const response = await fetch(
      `https://fullstack-backend-pdks.onrender.com/products/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,
          price: Number(price)
        })
      }
    );

    const updatedProduct = await response.json();

    if (!response.ok) {
      alert(updatedProduct.message || "Failed to update product.");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === editId ? updatedProduct : product
      )
    );

    setEditID(null);
    setName("");
    setPrice("");

    alert("Product updated successfully!");
  } catch (error) {
    console.error("Update product error:", error);
    alert("Could not connect to the backend.");
  }
}
 
useEffect(()=>{
getProducts();
},[]);
return(
  <div>
    <h1>Products</h1>
    <input type="text" value={name} placeholder="Product Name" onChange={(event)=>setName(event.target.value)}/>
    <input type="number" placeholder="Price" value={price} onChange={(event)=>setPrice(event.target.value)}/>
    {editId !== null && (
  <button onClick={updateProduct}>
    Save Update
  </button>
)}
    <button onClick={addProduct}>Add Product</button>
    <h2>Editing:{editId}</h2>
    
    {products.map((product)=>(
      <div key={product._id}>
        <h2>Name:{product.name}</h2>
        <h2>Price:{product.price}</h2>
        <button>Buy Now</button>
        <button onClick={()=>{setEditID(product._id);
          setName(product.name);
          setPrice(product.price)}}>Update</button>
        <button onClick={()=>deleteProduct(product._id)}>Delete</button>
        <h2>---------------------</h2>
      </div>
    ))}
  </div>

);
};
export default App;
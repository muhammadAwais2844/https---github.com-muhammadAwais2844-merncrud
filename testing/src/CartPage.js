import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import "./cards.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartPro, setCartPro] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(" http://localhost:5000/cartpage")
      .then((res) => {
        setCartPro(res.data);
       
      })
      .catch((err) => console.log(err));
  }, [setCartPro]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      window.location.reload();
  };

  return (
    <div className="container ">
      <div className="container bg-dark text-white  display-3 text-center ">
        CHECKOUT PAGE
      </div>
      <button className="btn btn-secondary" onClick={()=>navigate(-1)} >Go Back</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Store ID</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          { cartPro ? (
        <>
        
          {cartPro.map((x, i) => {
            return (
              <>
                <tr key={x._id}>
                  <th  scope="row">{i + 1}</th>
                  <td >{x.title}</td>
                  <td>
                    <img src={x.thumbnail} height={100} width={100} alt="" />
                  </td>
                  <td>{x.price}</td>
                  <td className="idchoti">{x._id}</td>
                  <td>
                    {" "}
                    <button
                      className=" btn  btn-outline-dark"
                      onClick={() => handleDelete(x._id)}
                    >
                      ❌
                    </button>{" "}
                  </td>
                </tr>
              </>
            );
          })}</>

          ): <h1> Cart is empty </h1> }
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;

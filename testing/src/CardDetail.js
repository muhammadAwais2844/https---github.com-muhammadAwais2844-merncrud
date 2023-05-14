import React, { useState } from 'react'
import Data from './Data'
import './cards.css'
import  {useParams, Link ,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {cartAdd} from './Redux/reducers';
import { ADD } from './Redux/actions'
import  axios from 'axios'


const CardDetail = () => {


    const [Cart,setCart]=useState([])
    let {id}=useParams();
    let navigate= useNavigate();
    let element=Data.find(x=>x.id==id)
    const dispatch = useDispatch()
  

     const cartItem = useSelector(state=>state.cartAdd)


    

     const send=(e)=>{

     dispatch(ADD(element)) 
    
 

      axios.post('http://localhost:5000/cartadd', element).then(res=>console.log(res)).catch(err=>console.log(err))

     }


  return (



    <div className="container ">
      <div className="container bg-dark text-white  display-3 text-center ">
       Overview
       <div><button className='btn btn-secondary' onClick={()=>navigate(-1)} >Go Back</button></div>
      </div>
        <div className='row row-cols-2'  >
        <img className='z-99 mt-3 col-6' src={element.thumbnail} height={500} alt="" />
        <div className="box mt-3 ">
            <h1>{element.title}</h1>
            <br />

            <h3>{element.desc}</h3>
         <h4> Rs .  {element.price} </h4>

        </div>

        </div>

       <div className="row row-cols-2">
       <button className='btn-primary batn col-2'
       
       
       onClick={(e)=>send(e)}
       
       
       >Add to Cart</button>
       
       
       
         <Link to={`/cartpage`} >  
          <button className='btn-primary batn col-4   chik' onClick={()=>{navigate('/cartpage')} } key={element.id} >Checkout</button>
         </Link>  
           

       </div>
      

      </div>
  )
}

export default CardDetail
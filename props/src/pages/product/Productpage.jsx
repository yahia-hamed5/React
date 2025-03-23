import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/data'
import './Productpage.scss'
export default function Productpage() {
 const params=useParams()
 const [theProduct,setTheProduct]=useState([]);
 useEffect(()=>{
    let myProduct=data.find((el,index)=>{
       return el.id==params.product_id

    })

    setTheProduct(myProduct);
 })
 console.log(params)
  return (
    <div className='col-12  d-flex .app justify-content-center align-items-center ' style={{ height:"100vh" }}>
        <div className="col-6 p-5 Product-page gap-3 d-flex" style={{ height:'80%',border:"1px solid #000" ,borderRadius:'15px'}}>
            <div className="image d-flex justify-content-center align-items-center col-5" style={{ height:'100%' ,border:"1px solid #000" ,borderRadius:"15px"}}>
                <img style={{ height:"50%" ,width:"50%" ,objectFit:'contain' }} src={theProduct.image} alt="" />
            </div>
            <div className="info p-5 d-flex flex-wrap justify-content-center flex-column col-7" style={{ height:'100%' }}>
                <p className='col-12 fs-5 ' > Product Name : {theProduct.title}</p>
                <p className='col-12'><span style={{ color:"ActiveBorder" }}>Product price :</span> {theProduct.price}</p>
                <div className="btn-groub d-flex gap-2 col-12">
                    <button className='col-6 btn btn-primary'>Add To Cart</button>
                    <button className='col-6 btn btn-danger'>Add To Wishlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}

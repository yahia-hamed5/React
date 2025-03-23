import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Card(props) {
    let navigateProductPage=useNavigate()
  return (
    <div className="card  " style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top"
        style={{ height: "18rem" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <button onClick={()=>{
            navigateProductPage(`product/${props.id}`)
        }}>Show Product</button>
      </div>
    </div>
  );
}

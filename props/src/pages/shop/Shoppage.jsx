import React, { useState } from "react";
import { data } from "../../data/data";
import Card from "../../components/Card";

export default function Shoppage() {
  const [products, setProduct] = useState(data);
  console.log(products);
  return (
    <div className="col-12 justify-content-center gap-3 d-flex flex-wrap ">
      {products.map((el, index) => {
        return <Card key={el.id} title={el.title} image={el.image} price={el.price} id={el.id}/>;
      })}
    </div>
  );
}

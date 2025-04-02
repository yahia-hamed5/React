import React, { useRef, useState } from "react";
import "./App.scss";

export default function App() {
  const [products, setProducts] = useState([
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 1",
      price: 100,
      qty: 1,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 2",
      price: 200,
      qty: 2,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 3",
      price: 300,
      qty: 3,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 4",
      price: 400,
      qty: 4,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 5",
      price: 500,
      qty: 5,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 1",
      price: 100,
      qty: 1,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 2",
      price: 200,
      qty: 2,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 3",
      price: 300,
      qty: 3,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 4",
      price: 400,
      qty: 4,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 5",
      price: 500,
      qty: 5,
      categories: "mobile",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 1",
      price: 100,
      qty: 1,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 2",
      price: 200,
      qty: 2,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 3",
      price: 300,
      qty: 3,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 4",
      price: 400,
      qty: 4,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 5",
      price: 500,
      qty: 5,
      categories: "computer",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 1",
      price: 100,
      qty: 1,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 2",
      price: 200,
      qty: 2,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 3",
      price: 300,
      qty: 3,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 4",
      price: 400,
      qty: 4,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 5",
      price: 500,
      qty: 5,
      categories: "laptop",
    },
  ]);
  const [viewProducts, setViewProducts] = useState([
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 1",
      price: 100,
      qty: 1,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 2",
      price: 200,
      qty: 2,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 3",
      price: 300,
      qty: 3,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 4",
      price: 400,
      qty: 4,
      categories: "mobile",
    },
    {
      image:
        "https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg",
      name: "samsung 5",
      price: 500,
      qty: 5,
      categories: "mobile",
    },

    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 1",
      price: 100,
      qty: 1,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 2",
      price: 200,
      qty: 2,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 3",
      price: 300,
      qty: 3,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 4",
      price: 400,
      qty: 4,
      categories: "mobile",
    },
    {
      image:
        "https://d3c745jesl5pj3.cloudfront.net/buy/web/iPhone-XS-Max_4859b303b0a548b582fef724f768138a_89856691UR_PC.JPG",
      name: "iphone 5",
      price: 500,
      qty: 5,
      categories: "mobile",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 1",
      price: 100,
      qty: 1,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 2",
      price: 200,
      qty: 2,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 3",
      price: 300,
      qty: 3,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 4",
      price: 400,
      qty: 4,
      categories: "computer",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg",
      name: "computer 5",
      price: 500,
      qty: 5,
      categories: "computer",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 1",
      price: 100,
      qty: 1,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 2",
      price: 200,
      qty: 2,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 3",
      price: 300,
      qty: 3,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 4",
      price: 400,
      qty: 4,
      categories: "laptop",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6077/6077505cv12d.jpg",
      name: "laptop 5",
      price: 500,
      qty: 5,
      categories: "laptop",
    },
  ]);
  const inputrfc = useRef();
  const [selectPrices, setSelectPrices] = useState([]);

  const togglePrices = (val) => {
    let obj = [...selectPrices];
    let index = selectPrices.indexOf(val);
    if (index == -1) {
      obj.push(val);
    } else {
      obj.splice(index, 1);
    }
    setSelectPrices(obj)

    console.log(obj.length)
    if (obj.length != 0) {
      let searchPrice = products.filter((el) => {
        return obj.some((price) => el.price === price);
      });
      setViewProducts(searchPrice);
    } else {
      let searchPrice = products.filter((el) => {
        return el.name.toLowerCase().includes('')==true;
      });
      setViewProducts(searchPrice);
    }

  
  };

  const searchinput = () => {
    let val = inputrfc.current.value;
    let arrSearch = products.filter((el) => {
      return el.name.toLowerCase().includes(val.toLowerCase()) == true;
    });
    setViewProducts(arrSearch);
  };

  const searchSelect = (event) => {
    let val = event.target.value;
    let arrSearch = products.filter((el) => {
      return el.categories.toLowerCase().includes(val.toLowerCase()) == true;
    });
    setViewProducts(arrSearch);
  };

  return (
    <div className="App">
      <h1>Filtering Data </h1>
      <div className="filter1">
        <input
          type="text"
          placeholder="Search "
          ref={inputrfc}
          onChange={() => {
            searchinput();
          }}
        />
      </div>
      <div className="filter2">
        <select
          onChange={(event) => {
            searchSelect(event);
          }}
        >
          <option value="-1" hidden>
            Select Brand
          </option>
          <option value="computer">Computer</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">mobile</option>
          <option value="">All</option>
        </select>
      </div>
      <div className="filter3">
        <div className="group">
          <input type="checkbox" id="p100" onChange={() => togglePrices(100)} />
          <label htmlFor="p100">100</label>
        </div>
        <div className="group">
          <input type="checkbox" id="p200" onChange={() => togglePrices(200)} />
          <label htmlFor="p200">200</label>
        </div>
        <div className="group">
          <input type="checkbox" id="p300" onChange={() => togglePrices(300)} />
          <label htmlFor="p300">300</label>
        </div>
        <div className="group">
          <input type="checkbox" id="p400" onChange={() => togglePrices(400)} />
          <label htmlFor="p400">400</label>
        </div>
        <div className="group">
          <input type="checkbox" id="p500" onChange={() => togglePrices(500)} />
          <label htmlFor="p500">500</label>
        </div>
      </div>
      <div className="products">
        {viewProducts.map((el, index) => {
          return (
            <div className="card" key={index}>
              <div className="image">
                <img src={el.image} alt="" />
              </div>
              <div className="info">
                <p>Name : {el.name}</p>
                <p>Price : ${el.price}</p>
                <p>Qty : {el.qty}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

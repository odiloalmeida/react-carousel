import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{

    fetch('http://localhost:3000/static/shoes.json').then((response) => response.json())
    .then(setData);

  },[])

  if( !data || !data.length) return null;


  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <img src="/static/images/super-shoes.png" alt="Super-Shoes-Logo" />
        </div>

        <div className="carrousel">

          {data.map((item)=>{
            const{ id, name, price, oldPrice, image } = item;
            return(
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>

              <div className="info">
                <span className="name">{name}</span>
                <span className="old-price"> R$ {oldPrice}</span>
                <span className="price">R$ {price}</span>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

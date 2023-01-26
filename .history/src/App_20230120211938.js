import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);
  useEffect(()=>{

    fetch('http://localhost:3000/static/shoes.json').then((response) => response.json())
    .then(setData);

  },[])


  const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollRight -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if( !data || !data.length) return null;


  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <img src="/static/images/super-shoes.png" alt="Super-Shoes-Logo" />
        </div>

        <div className="carrousel" ref={carousel}>

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
        <div className="buttons">

          <button onClick={handleLeftClick}>
            <img src='/static/images/chevron-icon.png' alt="Left"/>
            </button>

          <button onClick={handleRightClick}>
            <img src='/static/images/chevron-icon.png' alt="Right"/>
            </button>

        </div>
      </div>
    </div>
  );
}

export default App;

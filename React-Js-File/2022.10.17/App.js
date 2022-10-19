import "./App.css";
import React from "react";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const [products, setProducts] = React.useState([
    {
      name: "Nike CruzrOne",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
    {
      name: "Nike Epic React Flyknit 2",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
  ]);

  React.useEffect(() => {
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal-bg") {
        setShowModal(false);
      }
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="product">
        {products.map((item, index) => {
          return (
            <div key={index}>
              <img className="img" src={item.image} alt="" />
              <span className="productName">{item.name}</span>
              <span className="productComent">{item.descrition}</span>
              <span className="productPrice">{item.price}</span>
              <button className="btn-on-cart" type="button" onclick="">
                add to cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart"></div>
    </div>
  );
}

export default App;

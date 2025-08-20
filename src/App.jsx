import { useState } from "react";
import NavBar from "./components/navBar";
import ProductGallery from "./components/ProductGallery";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div className="">
      <NavBar cart={cart} quantity={quantity} setCart={ setCart} />
      <ProductGallery
        setCart={setCart}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default App;

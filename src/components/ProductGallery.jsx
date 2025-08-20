import Cart from "./cart";
import ImageCarousel from "./image";
import ImagePreviewComponent from "./imagePreviewComponent";

function ProductGallery({ setCart, quantity, setQuantity }) {
  return (
    <div>
      <div className="md:hidden flex flex-col">
        <ImageCarousel />
        <Cart setCart={setCart} quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="hidden md:flex md:flex-row md:px-64 md:mt-40 md:gap-20">
        <ImagePreviewComponent />
        <Cart setCart={setCart} quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}

export default ProductGallery;

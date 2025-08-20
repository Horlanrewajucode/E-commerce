
import ImageArticle from "./imageArticle";

function Cart({ setCart, quantity, setQuantity }) {
  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    oldPrice: 250.0,
    discount: 50,
    image: "./image-product-1.jpg",
  };

  function increase() {
    setQuantity((q) => q + 1);
  }

  function decrease() {
    setQuantity((q) => (q > 0 ? q - 1 : 0));
  }

  function addToCart() {
    if (quantity === 0) return;

    setCart([
      {
        ...product,
        quantity,
      },
    ]);
    setQuantity(0);
    console.log(setCart);
  }
  return (
    <div>
      <ImageArticle />
      <div>
        <div className="flex px-8 mt-8 items-center justify-between md:flex-col md:items-start">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="bg-black font-semibold text-white px-3 py-0.5 rounded-[7px]">
              {product.discount}%
            </span>
          </div>
          <span className="line-through text-stone-500 font-semibold">
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col items-center mx-7 mt-10 mb-6 md:flex-row md:items-center md:justify-center md:gap-4">
          <div className="bg-stone-200 flex items-center gap-30 py-4 px-5 rounded-2xl md:gap-10 md:px-4">
            <button className="cursor-pointer" onClick={increase}>
              <img
                src="./icon-plus.svg"
                alt="Plus-icon"
                className="w-3 h-3  md:w-3 md:h-3"
              />
            </button>
            <span className="font-bold text-[18px]">{quantity}</span>
            <button className="cursor-pointer" onClick={decrease}>
              <img
                src="./icon-minus.svg"
                alt="Minus-icon"
                className="w-3 h-2 md:w-3 md:h-1"
              />
            </button>
          </div>
          <div className="mt-6 mb-30 bg-orange-500 font-bold rounded-2xl text-[10px] md:mt-0 md:mb-0 hover:bg-amber-600 hover:duration-300 hover:ease-in-out">
            <button
              className="flex items-center px-3 w-84 text-[20px] justify-center cursor-pointer py-4 gap-4 md:w-70"
              onClick={addToCart}
            >
              <img src="./icon-cart.svg" alt="cart-icon" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

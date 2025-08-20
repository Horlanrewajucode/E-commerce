import { useState } from "react";

function CartButton({ cart, setCart }) {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart((prev) => !prev);
  }

  function removeFromCart() {
    setCart([]);
  }

  return (
    <>
      <button className="cursor-pointer" onClick={handleShowCart}>
        <img src="./icon-cart.svg" alt="icon-cart" className="md:w-6 md:h-6" />
        {cart.length > 0 && (
          <span className="absolute top-6 md:top-6 md:right-54 bg-orange-500 text-white text-xs px-2 rounded-full">
            {cart[0].quantity}
          </span>
        )}
      </button>

      {showCart && (
        <div className="absolute top-25 right-10 w-80 bg-white shadow-lg rounded-2xl p-4">
          <h2 className="font-bold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-stone-400 text-xl">Your cart is empty.</p>
          ) : (
            <>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <img
                    src={cart[0].image}
                    alt={cart[0].name}
                    className="w-12 h-12 rounded"
                  />
                </div>
                <div>
                  <p className="text-[14px]">{cart[0].name}</p>
                  <p className="">
                    ${cart[0].price.toFixed(2)} x {cart[0].quantity}{" " }
                    <span className="font-bold">
                      ${(cart[0].price * cart[0].quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button className="cursor-pointer" onClick={removeFromCart}>
                  <img src="./icon-delete.svg" alt="delete-icon" />
                </button>
              </div>
              <button className="w-full bg-orange-500 text-black py-2 rounded-lg shadow mt-8 cursor-pointer text-[18px]">
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CartButton;

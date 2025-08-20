import { useState } from "react";
import Logo from "./logo";
import Avatar from "./avatar";
import CartButton from "./cartButton";

function NavBar({ cart, quantity, setCart }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="flex items-center px-7 py-5 md:flex md:items-center justify-between md:justify-between md:px-40 fixed top-0 h-20 bg-white w-full z-50">
      <div className=" flex items-center gap-8 md:gap-52 md:flex md:items-center md:justify-between">
        {!isOpen && (
          <div
            className="cursor-pointer md:hidden lg:hidden"
            onClick={handleToggle}
          >
            <img src="./icon-menu.svg" alt="menu icon" />
          </div>
        )}
        {isOpen && (
          <div
            className="cursor-pointer z-50 md:hidden lg:hidden"
            onClick={handleToggle}
          >
            <img src="./icon-close.svg" alt="menu icon" />
          </div>
        )}
        {isOpen ? (
          <nav className="overflow-y-hidden fixed top-0 left-0 w-screen min-h-screen flex flex-col justify-center items-center gap-10 duration-300 ease-in py-8 text-2xl bg-white z-40">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        ) : (
          <nav className="overflow-y-hidden fixed top-0 left-[-150%] w-screen min-h-screen flex flex-col justify-center items-center gap-10 duration-300 ease-in"></nav>
        )}
        <Logo />
        <nav className="hidden md:flex md:gap-12 text-stone-500 ">
          <a
            href="#"
            className="hover:text-orange-400 text-[20px] hover:duration-300 hover:ease-in-out hover:font-semibold"
          >
            Collections
          </a>
          <a
            href="#"
            className="hover:text-orange-400 text-[20px] hover:duration-300 hover:ease-in-out hover:font-semibold"
          >
            Men
          </a>
          <a
            href="#"
            className="hover:text-orange-400 text-[20px] hover:duration-300 hover:ease-in-out hover:font-semibold"
          >
            Women
          </a>
          <a
            href="#"
            className="hover:text-orange-400 text-[20px] hover:duration-300 hover:ease-in-out hover:font-semibold"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-orange-400 text-[20px] hover:duration-300 hover:ease-in-out hover:font-semibold"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-9 ">
        <CartButton cart={cart} quantity={quantity} setCart={ setCart} />
        <Avatar />
      </div>
    </header>
  );
}

export default NavBar;

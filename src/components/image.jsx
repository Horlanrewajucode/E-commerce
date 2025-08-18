import { useState } from "react";

function Image() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./image-product-1.jpg",
    "./image-product-2.jpg",
    "./image-product-3.jpg",
    "./image-product-4.jpg",
  ];

  function handlePrev() {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="flex items-center">
      <button
        onClick={handlePrev}
        className="relative left-[45px] rounded-full p-3 bg-white cursor-pointer"
      >
        <img
          src="./icon-previous.svg"
          alt="icon-previous"
          className="w-[600px] h-[200px]"
        />
      </button>
      <img src={images[currentImage]} alt="Current-image" className="w-full object-contain" />
      <button
        onClick={handleNext}
        className="relative right-[65px] rounded-full p-2.5 bg-white cursor-pointer"
      >
        <img src="./icon-next.svg" alt="icon-next" className="w-2 h-2" />
      </button>
    </div>
  );
}
export default Image;

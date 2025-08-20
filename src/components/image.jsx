import { useState } from "react";

function ImageCarousel() {
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
    <div className="relative flex items-center justify-center">
      <button
        onClick={handlePrev}
        className="absolute left-2 rounded-full p-2 bg-white cursor-pointer z-10 md:hidden"
      >
        <img
          src="./icon-previous.svg"
          alt="icon-previous"
        />
      </button>
      <img src={images[currentImage]} alt="Current-image" className="w-full object-contain mt-20" />
      <button
        onClick={handleNext}
        className="absolute right-2 z-10 rounded-full p-2 bg-white cursor-pointer md:hidden"
      >
        <img src="./icon-next.svg" alt="icon-next" className="" />
      </button>
    </div>
  );
}
export default ImageCarousel;

import { useState } from "react";

const images = [
  "./image-product-1.jpg",
  "./image-product-2.jpg",
  "./image-product-3.jpg",
  "./image-product-4.jpg",
];

function ImagePreviewComponent() {
    const [selected, setSelected] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center ">
      {/* Big Image */}
      <div className="w-100 h-100 mb-4" onClick={() => setIsOpen(true)}>
        <img
          src={images[selected]}
          alt="Product"
          className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-22 h-22 rounded-lg overflow-hidden border-2 cursor-pointer 
              ${
                selected === index ? "border-orange-500" : "border-transparent"
              }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-full object-cover transition 
                ${
                  selected === index ? "opacity-50 blur-[2px]" : "opacity-100"
                }`}
            />
          </button>
        ))}

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ❌
              </button>

              {/* Full Image */}
              <img
                src={images[selected]}
                alt="Preview"
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagePreviewComponent;

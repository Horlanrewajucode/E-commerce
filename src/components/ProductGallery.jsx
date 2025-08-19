import ImageCarousel from "./image";
import ImagePreviewComponent from "./imagePreviewComponent";

function ProductGallery() {
  return (
    <div>
      <div className="md:hidden">
        <ImageCarousel />
          </div>
          <div className="hidden md:block">
              <ImagePreviewComponent/>
          </div>
    </div>
  );
}

export default ProductGallery;

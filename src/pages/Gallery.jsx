import interior1 from "../assets/interior1.png";
import interior2 from "../assets/interior2.png";
import interior3 from "../assets/interior3.png";
import interior4 from "../assets/interior4.png";
import interior5 from "../assets/interior5.png";

const images = [
  interior1,
  interior2,
  interior3,
  interior4,
  interior5,
];

export default function Gallery() {
  return (
    <main className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div
          id="galleryCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner rounded overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100 gallery-carousel-img"
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </main>
  );
}
import { useState } from "react";

// Sample gallery data – replace with your own images and descriptions
const galleryItems = [
  {
    id: 1,
    title: "Rhenus Group Limited",
    description: "Airfleight",
    image: "/images/hero3.jpg",
    category: "Rhenus Group Limited",
  },
  {
    id: 2,
    title: "Rhenus Group Limited",
    description: "Port Clearance",
    image: "/images/Rhenus1.jpeg",
    category: "Rhenus Group Limited",
  },
  {
    id: 3,
    title: "Rhenus Group Limited",
    description: "Rhenus operations",
    image: "/images/Rhenus2.jpeg",
    category: "Rhenus Group Limited",
  },
  {
    id: 4,
    title: "Rhenus Group Limited",
    description: "inabilika waiting for Rhenus pics",
    image: "/images/hero1.jpg",
    category: "Rhenus Group Limited",
  },
  {
    id: 5,
    title: "Rhenus Group Limited",
    description: "inabilika waiting for Rhenus pics",
    image: "/images/container-ship.jpg",
    category: "Rhenus Group Limited",
  },
  {
    id: 6,
    title: "Rhenus Group Limited",
    description: "Professional staff ensuring smooth operations",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80",
    category: "Rhenus Group Limited",
  },
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (item) => {
    setCurrentImage(item);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Hero */}
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>
          A glimpse of our logistics operations, equipment, and team in action.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openModal(item)}
            role="button"
            tabIndex={0}
            aria-label={`View larger: ${item.title}`}
            onKeyDown={(e) => e.key === "Enter" && openModal(item)}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <div
        className={`gallery-modal ${modalOpen ? "active" : ""}`}
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          {currentImage && (
            <>
              <img src={currentImage.image} alt={currentImage.title} />
              <div className="modal-caption">
                <strong>{currentImage.title}</strong> – {currentImage.description}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Gallery;
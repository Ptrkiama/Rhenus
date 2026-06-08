import { useState } from "react";

// Sample gallery data – replace with your own images and descriptions
const galleryItems = [
  {
    id: 1,
    title: "Container Handling",
    description: "Efficient loading of containers at Dar es Salaam port",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    category: "Freight",
  },
  {
    id: 2,
    title: "Customs Clearing",
    description: "Our team processing documentation at customs office",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    category: "Clearing",
  },
  {
    id: 3,
    title: "Warehousing",
    description: "Modern storage facilities with inventory management",
    image: "https://images.unsplash.com/photo-1586528116499-40b5b6b4f5b0?w=800&q=80",
    category: "Logistics",
  },
  {
    id: 4,
    title: "Fleet of Trucks",
    description: "Reliable road freight across East Africa",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0593f4b?w=800&q=80",
    category: "Transport",
  },
  {
    id: 5,
    title: "Project Logistics",
    description: "Moving heavy machinery for industrial clients",
    image: "https://images.unsplash.com/photo-1581092335871-4dac3ce4b9d8?w=800&q=80",
    category: "Projects",
  },
  {
    id: 6,
    title: "Team at Work",
    description: "Professional staff ensuring smooth operations",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80",
    category: "Team",
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
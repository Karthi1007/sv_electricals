import React, { useState } from "react";
import gallery1 from "../../assert/images/gallery/gallery-1.jpg";
import gallery2 from "../../assert/images/gallery/gallery-2.jpeg";
import gallery3 from "../../assert/images/gallery/gallery-3.jpg";

const galleryImages = [
  {
    id: 1,
    image: gallery1,
    title: "Our Team",
    category: "Team",
  },
  {
    id: 2,
    image: gallery2,
    title: "Business Meeting",
    category: "Events",
  },
  {
    id: 3,
    image: gallery3,
    title: "Team Discussion",
    category: "Team",
  },
  {
    id: 4,
    image: gallery1,
    title: "Office Environment",
    category: "Office",
  },
  {
    id: 5,
    image: gallery2,
    title: "Professional Meeting",
    category: "Events",
  },
  {
    id: 6,
    image: gallery3,
    title: "Our Workplace",
    category: "Office",
  },
  {
    id: 7,
    image: gallery1,
    title: "Team Collaboration",
    category: "Team",
  },
  {
    id: 8,
    image: gallery2,
    title: "Corporate Event",
    category: "Events",
  },
  {
    id: 9,
    image: gallery3,
    title: "Office Workspace",
    category: "Office",
  },
  {
    id: 10,
    image: gallery1,
    title: "Team Gathering",
    category: "Team",
  },
  {
    id: 11,
    image: gallery2,
    title: "Business Event",
    category: "Events",
  },
  {
    id: 12,
    image: gallery3,
    title: "Workplace",
    category: "Office",
  },
];

const categories = ["All", "Team", "Office", "Events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = (e) => {
    e.stopPropagation();

    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = (e) => {
    e.stopPropagation();

    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex =
      currentIndex === filteredImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="gallery-page">

      {/* ================= GALLERY ================= */}
      <section className="gallery-section">
        <div className="gallery-container">

          {/* Section Heading */}
          <div className="gallery-heading">

            <div className="gallery-heading-left">
              <span className="gallery-section-label">
                OUR GALLERY »
              </span>

              <h2>
                Moments That Define
                <br />
                <span>Our Journey</span>
              </h2>
            </div>

            <div className="gallery-heading-right">
              <p>
                Explore our workplace, team activities, events
                and professional journey through our gallery.
                Every picture represents our commitment,
                teamwork and success.
              </p>
            </div>

          </div>

          {/* Filter */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">

            {filteredImages.map((item) => (
              <div
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-card-overlay">

                  <div className="gallery-card-content">
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <div className="gallery-view">
                      <span>+</span>
                    </div>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="gallery-cta">

        <div className="gallery-cta-pattern"></div>

        <div className="gallery-cta-content">

          <span>LET'S WORK TOGETHER »</span>

          <h2>
            Building Success
            <br />
            <strong>Together</strong>
          </h2>

          <p>
            Let's create meaningful solutions and turn
            opportunities into lasting success.
          </p>

          <button className="gallery-cta-button">
            GET A QUOTE
            <span>→</span>
          </button>

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >

          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
          >
            ×
          </button>

          <button
            className="gallery-lightbox-prev"
            onClick={showPrevious}
          >
            ‹
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>

          </div>

          <button
            className="gallery-lightbox-next"
            onClick={showNext}
          >
            ›
          </button>

        </div>
      )}

    </div>
  );
};

export default Gallery;
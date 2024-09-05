
import React from 'react';
import family1 from '../Images/MrMuita.png'
import family4 from '../Images/WithFamily.png';
import family3 from '../Images/Uncle.png';
import family2 from '../Images/RevRuth.png';
import './Family.css';

const Family = () => {
  const images = [ family1, family2, family3, family4];

  return (
    <section id="family" className="family-section">
      <h2>Family</h2>
      <div className="family-description">
        <p>
          Rev Ruth Muita is blessed with a loving family, including her supportive husband and two wonderful children. Being able to serve in the church alongside her family is a source of immense joy and fulfillment for her. The shared faith and commitment to the community have deepened their bond and strengthened their spiritual journey together.
        </p>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Family Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Family;

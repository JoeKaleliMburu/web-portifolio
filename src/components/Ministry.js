import React from 'react';
import './Ministry.css';
import ministryPhoto1 from '../Images/WithRevs.jpg';
import ministryPhoto3 from '../Images/Ruth Thanks Giving (275).jpg'
const Ministry = () => {
  const images = [ministryPhoto1, ministryPhoto3];

  return (
    <section id="ministry" className="ministry-section">
      <h2>Ministry Duties</h2>
      <div className="ministry-description">
        <p>
          Rev Ruth Muita has faithfully served in various ministries over the years, including youth ministry, community outreach, and spiritual counseling. She is currently serving at <a href="https://www.google.com/maps/place/St.+Mary's+ACK+Syokimau+Parish/@-1.3549447,36.9362545,3a,75y,102.57h,90t/data=!3m7!1e1!3m5!1skmwgAJKcl6qOnK_t-H-Kmw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DkmwgAJKcl6qOnK_t-H-Kmw%26cb_client%3Dsearch.gws-prod.gps%26w%3D211%26h%3D120%26yaw%3D102.567696%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m14!1m7!3m6!1s0x182f0d40a35492cd:0x7393a3b0b7816d71!2sSt.+Mary's+ACK+Syokimau+Parish!8m2!3d-1.3549598!4d36.9364045!16s%2Fg%2F11g69zxgkb!3m5!1s0x182f0d40a35492cd:0x7393a3b0b7816d71!8m2!3d-1.3549598!4d36.9364045!16s%2Fg%2F11g69zxgkb?coh=205409&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            ACK St Mary Syokimau
          </a>.. Her recent ordination as a priest has been a significant milestone in her spiritual journey.
        </p>
        <p>
          She has also founded a fellowship group <span>Destiny Echo Worshippers</span>
        </p>
      </div>
      <div className="ministry-photos">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Ministry Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministry;


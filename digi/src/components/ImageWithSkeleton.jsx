import { useState } from 'react';
import './imageWithSkeleton.css';

export default function ImageWithSkeleton({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-skeleton-wrapper ${className}`}>
      {!loaded && <div className="skeleton-shimmer"></div>}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={loaded ? 'img-visible' : 'img-hidden'}
      />
    </div>
  );
}
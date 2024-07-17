import React from 'react';
import './SkeletonCountryDetails.css'

const SkeletonCountryDetails = () => {
    return (
      <div className="skeleton-details">
        <div className="skeleton-flag-large"></div>
        <div className="skeleton-info-large">
          <div className="skeleton-title-large"></div>
          <div className="skeleton-text-large"></div>
          <div className="skeleton-text-large"></div>
          <div className="skeleton-text-large"></div>
          <div className="skeleton-text-large"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCountryDetails;
  

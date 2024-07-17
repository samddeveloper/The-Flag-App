import React from "react";
import "./SkeletonCountryCard.css";

const SkeletonCountryCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-flag"></div>
      <div className="skeleton-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );
};

export default SkeletonCountryCard;
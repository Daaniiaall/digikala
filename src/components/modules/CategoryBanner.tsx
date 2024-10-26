"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type ImageItem = {
  original: string;
};

interface CategoryBanner {
  items?: ImageItem[];
}

const CategoryBanner: React.FC<CategoryBanner> = ({ items }) => {
  
 // اگر items وجود ندارد یا آرایه خالی است، چیزی رندر نمی‌شود
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 rounded-lg bg-slate-100">
      <ImageGallery
        items={items}
        showNav={false}
        showPlayButton={false}
        autoPlay={true}
        showBullets={true}
        showFullscreenButton={false}
        infinite={true}
      />
    </div>
  );
};

export default CategoryBanner;

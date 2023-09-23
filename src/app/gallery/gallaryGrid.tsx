"use client";

import { ImageGrid } from "@/components/imageGrid";
import { searchResult } from "./page";
import  CloudinaryImage  from "../../components/ui/cloudinaryImage";

export default function GalleryGrid({ images }: { images: searchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: searchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
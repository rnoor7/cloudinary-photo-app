"use client";

import { ImageGrid } from "@/components/imageGrid";

import  CloudinaryImage  from "../../../components/ui/cloudinaryImage";
import { searchResult } from "@/app/gallery/page";

export default function AlbumGrid({ images }: { images: searchResult[] }) {
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
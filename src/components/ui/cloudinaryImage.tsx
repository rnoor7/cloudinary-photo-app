"use client";
import React, { useState, useTransition } from "react";
import { CldImage, CldImageProps } from "next-cloudinary";
import { Heart } from "@/components/icons/heart";
import { setAsFavouriteAction } from "../../app/gallery/action";
import { searchResult } from "../../app/gallery/page";
import { FullHeart } from "@/components/icons/fullHeart";
import { ImageMenu } from "./imageMenu";

export default function CloudinaryImage(
   props:{
    imageData: searchResult;
    
    onUnheart?: (unheartedResource: searchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const { imageData, onUnheart } = props;
  const [transition, startTransition] = useTransition();

  const [isFavourited, setIsFavourited] = useState(
    imageData.tags.includes("favourite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavourited ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imageData);
            startTransition(() => {
              setIsFavourited(false);
              setAsFavouriteAction(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-600 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setIsFavourited(true);
              setAsFavouriteAction(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-600 cursor-pointer"
        />
      )}
      <ImageMenu image={imageData}/>
    </div>
  );
}

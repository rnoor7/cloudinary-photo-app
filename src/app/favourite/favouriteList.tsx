"use client";
import { ImageGrid } from "@/components/imageGrid";
import CloudinaryImage from "../../components/ui/cloudinaryImage";
import { searchResult } from "./page";
import React, { useEffect, useState } from "react";

export default function FavouriteList({
  initialResources,
}: {
  initialResources: searchResult[];
}) {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);
  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: searchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
            onUnheart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}

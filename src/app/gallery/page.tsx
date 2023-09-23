import React from "react";
import UploadButton from "./uploadButton";
import cloudinary from "cloudinary";
import GalleryGrid from "./gallaryGrid";

export type searchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: searchResult[] };

  const maxCol = 4;
  function getColumns(colIndex: number) {
    return results.resources.filter(
      (resource, idx) => idx % maxCol == colIndex
    );
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>
      <GalleryGrid images={results.resources} />
    </section>
  );
}

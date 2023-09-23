
import React from "react";
import cloudinary from "cloudinary";

import {ForceRefresh} from "@/components/forceRefresh";
import FavouriteList from "./favouriteList";
import { SearchResult } from "@/app/gallery/page";


export default async function FavouritePage() {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND tags=favourite`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section className="flex flex-col gap-8">
      <ForceRefresh />
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favourite Images</h1>
      </div>
      <FavouriteList initialResources={results.resources}/>
    </section>
  );
}

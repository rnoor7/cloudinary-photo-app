"use client";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "removeBackground"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "tint"
    | "effects"
  >();
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit {publicId}</h1>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setTransformation(undefined)}>Clear All</button>
        <button onClick={() => setTransformation("generative-fill")}>
          Apply Generative Fill
        </button>
        <button onClick={() => setTransformation("removeBackground")}>
          Remove Background
        </button>
        <button onClick={() => setTransformation("blur")}>
          Blur the image
        </button>
        <button onClick={() => setTransformation("grayscale")}>
          Apply Gray
        </button>
        <button onClick={() => setTransformation("pixelate")}>Pixelate</button>
        <button onClick={() => setTransformation("tint")}>
          Tint the Image
        </button>
        <button onClick={() => setTransformation("effects")}>
          Apply Multiple Effects
        </button>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <CldImage src={publicId} width="300" height="200" alt="some image" />
        {transformation === "generative-fill" && (
          <CldImage
            src={publicId}
            width="600"
            height="800"
            alt="some image"
            crop="pad"
            fillBackground
          />
        )}
        {transformation === "removeBackground" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            removeBackground
            alt="some image"
          />
        )}
        {transformation === "blur" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            blur="800"
            alt="some image"
          />
        )}
        {transformation === "grayscale" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            grayscale
            alt="some image"
          />
        )}
        {transformation === "pixelate" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            pixelate
            alt="some image"
          />
        )}
        {transformation === "tint" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            tint="equalize:80:blue:blueviolet"
            alt="some image"
          />
        )}
        {transformation === "effects" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            effects={[
              {
                background: "green",
              },
              {
                gradientFade: true,
              },
              {
                gradientFade: "symetric,x_0.5",
              },
            ]}
            alt="some image"
          />
        )}
      </div>
    </section>
  );
}

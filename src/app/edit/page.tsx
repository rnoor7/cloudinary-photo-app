"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
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
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit {publicId}</h1>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => setTransformation(undefined)}>Clear All</Button>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => {
              setTransformation("generative-fill");
              setPrompt(pendingPrompt);
            }}
          >
            Apply Generative Fill
          </Button>
          <Label>Prompt</Label>
          <Input
            value={pendingPrompt}
            onChange={(e) => setPendingPrompt(e.currentTarget.value)}
          />
        </div>
        <Button onClick={() => setTransformation("removeBackground")}>
          Remove Background
        </Button>
        <Button onClick={() => setTransformation("blur")}>
          Blur the image
        </Button>
        <Button onClick={() => setTransformation("grayscale")}>
          Apply Gray
        </Button>
        <Button onClick={() => setTransformation("pixelate")}>Pixelate</Button>
        <Button onClick={() => setTransformation("tint")}>
          Tint the Image
        </Button>
        <Button onClick={() => setTransformation("effects")}>
          Apply Multiple Effects
        </Button>
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
            fillBackground={{
              prompt,
            }}
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
           // blur="800"
            alt="some image"
          />
        )}
        {transformation === "grayscale" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            //grayscale
            alt="some image"
          />
        )}
        {transformation === "pixelate" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            //pixelate
            alt="some image"
          />
        )}
        {transformation === "tint" && (
          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            //tint="equalize:80:blue:blueviolet"
            alt="some image"
          />
        )}
        {/* {transformation === "tint" && (
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_tint:80:blue:blueviolet/${publicId}`}
                alt={"Tinted Image"}
                width={600}
                height={400}
              />
            )} */}
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

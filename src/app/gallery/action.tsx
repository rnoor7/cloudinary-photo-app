"use server";
import cloudinary from "cloudinary";

export async function setAsFavouriteAction(
  publicId: string,
  isFavourite: boolean
) {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }
}

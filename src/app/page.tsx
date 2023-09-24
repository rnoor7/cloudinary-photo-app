"use client";


export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col text-4xl font-bold pt-20 pl-10 ">
      
    WELCOME TO MY CLOUDINARY PHOTO APP
     
    </main>
  );
}

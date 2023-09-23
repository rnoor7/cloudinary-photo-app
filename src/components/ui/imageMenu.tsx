import { Button } from "@/components/ui/button";
import Menu from "../icons/menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AddToAlbumDailog } from "./addDailogueBox";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            <AddToAlbumDailog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
           
            <Link className=" cursor-pointer" href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}> <Pencil className="ml-2 mr-2 h-4 w-4"/>Edit</Link>
            {/* <AddToAlbumDailog image={image} onClose={() => setOpen(false)} /> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

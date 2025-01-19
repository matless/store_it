"use client";
import {
    Dialog,
  } from "@/components/ui/dialog";

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";
import { Models } from "node-appwrite";
  
  

const ActionsDropdown = ({ file }: { file: Models.Document }) => {

    const [isModalOpen, setisModalOpen] = useState(false);
    const [isDropDownOpen, setisDropDownOpen] = useState(false);
    
    
  return (
    <Dialog open={isModalOpen} onOpenChange={setisModalOpen}>
  <DropdownMenu open={isDropDownOpen} onOpenChange={setisDropDownOpen}>
  <DropdownMenuTrigger className="shad-no-focus">
    <Image
        src="/assets/icons/dots.svg"
        alt="dots"
        width={34}
        height={34} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className="max-w-[200px] truncate">
       
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

</Dialog>

  );
};

export default ActionsDropdown;

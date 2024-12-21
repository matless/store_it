import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNavigation = () => {

const [open, setOpen] = useState(false);
const pathname = usePathname();


  return <header className="mobile-header">
    <Image src="/assets/icons/logo/-full-brand.svg" alt="logo" width={120} height={52} className="h-auto" />

    <Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  </header>
};

export default MobileNavigation;

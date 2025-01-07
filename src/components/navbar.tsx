import Link from "next/link";
import { PiGitlabLogoBold } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
export default function Navbar() {
  return (
    <div className="w-full h-[65px] text-[#323232] bg-[#DDD0C8] shadow-xl sticky border-b-4 border-[#323232] ">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link  className="font-bold flex items-center text-[28px]" href="/">
            <PiGitlabLogoBold className="w-[26px] h-[26px]" /> Khan Blogs
          </Link>

          <div className="text-[20px] space-x-5 flex max-md:hidden font-medium">
            <Link
              className="hover:underline hover:text-[#6f6863] transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:underline hover:text-[#6f6863] transition-colors"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="hover:underline hover:text-[#6f6863] transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:underline hover:text-[#6f6863] transition-colors"
              href="/contact"
            >
              Contact
            </Link>
            <span className="">
              <Link
                className="hover:underline hover:text-[#6f6863] transition-colors"
                href="/login"
              >
                Login /{" "}
              </Link>
              <Link
                className="hover:underline hover:text-[#6f6863] transition-colors"
                href="/signUp"
              >
                Sign up
              </Link>
            </span>
          </div>

          <div className="hidden max-md:inline ">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="w-[28px] h-[28px]" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-center text-xl mt-4 font-serif">
                    Welcome to Khan Blogs
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8 justify-center items-center text-xl font-semibold ">
                  <Link className="text-[#323232]" href="/">
                    Home
                  </Link>
                  <Link className="text-[#323232]" href="/blog">
                    Blog
                  </Link>
                  <Link className="text-[#323232]" href="/about">
                    About
                  </Link>
                  <Link className="text-[#323232]" href="/contact">
                    Contact
                  </Link>
                  <span className="">
                    <Link className="text-[#323232]" href="/login">
                      Login /{" "}
                    </Link>
                    <Link className="text-[#323232]" href="/signUp">
                      Sign up
                    </Link>
                  </span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}

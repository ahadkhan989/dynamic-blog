import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#323232] text-[#DDD0C8] transition-colors duration-200 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-6 lg:mb-0">
            <h3 className="font-bold text-xl mb-2 hover:text-[#6f6863] transition-colors">
              Khan Blogs
            </h3>
            <p className="text-gray-100 hover:text-[#6f6863] transition-colors">
              Explore all new articles here
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mt-6 lg:mb-0">
            <h4 className="font-semibold text-lg mb-2 hover:text-[#6f6863] transition-colors">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#6f6863] transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
              <Link className="hover:text-[#6f6863] transition-colors" href="/">
                  Blog
                </Link>
              </li>
              <li>
              <Link className="hover:text-[#6f6863] transition-colors" href="/">
                  About
                </Link>
              </li>
              <li>
              <Link className="hover:text-[#6f6863] transition-colors" href="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mt-6 lg:mb-0">
            <h4 className="text-lg font-semibold mb-2  hover:text-[#6f6863] transition-colors">
              Follow US
            </h4>

            <div className="flex space-x-4 mb-4">

              <Link className="hover:text-[#6f6863] text-white" href="">
              <FaGithub className="w-[22px] h-[22px]" />
              </Link>

              <Link className="hover:text-[#6f6863] text-white" href="">
              <FaLinkedin className="w-[22px] h-[22px]" />
              </Link>
              
              <Link className="hover:text-[#6f6863] text-white" href="">
              <FaInstagram className="w-[22px] h-[22px]" />
              </Link>
            
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 pb-3 border-t border-gray-500 flex justify-center items-center gap-1">
          <FaRegCopyright className="hover:text-[#6f6863]" />
          <p>2024 Khan Blogs All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

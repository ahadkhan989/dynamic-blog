"use client";
import Image from "next/image";
import Link from "next/link";
import { PiGitlabLogoBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <div className="bg-[#DDD0C8] pb-12">
      <div className="w-full text-black font-bold text-center mt-1 py-3">
        <h1 className="text-4xl max-sm:text-xl font-serif mt-1">
          Welcome to Khan Blogs
        </h1>
        <h4 className="text-xl px-4 font-sans">
          Exploring the frontiers of Artificial Intelligence&apos;s
        </h4>
      </div>
      <div className="flex-grow container mx-auto px-4 py-6 mt-16">
        <div className="flex gap-40 ">
          <div className="w-[600px] leading-[60px] text-2xl  pl-8">
            <h1 className="text-4xl flex items-center text-[#020202] font-serif">
              Hey! I am Ahad Khan
              <PiGitlabLogoBold className="hidden lg:inline ml-2 w-[28px] h-[28px" />
            </h1>
            <TypeAnimation
              className="font-serif text-[#323232]"
              sequence={[
                "We deliver Blogs.",
                1000,
                "We deliver News.",
                1000,
                "We deliver Articles.",
                1000,
                "We deliver Media.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <p className="mt-10 text-[#686868] leading-7 tracking-[0.2]">
              Explore the world of artificial intelligence with our in-depth
              articles, expert analysis, and practical guides. Learn about
              machine learning, deep learning, and the future of AI.
            </p>
            <button className="w-[150px] h-[40px] bg-[#323232] text-gray-100 hover:bg-[#c3afa3] hover:text-[#323232] transition-colors text-lg font-bold font-serif rounded-3xl mt-4">
              <Link href="/blog">Explore Blogs</Link>
            </button>
          </div>
          <div className="hidden md:inline-block mt-10 ">
            <Image
              className="rounded-3xl"
              src="/bok1.webp"
              alt="Blog-post"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

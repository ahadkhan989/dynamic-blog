"use client";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex w-full max-lg:w-full justify-between items-center container mx-auto max-lg:gap-9 px-4 py-6 mt-16 ">
      <form action="">
        <div className=" px-6 py-12 mb-14 w-[380px] md:w-full bg-[#DDD0C8] rounded-2xl">
          <label
            className="text-3xl text-[#323232] tracking-[0.2]"
            htmlFor="name"
          >
            Name:
          </label>
          <br />
          <input
            className="border-2 mb-3 h-10 w-[300px] text-md rounded-lg px-3 border-[#6f6863] hover:border-[#323232] "
            type="text"
            placeholder="Enter name"
            required
          />
          <br />
          <label
            className="text-3xl text-[#323232] tracking-[0.2]"
            htmlFor="email"
          >
            Email:
          </label>
          <br />
          <input
            className="border-2 mb-3 h-10 w-[300px] text-md rounded-lg px-3 border-[#6f6863] hover:border-[#323232]"
            type="email"
            placeholder="Enter email address"
            required
          />
          <br />
          <label
            className="text-3xl text-[#323232] tracking-[0.2]"
            htmlFor="name"
          >
            Message:
          </label>
          <br />
          <input
            className="border-2 h-10 w-[300px] text-md    rounded-lg px-3 border-[#6f6863] hover:border-[#323232]"
            type="text"
            placeholder="message here"
            required
          />
          <br />
          <button className=" w-[100px] h-[40px] bg-[#323232] text-gray-100 hover:bg-gray-100 hover:text-[#323232] transition-colors text-lg font-bold font-serif rounded-3xl mt-4">
            <Link href="">Submit</Link>
          </button>
        </div>
      </form>
      <div className="max-lg:justify-end hidden md:inline">
        <Image
          src="/cont.jpg"
          alt="contact-image"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}

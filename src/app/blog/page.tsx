import Link from "next/link";
import React from "react";
interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
async function Blog() {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(api);
  const data = await res.json();
  // let res = await fetch(api);
  // let data = await res.json();
  console.log(data);
  return (
    <div className="bg-[#DDD0C8] flex justify-center">
      <div className="bg-[#323232] text-[#FFFDF2] w-4/5 sm:w-2/4 p-8 my-10 rounded-xl">
        <h1 className="text-center font-bold leading-6 tracking-[0.2] text-4xl mb-10">
          Khan Blogs
        </h1>
        <div>
          {data.map((item: BlogPost, index: number) => {
            return (
              <li key={index}>
                <Link href={`/blog/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;

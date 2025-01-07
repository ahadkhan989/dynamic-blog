import CommentSec from "@/components/commentSec";
import React from "react";
type Promises = {
  dynamicBlog: string;
};
export default async function DynamicBlog({
  params,
}: {
  params: Promise<Promises>;
}) {
  const { dynamicBlog } = await params;

  const api = `https://jsonplaceholder.typicode.com/posts/${dynamicBlog}`;
  const res = await fetch(api);
  const data = await res.json();
  // let res = await fetch(api);
  // let data = await res.json();

  // console.log(data)
  return (
    <div className="bg-[#DDD0C8] flex  justify-center ">
      <div className=" bg-[#6f6863] text-white w-4/5 sm:w-2/4 my-32 p-8 rounded-xl">
        <h1 className="text-4xl py-4 text-[#DDD] font-serif text-center mb-5">
          Blog Details
        </h1>
        <div className="space-y-3">
          <h5>
            <span className="font-bold">Blog ID: </span>
            {data.id}
          </h5>

          <h5>
            <span className="font-bold">Blog Title: </span>
            {data.title}
          </h5>
          <h5>
            <span className="font-bold">Blog Content: </span>
            {data.body}
          </h5>
        </div>
        <CommentSec postId={"1"} />
      </div>
    </div>
  );
}

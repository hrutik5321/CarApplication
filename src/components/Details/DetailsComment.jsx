import React from "react";

function DetailsComment() {
  return (
    <div className="sm:w-2/3 mt-4">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="comment user"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 ml-2 bg-gray-100 py-1 px-2 rounded-md shadow-sm border">
          <p className="font-medium text-sm">
            Sinu Chavan{" "}
            <span className="font-normal text-gray-600 text-xs">
              1 hour ago
            </span>
          </p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos voluptatibus nobis, repellendus perferendis excepturi
            sequi doloremque accusantium officia soluta? Doloribus laborum
            perspiciatis veritatis hic cumque molestias deleniti odio dolorum
            officiis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsComment;

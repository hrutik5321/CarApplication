import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function DetailsChatInput() {
  return (
    <div className="sm:w-2/3 mt-3">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="comment user"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 ml-2">
          <p className="text-sm text-gray-500">
            commenting publically as{" "}
            <span className="font-medium">Sinu Chavan</span>
          </p>
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="add comment...."
              className="px-4 py-2 w-full outline-none mr-3 text-sm bg-gray-100 rounded-full"
            />
            <button className="rounded-full hover:bg-gray-100 flex-shrink-0 w-7 h-7 text-center p-1 text-gray-600">
              <ArrowNarrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsChatInput;

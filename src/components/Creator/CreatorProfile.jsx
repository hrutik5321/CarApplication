import React from "react";

function CreatorProfile() {
  return (
    <div className=" py-4 px-3 max-h-60 flex flex-shrink-0 flex-col bg-white items-center border border-gray-300 rounded-md shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        alt="profile user"
        className="w-20 h-20 rounded-full"
      />
      <p className="font-medium text-lg text-blue-500">Sandeep Kunal</p>
      <p className="-mt-1 text-gray-500">@sandy</p>
      <p className="font-medium text-gray-700 mt-3">
        Co-founder of Electric Cars Pvt Ltd
      </p>
      <p className="w-full text-left border-t border-gray-200 mt-3 py-2">
        Number of Followers{" "}
        <span className="text-blue-400 font-medium ml-5">542</span>
      </p>
    </div>
  );
}

export default CreatorProfile;

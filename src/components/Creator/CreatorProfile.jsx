import React from "react";

function CreatorProfile() {
  return (
    <div className=" py-4 px-3 max-h-60 flex flex-shrink-0 flex-col bg-white items-center border border-gray-300 rounded-md shadow-sm">
      <img
        src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png"
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

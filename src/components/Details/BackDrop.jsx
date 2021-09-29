import React from "react";

function BackDrop({ setbackdrop }) {
  return (
    <div
      className="w-full absolute top-0 left-0 h-full bg-black bg-opacity-40 flex items-center justify-center"
      onClick={setbackdrop}
    >
      <div className="w-40 h-40 bg-white">
        <p className="text-lg font-medium">You Have To Pay Extra</p>
      </div>
    </div>
  );
}

export default BackDrop;

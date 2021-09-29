import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";

function BackDrop({ setbackdrop }) {
  return (
    <div className="w-full fixed top-0 left-0 h-full flex items-center justify-center">
      <div className=" bg-white px-5 py-2 sm:px-11 sm:py-5 w-2/5 text-center relative z-10">
        <p className="font-medium text-left">
          To viewing more analytics information, you were requested to pay as a
          contribution to <br /> researcher/creator
        </p>
        <p className="text-2xl">$ 1</p>
        <button className="py-1 px-12 mt-3 bg-blue-600 text-white rounded-md">
          Pay
        </button>
        <p className="text-sm text-blue-400 mt-3">Tearms & conditions</p>
        <XCircleIcon
          className="w-8  absolute top-1 right-1 p-1 text-gray-700 cursor-pointer"
          onClick={setbackdrop}
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
        onClick={setbackdrop}
      ></div>
    </div>
  );
}

export default BackDrop;

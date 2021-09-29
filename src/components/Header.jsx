import React from "react";
import { BellIcon } from "@heroicons/react/solid";
import DropDown from "./DropDown";

function Header() {
  return (
    <div className="py-2 px-3 flex justify-between items-center border-b border-gray-300 bg-white">
      <p className="text-lg font-semibold text-gray-500">About</p>
      <div className="flex items-center">
        <div className="relative">
          <BellIcon className="w-6 mr-2 mt-1 text-gray-600" />
        </div>
        <p className="mr-2 font-medium">
          Switch to <span className="text-blue-400">Creator</span>
        </p>
        <DropDown />
      </div>
    </div>
  );
}

export default Header;

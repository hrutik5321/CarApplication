import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import LeftDropDown from "./SearchFilterDropDowns/LeftDropDown";
import CenterDropDown from "./SearchFilterDropDowns/CenterDropDown";
import RightDropDown from "./SearchFilterDropDowns/RightDropDown";

function SearchFilter() {
  return (
    <div>
      <div className="flex justify-between items-end">
        <p className="text-xs">
          <span className="text-2xl font-bold text-blue-400 mr-1">Beingh</span>
          Analist Web Serway
        </p>
        <p className="text-base text-blue-400 font-semibold">Save Filter</p>
      </div>
      <div className="flex mt-2 items-start">
        <div className="block text-left left">
          <LeftDropDown />
        </div>
        <div className="block text-left center">
          <CenterDropDown />
        </div>
        <div className="block text-left right">
          <RightDropDown />
        </div>
        <SearchIcon className="w-6 ml-2 text-gray-500" />
      </div>
    </div>
  );
}

export default SearchFilter;

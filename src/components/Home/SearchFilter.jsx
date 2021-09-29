import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

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
      <div className="flex mt-2">
        <label className="block text-left flex-1 ">
          <select className="form-select block w-full mt-1 py-1 px-2 text-sm text-gray-600 border border-gray-400 rounded-sm outline-none">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
        <label className="block text-left flex-1 ml-1">
          <select className="form-select block w-full mt-1 py-1 px-2 text-sm text-gray-600 border border-gray-400 rounded-sm outline-none">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
        <label className="block text-left flex-1 ml-1">
          <select className="form-select block w-full mt-1 py-1 px-2 text-sm text-gray-600 border border-gray-400 rounded-sm outline-none">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
        <SearchIcon className="w-6 ml-2 text-gray-500" />
      </div>
    </div>
  );
}

export default SearchFilter;

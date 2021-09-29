import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function ContentField({ creator, drafted }) {
  return (
    <div className="p-2 border shadow-md rounded-md mt-5 bg-white overflow-hidden">
      <div className="flex justify-between">
        <div>
          <span className="text-sm font-medium">Sandeep Kumar</span>
          <span className="ml-1 text-xs text-gray-600">@sandy</span>
          <span className="text-xs ml-1 font-medium text-gray-800">
            Co founder of electronics cars
          </span>
        </div>

        <div className="flex">
          {creator && (
            <div>
              <button className="px-3 h rounded-md mr-3 bg-blue-700 text-white font-medium">
                edit
              </button>
            </div>
          )}
          {drafted ? (
            <div>
              <button className="px-3 rounded-md mr-3 bg-blue-700 text-white font-medium">
                Publish
              </button>
            </div>
          ) : (
            <p className="text-sm font-medium flex-shrink-0">3 min read</p>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center">
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarIcon className="w-4 text-yellow-400" key={i} />
            ))}{" "}
          <span className="text-xs ml-1 p-0">67</span>
        </div>
        <p className="text-sm ml-5">
          80k <span className="text-gray-400">views</span>
        </p>
      </div>
      <p className="text-sm font-medium mt-2 mb-2">Battery-Electric cars</p>
      <p className="text-sm w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos
        nemo sapiente tempora est ipsum ut laboriosam repellendus labore magnam
        nesciunt minus, praesentium consectetur tempore culpa nobis edrfsef dsf
        sfgsg sdfsdfd fwswfs sdfsf sjdfsdb wgdbu egdukyeyfhweg grfg ebiwqgbe kye
        wqeyqwg e eygwq egiuweg hag igeughuwgd iuagedhwid jkgdg sudb
      </p>
      <div className="flex-1 text-right text-sm">
        <Link to="/detail" className="text-blue-500 ">
          ......See more
        </Link>
      </div>
    </div>
  );
}

export default ContentField;

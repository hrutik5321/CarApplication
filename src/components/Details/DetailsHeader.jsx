import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/outline";
import MoreInfoButton from "../MoreInfoButton";
import { Link } from "react-router-dom";

function DetailsHeader({ showprice }) {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full md:w-3/4  mt-2">
        <div className="ml-3 sm:ml-0 sm:flex sm:justify-between">
          <div>
            <Link to="/creator">
              <span className="text-base font-medium">Sandeep Kumar</span>
              <span className="ml-1 text-base text-gray-600">@sandy</span>
              <span className="text-base ml-1 font-medium text-gray-800">
                Co founder of electronics cars
              </span>
            </Link>
            <div className="flex">
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_) => (
                    <StarIcon className="w-5 text-yellow-400" />
                  ))}{" "}
                <span className="text-xs ml-1 p-0">67</span>
              </div>
              <p className="text-sm ml-5">
                80k <span className="text-gray-400">views</span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Your reviews</p>
            {Array(5)
              .fill()
              .map((_) => (
                <OutlineStarIcon className="w-4 text-yellow-400" />
              ))}
            <MoreInfoButton showbackdrop={showprice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader;

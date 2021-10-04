import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function LeftDropDown() {
  const [dropShow, setDropShow] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const onChangeHandler = () => {
    setDropShow(!dropShow);
  };

  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  const checkContent = [
    "Master feature",
    "Feature",
    "Userstory",
    "New request",
    "Theme",
    "Release",
    "Release phase",
    "Goal",
    "Workspace",
    "To-do",
    "Work request",
    "Time tracking event",
    "Integration",
  ];

  return (
    <div className="relative w-full">
      <div
        className="w-full border flex justify-between items-center"
        onClick={onChangeHandler}
      >
        <span className="ml-2">{activeItem ? activeItem : "Automobile"}</span>
        <span className="mr-2">
          <ChevronDownIcon className="w-4" />
        </span>
      </div>

      <form
        className={
          !dropShow
            ? "hidden z-10"
            : "origin-top-right z-10 border shadow-md absolute left-0 w-full bg-white  focus:outline-none"
        }
      >
        <div className="">
          {checkContent.map((item, i) => {
            return (
              <p
                className={
                  activeItem === item
                    ? "flex items-center text-sm bg-blue-500 text-white pl-2 cursor-pointer "
                    : "flex items-center text-sm pl-2 cursor-pointer text-gray-800"
                }
                onClick={() => changeActiveItem(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
      </form>
      <button type="submit"></button>
    </div>
  );
}

export default LeftDropDown;

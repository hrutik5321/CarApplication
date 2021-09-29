import React, { useState } from "react";

function DropDown() {
  const [dropShow, setDropShow] = useState(false);

  const onChangeHandler = () => {
    setDropShow(!dropShow);
  };

  const dropDownContent = [
    "Settings",
    "Bank Account Details",
    "Your Paid Posts",
    "Notifications",
    "FAQ",
    "Contact us",
  ];

  return (
    <div className="relative cursor-pointer rounded-md inline-block text-left ml-2 hover:bg-gray-200">
      <div onClick={onChangeHandler} className="flex">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="profile user"
          className="rounded-full w-10 h-10 ml-2 cursor-pointer z-0"
        />
      </div>

      <div
        className={
          !dropShow
            ? "hidden z-10"
            : "origin-top-right z-10 border shadow-md absolute right-0 mt-4 w-56 rounded-md bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          {dropDownContent.map((content, i) => {
            return (
              <p
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-1"
                key={i}
              >
                {content}
              </p>
            );
          })}
        </div>
        <div className="py-1" role="none">
          <p
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-6"
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default DropDown;

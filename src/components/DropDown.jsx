import React, { useState } from "react";

function DropDown() {
  const [dropShow, setDropShow] = useState(false);

  const onChangeHandler = () => {
    setDropShow(!dropShow);
  };

  return (
    <div className="relative cursor-pointer rounded-md inline-block text-left ml-2 hover:bg-gray-200">
      <div onClick={onChangeHandler} className="flex">
        <img
          src="https://lh3.googleusercontent.com/_LTeIN1ou6DJcbRlk9POitJ4h4GXKcixlEYpwwElxuCyciGEe8irdQ5lgSyE58KWP8HLNMRymmQ5rDtzIlagxAqlv4gSTgzxLxF5yMuXWpa8zoXXMV1X3X71yG72kHKWtrv7RR__qz5AAEQhc741nezJaKK_5jwWq0Fcf7vfLu9rpjMGKskTaiH04ujXGAdgckj9Kt7Yq5TC2jvwq-weSKgfgvIwQwDmI7frMoC5h-hLK6ozSq25VOqEzudyQ3DWZwPX3IcPpm33q2yShXacfBltXLf3cy3p9S04J9AAa42w0ohmeAkSOGH0RY0iLVQEPg_d5uCtZ3igwtsxv8FBakiTCXPqQvfxxJn9oj9PzdapmfNFfFmXlaMBtxJ3xY8lbCnIFtADOj0p7YHyzv1ZN45r2dM1AOEVx3a2vGaqdAKlgvAaeXuHp2M414eSSI_1wJF8mfdNRH-qBWGu6NsYcHJowbejAm_APeeyBhNxKcik32gjwUlF12Nw-BilJD5z3xUpPb99CwYS0a709W-IIYOHbNc7eKg3NFkEvew8hkuWUxD-NB21paLplQFU0EMCzXQmEAZ2caPF9OMRGW4ahnknBLuMfIbcyuvnx0VfVcBH-UdwHzFqnHp7ZsoDOgGMc0txnbXnuQtb9QNeROu4MMqYl5DotFakL5bxL6Q5KUoqZCnqVvavYcGO4LcW-Tx3Ra8nY3dk4LyuTskc_6WJmq4U=s882-no?authuser=0"
          alt="profile user"
          className="rounded-full w-10 h-10 ml-2 z-10 cursor-pointer "
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
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <p
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Edit
          </p>
          <p
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            // @ts-ignore
            tabIndex="-1"
            id="menu-item-1"
          >
            Friends
          </p>
        </div>
        <div className="py-1" role="none">
          <a href="/login">
            <p
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-6"
            >
              Logout
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropDown;

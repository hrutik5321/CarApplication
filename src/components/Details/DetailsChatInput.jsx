import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function DetailsChatInput() {
  return (
    <div className="w-2/3 mt-3">
      <div className="flex">
        <img
          src="https://lh3.googleusercontent.com/4h67HVaIr2TYBI60kLbq_5T0joZ5z6tVhVsStbwVTwPoOU1wd8PkAMvvWY2H0icsPyEoHIMPExX2tYpCWGQ3iUCoyIsq1korBSnsql0Y9Jilc24Pfm7q9KvozALQCgu2TCBxo6u3SdZciW8F-06bM5dG5T3RZfFAuaN0ZfInzpoR5QBJjdKRepOPbaEZ9hup1Fq2nppKWXeWG2P2Xi-0OgaPz2re1svtaIu6ygZQucUimNboPU6HPY0QT3PrUWyxYKRxj_EPxv6zn5s-DvHEGVvS_doERl6TNrjTt6liWbKC1_AE7PfkgBpO9-IX1ppWWb5J-BdgXj2_S_7NmUVBjLJO3A1gHfihvCCbB4PTYenzGV_XKXcWOhMW2a2ozhzGxKYvxM-07nW_rtyQ-_mpbWLaHWh8mkvnjgsVQZROdxJlj9o3b8WnsxsggxpuiHUWCkzRZdrchPMdIUS6axVIPgSbVMfi_CSF3r2iB9CbF7APvrxNiGx1AA0iz4kGlEsABWYjrALGY2Mel_USV1P6Uw4UwwhkXyjuCUkminfsEizeRBzTkvLWFicrWhydAPHqIo_e9C8mqeK5vhV8SejG3vuoUUDX5w2fKkYeEzV7JpHb61ixZfUJyZwiHljD_KNUIroh9_-3p6G_xv3d8-XibwJ3Z81-jaZtC-Ih9YyJRd3PASiJ2cRmLwYiVyrExE0hgqgiwOE5UIq5pbHKQC0FfQPp=s882-no?authuser=0"
          alt="comment user"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 ml-2">
          <p className="text-sm text-gray-500">
            commenting publically as{" "}
            <span className="font-medium">Sinu Chavan</span>
          </p>
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="add comment...."
              className="px-4 py-2 w-full outline-none mr-3 text-sm bg-gray-100 rounded-full"
            />
            <button className="rounded-full hover:bg-gray-100 flex-shrink-0 w-7 h-7 text-center p-1 text-gray-600">
              <ArrowNarrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsChatInput;

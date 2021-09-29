import React, { useState } from "react";
import Header from "../components/Header";
import ContentField from "../components/Home/ContentField";
import CreatorProfile from "../components/Creator/CreatorProfile";

function Creator() {
  const [published, setPublished] = useState(true);

  return (
    <>
      <Header />
      <div className="w-full p-0 sm:p-6 bg-gray-100 sm:min-h-screen">
        <div className="w-full sm:w-11/12 md:w-10/12  sm:flex">
          <CreatorProfile />
          <div className="mt-5 sm:mt-0 ml-3 w-11/12 sm:w-full">
            <div className="py-5 px-4 bg-white border shadow-sm rounded-md">
              <input
                type="text"
                className="bg-gray-200 text-black w-full py-2 px-5 rounded-full outline-none"
                placeholder="Start a analytics posts"
              />
            </div>
            <div className="w-full mt-3">
              <div className="flex -mb-2">
                <p
                  className={
                    published
                      ? "ml-4 pb-2 border-b-2 border-blue-500 px-2"
                      : "ml-4 cursor-pointer"
                  }
                  onClick={() => setPublished(true)}
                >
                  Published
                </p>

                <p
                  className={
                    published
                      ? "ml-4 cursor-pointer"
                      : "ml-4 pb-2 border-b-2 border-blue-500 px-2"
                  }
                  onClick={() => setPublished(false)}
                >
                  Drafted
                </p>
              </div>
              {published ? (
                <ContentField creator={true} drafted={false} />
              ) : (
                <ContentField creator={true} drafted={true} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creator;

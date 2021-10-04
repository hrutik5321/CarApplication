import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/Home/SearchFilter";
import ContentField from "../components/Home/ContentField";

function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="w-full flex items-center flex-col mt-3">
        <div className="w-full sm:w-9/12 border px-4 pt-3 shadow-md rounded-md bg-white">
          <SearchFilter />
        </div>
        <div className="w-11/12 sm:w-3/5 mt-4">
          <ContentField creator={false} drafted={false} />
          <ContentField creator={false} drafted={false} />
          <ContentField creator={false} drafted={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;

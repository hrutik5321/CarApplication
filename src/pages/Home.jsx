import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/Home/SearchFilter";
import ContentField from "../components/Home/ContentField";

function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="w-full flex items-center flex-col mt-3">
        <div className="w-1/2 border px-4 py-3 shadow-md rounded-md bg-white">
          <SearchFilter />
        </div>
        <div className="w-3/5 mt-4">
          <ContentField />
          <ContentField />
          <ContentField />
          <ContentField />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Header from "../components/Header";
import BackDrop from "../components/Details/BackDrop";
import DetailsContent from "../components/Details/DetailsContent";
import DetailsChatInput from "../components/Details/DetailsChatInput";
import DetailsComment from "../components/Details/DetailsComment";
import DetailsHeader from "../components/Details/DetailsHeader";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Details() {
  const [backdrop, setBackdrop] = useState(false);
  return (
    <div className="w-full h-screen relative">
      <Header />
      <div className="p-1 ml-3 hover:bg-gray-200 rounded-full w-min mt-2 cursor-pointer">
        <Link to="/">
          <ArrowLeftIcon className="w-6 text-gray-700" />
        </Link>
      </div>
      <DetailsHeader showprice={() => setBackdrop(!backdrop)} />
      <DetailsContent />
      <div className="w-full flex justify-center mb-12">
        <div className="mt-1 w-3/4 flex flex-col">
          <div className="flex items-center h-6">
            <span className="text-base text-blue-500">Comments</span>
            <ChatAlt2Icon className="w-5 text-blue-600" />
          </div>
          <DetailsChatInput />
          <DetailsComment />
          <DetailsComment />
          <DetailsComment />
          <DetailsComment />
          <DetailsComment />
          <DetailsComment />
        </div>
      </div>
      {backdrop && <BackDrop setbackdrop={() => setBackdrop(!backdrop)} />}
    </div>
  );
}

export default Details;

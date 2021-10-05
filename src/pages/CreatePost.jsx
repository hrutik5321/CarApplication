import React, { useState } from "react";
import Header from "../components/Header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CreatePost() {
  const [text, setText] = useState("");
  const [showSlide, setShowSlide] = useState(false);
  const [subheading, setSubheading] = useState("");
  let history = useHistory();

  return (
    <>
      <Header />
      <div
        className="p-1 ml-3 hover:bg-gray-200 rounded-full w-min mt-2 cursor-pointer"
        onClick={() => history.goBack()}
      >
        <ArrowLeftIcon className="w-6 text-gray-700" />
      </div>
      <div className="w-full flex justify-center mt-3">
        <div className="w-11/12 lg:w-7/12 flex items-center px-4 py-2 border shadow-md">
          <div className="flex-1">
            <label htmlFor="" className="text-sm font-medium">
              Select Post Category
            </label>
            <select
              name="select"
              className="w-full mt-2 border border-gray-400 py-1 px-1 rounded-md outline-none"
              placeholder="Search Items"
            >
              <option>Master feature</option>
              <option>Feature</option>
              <option>Userstory</option>
              <option>New request</option>
              <option>Theme</option>
            </select>
          </div>
          <div className="flex-1 ml-2">
            <label htmlFor="" className="text-sm font-medium">
              Select Post Sub Category
            </label>
            <select
              name="select"
              className="w-full mt-2 border border-gray-400 rounded-md px-1 py-1 outline-none"
              placeholder="Search Items"
            >
              <option>New request</option>
              <option>Master feature</option>
              <option>Feature</option>
              <option>Userstory</option>
              <option>Theme</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-7/12 mb-6">
          <div className="mt-2">
            <label>Heading</label>
            <input
              type="text"
              className="w-full border rounded-sm px-2 py-1 mt-1 outline-none border-gray-400"
            />
          </div>
          <div className="mt-2">
            <label>sub Heading</label>
            <input
              type="text"
              className="w-full border rounded-sm px-2 py-1 mt-1 outline-none border-gray-400"
              placeholder="Ex. Retail Sales Manager"
            />
          </div>
          <div className="mt-4">
            <label>Details</label>
            <CKEditor
              editor={ClassicEditor}
              data={text}
              config={{ placeholder: "Enter details" }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="imageInput"
              className="px-3 py-1 rounded-md mt-6 bg-blue-600 text-white"
            >
              Upload image
            </label>
            <input type="file" id="imageInput" className="hidden" />
          </div>
          {subheading && (
            <div className="flex mt-4">
              <select className="px-3 border border-black rounded-sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <p className="ml-2 font-semibold text-sm">Min Read</p>
            </div>
          )}
          <div className="w-full flex flex-col items-center">
            <div
              className="relative flex items-center mt-6"
              onClick={() => setShowSlide(!showSlide)}
            >
              <div className="cursor-pointer text-center w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center relative text-white">
                <span>+</span>
              </div>
              {showSlide && (
                <div className=" absolute  bg-gray-200 clip__path px-2">
                  <p
                    className="ml-6 pr-2 cursor-pointer hover:text-blue-600"
                    onClick={() => setSubheading("Paid")}
                  >
                    Paid
                  </p>
                  <p
                    className="ml-6 pr-2 cursor-pointer hover:text-blue-600"
                    onClick={() => setSubheading("Free")}
                  >
                    Free
                  </p>
                </div>
              )}
              {subheading && !showSlide && (
                <p className="ml-3 font-semibold">{subheading}</p>
              )}
              {!subheading && !showSlide && (
                <p className="ml-3 font-semibold">Add - Sub heading</p>
              )}
            </div>

            {!subheading && (
              <p>
                Add <span className="font-medium text-blue-500">paid</span> or
                free analytics information{" "}
                <span className="font-medium text-blue-500">Learn more</span>
              </p>
            )}
            {!subheading && (
              <div className="flex mt-4">
                <select className="px-3 border border-black rounded-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <p className="ml-2 font-semibold text-sm">Min Read</p>
              </div>
            )}
            <div className="flex mt-8">
              <button className="px-2 py-1 bg-blue-700 rounded-md font-semibold text-white">
                Save Draft
              </button>
              <button className="ml-6 px-2 py-1 bg-blue-700 rounded-md font-semibold text-white">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;

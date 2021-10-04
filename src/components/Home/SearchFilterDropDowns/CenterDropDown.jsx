import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function CenterDropDown() {
  const [dropShow, setDropShow] = useState(false);
  const [checkBoxContent, setCheckBoxContent] = useState([]);
  const [addItem, setAddItem] = useState(true);

  const onChangeHandler = () => {
    setDropShow(!dropShow);
  };

  const CheckBoxLength = () => {
    if (checkBoxContent.length > 1) {
      setAddItem(false);
    }
  };

  const onItemChange = (item) => {
    if (checkBoxContent.includes(item)) {
      const itemIndex = checkBoxContent.findIndex((i) => i === item);
      const checkList = checkBoxContent;
      checkList.splice(itemIndex, 1);
      setCheckBoxContent(checkList);
      setAddItem(true);
    } else {
      setCheckBoxContent([...checkBoxContent, item]);
    }
  };

  useEffect(() => {
    CheckBoxLength();
  }, [checkBoxContent]);

  const checkContent = [
    "Master Feature assigned to user",
    "Master Feature created by user",
    "Master Feature created date",
    "Master feature description",
    "Master feature due date",
    "Master feature last active",
    "Master feature last status change",
    "Master feature name",
    "Master feature name search",
    "Master feature progress",
    "Master feature score",
    "Master feature start date",
    "Master feature status",
    "Master feature tags",
    "Total new request linked to master features",
    "Toatal votes on new requests linked to master",
  ];

  const customFileds = [
    "Go live date",
    "Personas",
    "Revised Estimate",
    "Website URL",
  ];

  const scoreCardMetrics = [
    "Business impact (GEODIS Prioritization)",
    "Customer impact (GEODIS Prioritization)",
  ];

  return (
    <div className="relative w-full">
      <div
        className="w-full border flex justify-between items-center"
        onClick={onChangeHandler}
      >
        <span className="ml-2">Electric cars</span>
        <span className="mr-2">
          <ChevronDownIcon className="w-4" />
        </span>
      </div>

      <form
        onSubmit={onChangeHandler}
        className={
          !dropShow
            ? "hidden z-10"
            : "origin-top-right z-10 border shadow-md absolute left-0 w-full bg-white  focus:outline-none pl-2 max-h-96 overflow-y-scroll"
        }
      >
        <p className="font-semibold text-sm mt-2">Master Feature</p>
        <div className="ml-3">
          {checkContent.map((item, i) => {
            return (
              <p className="flex items-center text-sm text-gray-800">
                <input
                  type="checkbox"
                  onChange={() => onItemChange(item)}
                  disabled={
                    !addItem && !checkBoxContent.includes(item) ? true : false
                  }
                />
                <span className="ml-2">{item}</span>
              </p>
            );
          })}
        </div>
        <p className="font-semibold text-sm mt-2">
          Master feature Custom fields
        </p>
        <div className="ml-3">
          {customFileds.map((item, i) => {
            return (
              <p className="flex items-center text-sm text-gray-800">
                <input
                  type="checkbox"
                  onChange={() => onItemChange(item)}
                  disabled={
                    !addItem && !checkBoxContent.includes(item) ? true : false
                  }
                />
                <span className="ml-2">{item}</span>
              </p>
            );
          })}
        </div>
        <p className="font-semibold text-sm mt-2">
          Master feature Custom fields
        </p>
        <div className="ml-3">
          {scoreCardMetrics.map((item, i) => {
            return (
              <p className="flex items-center text-sm text-gray-800">
                <input
                  type="checkbox"
                  onChange={() => onItemChange(item)}
                  disabled={
                    !addItem && !checkBoxContent.includes(item) ? true : false
                  }
                />
                <span className="ml-2">{item}</span>
              </p>
            );
          })}
        </div>
      </form>
      <button type="submit"></button>
    </div>
  );
}

export default CenterDropDown;

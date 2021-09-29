import React from "react";

function MoreInfoButton({ showbackdrop }) {
  return (
    <div>
      <button
        className="bg-blue-700 px-6 py-1 text-sm font-medium text-white ml-4 rounded-md"
        onClick={showbackdrop}
      >
        More Info
      </button>
    </div>
  );
}

export default MoreInfoButton;

import React from "react";

function MultiSelect() {
  return (
    <form>
      <label className="block text-left flex-auto ml-1">
        <select className="form-select block w-full mt-1 py-1 px-2 text-sm text-gray-600 border border-gray-400 rounded-sm outline-none">
          <option>ELectric Cars</option>
          <option>Option 2</option>
        </select>
      </label>
    </form>
  );
}

export default MultiSelect;

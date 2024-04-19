import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-x-24">
      <ul className="text-neutral-600 flex items-center gap-x-2">
        <li className="me-2">Prev</li>
        <li className="py-1 px-3.5 border rounded-md select-none hover:bg-neutral-50">
          1
        </li>
        <li className="py-1 px-3.5 border rounded-md hover:bg-neutral-50">2</li>
        <li className="py-1 px-3.5 border rounded-md hover:bg-neutral-50">3</li>
        <li className="py-1 px-3.5 border rounded-md hover:bg-neutral-50">4</li>
        <li className="py-1 px-3.5 border rounded-md hover:bg-neutral-50">5</li>
        <li className="ms-2">Next</li>
      </ul>
      <div className="text-neutral-600">
        <label htmlFor="rows" className="text-sm me-3">
          Rows Per Page
        </label>
        <select
          id="rows"
          className="bg-white py-1 ps-2 border rounded-md focus:outline-none hover:bg-neutral-50 focus:ring-1"
        >
          <option value="">5</option>
          <option value="">10</option>
          <option value="">15</option>
        </select>
      </div>
    </div>
  );
}

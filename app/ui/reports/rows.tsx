"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Rows() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleRowsChange = (rowsCount: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("rows", rowsCount);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="text-neutral-600">
      <label htmlFor="rows" className="text-sm me-3">
        Rows Per Page
      </label>
      <select
        id="rows"
        className="bg-white py-1 ps-2 border rounded-md focus:outline-none hover:bg-neutral-50"
        onChange={(e) => handleRowsChange(e.target.value)}
        defaultValue={Number(searchParams.get("rows")) || 5}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
}

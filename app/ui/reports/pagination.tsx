"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const params = new URLSearchParams(searchParams);
  const createPageURL = (pageNumber: number) => {
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <ul className="text-neutral-600 flex items-center gap-x-2">
      <li className="me-2">
        <Link
          href={createPageURL(currentPage - 1)}
          className={`${
            currentPage <= 1 && "pointer-events-none"
          } flex items-center gap-1`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className=" text-sm">Prev</span>
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="bg-orange-600 text-white py-1.5 px-3.5 rounded-md select-none hover:bg-neutral-50"
        >
          1
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="py-1.5 px-3.5 border rounded-md select-none hover:bg-neutral-50"
        >
          1
        </Link>
      </li>
      <li className="ms-2">
        <Link
          href={createPageURL(currentPage + 1)}
          className={`${
            currentPage >= totalPages && "pointer-events-none"
          } flex items-center gap-1`}
        >
          <span className=" text-sm">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

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
          <ArrowLeftIcon />
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
          <ArrowRightIcon />
        </Link>
      </li>
    </ul>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import { generatePagination } from "@/app/lib/utils";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages: any = generatePagination(currentPage, totalPages);

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

      {pages.map((page: number, index: number) => (
        <li key={page + index}>
          <Link
            href={createPageURL(page)}
            className={`${
              currentPage === page
                ? "bg-orange-600 text-white pointer-events-none"
                : "border hover:bg-neutral-50 select-none"
            } py-1.5 px-3.5 rounded-md`}
          >
            {page}
          </Link>
        </li>
      ))}

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

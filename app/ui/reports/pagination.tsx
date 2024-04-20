"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import { generatePagination } from "@/app/lib/utils";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = generatePagination(currentPage, totalPages);

  return (
    <ul className="text-neutral-600 flex items-center gap-x-2">
      <li className="xs:me-2">
        <Link
          href={createPageURL(currentPage - 1)}
          className={`${
            currentPage <= 1 && "pointer-events-none text-gray-400"
          } flex items-center gap-1 border xs:border-none rounded-md p-1 select-none`}
        >
          <ArrowLeftIcon />
          <span className="hidden xs:block text-sm">Prev</span>
        </Link>
      </li>

      {pages.map((page, index) =>
        page !== "..." ? (
          <li key={page}>
            <Link
              href={createPageURL(page)}
              className={`${
                currentPage === page
                  ? "bg-orange-600 text-white pointer-events-none"
                  : "border hover:bg-neutral-50"
              } py-1 px-2.5 xs:py-1.5 xs:px-3.5 rounded-md select-none`}
            >
              {page}
            </Link>
          </li>
        ) : (
          <li key={page + index} className="px-0.5 select-none">
            {page}
          </li>
        )
      )}

      <li className="xs:ms-2">
        <Link
          href={createPageURL(currentPage + 1)}
          className={`${
            currentPage >= totalPages && "pointer-events-none text-gray-400"
          } flex items-center gap-1 border xs:border-none rounded-md p-1 select-none`}
        >
          <span className="hidden xs:block text-sm">Next</span>
          <ArrowRightIcon />
        </Link>
      </li>
    </ul>
  );
}

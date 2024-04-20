import { CloseIcon, FilterIcon } from "../icons";
import Link from "next/link";

export default function ReportsHeader() {
  return (
    <div className="py-4 relative">
      <h3 className="sm:text-xl font-bold md:text-center ps-4 xs:ps-6 md:p-0">
        Recently Generated Reports
      </h3>
      <div className="absolute right-2 top-4">
        <button className="me-2 sm:me-4 p-1 border-2 border-neutral-400 rounded-md shadow-sm hover:bg-neutral-100">
          <FilterIcon />
        </button>
        <Link href={"/"}>
          <button className="me-2 sm:me-4 p-1 border-2 border-neutral-400 rounded-md shadow-sm hover:bg-neutral-100">
            <CloseIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { fetchReports } from "../lib/data";
import ReportsTable from "../ui/reports/table";
import Pagination from "../ui/reports/pagination";
import Rows from "../ui/reports/rows";

export default async function Reports({
  searchParams,
}: {
  searchParams: { page: string; rows: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const rowsPerPage = Number(searchParams?.rows || 5);

  const { reports, totalPages }: any = await fetchReports(
    currentPage,
    rowsPerPage
  );

  return (
    <div className="min-h-screen text-neutral-800 flex items-center justify-center">
      <div className="h-[calc(100vh-48px)] w-[calc(100vw-48px)] border rounded-lg shadow-lg">
        <div className="h-full flex flex-col">
          <div className="py-4 relative">
            <h3 className="text-xl font-bold text-center">
              Recently Generated Reports
            </h3>
            <div className="absolute right-2 top-4">
              <button className="me-4 p-1 border-2 border-neutral-400 rounded-md shadow-sm hover:bg-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 text-neutral-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>
              </button>
              <Link href={"/"}>
                <button className="me-4 p-1 border-2 border-neutral-400 rounded-md shadow-sm hover:bg-neutral-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 text-neutral-800"
                  >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="h-full overflow-auto">
            <ReportsTable reports={reports} />
          </div>
          <div className="py-4 flex justify-center items-center gap-x-24 border-t">
            <Pagination totalPages={totalPages} />
            <Rows />
          </div>
        </div>
      </div>
    </div>
  );
}

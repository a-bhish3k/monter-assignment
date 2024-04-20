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
    <>
      <div className="h-full overflow-auto">
        <ReportsTable reports={reports} />
      </div>
      <div className="py-4 flex flex-wrap justify-center items-center gap-y-6 gap-x-24 border-t">
        <Pagination totalPages={totalPages} />
        <Rows />
      </div>
    </>
  );
}

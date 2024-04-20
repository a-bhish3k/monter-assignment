import { Report } from "@/app/lib/definitions";
import { DownloadIcon } from "../icons";

export default function ReportsTable({ reports }: { reports: Report[] }) {
  return (
    <table className="table-auto w-full">
      <thead className="bg-neutral-100 sticky top-0">
        <tr className="text-sm text-left text-neutral-600">
          <th className="py-2 ps-3 sm:ps-6">Date</th>
          <th>Report Name</th>
          <th className="text-right pe-3 sm:pe-6">Download</th>
        </tr>
      </thead>
      <tbody className="text-sm sm:text-base lg:text-lg">
        {reports?.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-3 sm:px-6 leading-6">
              {item.date} <br />
              <span className="text-sm font-bold text-neutral-500">
                {item.time}
              </span>
            </td>
            <td className="align-top py-2 pt-2 sm:pe-4 break-all">
              {item.report_name}
            </td>
            <td className="pe-8 sm:pe-10">
              <a href={item.download_link} download>
                <DownloadIcon />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

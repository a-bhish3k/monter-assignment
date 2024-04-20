import { Report } from "@/app/lib/definitions";
import { DownloadIcon } from "../icons";

export default function ReportsTable({ reports }: { reports: Report[] }) {
  return (
    <table className="table-auto min-w-full">
      <thead className="bg-neutral-100 sticky top-0">
        <tr className="text-sm text-left text-neutral-600">
          <th className="py-2 ps-6">Date</th>
          <th>Report Name</th>
          <th className="text-right pe-6">Download</th>
        </tr>
      </thead>
      <tbody className="text-lg">
        {reports?.map((item) => (
          <tr key={item.id}>
            <td className="py-2 ps-6 leading-6">
              {item.date} <br />
              <span className="text-sm font-bold text-neutral-500">
                {item.time}
              </span>
            </td>
            <td className="align-top pt-2">{item.report_name}</td>
            <td className="pe-10">
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

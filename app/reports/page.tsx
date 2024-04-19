import Link from "next/link";

export default function Reports() {
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
            <table className="table-auto min-w-full">
              <thead className="bg-neutral-100">
                <tr className="text-sm text-left text-neutral-600">
                  <th className="py-2 ps-6">Date</th>
                  <th>Report Name</th>
                  <th className="text-right pe-6">Download</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr>
                  <td className="py-2 ps-6 leading-6">
                    27.01.2021 <br />
                    <span className="text-sm font-bold text-neutral-500">
                      12:25 PM
                    </span>
                  </td>
                  <td className="align-top pt-2">
                    App_url_somw_now_ajfdka;skdsa.csv
                  </td>
                  <td className="pe-10">
                    <a href="/favicon.ico" download>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 ml-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="py-4 border-t">hello</div>
        </div>
      </div>
    </div>
  );
}

export async function fetchReports(currentPage: number, rowsPerPage: number) {
  const offset = (currentPage - 1) * rowsPerPage;
  const limit = rowsPerPage * currentPage;
  try {
    const response = await fetch(
      "https://my.api.mockaroo.com/reports?key=26528280"
    );
    const data = await response.json();
    const reports = data.slice(offset, limit);
    const totalPages = Math.ceil(data.length / rowsPerPage);
    return { reports, totalPages };
  } catch (error) {
    console.error("Error while fetching:", error);
  }
}

// fetching everytime page changes improve this and add rows option

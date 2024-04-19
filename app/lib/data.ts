export async function fetchReports() {
  const response = await fetch(
    "https://my.api.mockaroo.com/reports?key=26528280"
  );
  const data = await response.json();
  return data;
}

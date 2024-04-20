import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link href={"/reports"}>
        <button className="bg-orange-600 text-sm text-white font-bold py-2.5 px-3.5 rounded-lg shadow-sm hover:bg-orange-500">
          Open Reports
        </button>
      </Link>
    </main>
  );
}

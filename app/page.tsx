import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link href={"/reports"}>
        <button className="text-sm text-neutral-800 font-bold py-2.5 px-3.5 border rounded-lg shadow-sm hover:bg-neutral-50">
          Open Reports
        </button>
      </Link>
    </main>
  );
}

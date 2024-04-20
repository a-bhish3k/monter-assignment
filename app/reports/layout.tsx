import type { Metadata } from "next";
import ReportsHeader from "../ui/reports/header";

export const metadata: Metadata = {
  title: "Monter | Reports",
  description: "Recently generated reports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen text-neutral-800 flex items-center justify-center">
      <div className="h-[calc(100vh-48px)] w-[calc(100vw-48px)] flex flex-col border rounded-lg shadow-lg">
        <ReportsHeader />
        {children}
      </div>
    </main>
  );
}

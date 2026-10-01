import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <div className="flex-1">{children}</div>
      <div className="p-4 border-t border-slate-800 bg-slate-950/90">
        <Link
          href="/vexlsgg"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-700/60 bg-slate-900 text-cyan-300 text-sm font-medium hover:bg-slate-800 hover:text-cyan-200 transition"
        >
          View live page
        </Link>
      </div>
    </div>
  );
}

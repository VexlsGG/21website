import Link from "next/link";
import { GlassPanel } from "@/components/GlassPanel";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <GlassPanel className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Welcome to Team 21
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Profile pages are live. Open a demo profile to see dynamic routing in
          action.
        </p>
        <Link
          href="/vexlsgg"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition shadow-lg"
        >
          View Demo Profile
        </Link>
      </GlassPanel>
    </div>
  );
}

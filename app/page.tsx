import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center mb-10">
        Welcome to VibeLink
      </h1>
      <Link
        href="/vexlsgg"
        className="px-8 py-4 rounded-2xl text-white font-semibold tracking-wide
          bg-white/10 backdrop-blur-md border border-cyan-300/40
          shadow-[0_0_28px_rgba(0,255,247,0.55),0_0_60px_rgba(0,186,255,0.25)]
          hover:bg-white/15 hover:border-cyan-200/70
          hover:shadow-[0_0_40px_rgba(0,255,247,0.8),0_0_80px_rgba(0,186,255,0.35)]
          transition duration-300"
      >
        View Demo Profile
      </Link>
    </main>
  );
}

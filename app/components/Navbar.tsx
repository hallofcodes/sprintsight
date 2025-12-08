import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-teal-950 bg-dark">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          SprintSight
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="https://github.com/hallofcodes/sprintsight">Fork</Link>
        </div>
      </div>
    </nav>
  );
}

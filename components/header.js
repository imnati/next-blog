import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-300 px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-3 font-semibold">
        <Image
          src="/next.svg"
          alt="Next Blog"
          width={89}
          height={18}
          priority
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
        <Link
          href="/"
          className="hover:text-zinc-950 focus-visible:text-zinc-900"
        >
          Home
        </Link>
        <Link
          href="/posts"
          className="hover:text-zinc-950 focus-visible:text-zinc-900"
        >
          Posts
        </Link>
      </nav>
    </header>
  );
}

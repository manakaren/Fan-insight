import Link from "next/link";
import React from "react";

export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold tracking-wide text-pink-600">
          Momo Official
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:text-pink-600">
            Blog
          </Link>
          <Link href="/#profile" className="hover:text-pink-600">
            Profile
          </Link>
          <Link href="/#schedule" className="hover:text-pink-600">
            Schedule
          </Link>
        </nav>
      </div>
    </header>
  );
}
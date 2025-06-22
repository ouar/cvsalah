import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 font-sans">
      <header className="py-6 px-4 border-b dark:border-neutral-800">
        <nav className="flex gap-4">
          <Link href="/">Accueil</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-10">{children}</main>
    </div>
  );
}

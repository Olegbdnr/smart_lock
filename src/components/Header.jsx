// app/components/Header.js
"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  // Function to determine if the link is active
  const isActive = (path) => pathname === path ? 'font-bold' : '';

  return (
    <header className="flex justify-between h-16 p-4">
      <div className="flex items-center">
        <img src="/smart-lock.png" alt="logo" className="w-8 h-8" />
        <span className="ml-2.5 font-bold">SmartLock</span>
      </div>
      <ul className="flex items-center">
        <li className={`mx-4 ${isActive('/')}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`mx-4 ${isActive('/manage')}`}>
          <Link href="/manage">Manage</Link>
        </li>
        <li className={`mx-4 ${isActive('/settings')}`}>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <span className="font-bold mr-2.5">Olexander</span>
        <img src="/man.png" alt="avatar" className="w-8 h-8" />
      </div>
    </header>
  );
}

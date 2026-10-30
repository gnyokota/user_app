'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/users/new', label: 'Add user' },
] as const

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-foreground/10">
      <nav className="mx-auto flex w-full max-w-xl items-center gap-6 px-8 py-4">
        <span className="font-semibold">User App</span>
        <ul className="flex gap-4">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'font-medium underline underline-offset-4'
                      : 'opacity-70 hover:opacity-100'
                  }
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

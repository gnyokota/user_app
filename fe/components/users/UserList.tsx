'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { userQueries } from '@/lib/queries/users'

export function UserList() {
  const { data: users, error, isPending } = useQuery(userQueries.list())

  if (isPending) return <p>Loading users...</p>
  if (error) return <p className="text-red-600">Failed to load users: {error.message}</p>

  if (users.length === 0) {
    return (
      <p>
        No users yet.{' '}
        <Link href="/users/new" className="underline underline-offset-4">
          Add the first one
        </Link>
      </p>
    )
  }

  return (
    <section className="flex flex-col gap-2">
      <p className="opacity-70">
        {users.length} {users.length === 1 ? 'user' : 'users'}
      </p>
      <ul className="divide-y divide-foreground/10">
        {users.map((user) => (
          <li key={user.id} className="py-2">
            {user.firstName} {user.lastName} — <span className="opacity-70">{user.email}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

import type { CreateUserInput, User } from '@/types/user'

// Requests go to `/api/*`, which next.config.ts rewrites to the Spring backend.
export async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users')
  if (!response.ok) throw new Error(`Failed to fetch users (${response.status})`)
  return response.json()
}

export async function createUser(data: CreateUserInput): Promise<User> {
  const response = await fetch('/api/add/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error(`Failed to create user (${response.status})`)
  return response.json()
}

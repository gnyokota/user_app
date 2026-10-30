// Mirrors the backend `Users` entity.
export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

export type CreateUserInput = Omit<User, 'id'>

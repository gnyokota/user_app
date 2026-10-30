'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useCreateUser } from '@/lib/queries/users'
import type { CreateUserInput } from '@/types/user'

type Field = keyof CreateUserInput
type FieldErrors = Partial<Record<Field, string>>

const fields: { name: Field; label: string; type: 'text' | 'email' }[] = [
  { name: 'firstName', label: 'First name', type: 'text' },
  { name: 'lastName', label: 'Last name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: CreateUserInput): FieldErrors {
  const errors: FieldErrors = {}
  for (const { name, label } of fields) {
    if (!values[name]) errors[name] = `${label} is required`
  }
  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Enter a valid email address'
  }
  return errors
}

export function CreateUserForm() {
  const router = useRouter()
  const createUser = useCreateUser()
  const [errors, setErrors] = useState<FieldErrors>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (createUser.isPending) return

    const formData = new FormData(event.currentTarget)
    const values: CreateUserInput = {
      firstName: String(formData.get('firstName') ?? '').trim(),
      lastName: String(formData.get('lastName') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
    }

    const fieldErrors = validate(values)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    createUser.mutate(values, {
      onSuccess: (user) => {
        const fullName = `${user.firstName} ${user.lastName}`
        router.push(`/?created=${encodeURIComponent(fullName)}`)
      },
    })
  }

  return (
    // noValidate: we run our own checks so whitespace-only values get the same inline errors.
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {fields.map(({ name, label, type }) => {
        const error = errors[name]
        const errorId = `${name}-error`
        return (
          <div key={name} className="flex flex-col gap-1">
            <label htmlFor={name} className="font-medium">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className="rounded border p-2 aria-[invalid=true]:border-red-600"
            />
            {error && (
              <p id={errorId} className="text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
        )
      })}
      <button
        type="submit"
        disabled={createUser.isPending}
        className="rounded bg-foreground p-2 text-background disabled:opacity-50"
      >
        {createUser.isPending ? 'Creating...' : 'Create user'}
      </button>
      {createUser.error && (
        <p role="alert" className="text-red-600">
          {createUser.error.message}
        </p>
      )}
    </form>
  )
}

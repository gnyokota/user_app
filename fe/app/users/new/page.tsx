import { CreateUserForm } from '@/components/users/CreateUserForm'

export default function NewUserPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Add user</h1>
      <CreateUserForm />
    </main>
  )
}

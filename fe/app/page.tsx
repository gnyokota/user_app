import { Suspense } from 'react'
import { CreatedNotice } from '@/components/users/CreatedNotice'
import { UserList } from '@/components/users/UserList'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Users</h1>
      {/* useSearchParams needs its own boundary so the rest of the page can prerender. */}
      <Suspense>
        <CreatedNotice />
      </Suspense>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList />
      </Suspense>
    </main>
  )
}

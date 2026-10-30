'use client'

import { useSearchParams } from 'next/navigation'

export function CreatedNotice() {
  const created = useSearchParams().get('created')
  if (!created) return null

  return (
    <p role="status" className="rounded border border-green-600/40 bg-green-600/10 p-3">
      {created} was created.
    </p>
  )
}

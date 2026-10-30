import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser, getUsers } from '@/lib/api/users'

// Keep query keys and options together so every caller shares the same cache entry.
export const userQueries = {
  all: () => ['users'] as const,
  list: () =>
    queryOptions({
      queryKey: [...userQueries.all(), 'list'] as const,
      queryFn: getUsers,
    }),
}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: userQueries.all() }),
  })
}

import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UseMutationResult } from '@tanstack/react-query'
import type { CreateRoomRequest } from './types/create-room-request'
import type { CreateRoomResponse } from './types/create-room-response'

export function useCreateRoom(): UseMutationResult<
  CreateRoomResponse,
  Error,
  CreateRoomRequest
> {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = (await response.json()) as CreateRoomResponse

      return result
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    },
  })
}

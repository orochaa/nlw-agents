import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useRoomQuestions(
  roomId: string
): UseQueryResult<GetRoomQuestionsResponse> {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      )
      const result = (await response.json()) as GetRoomQuestionsResponse

      return result
    },
  })
}

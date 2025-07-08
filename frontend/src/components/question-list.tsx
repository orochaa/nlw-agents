import { useRoomQuestions } from '@/http/use-room-questions'
import type React from 'react'
import { QuestionItem } from './question-item'

interface QuestionListProps {
  roomId: string
}

export function QuestionList(props: QuestionListProps): React.JSX.Element {
  const { data } = useRoomQuestions(props.roomId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-2xl font-semibold">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map(question => {
        return <QuestionItem key={question.id} question={question} />
      })}
    </div>
  )
}

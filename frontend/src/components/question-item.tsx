import { Card, CardContent } from '@/components/ui/card'
import { dayjs } from '@/lib/dayjs'
import { Bot, Loader2, MessageSquare } from 'lucide-react'

interface Question {
  id: string
  question: string
  answer?: string | null
  createdAt: string
  isGeneratingAnswer?: boolean
}

interface QuestionItemProps {
  question: Question
}

export function QuestionItem({
  question,
}: QuestionItemProps): React.JSX.Element {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          {/* Question */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="bg-primary/10 flex size-8 items-center justify-center rounded-full">
                <MessageSquare className="text-primary size-4" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-foreground mb-1 font-medium">Pergunta</p>
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {question.question}
              </p>
            </div>
          </div>

          {!!question.answer || question.isGeneratingAnswer ? (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 flex size-8 items-center justify-center rounded-full">
                  <Bot className="text-secondary-foreground size-4" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-foreground mb-1 font-medium">
                  Resposta da IA
                </p>
                <div className="text-muted-foreground">
                  {question.isGeneratingAnswer ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="text-primary size-4 animate-spin" />
                      <span className="text-primary text-sm italic">
                        Gerando resposta...
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {question.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          <div className="flex justify-end">
            <span className="text-muted-foreground text-xs">
              {dayjs(question.createdAt).toNow()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

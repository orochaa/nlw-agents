import lib from 'dayjs'
import 'dayjs/locale/pt-BR'
import relativeTime from 'dayjs/plugin/relativeTime'

lib.locale('pt-BR')
lib.extend(relativeTime)

export { default as dayjs } from 'dayjs'

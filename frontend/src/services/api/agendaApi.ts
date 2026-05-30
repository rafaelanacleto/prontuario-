import type { AgendaEntry } from '../../types/clinic'
import { httpClient } from './httpClient'

export function getAgendaByDate(date: string) {
  return httpClient<AgendaEntry[]>('/agenda', { query: { date } })
}

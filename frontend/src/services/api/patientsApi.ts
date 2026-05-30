import type { Patient } from '../../types/clinic'
import { httpClient } from './httpClient'

export function listPatients(search = '') {
  return httpClient<Patient[]>('/patients', { query: { search } })
}

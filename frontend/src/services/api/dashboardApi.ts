import type { DashboardResponse } from '../../types/clinic'
import { httpClient } from './httpClient'

export function getDashboard() {
  return httpClient<DashboardResponse>('/dashboard')
}

import type { DashboardResponse } from '../../types/clinic'
import { MetricCard } from '../../components/dashboard/MetricCard'

type DashboardScreenProps = {
  data: DashboardResponse
}

function statusChip(status: string) {
  if (status === 'confirmado') return 'chip chip-green'
  if (status === 'pendente') return 'chip chip-amber'
  if (status === 'faltou') return 'chip chip-red'
  return 'chip chip-blue'
}

export function DashboardScreen({ data }: DashboardScreenProps) {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <article className="card">
        <div className="card-header">
          <h2 className="card-title">
            <i className="ti ti-calendar-event" />
            Sessoes de hoje
          </h2>
          <button className="btn btn-sm" type="button">
            Ver agenda
          </button>
        </div>

        <div className="space-y-2">
          {data.todayAgenda.map((entry) => (
            <div key={entry.id} className="agenda-row">
              <span className="agenda-time">{entry.time}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{entry.patient}</p>
                <p className="text-xs text-text3">
                  {entry.specialty} - {entry.professional}
                </p>
              </div>
              <span className={statusChip(entry.status)}>{entry.status}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

import type { RelatoriosData } from '../../types/clinic'
import { MetricCard } from '../../components/dashboard/MetricCard'

type RelatoriosScreenProps = {
  data: RelatoriosData
}

export function RelatoriosScreen({ data }: RelatoriosScreenProps) {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
        {data.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <article className="card">
        <div className="card-header">
          <h2 className="card-title">
            <i className="ti ti-chart-line" />
            Evolucao de receita - 6 meses
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          {data.revenueTrend.map((item) => (
            <div key={item.month} className="rounded-lg bg-surface2 p-3 text-center">
              <p className="text-xs text-text3">{item.month}</p>
              <p className="mt-1 text-sm font-semibold text-accent">R$ {item.amount.toLocaleString('pt-BR')}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="card">
        <div className="card-header">
          <h2 className="card-title">
            <i className="ti ti-chart-pie" />
            Distribuicao por especialidade
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-text2">
          {data.specialtyDistribution.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2 rounded-full bg-surface2 px-3 py-1">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: item.color }} />
              {item.label} {item.value}
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}

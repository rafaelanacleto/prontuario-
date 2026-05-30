import type { ObjetivosData } from '../../types/clinic'
import { MetricCard } from '../../components/dashboard/MetricCard'

type ObjetivosScreenProps = {
  data: ObjetivosData
}

export function ObjetivosScreen({ data }: ObjetivosScreenProps) {
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
            <i className="ti ti-target" />
            Progresso mensal por paciente
          </h2>
        </div>

        <div className="space-y-3">
          {data.ranking.map((item) => (
            <div key={item.id}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="font-semibold text-accent">{item.progress}%</span>
              </div>
              <div className="prog-bar">
                <div
                  className={item.progress >= 70 ? 'prog-fill' : 'prog-fill prog-fill-amber'}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

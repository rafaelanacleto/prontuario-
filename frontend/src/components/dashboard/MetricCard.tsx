import type { Metric } from '../../types/clinic'

type MetricCardProps = {
  metric: Metric
}

const tones: Record<NonNullable<Metric['tone']>, string> = {
  default: 'text-text',
  blue: 'text-blue',
  green: 'text-accent',
  danger: 'text-danger',
}

export function MetricCard({ metric }: MetricCardProps) {
  const tone = tones[metric.tone ?? 'default']

  return (
    <article className="rounded-[10px] border border-border bg-surface p-4 shadow-soft">
      <p className="mb-1 text-xs font-medium text-text3">{metric.label}</p>
      <p className={`text-2xl font-semibold leading-tight ${tone}`}>{metric.value}</p>
      <p className="mt-1 text-xs text-text3">{metric.sub}</p>
    </article>
  )
}

import type { ProfissionalData } from '../../types/clinic'

type ProfissionaisScreenProps = {
  data: ProfissionalData[]
}

export function ProfissionaisScreen({ data }: ProfissionaisScreenProps) {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      {data.map((professional) => (
        <article key={professional.id} className="card">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {professional.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{professional.name}</p>
              <p className="text-xs text-text3">{professional.role}</p>
            </div>
            <span className="chip chip-green">{professional.active ? 'Ativo' : 'Inativo'}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg bg-surface2 p-2">
              <p className="text-text3">Sessoes</p>
              <p className="text-sm font-semibold">{professional.monthSessions}</p>
            </div>
            <div className="rounded-lg bg-surface2 p-2">
              <p className="text-text3">Repasse</p>
              <p className="text-sm font-semibold text-accent">{professional.payoutPercent}</p>
            </div>
            <div className="rounded-lg bg-surface2 p-2">
              <p className="text-text3">Pacientes</p>
              <p className="text-sm font-semibold">{professional.activePatients}</p>
            </div>
            <div className="rounded-lg bg-surface2 p-2">
              <p className="text-text3">Valor mes</p>
              <p className="text-sm font-semibold">{professional.monthValue}</p>
            </div>
          </div>

          <div className="mt-3">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-text3">Media de progresso</span>
              <span className="font-semibold text-accent">{professional.avgProgress}%</span>
            </div>
            <div className="prog-bar">
              <div className="prog-fill" style={{ width: `${professional.avgProgress}%` }} />
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

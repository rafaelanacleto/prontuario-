import { useMemo, useState } from 'react'
import type { ProntuarioData, ProntuarioTab } from '../../types/clinic'

type ProntuarioScreenProps = {
  data: ProntuarioData
}

const tabs: Array<{ key: ProntuarioTab; label: string }> = [
  { key: 'evolucao', label: 'Evolucao' },
  { key: 'objetivos', label: 'Objetivos da sessao' },
  { key: 'anamnese', label: 'Anamnese' },
  { key: 'documentos', label: 'Documentos' },
  { key: 'historico', label: 'Historico de pagamentos' },
]

function cardTone(status: 'ok' | 'partial' | 'neutral') {
  if (status === 'ok') return 'border-l-accent'
  if (status === 'partial') return 'border-l-amber'
  return 'border-l-border2'
}

export function ProntuarioScreen({ data }: ProntuarioScreenProps) {
  const [tab, setTab] = useState<ProntuarioTab>('evolucao')

  const tabContent = useMemo(() => {
    if (tab === 'objetivos') {
      return (
        <article className="card">
          <div className="space-y-2">
            {data.objetivos.map((item) => (
              <div key={item.id} className="rounded-lg bg-surface2 p-3">
                <div className="mb-1 flex items-center justify-between gap-2 text-sm">
                  <span>{item.label}</span>
                  <span className="font-semibold text-accent">{item.progress}%</span>
                </div>
                <div className="prog-bar">
                  <div className="prog-fill" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      )
    }

    if (tab === 'documentos') {
      return (
        <article className="card space-y-2">
          {data.documentos.map((doc) => (
            <div key={doc.id} className="agenda-row">
              <i className="ti ti-file-text text-base text-blue" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{doc.title}</p>
                <p className="text-xs text-text3">{doc.meta}</p>
              </div>
              <button type="button" className="btn btn-sm">
                <i className="ti ti-download" />
                Baixar
              </button>
            </div>
          ))}
        </article>
      )
    }

    if (tab === 'historico') {
      return (
        <article className="card table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Sessao</th>
                <th>Profissional</th>
                <th>Valor</th>
                <th>Forma</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.historico.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.session}</td>
                  <td>{item.professional}</td>
                  <td>{item.amount}</td>
                  <td>{item.method}</td>
                  <td>
                    <span className="chip chip-green">{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      )
    }

    if (tab === 'anamnese') {
      return (
        <article className="card">
          <p className="text-sm text-text2">Resumo clinico de {data.patientName}</p>
          <p className="mt-2 text-sm text-text3">
            Hipersensibilidade auditiva relatada pela familia e boa resposta ao reforco positivo.
          </p>
        </article>
      )
    }

    return (
      <article className="card space-y-2">
        {data.evolucoes.map((item) => (
          <div key={item.id} className={`rounded-lg border-l-4 bg-surface2 p-3 ${cardTone(item.status)}`}>
            <p className="text-xs text-text3">{item.date}</p>
            <p className="mt-1 text-sm">{item.note}</p>
          </div>
        ))}
      </article>
    )
  }, [data, tab])

  return (
    <section className="space-y-3">
      <article className="card flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-base font-semibold">{data.patientName}</p>
          <p className="text-xs text-text3">{data.patientMeta}</p>
        </div>
        <button className="btn btn-primary btn-sm" type="button">
          <i className="ti ti-plus" />
          Nova sessao
        </button>
      </article>

      <div className="flex flex-wrap gap-1 border-b border-border">
        {tabs.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setTab(item.key)}
            className={`rounded-t-md px-3 py-2 text-sm ${tab === item.key ? 'border-b-2 border-accent text-accent' : 'text-text2'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tabContent}
    </section>
  )
}

import { useMemo, useState } from 'react'
import type { Patient } from '../../types/clinic'

type PatientsScreenProps = {
  data: Patient[]
}

function chipByStatus(value: string) {
  if (value === 'em_dia' || value === 'ativo') return 'chip chip-green'
  if (value === 'pendente') return 'chip chip-red'
  return 'chip chip-amber'
}

function humanize(value: string) {
  return value.replace('_', ' ')
}

export function PatientsScreen({ data }: PatientsScreenProps) {
  const [search, setSearch] = useState('')

  const filtered = useMemo(
    () =>
      data.filter((patient) => {
        const term = search.toLowerCase()
        return (
          patient.name.toLowerCase().includes(term) ||
          patient.guardian.toLowerCase().includes(term) ||
          patient.diagnosis.toLowerCase().includes(term)
        )
      }),
    [data, search],
  )

  return (
    <section className="space-y-4">
      <div className="search-bar">
        <div className="search-input-wrap">
          <i className="ti ti-search" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="search-input"
            type="text"
            placeholder="Buscar por nome, responsavel, diagnostico ou profissional..."
          />
        </div>
        <button className="btn btn-sm" type="button">
          <i className="ti ti-filter" />
          Filtros
        </button>
      </div>

      <article className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Responsavel</th>
                <th>Diagnostico</th>
                <th>Profissional</th>
                <th>Frequencia</th>
                <th>Pagamento</th>
                <th>Situacao</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <div className="td-name">{patient.name}</div>
                    <div className="td-sub">{patient.age} anos</div>
                  </td>
                  <td>
                    <div>{patient.guardian}</div>
                    <div className="td-sub">{patient.phone}</div>
                  </td>
                  <td>{patient.diagnosis}</td>
                  <td>{patient.professional}</td>
                  <td>{patient.frequency}</td>
                  <td>
                    <span className={chipByStatus(patient.paymentStatus)}>
                      {humanize(patient.paymentStatus)}
                    </span>
                  </td>
                  <td>
                    <span className={chipByStatus(patient.situation)}>{humanize(patient.situation)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}

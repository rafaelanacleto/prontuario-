import type { AgendaEntry } from '../../types/clinic'

type AgendaScreenProps = {
  data: AgendaEntry[]
}

function statusChip(status: AgendaEntry['status']) {
  if (status === 'confirmado') return 'chip chip-green'
  if (status === 'pendente') return 'chip chip-amber'
  if (status === 'faltou') return 'chip chip-red'
  return 'chip chip-blue'
}

export function AgendaScreen({ data }: AgendaScreenProps) {
  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">
          <i className="ti ti-calendar" />
          Agenda do dia
        </h2>
        <button type="button" className="btn btn-primary btn-sm">
          <i className="ti ti-plus" />
          Novo agendamento
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Horario</th>
              <th>Paciente</th>
              <th>Profissional</th>
              <th>Especialidade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.time}</td>
                <td className="td-name">{item.patient}</td>
                <td>{item.professional}</td>
                <td>{item.specialty}</td>
                <td>
                  <span className={statusChip(item.status)}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

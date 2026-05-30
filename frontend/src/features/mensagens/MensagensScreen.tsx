import type { MensagensData } from '../../types/clinic'

type MensagensScreenProps = {
  data: MensagensData
}

export function MensagensScreen({ data }: MensagensScreenProps) {
  return (
    <section className="space-y-4">
      <article className="card">
        <div className="card-header">
          <h2 className="card-title">
            <i className="ti ti-brand-whatsapp" />
            Template de confirmacao
          </h2>
          <button type="button" className="btn btn-sm">
            <i className="ti ti-edit" />
            Editar template
          </button>
        </div>

        <div className="rounded-lg border-l-4 border-l-accent bg-surface2 p-3 text-sm leading-6">
          {data.template}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary btn-sm">
            <i className="ti ti-send" />
            Enviar todos pendentes
          </button>
          <button type="button" className="btn btn-sm">
            <i className="ti ti-message" />
            Enviar SMS
          </button>
        </div>
      </article>

      <article className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Responsavel</th>
              <th>Telefone</th>
              <th>Horario</th>
              <th>Profissional</th>
              <th>Canal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.pending.map((item) => (
              <tr key={item.id}>
                <td>{item.patient}</td>
                <td>{item.guardian}</td>
                <td>{item.phone}</td>
                <td>{item.time}</td>
                <td>{item.professional}</td>
                <td>
                  <span className={item.channel === 'whatsapp' ? 'chip chip-green' : 'chip chip-gray'}>
                    {item.channel}
                  </span>
                </td>
                <td>
                  <span className="chip chip-amber">{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

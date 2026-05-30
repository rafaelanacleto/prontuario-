import type { FinanceiroData } from '../../types/clinic'
import { MetricCard } from '../../components/dashboard/MetricCard'

type FinanceiroScreenProps = {
  data: FinanceiroData
}

export function FinanceiroScreen({ data }: FinanceiroScreenProps) {
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
            <i className="ti ti-list" />
            Movimentacoes
          </h2>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descricao</th>
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Forma</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>{entry.description}</td>
                  <td>{entry.category}</td>
                  <td>
                    <span className={entry.type === 'entrada' ? 'chip chip-green' : 'chip chip-red'}>
                      {entry.type}
                    </span>
                  </td>
                  <td className={entry.type === 'entrada' ? 'text-accent font-semibold' : 'text-danger font-semibold'}>
                    {entry.amount}
                  </td>
                  <td>{entry.method}</td>
                  <td>
                    <span className={entry.status === 'Pago' ? 'chip chip-green' : 'chip chip-amber'}>
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <article className="card">
        <div className="card-header">
          <h2 className="card-title">
            <i className="ti ti-users" />
            Fechamento mensal - repasses
          </h2>
          <span className="text-sm font-semibold text-danger">Total: {data.totalPayout}</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Profissional</th>
                <th>Especialidade</th>
                <th>Sessoes</th>
                <th>Gerado</th>
                <th>% Repasse</th>
                <th>Valor a pagar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.repasses.map((item) => (
                <tr key={item.id}>
                  <td className="td-name">{item.professional}</td>
                  <td>{item.specialty}</td>
                  <td>{item.sessions}</td>
                  <td>{item.generated}</td>
                  <td>{item.percentage}</td>
                  <td className="font-semibold">{item.payout}</td>
                  <td>
                    <span className={item.status === 'Pago' ? 'chip chip-green' : 'chip chip-amber'}>
                      {item.status}
                    </span>
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

import type { ConfiguracoesData } from '../../types/clinic'

type ConfiguracoesScreenProps = {
  data: ConfiguracoesData
}

export function ConfiguracoesScreen({ data }: ConfiguracoesScreenProps) {
  return (
    <section className="space-y-4">
      <article className="settings-section">
        <h2 className="settings-title">
          <i className="ti ti-building" />
          Dados da clinica
        </h2>

        <div className="form-grid">
          <label className="form-group">
            <span className="form-label">Nome da clinica</span>
            <input className="form-input" value={data.clinic.name} readOnly />
          </label>
          <label className="form-group">
            <span className="form-label">CNPJ</span>
            <input className="form-input" value={data.clinic.cnpj} readOnly />
          </label>
          <label className="form-group">
            <span className="form-label">Telefone</span>
            <input className="form-input" value={data.clinic.phone} readOnly />
          </label>
          <label className="form-group">
            <span className="form-label">E-mail</span>
            <input className="form-input" value={data.clinic.email} readOnly />
          </label>
          <label className="form-group md:col-span-2">
            <span className="form-label">Endereco</span>
            <input className="form-input" value={data.clinic.address} readOnly />
          </label>
        </div>
      </article>

      <article className="settings-section">
        <h2 className="settings-title">
          <i className="ti ti-bell" />
          Notificacoes e automacoes
        </h2>

        {data.toggles.map((toggle) => (
          <div key={toggle.id} className="settings-row">
            <div>
              <p className="settings-row-label">{toggle.label}</p>
              <p className="settings-row-sub">{toggle.description}</p>
            </div>
            <label className="toggle">
              <input type="checkbox" checked={toggle.enabled} readOnly />
              <span className="toggle-slider" />
            </label>
          </div>
        ))}
      </article>
    </section>
  )
}

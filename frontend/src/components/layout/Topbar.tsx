import type { ScreenKey } from '../../types/clinic'

type TopbarProps = {
  screen: ScreenKey
}

const titles: Record<ScreenKey, string> = {
  dashboard: 'Dashboard',
  agenda: 'Agenda',
  pacientes: 'Pacientes',
  prontuario: 'Prontuario',
  objetivos: 'Objetivos',
  financeiro: 'Financeiro',
  profissionais: 'Profissionais',
  mensagens: 'Confirmacoes',
  relatorios: 'Relatorios',
  configuracoes: 'Configuracoes',
}

const actionLabels: Record<ScreenKey, string> = {
  dashboard: 'Novo paciente',
  agenda: 'Novo agendamento',
  pacientes: 'Novo paciente',
  prontuario: 'Nova sessao',
  objetivos: 'Novo objetivo',
  financeiro: 'Novo lancamento',
  profissionais: 'Novo profissional',
  mensagens: 'Enviar pendentes',
  relatorios: 'Exportar',
  configuracoes: 'Salvar alteracoes',
}

export function Topbar({ screen }: TopbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-3.5">
      <h1 className="text-base font-semibold">{titles[screen]}</h1>

      <div className="flex items-center gap-2">
        <button type="button" className="btn btn-sm">
          <i className="ti ti-bell" />
          <span className="badge-red">3</span>
        </button>
        <button type="button" className="btn btn-primary btn-sm">
          <i className="ti ti-plus" />
          {actionLabels[screen]}
        </button>
      </div>
    </header>
  )
}

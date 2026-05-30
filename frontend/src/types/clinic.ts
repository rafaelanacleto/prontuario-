export type ScreenKey =
  | 'dashboard'
  | 'agenda'
  | 'pacientes'
  | 'prontuario'
  | 'objetivos'
  | 'financeiro'
  | 'profissionais'
  | 'mensagens'
  | 'relatorios'
  | 'configuracoes'

export type NavItem = {
  key: ScreenKey
  label: string
  icon: string
  section: 'principal' | 'clinico' | 'gestao' | 'sistema'
}

export type Metric = {
  label: string
  value: string
  sub: string
  tone?: 'default' | 'blue' | 'green' | 'danger'
}

export type AgendaEntry = {
  id: string
  time: string
  patient: string
  professional: string
  specialty: string
  status: 'confirmado' | 'pendente' | 'faltou' | 'agendado'
}

export type Patient = {
  id: string
  name: string
  age: number
  guardian: string
  phone: string
  diagnosis: string
  professional: string
  frequency: string
  paymentStatus: 'em_dia' | 'pendente' | 'parcial'
  situation: 'ativo' | 'avaliacao'
}

export type DashboardResponse = {
  metrics: Metric[]
  todayAgenda: AgendaEntry[]
}

export type ProntuarioTab = 'evolucao' | 'objetivos' | 'anamnese' | 'documentos' | 'historico'

export type ProntuarioData = {
  patientName: string
  patientMeta: string
  evolucoes: Array<{ id: string; date: string; note: string; status: 'ok' | 'partial' | 'neutral' }>
  objetivos: Array<{ id: string; label: string; progress: number; done: boolean }>
  documentos: Array<{ id: string; title: string; meta: string }>
  historico: Array<{ id: string; date: string; session: string; professional: string; amount: string; method: string; status: string }>
}

export type ObjetivoPaciente = {
  id: string
  name: string
  progress: number
}

export type ObjetivosData = {
  metrics: Metric[]
  ranking: ObjetivoPaciente[]
  monthlyAverage: Array<{ month: string; value: number }>
}

export type FinanceiroData = {
  metrics: Metric[]
  entries: Array<{
    id: string
    date: string
    description: string
    category: string
    type: 'entrada' | 'saida'
    amount: string
    method: string
    status: string
  }>
  repasses: Array<{
    id: string
    professional: string
    specialty: string
    sessions: number
    generated: string
    percentage: string
    payout: string
    status: string
  }>
  totalPayout: string
}

export type ProfissionalData = {
  id: string
  initials: string
  name: string
  role: string
  active: boolean
  monthSessions: number
  payoutPercent: string
  activePatients: number
  monthValue: string
  avgProgress: number
}

export type MensagemPendente = {
  id: string
  patient: string
  guardian: string
  phone: string
  time: string
  professional: string
  channel: 'whatsapp' | 'sms'
  status: string
}

export type MensagensData = {
  template: string
  pending: MensagemPendente[]
}

export type RelatoriosData = {
  metrics: Metric[]
  specialtyDistribution: Array<{ label: string; value: string; color: string }>
  revenueTrend: Array<{ month: string; amount: number }>
}

export type ConfiguracoesData = {
  clinic: {
    name: string
    cnpj: string
    phone: string
    email: string
    address: string
  }
  toggles: Array<{ id: string; label: string; description: string; enabled: boolean }>
}

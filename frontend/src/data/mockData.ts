import type {
  AgendaEntry,
  ConfiguracoesData,
  DashboardResponse,
  FinanceiroData,
  MensagensData,
  ObjetivosData,
  Patient,
  ProfissionalData,
  ProntuarioData,
  RelatoriosData,
} from '../types/clinic'

export const dashboardMock: DashboardResponse = {
  metrics: [
    { label: 'Pacientes ativos', value: '47', sub: '+3 este mes', tone: 'blue' },
    { label: 'Sessoes hoje', value: '12', sub: '2 pendentes confirmacao' },
    {
      label: 'Receita do mes',
      value: 'R$ 18.450',
      sub: 'Meta: R$ 20.000',
      tone: 'green',
    },
    { label: 'Taxa de presenca', value: '89%', sub: '2% acima de abril', tone: 'green' },
  ],
  todayAgenda: [
    {
      id: 'a1',
      time: '08:00',
      patient: 'Lucas M.',
      professional: 'Dra. Ana Paula',
      specialty: 'Fonoaudiologia',
      status: 'confirmado',
    },
    {
      id: 'a2',
      time: '09:00',
      patient: 'Sofia R.',
      professional: 'Dr. Caio',
      specialty: 'Psicopedagogia',
      status: 'pendente',
    },
    {
      id: 'a3',
      time: '15:30',
      patient: 'Joao F.',
      professional: 'Dra. Beatriz',
      specialty: 'Psicologia',
      status: 'faltou',
    },
  ],
}

export const agendaMock: AgendaEntry[] = [
  ...dashboardMock.todayAgenda,
  {
    id: 'a4',
    time: '16:00',
    patient: 'Ana G.',
    professional: 'Dr. Rafael',
    specialty: 'Terapia Ocupacional',
    status: 'agendado',
  },
]

export const patientsMock: Patient[] = [
  {
    id: 'p1',
    name: 'Lucas Mendes',
    age: 9,
    guardian: 'Carla Mendes (mae)',
    phone: '(51) 99999-0001',
    diagnosis: 'TEA Nivel 1',
    professional: 'Dra. Ana Paula',
    frequency: '2x/semana',
    paymentStatus: 'em_dia',
    situation: 'ativo',
  },
  {
    id: 'p2',
    name: 'Sofia Rodrigues',
    age: 7,
    guardian: 'Patricia Rodrigues (mae)',
    phone: '(51) 99999-0002',
    diagnosis: 'TDAH',
    professional: 'Dr. Caio Lima',
    frequency: '2x/semana',
    paymentStatus: 'pendente',
    situation: 'ativo',
  },
  {
    id: 'p3',
    name: 'Joao Ferreira',
    age: 8,
    guardian: 'Marcos Ferreira (pai)',
    phone: '(51) 99999-0005',
    diagnosis: 'Dislexia',
    professional: 'Dra. Beatriz',
    frequency: '2x/semana',
    paymentStatus: 'parcial',
    situation: 'avaliacao',
  },
]

export const prontuarioMock: ProntuarioData = {
  patientName: 'Lucas Mendes',
  patientMeta: '9 anos - TEA Nivel 1 - Fonoaudiologia - Dra. Ana Paula - Inicio: mar/2024',
  evolucoes: [
    {
      id: 'e1',
      date: '20/05/2025',
      status: 'ok',
      note: 'Boa adesao as atividades ludicas e ampliacao de vocabulario com 4 novas palavras.',
    },
    {
      id: 'e2',
      date: '13/05/2025',
      status: 'partial',
      note: 'Melhora na iniciativa comunicativa. Objetivo de tolerancia a frustracao parcialmente atingido.',
    },
    {
      id: 'e3',
      date: '06/05/2025',
      status: 'neutral',
      note: 'Sessao focada em pictogramas com boa participacao e nomeacao de objetos.',
    },
  ],
  objetivos: [
    { id: 'o1', label: 'Nomear 10 objetos do cotidiano espontaneamente', progress: 100, done: true },
    { id: 'o2', label: 'Manter contato ocular por 5 segundos em pedido', progress: 80, done: true },
    { id: 'o3', label: 'Usar frases de 2 palavras para pedir algo', progress: 60, done: false },
    { id: 'o4', label: 'Tolerar transicao de atividade sem crise', progress: 40, done: false },
  ],
  documentos: [
    { id: 'd1', title: 'Laudo neurologico - Dr. Souza', meta: 'PDF - enviado em 10/01/2025' },
    { id: 'd2', title: 'Relatorio fonoaudiologico - Dra. Ana Paula', meta: 'PDF - enviado em 22/04/2025' },
  ],
  historico: [
    {
      id: 'h1',
      date: '20/05/2025',
      session: '#28',
      professional: 'Dra. Ana Paula',
      amount: 'R$ 180,00',
      method: 'PIX',
      status: 'Pago',
    },
    {
      id: 'h2',
      date: '13/05/2025',
      session: '#27',
      professional: 'Dra. Ana Paula',
      amount: 'R$ 180,00',
      method: 'PIX',
      status: 'Pago',
    },
  ],
}

export const objetivosMock: ObjetivosData = {
  metrics: [
    { label: 'Media geral', value: '73%', sub: 'maio 2025', tone: 'green' },
    { label: 'Acima de 80%', value: '18 pacientes', sub: 'bom desempenho', tone: 'blue' },
    { label: 'Atencao necessaria', value: '5 pacientes', sub: 'abaixo de 50%', tone: 'danger' },
    { label: 'Objetivos totais', value: '184', sub: '47 pacientes' },
  ],
  ranking: [
    { id: 'r1', name: 'Maria C.', progress: 91 },
    { id: 'r2', name: 'Lucas M.', progress: 85 },
    { id: 'r3', name: 'Sofia R.', progress: 72 },
    { id: 'r4', name: 'Joao F.', progress: 63 },
  ],
  monthlyAverage: [
    { month: 'Jan', value: 61 },
    { month: 'Fev', value: 64 },
    { month: 'Mar', value: 68 },
    { month: 'Abr', value: 71 },
    { month: 'Mai', value: 73 },
  ],
}

export const financeiroMock: FinanceiroData = {
  metrics: [
    { label: 'Entradas (mai)', value: 'R$ 18.450', sub: '', tone: 'green' },
    { label: 'Saidas (mai)', value: 'R$ 6.320', sub: '', tone: 'danger' },
    { label: 'Saldo do mes', value: 'R$ 12.130', sub: '', tone: 'green' },
    { label: 'Inadimplencia', value: 'R$ 560', sub: '3 pagamentos', tone: 'danger' },
  ],
  entries: [
    {
      id: 'f1',
      date: '27/05',
      description: 'Lucas M. - Fonoaudiologia',
      category: 'Sessao',
      type: 'entrada',
      amount: '+ R$ 180,00',
      method: 'PIX',
      status: 'Pago',
    },
    {
      id: 'f2',
      date: '26/05',
      description: 'Aluguel da sala',
      category: 'Despesa fixa',
      type: 'saida',
      amount: '- R$ 2.200,00',
      method: 'Transferencia',
      status: 'Pago',
    },
  ],
  repasses: [
    {
      id: 'rp1',
      professional: 'Dra. Ana Paula',
      specialty: 'Fonoaudiologia',
      sessions: 32,
      generated: 'R$ 4.600',
      percentage: '40%',
      payout: 'R$ 1.840',
      status: 'Pago',
    },
    {
      id: 'rp2',
      professional: 'Dr. Caio Lima',
      specialty: 'Psicopedagogia',
      sessions: 28,
      generated: 'R$ 5.600',
      percentage: '40%',
      payout: 'R$ 2.240',
      status: 'Pendente',
    },
  ],
  totalPayout: 'R$ 7.088',
}

export const profissionaisMock: ProfissionalData[] = [
  {
    id: 'pr1',
    initials: 'AP',
    name: 'Dra. Ana Paula',
    role: 'Fonoaudiologa',
    active: true,
    monthSessions: 32,
    payoutPercent: '40%',
    activePatients: 14,
    monthValue: 'R$ 1.840',
    avgProgress: 81,
  },
  {
    id: 'pr2',
    initials: 'CL',
    name: 'Dr. Caio Lima',
    role: 'Psicopedagogo',
    active: true,
    monthSessions: 28,
    payoutPercent: '40%',
    activePatients: 12,
    monthValue: 'R$ 2.240',
    avgProgress: 69,
  },
  {
    id: 'pr3',
    initials: 'BS',
    name: 'Dra. Beatriz',
    role: 'Psicologa',
    active: true,
    monthSessions: 24,
    payoutPercent: '45%',
    activePatients: 10,
    monthValue: 'R$ 1.728',
    avgProgress: 74,
  },
]

export const mensagensMock: MensagensData = {
  template:
    'Ola, {nome_responsavel}! Lembramos que {nome_paciente} tem sessao amanha as {horario} com {profissional}. Responda SIM para confirmar.',
  pending: [
    {
      id: 'm1',
      patient: 'Lucas M.',
      guardian: 'Carla Mendes',
      phone: '(51) 99999-0001',
      time: '08:00',
      professional: 'Dra. Ana Paula',
      channel: 'whatsapp',
      status: 'Pendente',
    },
    {
      id: 'm2',
      patient: 'Sofia R.',
      guardian: 'Patricia Rodrigues',
      phone: '(51) 99999-0002',
      time: '09:00',
      professional: 'Dr. Caio Lima',
      channel: 'sms',
      status: 'Pendente',
    },
  ],
}

export const relatoriosMock: RelatoriosData = {
  metrics: [
    { label: 'Pacientes atendidos', value: '47', sub: 'maio 2025', tone: 'blue' },
    { label: 'Total de sessoes', value: '104', sub: '8% vs abril' },
    { label: 'Taxa de presenca', value: '89%', sub: '', tone: 'green' },
    { label: 'Ticket medio', value: 'R$ 177', sub: 'por sessao' },
    { label: 'Faturamento YTD', value: 'R$ 81.750', sub: '', tone: 'green' },
  ],
  specialtyDistribution: [
    { label: 'Fono', value: '35%', color: '#1D9E75' },
    { label: 'Psicoped.', value: '30%', color: '#185FA5' },
    { label: 'Psicologia', value: '25%', color: '#BA7517' },
    { label: 'TO', value: '10%', color: '#533AB7' },
  ],
  revenueTrend: [
    { month: 'Jan', amount: 12200 },
    { month: 'Fev', amount: 13100 },
    { month: 'Mar', amount: 14550 },
    { month: 'Abr', amount: 16800 },
    { month: 'Mai', amount: 18450 },
  ],
}

export const configuracoesMock: ConfiguracoesData = {
  clinic: {
    name: 'Espaco Multidisciplinar',
    cnpj: '00.000.000/0001-00',
    phone: '(51) 3000-0000',
    email: 'contato@clinica.com.br',
    address: 'Rua das Clinicas, 123 - Porto Alegre/RS',
  },
  toggles: [
    {
      id: 't1',
      label: 'Confirmacao automatica por WhatsApp',
      description: 'Envio automatico 24h antes da sessao',
      enabled: true,
    },
    {
      id: 't2',
      label: 'Confirmacao por SMS',
      description: 'Fallback quando WhatsApp nao responde',
      enabled: false,
    },
    {
      id: 't3',
      label: 'Alerta de prontuario desatualizado',
      description: 'Notifica apos 7 dias sem registro',
      enabled: true,
    },
  ],
}

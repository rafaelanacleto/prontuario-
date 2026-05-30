import { useEffect, useMemo, useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { Topbar } from './components/layout/Topbar'
import {
  agendaMock,
  configuracoesMock,
  dashboardMock,
  financeiroMock,
  mensagensMock,
  objetivosMock,
  patientsMock,
  profissionaisMock,
  prontuarioMock,
  relatoriosMock,
} from './data/mockData'
import { AgendaScreen } from './features/agenda/AgendaScreen'
import { ConfiguracoesScreen } from './features/configuracoes/ConfiguracoesScreen'
import { DashboardScreen } from './features/dashboard/DashboardScreen'
import { FinanceiroScreen } from './features/financeiro/FinanceiroScreen'
import { MensagensScreen } from './features/mensagens/MensagensScreen'
import { ObjetivosScreen } from './features/objetivos/ObjetivosScreen'
import { PatientsScreen } from './features/patients/PatientsScreen'
import { ProfissionaisScreen } from './features/profissionais/ProfissionaisScreen'
import { ProntuarioScreen } from './features/prontuario/ProntuarioScreen'
import { RelatoriosScreen } from './features/relatorios/RelatoriosScreen'
import {
  getAgendaByDate,
  getConfiguracoes,
  getDashboard,
  getFinanceiro,
  getMensagens,
  getObjetivos,
  getProfissionais,
  getProntuario,
  getRelatorios,
  listPatients,
} from './services/api'
import type {
  AgendaEntry,
  ConfiguracoesData,
  DashboardResponse,
  FinanceiroData,
  MensagensData,
  NavItem,
  ObjetivosData,
  Patient,
  ProfissionalData,
  ProntuarioData,
  RelatoriosData,
  ScreenKey,
} from './types/clinic'

const navItems: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: 'ti-layout-dashboard', section: 'principal' },
  { key: 'agenda', label: 'Agenda', icon: 'ti-calendar', section: 'principal' },
  { key: 'pacientes', label: 'Pacientes', icon: 'ti-users', section: 'principal' },
  { key: 'prontuario', label: 'Prontuario', icon: 'ti-clipboard-text', section: 'clinico' },
  { key: 'objetivos', label: 'Objetivos', icon: 'ti-target', section: 'clinico' },
  { key: 'financeiro', label: 'Financeiro', icon: 'ti-cash', section: 'gestao' },
  { key: 'profissionais', label: 'Profissionais', icon: 'ti-stethoscope', section: 'gestao' },
  { key: 'mensagens', label: 'Confirmacoes', icon: 'ti-brand-whatsapp', section: 'gestao' },
  { key: 'relatorios', label: 'Relatorios', icon: 'ti-chart-bar', section: 'gestao' },
  { key: 'configuracoes', label: 'Configuracoes', icon: 'ti-settings', section: 'sistema' },
]

function App() {
  const [screen, setScreen] = useState<ScreenKey>('dashboard')
  const [dashboardData, setDashboardData] = useState<DashboardResponse>(dashboardMock)
  const [agendaData, setAgendaData] = useState<AgendaEntry[]>(agendaMock)
  const [patientsData, setPatientsData] = useState<Patient[]>(patientsMock)
  const [prontuarioData, setProntuarioData] = useState<ProntuarioData>(prontuarioMock)
  const [objetivosData, setObjetivosData] = useState<ObjetivosData>(objetivosMock)
  const [financeiroData, setFinanceiroData] = useState<FinanceiroData>(financeiroMock)
  const [profissionaisData, setProfissionaisData] = useState<ProfissionalData[]>(profissionaisMock)
  const [mensagensData, setMensagensData] = useState<MensagensData>(mensagensMock)
  const [relatoriosData, setRelatoriosData] = useState<RelatoriosData>(relatoriosMock)
  const [configuracoesData, setConfiguracoesData] = useState<ConfiguracoesData>(configuracoesMock)

  useEffect(() => {
    async function loadData() {
      try {
        const [
          dashboard,
          agenda,
          patients,
          prontuario,
          objetivos,
          financeiro,
          profissionais,
          mensagens,
          relatorios,
          configuracoes,
        ] = await Promise.all([
          getDashboard(),
          getAgendaByDate('2026-05-30'),
          listPatients(),
          getProntuario('p1'),
          getObjetivos(),
          getFinanceiro(),
          getProfissionais(),
          getMensagens(),
          getRelatorios(),
          getConfiguracoes(),
        ])

        setDashboardData(dashboard)
        setAgendaData(agenda)
        setPatientsData(patients)
        setProntuarioData(prontuario)
        setObjetivosData(objetivos)
        setFinanceiroData(financeiro)
        setProfissionaisData(profissionais)
        setMensagensData(mensagens)
        setRelatoriosData(relatorios)
        setConfiguracoesData(configuracoes)
      } catch {
        setDashboardData(dashboardMock)
        setAgendaData(agendaMock)
        setPatientsData(patientsMock)
        setProntuarioData(prontuarioMock)
        setObjetivosData(objetivosMock)
        setFinanceiroData(financeiroMock)
        setProfissionaisData(profissionaisMock)
        setMensagensData(mensagensMock)
        setRelatoriosData(relatoriosMock)
        setConfiguracoesData(configuracoesMock)
      }
    }

    void loadData()
  }, [])

  const content = useMemo(() => {
    if (screen === 'agenda') return <AgendaScreen data={agendaData} />
    if (screen === 'pacientes') return <PatientsScreen data={patientsData} />
    if (screen === 'prontuario') return <ProntuarioScreen data={prontuarioData} />
    if (screen === 'objetivos') return <ObjetivosScreen data={objetivosData} />
    if (screen === 'financeiro') return <FinanceiroScreen data={financeiroData} />
    if (screen === 'profissionais') return <ProfissionaisScreen data={profissionaisData} />
    if (screen === 'mensagens') return <MensagensScreen data={mensagensData} />
    if (screen === 'relatorios') return <RelatoriosScreen data={relatoriosData} />
    if (screen === 'configuracoes') return <ConfiguracoesScreen data={configuracoesData} />
    return <DashboardScreen data={dashboardData} />
  }, [
    agendaData,
    configuracoesData,
    dashboardData,
    financeiroData,
    mensagensData,
    objetivosData,
    patientsData,
    profissionaisData,
    prontuarioData,
    relatoriosData,
    screen,
  ])

  return (
    <div className="app-shell">
      <Sidebar current={screen} items={navItems} onChange={setScreen} />

      <main className="main-shell">
        <Topbar screen={screen} />
        <section className="content-shell">{content}</section>
      </main>
    </div>
  )
}

export default App

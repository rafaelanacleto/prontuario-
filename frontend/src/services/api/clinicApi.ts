import type {
  ConfiguracoesData,
  FinanceiroData,
  MensagensData,
  ObjetivosData,
  ProfissionalData,
  ProntuarioData,
  RelatoriosData,
} from '../../types/clinic'
import { httpClient } from './httpClient'

export function getProntuario(patientId: string) {
  return httpClient<ProntuarioData>(`/prontuario/${patientId}`)
}

export function getObjetivos() {
  return httpClient<ObjetivosData>('/objetivos')
}

export function getFinanceiro() {
  return httpClient<FinanceiroData>('/financeiro')
}

export function getProfissionais() {
  return httpClient<ProfissionalData[]>('/profissionais')
}

export function getMensagens() {
  return httpClient<MensagensData>('/mensagens')
}

export function getRelatorios() {
  return httpClient<RelatoriosData>('/relatorios')
}

export function getConfiguracoes() {
  return httpClient<ConfiguracoesData>('/configuracoes')
}

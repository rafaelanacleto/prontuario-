# ClinicaHub Frontend

Projeto React + TypeScript + Tailwind criado com base no layout do `app.html`.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run build
```

## Estrutura principal

- `src/components/layout`: estrutura base da tela (sidebar e topbar)
- `src/features`: telas separadas por dominio (`dashboard`, `agenda`, `patients`, `prontuario`, `objetivos`, `financeiro`, `profissionais`, `mensagens`, `relatorios`, `configuracoes`)
- `src/services/api`: camada de integracao com backend
- `src/types`: contratos de dados usados no app
- `src/data/mockData.ts`: fallback local enquanto a API real nao estiver disponivel

## Integracao com backend

As consultas estao preparadas para API REST com base em `VITE_API_BASE_URL`.

Crie um arquivo `.env` na raiz do `frontend`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Endpoints esperados:

- `GET /dashboard`
- `GET /agenda?date=YYYY-MM-DD`
- `GET /patients?search=`
- `GET /prontuario/:patientId`
- `GET /objetivos`
- `GET /financeiro`
- `GET /profissionais`
- `GET /mensagens`
- `GET /relatorios`
- `GET /configuracoes`

Se a API estiver indisponivel, o app usa os mocks automaticamente.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/api'

type RequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean>
}

function buildUrl(path: string, query?: RequestOptions['query']) {
  const url = new URL(path, API_BASE_URL)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.set(key, String(value))
    })
  }

  return url.toString()
}

export async function httpClient<T>(path: string, options: RequestOptions = {}) {
  const { query, headers, ...rest } = options

  const response = await fetch(buildUrl(path, query), {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`API ${response.status}: ${body || response.statusText}`)
  }

  return (await response.json()) as T
}

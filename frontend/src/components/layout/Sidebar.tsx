import type { NavItem, ScreenKey } from '../../types/clinic'

type SidebarProps = {
  current: ScreenKey
  items: NavItem[]
  onChange: (screen: ScreenKey) => void
}

export function Sidebar({ current, items, onChange }: SidebarProps) {
  const sections = [
    { key: 'principal', label: 'Principal' },
    { key: 'clinico', label: 'Clinico' },
    { key: 'gestao', label: 'Gestao' },
    { key: 'sistema', label: 'Sistema' },
  ] as const

  return (
    <aside className="w-60 shrink-0 overflow-y-auto border-r border-border bg-surface">
      <div className="border-b border-border px-4 pb-4 pt-5">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent text-white">
          <i className="ti ti-heartbeat text-lg" />
        </div>
        <div className="text-[15px] font-semibold text-text">ClinicaHub</div>
        <div className="text-xs text-text3">Gestao multidisciplinar</div>
      </div>

      <nav className="p-2">
        {sections.map((section) => (
          <div key={section.key} className="mb-1">
            <div className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-text3">
              {section.label}
            </div>
            {items
              .filter((item) => item.section === section.key)
              .map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onChange(item.key)}
                  className={`mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                    current === item.key
                      ? 'bg-accentLight font-medium text-accent2'
                      : 'text-text2 hover:bg-surface2 hover:text-text'
                  }`}
                >
                  <i
                    className={`ti ${item.icon} text-base ${current === item.key ? 'text-accent' : 'text-text3'}`}
                  />
                  {item.label}
                </button>
              ))}
          </div>
        ))}
      </nav>

      <div className="mt-2 border-t border-border p-3">
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded-lg bg-surface2 px-3 py-2 text-left hover:bg-border"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
            G
          </div>
          <div>
            <div className="text-sm font-medium">Gestora</div>
            <div className="text-xs text-text3">Administradora</div>
          </div>
        </button>
      </div>
    </aside>
  )
}

import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { schoolInfo } from '@/data/mock'
import type { Role } from '@/data/mock'

const navByRole: Record<Role, { label: string; to: string }[]> = {
  admin: [
    { label: 'Dashboard', to: '/admin' },
    { label: 'Classes', to: '/admin/classes' },
    { label: 'Teachers', to: '/admin/teachers' },
    { label: 'Students', to: '/admin/students' },
    { label: 'Attendance', to: '/admin/attendance' },
    { label: 'Announcements', to: '/admin/announcements' },
    { label: 'Fees', to: '/admin/fees' },
  ],
  teacher: [
    { label: 'Dashboard', to: '/teacher' },
    { label: 'Attendance', to: '/teacher/attendance' },
    { label: 'Daily Updates', to: '/teacher/updates' },
    { label: 'Announcements', to: '/teacher/announcements' },
  ],
  parent: [
    { label: 'Overview', to: '/parent' },
    { label: 'Child Day', to: '/parent/child' },
    { label: 'Announcements', to: '/parent/announcements' },
    { label: 'Fees', to: '/parent/fees' },
  ],
}

const roleRoutes: Record<Role, string> = {
  admin: '/admin',
  teacher: '/teacher',
  parent: '/parent',
}

type AppShellProps = {
  role: Role
  title: string
  children: ReactNode
}

export function AppShell({ role, title, children }: AppShellProps) {
  const navItems = navByRole[role]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fffaf3_0%,_#eef9ff_35%,_#fff3f7_70%,_#f5f2ff_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        <header className="glass-panel flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div className="space-y-2">
            <span className="nav-pill">{schoolInfo.name}</span>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {schoolInfo.term}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{schoolInfo.location}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border-2 border-border/70 bg-white/80 p-1">
              {(Object.keys(roleRoutes) as Role[]).map((item) => (
                <NavLink
                  key={item}
                  to={roleRoutes[item]}
                  className={({ isActive }) =>
                    cn(
                      'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    )
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
            <Button variant="outline" className="bg-white/90">
              Contact support
            </Button>
          </div>
          <div className="h-2 w-full rounded-full bg-[linear-gradient(90deg,_#f7a072_0%,_#f6c47e_25%,_#9dd9f3_50%,_#a8e6cf_75%,_#f7a1c4_100%)]" />
        </header>

        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <aside className="hidden soft-panel p-5 md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl px-3 py-2 text-sm font-medium transition',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2 md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-full border-2 border-border/70 px-3 py-1 text-xs font-semibold',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/70 text-muted-foreground'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fffaf3_0%,_#eef9ff_35%,_#fff3f7_70%,_#f5f2ff_100%)]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-12">
        <div className="glass-panel mx-auto flex w-full max-w-xl flex-col gap-6 px-8 py-10 text-center">
          <div className="space-y-3">
            <span className="nav-pill">Noory Preschool Suite</span>
            <h1 className="text-4xl font-semibold text-foreground">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Choose your role to enter the portal.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg">
              <Link to="/admin">Login as Admin</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/80">
              <Link to="/teacher">Login as Teacher</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/parent">Login as Parent</Link>
            </Button>
          </div>
          <div className="h-2 w-full rounded-full bg-[linear-gradient(90deg,_#f7a072_0%,_#f6c47e_25%,_#9dd9f3_50%,_#a8e6cf_75%,_#f7a1c4_100%)]" />
        </div>
      </div>
    </div>
  )
}

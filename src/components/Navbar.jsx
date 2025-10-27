import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 shadow ring-1 ring-white/20">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">AuraBots</span>
        </a>
        <nav className="flex items-center gap-2">
          <a href="#features" className="hidden rounded-md px-3 py-2 text-sm text-white/80 hover:text-white sm:block">Features</a>
          <a href="#pricing" className="hidden rounded-md px-3 py-2 text-sm text-white/80 hover:text-white sm:block">Pricing</a>
          <a href="#docs" className="hidden rounded-md px-3 py-2 text-sm text-white/80 hover:text-white sm:block">Docs</a>
          <a href="#signin" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/5">
            <User className="h-4 w-4" />
            Sign in
          </a>
          <a href="#signup" className="ml-2 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-neutral-900 shadow hover:bg-white/90">
            Start free
          </a>
        </nav>
      </div>
    </header>
  );
}

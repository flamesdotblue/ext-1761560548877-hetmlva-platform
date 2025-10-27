import Spline from '@splinetool/react-spline';
import { Bot, Shield, Globe } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative isolate">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400"></span>
            Multi-tenant Chatbot SaaS
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Build, train and embed AI chatbots for your product
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Let customers self-serve with a beautiful, embeddable assistant. Train using URLs, files and Q&A. Scale securely across tenants with analytics, billing and SSO.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#signup" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow hover:bg-white/90">
              Create your bot
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm text-white/90 hover:bg-white/5">
              Live demo
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-white/70">
            <div className="inline-flex items-center gap-2"><Bot className="h-4 w-4 text-white/80" /> Rich responses</div>
            <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-white/80" /> SSO + RBAC</div>
            <div className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-white/80" /> 100+ languages</div>
          </div>
        </div>
        <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 shadow-xl">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/10"></div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.20),rgba(59,130,246,0.12),rgba(251,146,60,0.08),transparent_70%)] blur-3xl" />
    </section>
  );
}

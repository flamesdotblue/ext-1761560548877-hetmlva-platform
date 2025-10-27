import { Bot, Link as LinkIcon, FileText, Database, Settings, Headphones, ShieldCheck, BarChart, Code } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Multi-tenant projects',
    desc: 'Organizations with RBAC, SSO, audit logs and per-tenant isolation.'
  },
  {
    icon: Database,
    title: 'Train with your data',
    desc: 'Ingest URLs, PDFs, CSVs, knowledge base articles and manual Q&A.'
  },
  {
    icon: Settings,
    title: 'Configurable personality',
    desc: 'Welcome messages, tone, response timeouts, domain allowlists and languages.'
  },
  {
    icon: Code,
    title: '1-line embed',
    desc: 'Install a lightweight JS widget. Customize theme, position and brand.'
  },
  {
    icon: Headphones,
    title: 'Human handoff',
    desc: 'Escalate to live chat or ticketing with context preserved.'
  },
  {
    icon: ShieldCheck,
    title: 'Security first',
    desc: 'SOC2-ready patterns, secrets hygiene, rate limits and data retention controls.'
  },
  {
    icon: BarChart,
    title: 'Usage & analytics',
    desc: 'Track sessions, deflection, CSAT, token usage and billing per tenant.'
  },
  {
    icon: LinkIcon,
    title: 'Integrations',
    desc: 'Connect Stripe, Slack, Zendesk, Intercom, HubSpot and webhooks.'
  },
  {
    icon: FileText,
    title: 'Rich responses',
    desc: 'Buttons, links, images, suggested replies and file previews.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to ship a Chatbot SaaS</h2>
        <p className="mt-3 text-white/70">Production-ready architecture, beautiful UI, and developer-focused workflows.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-5 transition hover:border-white/20">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-neutral-900 shadow ring-1 ring-white/20">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      <div id="pricing" className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PricingCard
          name="Starter"
          price="$0"
          period="/mo"
          bullets={[
            '1 organization, 1 project',
            'Up to 2,000 messages',
            'Basic analytics',
          ]}
          cta="Start free"
        />
        <PricingCard
          featured
          name="Growth"
          price="$79"
          period="/mo"
          bullets={[
            'Unlimited projects',
            '100k messages',
            'Custom themes & SSO',
          ]}
          cta="Upgrade"
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          bullets={[
            'SAML SSO, RBAC, SLAs',
            'VPC / on-prem options',
            'Security review & support',
          ]}
          cta="Contact sales"
        />
      </div>
    </section>
  );
}

function PricingCard({ name, price, period, bullets, cta, featured }) {
  return (
    <div className={`relative flex flex-col rounded-2xl border p-6 ${
      featured ? 'border-white/30 bg-white/5 shadow-xl' : 'border-white/10 bg-neutral-900/40'
    }`}>
      {featured && (
        <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/95">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-semibold">{price}</span>
        {period && <span className="mb-1 text-sm text-white/60">{period}</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/70"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a href="#signup" className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${
        featured ? 'bg-white text-neutral-900 hover:bg-white/90' : 'border border-white/15 text-white hover:bg-white/5'
      }`}>
        {cta}
      </a>
    </div>
  );
}

import React from 'react';
import { Check, CreditCard } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'Everything to prototype and test',
    cta: 'Start free',
    features: [
      '1 organization',
      '1 chatbot',
      'Up to 200 conversations/mo',
      'Embed widget + custom theme'
    ]
  },
  {
    name: 'Growth',
    price: '$49',
    tagline: 'Scale with usage and analytics',
    cta: 'Choose Growth',
    featured: true,
    features: [
      'Unlimited chatbots',
      '100k vector chunks',
      'Role-based access control',
      'Basic analytics + export'
    ]
  },
  {
    name: 'Business',
    price: '$199',
    tagline: 'Advanced security and support',
    cta: 'Contact sales',
    features: [
      'SAML SSO + SCIM',
      'PII redaction & audit logs',
      'Priority support',
      'Custom rate limits'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Fair plans that grow with you. Change or cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border border-white/10 p-6 bg-white/5 ${p.featured ? 'ring-2 ring-purple-400/50' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                {p.featured && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white">Popular</span>
                )}
              </div>
              <div className="mt-4">
                <div className="text-4xl font-semibold">{p.price}<span className="text-base text-white/60">/mo</span></div>
                <p className="text-white/70 text-sm mt-1">{p.tagline}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold ${p.featured ? 'bg-white text-neutral-950' : 'bg-white/10 text-white border border-white/10 hover:bg-white/15'}`}>
                <CreditCard className="h-4 w-4" /> {p.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/60">All prices are in USD. Usage beyond plan limits billed at fair overage rates.</p>
      </div>
    </section>
  );
}

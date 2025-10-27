export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-lg font-semibold">AuraBots</div>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Production-ready SaaS template for multi-tenant AI chatbots. Security, billing, analytics and a delightful developer experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#demo" className="hover:text-white">Demo</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Developers</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#docs" className="hover:text-white">Docs</a></li>
              <li><a href="#api" className="hover:text-white">API</a></li>
              <li><a href="#status" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} AuraBots. All rights reserved.
      </div>
    </footer>
  );
}

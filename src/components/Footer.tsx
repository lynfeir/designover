import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-bold text-lg text-text-white mb-4">
              Design <span className="gradient-text">over</span> Atlanta
            </h4>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Custom websites, business graphics, and AI automation tools for businesses that want to grow without the overhead. Based in Atlanta, GA.
            </p>
            <a
              href="tel:4707583549"
              className="text-[#E91E8C] font-semibold text-base inline-block mb-2"
            >
              (470) 758-3549
            </a>
            <p className="text-sm text-text-muted">
              <strong className="text-text-white">Hunter Weeks</strong>
              <br />
              Founder &amp; Creative Director
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#websites" className="text-text-muted hover:text-text-white transition-colors">Custom Websites</Link></li>
              <li><Link href="/services#design" className="text-text-muted hover:text-text-white transition-colors">Graphic Design</Link></li>
              <li><Link href="/services#ai-tools" className="text-text-muted hover:text-text-white transition-colors">AI Business Tools</Link></li>
              <li><Link href="/services#plans" className="text-text-muted hover:text-text-white transition-colors">Monthly Plans</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-text-muted hover:text-text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-text-white transition-colors">Get a Demo</Link></li>
              <li><Link href="/terms" className="text-text-muted hover:text-text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-text-white mb-4">Hours</h4>
            <p className="text-text-muted text-sm leading-relaxed">
              Mon &ndash; Fri: 9 AM &ndash; 7 PM
              <br />
              Sat: 10 AM &ndash; 4 PM
              <br />
              Sun: By appointment
            </p>
            <p className="text-text-muted text-sm mt-3">
              Serving clients worldwide
              <br />
              Based in Atlanta, GA
            </p>
          </div>
        </div>

        <div className="border-t border-border-dark pt-6 text-center text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Design over Atlanta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

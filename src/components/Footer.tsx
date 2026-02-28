import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-bg-sage border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/doa-logo-transparent-square-1024.png" alt="Design Over Atlanta" width={32} height={32} className="rounded" />
              <h4 className="font-bold text-lg text-text-heading">
                Design <span className="text-terra">over</span> Atlanta
              </h4>
            </div>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              Custom websites from $200 and business automation tools that eliminate manual work. We find what&apos;s costing you money and we kill it.
            </p>
            <a
              href="tel:4707583549"
              className="text-terra font-semibold text-base inline-block mb-2"
            >
              (470) 758-3549
            </a>
            <p className="text-sm text-text-body">
              <strong className="text-text-heading">Hunter Weeks</strong>
              <br />
              Founder &amp; Builder
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-heading mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#websites" className="text-text-body hover:text-terra transition-colors">Custom Websites</Link></li>
              <li><Link href="/services#automation" className="text-text-body hover:text-terra transition-colors">Business Automation</Link></li>
              <li><Link href="/services#design" className="text-text-body hover:text-terra transition-colors">Graphic Design</Link></li>
              <li><Link href="/services#plans" className="text-text-body hover:text-terra transition-colors">Monthly Plans</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-heading mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-text-body hover:text-terra transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-text-body hover:text-terra transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="text-text-body hover:text-terra transition-colors">Get a Demo</Link></li>
              <li><Link href="/terms" className="text-text-body hover:text-terra transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-text-heading mb-4">Hours</h4>
            <p className="text-text-body text-sm leading-relaxed">
              Mon &ndash; Fri: 9 AM &ndash; 7 PM
              <br />
              Sat: 10 AM &ndash; 4 PM
              <br />
              Sun: By appointment
            </p>
            <p className="text-text-body text-sm mt-3">
              Serving clients worldwide
              <br />
              Based in Atlanta, GA
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Design over Atlanta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

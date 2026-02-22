import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Design over Atlanta",
  description:
    "Terms of Service for Design over Atlanta. Read our policies on web design, hosting, graphic design, support hours, payments, and more.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 pb-10">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-terra/20 bg-terra/5 px-4 py-1.5 text-xs font-bold tracking-wider text-terra uppercase mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-4">
            Terms of <span className="text-terra">Service</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-muted leading-relaxed">
            Please read these terms carefully before engaging our services. By working with Design over Atlanta you agree to the following terms and conditions.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="space-y-12">

          {/* 1. Overview */}
          <TermsSection number="1" title="Overview">
            <p>
              Design over Atlanta (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is a creative studio based in Atlanta, Georgia, operated by Hunter Weeks. We provide custom website design and development, graphic design, AI business tools, and web hosting services. These Terms of Service (&ldquo;Terms&rdquo;) govern all services provided by Design over Atlanta to you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;).
            </p>
            <p>
              By requesting a demo, placing an order, making a payment, or otherwise engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </TermsSection>

          {/* 2. Services */}
          <TermsSection number="2" title="Services Offered">
            <p>We provide the following services, subject to these Terms:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Custom Website Design &amp; Development</strong> &mdash; Hand-coded websites starting at $200 for landing pages. Multi-page business sites, e-commerce builds, and full redesigns are available at tiered pricing.</li>
              <li><strong>Graphic Design</strong> &mdash; Business cards, logos, flyers, brochures, social media graphics, and other print/digital materials starting at $99.</li>
              <li><strong>AI Business Tools</strong> &mdash; Booking systems, intake forms, chatbot assistants, and workflow automation bots. Pricing varies by project scope.</li>
              <li><strong>Web Hosting</strong> &mdash; Managed hosting plans starting at $3/mo. Includes SSL certificates, daily backups, and 99.9% uptime guarantee.</li>
              <li><strong>Hosting Migration</strong> &mdash; We can migrate your existing website from another host to our platform for a one-time fee of $25.</li>
            </ul>
          </TermsSection>

          {/* 3. Demo-First Process */}
          <TermsSection number="3" title="Demo-First Process">
            <p>
              We operate on a <strong>demo-first model</strong> for website design projects. This means:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>You describe your business and project requirements to us.</li>
              <li>We build a working demo of your website at no charge.</li>
              <li>You review the demo and provide feedback.</li>
              <li>If you love it, you pay and we make it yours. If you don&rsquo;t love it, there is no charge.</li>
            </ul>
            <p>
              The demo remains our intellectual property until full payment is received. You may not use, copy, distribute, or deploy the demo without paying the agreed-upon price. We reserve the right to reuse demo concepts that are not purchased.
            </p>
          </TermsSection>

          {/* 4. Pricing & Payment */}
          <TermsSection number="4" title="Pricing &amp; Payment">
            <p>
              All pricing is flat-rate unless otherwise specified in writing. We do not charge hourly rates. Current base pricing includes:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-2 mb-4">
                <thead>
                  <tr className="border-b border-border text-text-muted text-left">
                    <th className="py-2 pr-4">Service</th>
                    <th className="py-2">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="text-text-heading">
                  <tr className="border-b border-border"><td className="py-2 pr-4">Landing Page</td><td className="py-2">$200</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4">Business Website (3-5 pages)</td><td className="py-2">$400 &ndash; $800</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4">E-commerce Website</td><td className="py-2">$1,000+</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4">Website Redesign</td><td className="py-2">From $150</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4">Graphic Design</td><td className="py-2">From $99</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4">Hosting (monthly)</td><td className="py-2">$3 &ndash; $19/mo</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4">Hosting Migration</td><td className="py-2">$25 (one-time)</td></tr>
                  <tr><td className="py-2 pr-4">AI Business Tools</td><td className="py-2">Custom quote</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Prices are subject to change. A quoted price is locked in once you confirm the project. Payment is due in full before the final deliverables (source code, design files, deployment) are released unless a payment plan has been agreed upon in writing.
            </p>
            <p>
              We accept payment via Zelle, CashApp, Venmo, PayPal, and bank transfer. Payment methods and instructions will be provided at time of invoicing.
            </p>
          </TermsSection>

          {/* 5. Hosting Terms */}
          <TermsSection number="5" title="Hosting Terms">
            <p>
              Hosting is billed on a <strong>month-to-month basis</strong>. There are no long-term contracts. You may cancel your hosting at any time by notifying us in writing (email or text message).
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Hosting payments are due on the same date each month. If payment is not received within 7 days of the due date, we reserve the right to suspend your website.</li>
              <li>If hosting remains unpaid for 30 days, we may take your site offline. After 60 days of non-payment, your hosting files may be deleted.</li>
              <li>We provide 99.9% uptime on a best-effort basis. Brief periods of downtime for maintenance or updates are not considered a breach of this commitment.</li>
              <li>We perform regular backups. However, we are not responsible for data loss due to circumstances beyond our control. Clients are encouraged to keep their own copies of critical content.</li>
              <li>Hosting migration from another provider incurs a <strong>one-time fee of $25</strong>. This covers the full migration process including DNS updates, file transfer, and testing.</li>
            </ul>
          </TermsSection>

          {/* 6. Support & Business Hours */}
          <TermsSection number="6" title="Support &amp; Business Hours">
            <p>
              We provide customer support <strong>during business hours only</strong>:
            </p>
            <div className="rounded-xl border border-border bg-white p-4 my-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-text-muted">Monday &ndash; Friday</span>
                <span className="text-text-heading font-semibold">9:00 AM &ndash; 7:00 PM ET</span>
                <span className="text-text-muted">Saturday</span>
                <span className="text-text-heading font-semibold">10:00 AM &ndash; 4:00 PM ET</span>
                <span className="text-text-muted">Sunday</span>
                <span className="text-text-heading font-semibold">By appointment only</span>
              </div>
            </div>
            <p>
              <strong>Important:</strong> Support requests submitted outside of business hours will be addressed on the next business day. While we strive to respond as quickly as possible, <strong>you may not receive an immediate response</strong>. Response times vary depending on current workload and the complexity of your request.
            </p>
            <p>
              We aim to respond to all inquiries within the same business day during open hours. However, this is a goal, not a guarantee. We are a small studio and prioritize quality over speed when necessary.
            </p>
            <p>
              Emergency hosting issues (full site outage) will be addressed with priority during business hours. Non-critical requests (feature changes, design tweaks, content updates) are handled in the order received.
            </p>
          </TermsSection>

          {/* 7. Revisions & Scope */}
          <TermsSection number="7" title="Revisions &amp; Project Scope">
            <p>
              Website design projects include <strong>unlimited revisions</strong> within the agreed-upon scope. &ldquo;Scope&rdquo; refers to the features, pages, and functionality described before the project begins.
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Revisions that fall within the original scope (color changes, text updates, layout adjustments) are included at no extra cost.</li>
              <li>Requests that expand the scope (new pages, new features, new integrations not originally discussed) may incur additional charges. We will inform you of any additional costs before proceeding.</li>
              <li>Graphic design projects include up to 3 rounds of revisions. Additional revisions beyond 3 may incur a nominal fee.</li>
            </ul>
          </TermsSection>

          {/* 8. Code Ownership */}
          <TermsSection number="8" title="Code &amp; Design Ownership">
            <p>
              Upon full payment, you receive <strong>100% ownership of all source code and design files</strong> created for your project. This includes:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>All HTML, CSS, JavaScript, and other code files</li>
              <li>All graphic design source files (PSD, AI, Figma, etc.)</li>
              <li>Full commercial usage rights for all deliverables</li>
            </ul>
            <p>
              You are free to modify, redistribute, or transfer the code and designs as you see fit after payment. We retain the right to showcase your project in our portfolio unless you request otherwise in writing.
            </p>
            <p>
              <strong>Before full payment:</strong> All work-in-progress, demos, and drafts remain the intellectual property of Design over Atlanta. You may not deploy, use, copy, or share unpaid work.
            </p>
          </TermsSection>

          {/* 9. Cancellation & Refunds */}
          <TermsSection number="9" title="Cancellation &amp; Refund Policy">
            <p>
              <strong>No contracts.</strong> You are never locked into a long-term agreement with us. You may cancel any ongoing service at any time.
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Hosting:</strong> Cancel anytime. No refunds for the current billing period. Your site will remain live until the end of the paid period.</li>
              <li><strong>Website Design (before payment):</strong> If you decide not to proceed after receiving a demo, there is nothing to pay or cancel.</li>
              <li><strong>Website Design (after payment):</strong> Once you have paid and received your final deliverables (source code), the transaction is complete. Refunds are not available for completed and delivered projects.</li>
              <li><strong>Graphic Design:</strong> Refunds may be considered on a case-by-case basis if the project has not yet begun. Once design work has started, refunds are not available.</li>
              <li><strong>Hosting Migration ($25):</strong> The migration fee is non-refundable once the migration process has begun.</li>
            </ul>
          </TermsSection>

          {/* 10. Client Responsibilities */}
          <TermsSection number="10" title="Client Responsibilities">
            <p>
              To ensure your project runs smoothly, you agree to:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide all necessary content (text, images, logos, branding guidelines) in a timely manner.</li>
              <li>Respond to requests for feedback and approval within a reasonable timeframe. Projects delayed by more than 30 days due to client non-response may be deprioritized or require rescheduling.</li>
              <li>Provide accurate information about your business, including legal name, contact details, and any industry-specific compliance requirements.</li>
              <li>Ensure that all content you provide to us does not infringe on any third-party intellectual property rights.</li>
              <li>Not use our services for any illegal, fraudulent, or harmful purposes.</li>
            </ul>
          </TermsSection>

          {/* 11. Liability */}
          <TermsSection number="11" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Design over Atlanta is <strong>not liable for any indirect, incidental, special, consequential, or punitive damages</strong> arising from or related to our services, including but not limited to lost profits, business interruption, or data loss.</li>
              <li>Our total liability for any claim arising from our services shall not exceed the amount you paid to us for the specific service in question.</li>
              <li>We are not responsible for the performance of third-party services (domain registrars, payment processors, email providers, etc.) that integrate with your website.</li>
              <li>We are not responsible for losses caused by your failure to maintain strong passwords, keep software updated, or follow basic security practices.</li>
              <li>While we build websites with security best practices, we do not guarantee that your website will be immune to hacking, malware, or other cyber attacks.</li>
            </ul>
          </TermsSection>

          {/* 12. Website Content */}
          <TermsSection number="12" title="Website Content &amp; Acceptable Use">
            <p>
              You are solely responsible for the content displayed on your website. We reserve the right to refuse or remove content that:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Is illegal, defamatory, or promotes hate speech or violence</li>
              <li>Infringes on intellectual property rights of others</li>
              <li>Contains malware, phishing attempts, or other malicious content</li>
              <li>Violates any applicable laws or regulations</li>
            </ul>
            <p>
              We may suspend or terminate hosting services for any website that violates these acceptable use policies.
            </p>
          </TermsSection>

          {/* 13. Turnaround Times */}
          <TermsSection number="13" title="Turnaround Times">
            <p>
              We strive to deliver all projects promptly:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Website demos:</strong> 3&ndash;7 business days from initial consultation</li>
              <li><strong>Final website delivery:</strong> 1&ndash;3 business days after payment and final approval</li>
              <li><strong>Graphic design:</strong> 24&ndash;72 hours for most projects</li>
              <li><strong>Hosting migration:</strong> Same-day to 48 hours depending on site complexity</li>
            </ul>
            <p>
              These are estimates, not guarantees. Actual turnaround times may vary based on project complexity, current workload, and client responsiveness. We will communicate any delays proactively.
            </p>
          </TermsSection>

          {/* 14. Intellectual Property */}
          <TermsSection number="14" title="Intellectual Property">
            <p>
              The &ldquo;Design over Atlanta&rdquo; name, logo, branding, and website content are the intellectual property of Design over Atlanta. You may not use our branding, marketing materials, or proprietary tools without written permission.
            </p>
            <p>
              Any open-source libraries, frameworks, or third-party tools used in your project remain subject to their respective licenses. We will inform you of any notable third-party dependencies.
            </p>
          </TermsSection>

          {/* 15. Dispute Resolution */}
          <TermsSection number="15" title="Dispute Resolution">
            <p>
              If a dispute arises, both parties agree to first attempt to resolve it through informal communication. If the dispute cannot be resolved informally within 30 days, both parties agree to pursue mediation before any legal action. Any legal proceedings shall be governed by the laws of the State of Georgia and shall take place in the courts of Fulton County, Georgia.
            </p>
          </TermsSection>

          {/* 16. Modifications */}
          <TermsSection number="16" title="Modifications to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our services after any changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
            </p>
          </TermsSection>

          {/* 17. Contact */}
          <TermsSection number="17" title="Contact Information">
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <div className="rounded-xl border border-border bg-white p-4 my-3">
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-text-muted">Owner: </span>
                  <span className="text-text-heading font-semibold">Hunter Weeks</span>
                </div>
                <div>
                  <span className="text-text-muted">Business: </span>
                  <span className="text-text-heading font-semibold">Design over Atlanta</span>
                </div>
                <div>
                  <span className="text-text-muted">Phone: </span>
                  <a href="tel:4707583549" className="text-terra font-semibold">(470) 758-3549</a>
                </div>
                <div>
                  <span className="text-text-muted">Location: </span>
                  <span className="text-text-heading">Atlanta, GA</span>
                </div>
                <div>
                  <span className="text-text-muted">Website: </span>
                  <span className="text-terra font-semibold">designoveratlanta.com</span>
                </div>
              </div>
            </div>
          </TermsSection>

          {/* Back to home */}
          <div className="text-center pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-terra hover:text-terra transition-colors text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Section Component ─── */
function TermsSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="reveal">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-terra/10 text-terra font-bold text-sm shrink-0">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-text-heading">{title}</h2>
      </div>
      <div className="pl-11 space-y-3 text-sm sm:text-base text-text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

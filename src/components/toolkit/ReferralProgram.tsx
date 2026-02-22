"use client";

import { useState } from "react";

const REFERRAL_MESSAGES = [
  {
    label: "Casual Text",
    text: `Hey! I just got my website done by Design over Atlanta — custom-coded for $200 and hosting is only $3/mo. They'll even show you a free demo before you pay anything. Check them out: designoveratlanta.com`,
  },
  {
    label: "Professional Email",
    text: `Hi [Name],\n\nI wanted to share a resource I've been really happy with. Design over Atlanta builds custom websites starting at $200 (not templates) and hosting is just $3/month.\n\nThey build a free demo before any payment is required, so there's zero risk. I've saved over $1,500 compared to the agency I was using before.\n\nHere's their site: designoveratlanta.com\n\nWorth checking out if you're looking for a professional web presence without the premium price tag.\n\nBest,\n[Your Name]`,
  },
  {
    label: "Social Media Post",
    text: `Just got my business website redesigned by @DesignOverAtlanta and I'm blown away 🔥\n\n✅ Custom-coded (no templates)\n✅ Only $200\n✅ $3/mo hosting (competitors charge $20)\n✅ Free demo before you pay\n\nIf you need a website, this is the move. Tell them I sent you and we both get $50! #SmallBusiness #WebDesign #Atlanta`,
  },
  {
    label: "DM to a Friend",
    text: `Yo, remember how you were saying you need a website for your business? I just found this team that does custom sites for $200 — not Wix or Squarespace, actual hand-coded sites. And hosting is $3/mo instead of like $20 everywhere else. They show you a free demo before you even pay. If you use my referral we both get $50 off. Want the link?`,
  },
  {
    label: "LinkedIn Recommendation",
    text: `I recently worked with Design over Atlanta on a custom website project and wanted to share my experience.\n\nWhat stood out:\n• Custom-coded website for $200 (comparable agencies quoted me $2,000+)\n• $3/month hosting vs the industry standard of $15-20/month\n• They built a free demo before requiring any payment\n• Site was delivered in under a week\n\nFor any small business owners or entrepreneurs looking for affordable, professional web design, I highly recommend reaching out. They also offer graphic design and AI-powered business tools.\n\n#WebDesign #SmallBusiness #Recommendation`,
  },
];

export default function ReferralProgram() {
  const [copied, setCopied] = useState<number | null>(null);

  function copyText(text: string, idx: number) {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="space-y-10">
      {/* How it works */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { step: "1", title: "Share Your Link", desc: "Send your unique referral link to businesses who need a website." },
          { step: "2", title: "They Sign Up", desc: "When they start a project with us, you both get credited." },
          { step: "3", title: "Earn $50 Credit", desc: "$50 for you, $50 off for them. No limits on referrals." },
        ].map((s) => (
          <div key={s.step} className="bg-white border border-terra/10 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-terra/20 text-terra font-bold text-xl flex items-center justify-center mx-auto mb-4">
              {s.step}
            </div>
            <h3 className="text-text-heading font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-text-muted text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Bonus tiers */}
      <div className="bg-white border border-terra/10 rounded-xl p-6">
        <h3 className="text-text-heading font-bold text-lg mb-4">Milestone Bonuses</h3>
        <div className="space-y-3">
          {[
            { refs: "1 Referral", reward: "$50 credit toward your next project or hosting" },
            { refs: "3 Referrals", reward: "$150 credit + free logo touch-up" },
            { refs: "5 Referrals", reward: "$250 credit + free homepage redesign" },
            { refs: "10 Referrals", reward: "$500 credit + VIP priority on all future projects" },
          ].map((tier) => (
            <div key={tier.refs} className="flex items-center gap-4 py-3 border-b border-terra/10 last:border-0">
              <span className="text-terra font-bold text-sm shrink-0 w-28">{tier.refs}</span>
              <span className="text-text-muted text-sm">{tier.reward}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-written messages */}
      <div>
        <h3 className="text-text-heading font-bold text-lg mb-4">Pre-Written Referral Messages</h3>
        <p className="text-text-muted text-sm mb-6">
          Copy and customize these messages to share with your network.
        </p>
        <div className="space-y-4">
          {REFERRAL_MESSAGES.map((msg, i) => (
            <div key={i} className="bg-white border border-terra/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-text-heading font-semibold text-sm">{msg.label}</span>
                <button
                  onClick={() => copyText(msg.text, i)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terra/10 hover:bg-terra/15 text-text-muted hover:text-terra text-xs font-medium transition-all cursor-pointer"
                >
                  {copied === i ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-text-muted text-sm whitespace-pre-wrap font-[inherit] leading-relaxed bg-terra/5 rounded-lg p-4">
                {msg.text}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

interface Material {
  category: string;
  items: { title: string; content: string }[];
}

const MATERIALS: Material[] = [
  {
    category: "Elevator Pitches",
    items: [
      {
        title: "30-Second Pitch",
        content: `I run Design over Atlanta — we build custom websites for small businesses starting at just $200. Not templates, not page builders — hand-coded sites that are fast, professional, and unique to your brand. Hosting is $3 a month, which is 85% less than what most companies charge. And we always build a free demo before you pay anything, so there's zero risk.`,
      },
      {
        title: "60-Second Pitch",
        content: `I'm the founder of Design over Atlanta. We help small businesses get online with custom-coded websites starting at $200 — while most agencies charge $2,000 or more for the same thing. We keep costs low by cutting overhead, not quality: no office, no sales team, no middlemen. Just direct access to the developer who builds your site.\n\nOur hosting is $3 a month compared to the industry standard of $20. And every project starts with a free demo — you see your site before you spend a dollar. We also do graphic design, branding, and AI-powered business tools like automated booking and smart chatbots.\n\nIf you know any business that needs a website, we have a referral program that pays $50 per signup.`,
      },
      {
        title: "2-Minute Pitch (Networking Events)",
        content: `I started Design over Atlanta because I saw small businesses getting ripped off. Agencies charging $5,000, $10,000 for websites that could be built for a fraction of that. Website builders like Wix and Squarespace locking people into $17/month plans for cookie-cutter templates.\n\nSo I took a different approach. I build every site by hand — custom code, no templates, no page builders. Starting price is $200. That's not a landing page, that's a full professional website. And hosting? $3 a month. Most hosts charge $15 to $20.\n\nThe way I keep prices low is simple: I cut the overhead. No office lease. No sales team. No project managers marking things up. You work directly with me, the developer. That means faster turnaround, better communication, and a lot less wasted money.\n\nEvery project starts with a free demo. I build your site, show it to you, and you only pay if you love it. If you don't, you walk away — no charge, no pressure.\n\nBeyond websites, I also do graphic design — logos, business cards, social media graphics, flyers. And I build custom AI tools: automated booking systems, chatbots, smart forms. Basically anything a small business needs to look professional and run more efficiently.\n\nI've completed over 150 projects and I have a $50 referral program. If you send me a client and they sign up, you get $50 credit. No limits.\n\nHere's my card — check out the website, and feel free to reach out anytime.`,
      },
    ],
  },
  {
    category: "Email Signatures",
    items: [
      {
        title: "Standard Signature",
        content: `Hunter Weeks
Founder, Design over Atlanta
Custom Websites from $200 | Hosting from $3/mo
designoveratlanta.com`,
      },
      {
        title: "With Tagline",
        content: `Hunter Weeks
Design over Atlanta
"Professional websites shouldn't cost a fortune."
Custom sites from $200 | $3/mo hosting | Free demo included
designoveratlanta.com`,
      },
      {
        title: "Promotional Signature",
        content: `Hunter Weeks | Design over Atlanta
🌐 Custom websites from $200 (agencies charge $2,000+)
💰 Hosting from $3/mo (competitors charge $20/mo)
🎨 Graphic design, AI tools & more
👉 Free demo before you pay — designoveratlanta.com`,
      },
    ],
  },
  {
    category: "Business Card Copy",
    items: [
      {
        title: "Front",
        content: `Design over Atlanta

Hunter Weeks — Founder & Developer

Custom Websites | Graphic Design | AI Tools`,
      },
      {
        title: "Back",
        content: `Custom websites from $200
Hosting from $3/mo (85% less than competitors)
Free demo before any payment

designoveratlanta.com
hello@designoveratlanta.com
(470) 555-0150`,
      },
    ],
  },
  {
    category: "Flyer / Handout Copy",
    items: [
      {
        title: "Standard Flyer",
        content: `NEED A WEBSITE?

Custom-built websites starting at $200.
No templates. No page builders. 100% hand-coded.

HOSTING FROM $3/MO
(Competitors charge $20/mo — save $204/year)

✓ Free demo before you pay
✓ Professional, fast, mobile-friendly
✓ Graphic design & AI tools available
✓ 150+ projects completed

REFER A FRIEND → EARN $50

Design over Atlanta
designoveratlanta.com`,
      },
      {
        title: "Comparison Flyer",
        content: `STOP OVERPAYING FOR YOUR WEBSITE.

                AGENCIES    |    US
Design Fee    $2,000+      |    $200
Monthly Host  $20/mo       |    $3/mo
Year 1 Total  $2,240+      |    $236
Templates?    Often        |    Never
Free Demo?    Rarely       |    Always

That's $2,000+ saved in Year 1 alone.

Design over Atlanta — designoveratlanta.com
Custom websites, graphic design & AI business tools.`,
      },
    ],
  },
  {
    category: "Social Media Bios",
    items: [
      {
        title: "Instagram Bio",
        content: `Design over Atlanta ✦ Web & Design Studio
Custom websites from $200 (not templates)
$3/mo hosting | Free demo first
150+ projects | Atlanta, GA 📍
⬇️ Get a free demo`,
      },
      {
        title: "Twitter/X Bio",
        content: `Custom websites from $200. Hosting from $3/mo. Free demo before you pay. Atlanta-based design studio serving small businesses everywhere. 150+ projects shipped.`,
      },
      {
        title: "LinkedIn Summary",
        content: `Design over Atlanta builds custom-coded websites for small businesses starting at $200 — while most agencies charge $2,000 or more. Our hosting is $3/month (industry average is $20). Every project includes a free demo before any payment is required.\n\nWe also provide graphic design (logos, business cards, social media), and AI-powered business tools (automated booking, chatbots, custom dashboards).\n\n150+ projects completed. Based in Atlanta, GA.`,
      },
      {
        title: "Facebook Page Description",
        content: `Design over Atlanta is a web design studio that builds custom-coded websites for small businesses starting at just $200. No templates, no page builders — every site is hand-built for your brand. Hosting from $3/mo (85% less than competitors). Free demo included with every project. We also offer graphic design and AI business tools. 150+ projects delivered.`,
      },
    ],
  },
];

export default function PromoMaterials() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="space-y-8">
      {MATERIALS.map((mat) => (
        <div key={mat.category}>
          <h3 className="text-text-heading font-bold text-lg mb-4">{mat.category}</h3>
          <div className="space-y-4">
            {mat.items.map((item) => {
              const key = `${mat.category}-${item.title}`;
              return (
                <div key={key} className="bg-white border border-terra/10 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text-heading font-semibold text-sm">{item.title}</span>
                    <button
                      onClick={() => copy(item.content, key)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terra/10 hover:bg-terra/15 text-text-muted hover:text-terra text-xs font-medium transition-all cursor-pointer"
                    >
                      {copied === key ? (
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
                    {item.content}
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

interface PromptCard {
  id: string;
  title: string;
  category: string;
  platform: string;
  prompt: string;
  tips: string;
  bestFor: string[];
}

const PROMPTS: PromptCard[] = [
  // ─── FOUNDER / PERSONAL BRAND ───
  {
    id: "founder-desk",
    title: "Founder at Work",
    category: "Personal Brand",
    platform: "Ideogram / Leonardo AI",
    prompt: "Professional portrait of a young male web developer working at a modern minimalist desk setup with dual monitors showing code and website designs, dramatic purple ambient lighting from behind the monitors, dark room with deep purple (#1a0a24) walls, soft magenta (#E91E8C) accent glow from LED strip lights, wearing a clean black t-shirt, confident focused expression, shallow depth of field, shot on Sony A7III, 85mm f/1.4, cinematic color grading with purple and pink tones, 4K, photorealistic",
    tips: "Use this as a background for founder story ads. Crop to show just the setup or overlay with text.",
    bestFor: ["Instagram Post", "Facebook Post", "LinkedIn Post"],
  },
  {
    id: "founder-handshake",
    title: "Client Meeting",
    category: "Personal Brand",
    platform: "Ideogram / Microsoft Designer",
    prompt: "Two professionals shaking hands in a modern office with floor-to-ceiling windows, one person holding a laptop showing a beautiful website design, warm natural lighting mixed with subtle purple (#9B59B6) ambient accent lights, clean modern furniture, the handshake is the focal point, blurred city skyline in background, professional business photography style, shot on Canon R5, 35mm f/2, warm color grading, photorealistic, 4K",
    tips: "Perfect for testimonial or trust-building ads. Overlay client quote on the blurred background area.",
    bestFor: ["Facebook Post", "LinkedIn Post", "Instagram Post"],
  },
  {
    id: "founder-phone",
    title: "Mobile-First Showcase",
    category: "Personal Brand",
    platform: "Ideogram / Playground AI",
    prompt: "Close-up of hands holding a modern smartphone displaying a stunning custom website with clean design, the phone screen is the hero element, dark moody background with soft purple (#7B2D8E) bokeh lights, a laptop showing code in the background out of focus, professional product photography style, dramatic lighting from the phone screen illuminating the hands, shot on macro lens, 4K, photorealistic, commercial photography",
    tips: "Great for 'mobile-first' messaging. Add your actual site screenshots over the phone screen in post.",
    bestFor: ["Instagram Story", "Instagram Post", "TikTok Cover"],
  },
  // ─── WORKSPACE / PROCESS ───
  {
    id: "workspace-code",
    title: "Code in Action",
    category: "Workspace",
    platform: "Ideogram / Leonardo AI",
    prompt: "Ultra-wide shot of a professional developer workspace at night, large ultrawide monitor displaying colorful React/Next.js code with syntax highlighting, dark room illuminated only by the monitor and purple (#9B59B6) LED ambient lighting, mechanical keyboard with subtle RGB backlight, coffee mug with steam, clean minimal desk with no clutter, cinematic atmosphere, moody tech vibes, shot from slightly above, tilt-shift effect, 4K photorealistic",
    tips: "Use as full-bleed background for pricing or service ads. The code on screen reinforces 'custom coded' messaging.",
    bestFor: ["Facebook Post", "X Header", "LinkedIn Cover", "YouTube Thumbnail"],
  },
  {
    id: "workspace-wireframe",
    title: "Design Process",
    category: "Workspace",
    platform: "Ideogram / Canva AI",
    prompt: "Overhead flat lay of a creative workspace with wireframe sketches on paper, a tablet showing a website mockup, colored markers in purple and pink tones, a laptop with design software open, scattered sticky notes with UX ideas, clean white desk surface, natural daylight from a window, professional product photography, organized creative chaos, pastel purple (#B57EDC) and magenta (#E91E8C) accent colors visible in the designs, 4K, commercial photography style",
    tips: "Perfect for 'how it works' or process ads. The overhead angle gives a behind-the-scenes feel.",
    bestFor: ["Instagram Post", "Pinterest Pin", "Facebook Post"],
  },
  {
    id: "workspace-dual",
    title: "Design + Code Split",
    category: "Workspace",
    platform: "Leonardo AI / Playground AI",
    prompt: "Split composition workspace: left side shows a beautiful website design on a large monitor, right side shows the code that built it on another monitor, the two screens face each other at an angle creating a V shape, dark environment with deep purple (#1a0a24) ambient lighting, soft magenta (#E91E8C) glow between the monitors, symbolizing the bridge between design and development, cinematic wide shot, dramatic lighting, 4K photorealistic, tech photography",
    tips: "Directly represents DOA's dual offering: design + development. Use for service overview ads.",
    bestFor: ["X Post", "Facebook Post", "LinkedIn Post", "YouTube Thumbnail"],
  },
  // ─── LIFESTYLE / CLIENT SUCCESS ───
  {
    id: "client-happy",
    title: "Happy Business Owner",
    category: "Client Success",
    platform: "Ideogram / Microsoft Designer",
    prompt: "Small business owner standing proudly in front of their modern storefront, holding a tablet that shows their new professional website, genuine smile of satisfaction, the store window reflects subtle purple (#9B59B6) neon-style signage, warm golden hour lighting mixed with cool purple accents, authentic and relatable, diverse representation, shot on 50mm f/1.8, natural bokeh, lifestyle commercial photography, 4K, photorealistic",
    tips: "Best for testimonial ads or 'join 150+ businesses' social proof. The storefront grounds it in real small business.",
    bestFor: ["Instagram Post", "Facebook Post", "Instagram Story"],
  },
  {
    id: "client-restaurant",
    title: "Restaurant Owner Online",
    category: "Client Success",
    platform: "Ideogram / Leonardo AI",
    prompt: "Restaurant owner at their establishment checking orders on a laptop showing a modern restaurant website with online ordering system, warm ambient restaurant lighting with exposed brick walls, food prep visible in background, the laptop screen shows a beautiful dark-themed website with purple (#9B59B6) accent buttons, authentic busy restaurant atmosphere, documentary style photography, natural lighting, 50mm lens, photorealistic, 4K",
    tips: "Perfect for the restaurant niche ad. Shows real-world application of a website driving business.",
    bestFor: ["Instagram Post", "Facebook Post"],
  },
  {
    id: "client-barber",
    title: "Barber Shop Digital",
    category: "Client Success",
    platform: "Ideogram / Playground AI",
    prompt: "Modern barber shop interior with a sleek tablet mounted on the wall showing an online booking system website, classic barber chairs in the foreground, clean industrial aesthetic with exposed brick and pendant lights, the tablet screen glows with a dark purple (#1a0a24) themed website with magenta (#E91E8C) booking buttons, a barber working on a client in the background out of focus, moody atmospheric lighting, commercial interior photography, 4K photorealistic",
    tips: "For the barber/salon niche ad. The wall-mounted tablet shows how seamless the digital integration is.",
    bestFor: ["Instagram Post", "Instagram Story", "Facebook Post"],
  },
  {
    id: "client-fitness",
    title: "Gym Goes Digital",
    category: "Client Success",
    platform: "Ideogram / Microsoft Designer",
    prompt: "Modern gym interior with a large wall-mounted screen near the entrance showing a class schedule website, gym members walking in, the screen displays a clean dark-themed fitness website with green (#4A8C2A) accent colors and class booking interface, dramatic gym lighting with industrial ceiling, motivational atmosphere, wide angle architectural interior photography, the digital display is the focal point, 4K photorealistic, commercial photography",
    tips: "For the fitness niche ad. Shows the website as part of the gym experience, not just a separate thing.",
    bestFor: ["Instagram Post", "Facebook Post", "LinkedIn Post"],
  },
  // ─── ABSTRACT / BRAND VISUALS ───
  {
    id: "abstract-portal",
    title: "Purple Portal",
    category: "Abstract Brand",
    platform: "Ideogram / Leonardo AI",
    prompt: "Abstract 3D render of a glowing circular portal made of layered purple (#7B2D8E) and magenta (#E91E8C) light rings floating in a dark void (#1a0a24), particles of light flowing through the portal center, the portal casts purple volumetric light rays into the surrounding darkness, ethereal and futuristic, reminiscent of a digital gateway or transformation, cinema 4D style rendering, octane render quality, 8K, ultra detailed",
    tips: "Use as a dramatic background for 'transform your business' messaging. The portal = your website launch.",
    bestFor: ["Instagram Post", "Instagram Story", "TikTok Cover"],
  },
  {
    id: "abstract-layers",
    title: "Layered Glass Cards",
    category: "Abstract Brand",
    platform: "Ideogram / Playground AI",
    prompt: "3D render of three floating glass-morphism cards stacked at slight angles in dark space (#1a0a24), each card has a frosted glass effect with subtle purple (#9B59B6) and pink (#E91E8C) gradient borders, the front card shows a website layout wireframe, middle card shows code snippets, back card shows a color palette, soft volumetric purple lighting from above, particles floating around, futuristic tech aesthetic, octane render, 8K ultra detailed, clean minimal composition",
    tips: "Represents the 'layered design process' — design, code, branding. Perfect for service overview ads.",
    bestFor: ["Instagram Post", "Facebook Post", "LinkedIn Post"],
  },
  {
    id: "abstract-slash",
    title: "Diagonal Slash",
    category: "Abstract Brand",
    platform: "Ideogram / Leonardo AI",
    prompt: "Abstract geometric composition: a bold diagonal slash cutting across the frame from bottom-left to top-right, the slash is a gradient band transitioning from deep purple (#7B2D8E) through magenta (#E91E8C) to warm orange (#F5A623), the left side of the slash is solid dark (#1a0a24), the right side has a subtle dot grid pattern, small geometric shapes (triangles, circles) floating near the slash line, clean minimal design, graphic design style, vector-sharp edges, 4K, perfect for text overlay",
    tips: "THE signature Slash Architecture background. Use for literally any ad — add headline text on the dark side.",
    bestFor: ["All formats"],
  },
  {
    id: "abstract-brackets",
    title: "Code Bracket Frame",
    category: "Abstract Brand",
    platform: "Ideogram / Canva AI",
    prompt: "Minimalist dark (#1a0a24) background with large angular code brackets < > made of glowing purple (#9B59B6) neon light, the brackets frame an empty center space perfect for text, subtle dot grid pattern in the background, small magenta (#E91E8C) particles floating around the brackets, the brackets cast soft purple volumetric glow, clean techy aesthetic, perfect for social media ad background, 4K, graphic design composition with text space",
    tips: "The code brackets reinforce 'custom coded'. Add any headline in the center space between the brackets.",
    bestFor: ["Instagram Post", "Facebook Post", "X Post"],
  },
  // ─── COMPARISON / DRAMATIC ───
  {
    id: "compare-old-new",
    title: "Old vs New Website",
    category: "Dramatic",
    platform: "Ideogram / Leonardo AI",
    prompt: "Split screen composition: left side shows an old ugly outdated website from 2010 on a dusty cracked laptop with harsh fluorescent lighting, right side shows a stunning modern dark-themed website on a sleek new laptop with beautiful purple (#9B59B6) ambient lighting, dramatic contrast between the two halves, the dividing line between them is a glowing magenta (#E91E8C) diagonal slash, before and after transformation concept, commercial photography, 4K photorealistic",
    tips: "The ultimate before/after visual. Use for redesign ads. The diagonal slash in the middle IS the brand.",
    bestFor: ["Instagram Post", "Facebook Post", "X Post"],
  },
  {
    id: "compare-money",
    title: "Money Saved Visual",
    category: "Dramatic",
    platform: "Ideogram / Microsoft Designer",
    prompt: "Conceptual still life: a glass jar labeled '$2,000+ Agency' is nearly empty with a few coins, next to it a glass jar labeled '$200 Custom' is overflowing with cash and has a small plant growing from the money symbolizing growth, dark moody background (#1a0a24) with dramatic purple (#9B59B6) side lighting, the overflowing jar has a soft green (#4A8C2A) glow, product photography style, shallow depth of field focused on the full jar, 4K photorealistic, commercial concept photography",
    tips: "Visual metaphor for pricing comparison. Strong emotional trigger — people hate overpaying.",
    bestFor: ["Instagram Post", "Facebook Post", "Pinterest Pin"],
  },
  // ─── ATLANTA LOCAL ───
  {
    id: "atl-skyline",
    title: "Atlanta Skyline Purple",
    category: "Atlanta Local",
    platform: "Ideogram / Leonardo AI",
    prompt: "Atlanta Georgia skyline at twilight, dramatic purple (#7B2D8E) and magenta (#E91E8C) sky gradient as the sun sets behind the buildings, the city lights are starting to turn on with warm golden glows, a few clouds catch the purple light, the foreground shows the iconic Atlanta highways with light trails from cars, shot from a high vantage point, wide angle cityscape photography, the overall tone matches a dark purple color palette, 4K photorealistic, editorial cityscape",
    tips: "Localizes the brand to Atlanta. Use as background for 'Atlanta's Most Affordable Web Design' messaging.",
    bestFor: ["Facebook Cover", "LinkedIn Cover", "X Header", "YouTube Banner"],
  },
  {
    id: "atl-local-biz",
    title: "Atlanta Small Business",
    category: "Atlanta Local",
    platform: "Ideogram / Playground AI",
    prompt: "Charming Atlanta neighborhood street with diverse small businesses, a coffee shop, a barbershop, and a boutique visible, each storefront has a modern digital sign or tablet in the window showing their custom websites, warm evening golden hour light mixed with purple (#9B59B6) neon accent signs, tree-lined sidewalk with people walking, authentic Atlanta neighborhood feel, Decatur or East Atlanta Village vibes, documentary street photography style, 50mm lens, 4K photorealistic",
    tips: "Shows DOA serving the Atlanta small business community. Authentic local feel grounds the brand.",
    bestFor: ["Instagram Post", "Facebook Post"],
  },
];

const CATEGORIES = Array.from(new Set(PROMPTS.map((p) => p.category)));

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = activeCategory === "all"
    ? PROMPTS
    : PROMPTS.filter((p) => p.category === activeCategory);

  const copyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 pb-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold tracking-wider text-accent-light uppercase mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            Free AI Photo Prompts
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-4">
            AI Photo Prompts for{" "}
            <span className="gradient-text">Your Ads</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-muted leading-relaxed">
            18 copy-paste prompts for free AI image generators.
            Create branded photos for your social media ads in seconds.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-text-muted">
            <span className="rounded-full bg-white/[0.05] px-3 py-1">18 Prompts</span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1">100% Free Tools</span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1">Brand-Matched Colors</span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1">Copy & Paste</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Ideogram", "Leonardo AI", "Playground AI", "Canva AI", "Microsoft Designer"].map((tool) => (
              <span key={tool} className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent-light">
                {tool} — Free
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-30 border-b border-border-dark bg-bg-dark/92 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60 mr-1">Category:</label>
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-accent text-white shadow-[0_0_14px_rgba(155,89,182,0.3)]"
                  : "bg-white/[0.03] text-text-muted hover:bg-white/[0.07] hover:text-text-white"
              }`}
            >
              All ({PROMPTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-[0_0_14px_rgba(155,89,182,0.3)]"
                    : "bg-white/[0.03] text-text-muted hover:bg-white/[0.07] hover:text-text-white"
                }`}
              >
                {cat} ({PROMPTS.filter((p) => p.category === cat).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Cards */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((prompt) => (
            <div
              key={prompt.id}
              className="group rounded-2xl border border-border-dark bg-bg-card p-5 transition-all hover:border-white/10 hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold text-text-white">{prompt.title}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent-light uppercase tracking-wider">
                      {prompt.category}
                    </span>
                    <span className="text-[10px] text-text-muted">{prompt.platform}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyPrompt(prompt.id, prompt.prompt)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-all ${
                    copiedId === prompt.id
                      ? "bg-emerald/20 text-emerald"
                      : "bg-accent/10 text-accent-light hover:bg-accent/20"
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Prompt Text */}
              <div className="rounded-xl bg-bg-dark/60 border border-white/[0.04] p-3.5 mb-3">
                <p className="text-xs text-text-muted leading-relaxed line-clamp-4 font-mono">
                  {prompt.prompt}
                </p>
                <button
                  onClick={() => copyPrompt(prompt.id, prompt.prompt)}
                  className="mt-2 text-[10px] font-semibold text-accent-light hover:text-accent transition-colors"
                >
                  Click to expand & copy full prompt
                </button>
              </div>

              {/* Tips */}
              <div className="mb-3">
                <p className="text-[11px] font-semibold text-text-white mb-0.5">How to use:</p>
                <p className="text-[11px] text-text-muted leading-relaxed">{prompt.tips}</p>
              </div>

              {/* Best For Tags */}
              <div className="flex flex-wrap gap-1.5">
                {prompt.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How To Use Section */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl border border-border-dark bg-bg-card p-6">
          <h2 className="text-lg font-bold mb-3"><span className="gradient-text">How to Create Free Ad Photos</span></h2>
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { t: "Copy a Prompt", d: "Click the copy button on any prompt card. The full prompt is copied to your clipboard." },
              { t: "Open a Free AI Tool", d: "Go to Ideogram.ai, Leonardo.ai, or Playground AI — all 100% free to use." },
              { t: "Paste & Generate", d: "Paste the prompt, hit generate. The colors and composition are already brand-matched." },
              { t: "Download & Use", d: "Download the image, overlay your ad text, and post. Pair with our Ad Studio for full ads." },
            ].map((tip) => (
              <div key={tip.t}>
                <h3 className="text-sm font-bold text-text-white mb-1">{tip.t}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools Reference */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-border-dark bg-bg-card p-6">
          <h2 className="text-lg font-bold mb-4"><span className="gradient-text">Free AI Image Tools</span></h2>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { name: "Ideogram", desc: "Best for text in images and stylized graphics. 25 free images/day.", color: "#9B59B6" },
              { name: "Leonardo AI", desc: "Best for photorealistic and cinematic shots. 150 free tokens/day.", color: "#E91E8C" },
              { name: "Playground AI", desc: "Best for quick iterations and batch generation. 500 free images/day.", color: "#4A8C2A" },
              { name: "Canva AI", desc: "Best if you already use Canva. 50 free generations/month.", color: "#F5A623" },
              { name: "Microsoft Designer", desc: "Free with Microsoft account. Great for social media graphics.", color: "#3b82f6" },
            ].map((tool) => (
              <div key={tool.name} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: tool.color }} />
                  <h3 className="text-sm font-bold text-text-white">{tool.name}</h3>
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

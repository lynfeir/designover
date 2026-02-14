export type AdFormat = "ig-post" | "ig-story" | "fb-post" | "twitter";
export type AdCategory =
  | "launch"
  | "pricing"
  | "hosting"
  | "demo"
  | "testimonial"
  | "seasonal"
  | "referral"
  | "service"
  | "stats"
  | "limited"
  | "comparison"
  | "faq"
  | "founder"
  | "niche"
  | "portfolio";
export type AdTheme = "dark" | "light" | "gradient" | "minimal";

// Layout variants for visual diversity
export type AdLayout =
  | "centered"       // headline + subtext centered (default)
  | "left-align"     // text aligned left with accent bar
  | "split"          // top half color block, bottom half content
  | "big-number"     // huge stat number with supporting text
  | "quote"          // testimonial with large quotation marks
  | "comparison-table" // side-by-side comparison
  | "stacked-badges" // multiple badge/pill elements
  | "diagonal"       // diagonal split background
  | "corner-accent"  // large corner geometric shape
  | "minimal-line"   // single accent line divider
  | "icon-top"       // icon/emoji at top, text below
  | "bottom-bar"     // content with colored bottom bar

export interface AdDefinition {
  id: string;
  headline: string;
  subtext: string;
  cta?: string;
  format: AdFormat;
  category: AdCategory;
  theme: AdTheme;
  layout: AdLayout;
  badge?: string;
  icon?: string;         // emoji or symbol for icon-top layout
  statNumber?: string;   // big number for big-number layout
  statLabel?: string;    // label under the big number
  compareLeft?: string;  // left column for comparison
  compareRight?: string; // right column for comparison
  pills?: string[];      // badge pills for stacked-badges
  quoteName?: string;    // testimonial author name
  quoteRole?: string;    // testimonial author role
  quoteInitials?: string; // initials for avatar
}

export const FORMAT_LABELS: Record<AdFormat, string> = {
  "ig-post": "Instagram Post",
  "ig-story": "Instagram Story",
  "fb-post": "Facebook Post",
  twitter: "Twitter / X",
};

export const FORMAT_SIZES: Record<AdFormat, { w: number; h: number }> = {
  "ig-post": { w: 1080, h: 1080 },
  "ig-story": { w: 1080, h: 1920 },
  "fb-post": { w: 1200, h: 630 },
  twitter: { w: 1200, h: 675 },
};

export const CATEGORY_LABELS: Record<AdCategory, string> = {
  launch: "Website Launch",
  pricing: "Pricing",
  hosting: "Hosting Deals",
  demo: "Demo-First",
  testimonial: "Testimonials",
  seasonal: "Seasonal",
  referral: "Referral",
  service: "Services",
  stats: "Social Proof",
  limited: "Limited Time",
  comparison: "Comparisons",
  faq: "FAQ Teasers",
  founder: "Founder Story",
  niche: "Niche Callouts",
  portfolio: "Portfolio",
};

let _id = 0;
const id = (prefix: string) => `${prefix}-${++_id}`;

export const ADS: AdDefinition[] = [
  // ══════════════════════════════════════
  // INSTAGRAM POST (1080x1080) — 30 ads
  // ══════════════════════════════════════

  // Launch
  { id: id("ig"), headline: "Custom Websites\nFrom $200", subtext: "Professional design. Zero templates. Your brand, built from scratch.", cta: "Get a Free Demo", format: "ig-post", category: "launch", theme: "dark", layout: "corner-accent" },
  { id: id("ig"), headline: "Your Business\nDeserves Better", subtext: "Stop overpaying for cookie-cutter websites. Custom builds start at $200.", cta: "See Our Work", format: "ig-post", category: "launch", theme: "gradient", layout: "diagonal" },
  { id: id("ig"), headline: "Launch Your\nDream Website", subtext: "Hand-coded. Lightning fast. Uniquely yours.", cta: "Start Today", format: "ig-post", category: "launch", theme: "light", layout: "left-align" },

  // Pricing
  { id: id("ig"), headline: "$200\nvs $2,000+", subtext: "Same quality. Fraction of the price. No hidden fees, no contracts.", cta: "Get Your Quote", format: "ig-post", category: "pricing", theme: "dark", layout: "big-number", statNumber: "$200", statLabel: "Custom Website" },
  { id: id("ig"), headline: "Why Pay More?", subtext: "Agencies charge $2,000\u2013$10,000 for what we deliver at $200. Real talk.", cta: "Compare Now", format: "ig-post", category: "pricing", theme: "minimal", layout: "minimal-line" },
  { id: id("ig"), headline: "Website Design\nStarting at $200", subtext: "Custom code, not templates. Your vision, our craft.", cta: "Learn More", format: "ig-post", category: "pricing", theme: "gradient", layout: "split" },

  // Hosting
  { id: id("ig"), headline: "$3/mo\nHosting", subtext: "Competitors charge $20/mo. Save $204/year with us. That's 85% less.", cta: "Switch Now", format: "ig-post", category: "hosting", theme: "dark", layout: "big-number", statNumber: "$3", statLabel: "Per Month" },
  { id: id("ig"), headline: "Hosting That\nPays For Itself", subtext: "$3/mo vs $20/mo industry standard. Your website savings start day one.", cta: "See Plans", format: "ig-post", category: "hosting", theme: "light", layout: "comparison-table", compareLeft: "Them: $20/mo\n$240/year", compareRight: "Us: $3/mo\n$36/year" },
  { id: id("ig"), headline: "$36/year\nHosting", subtext: "While others charge $240/year. Do the math \u2014 save $204 annually.", cta: "Get Started", format: "ig-post", category: "hosting", theme: "gradient", layout: "corner-accent" },

  // Demo
  { id: id("ig"), headline: "See It Before\nYou Pay", subtext: "We build your demo site for free. Love it? Then we talk payment.", cta: "Request Demo", format: "ig-post", category: "demo", theme: "dark", layout: "icon-top", icon: "\ud83d\udcbb" },
  { id: id("ig"), headline: "100% Risk-Free", subtext: "Every project starts with a free demo. No payment until you\u2019re happy.", cta: "Try Us Free", format: "ig-post", category: "demo", theme: "minimal", layout: "bottom-bar" },

  // Testimonial — REAL QUOTES
  { id: id("ig"), headline: "\u201CHunter delivered beyond expectations. Our landing page loads instantly and converts 3x better.\u201D", subtext: "", cta: "Read More Reviews", format: "ig-post", category: "testimonial", theme: "dark", layout: "quote", quoteName: "Brooke Brum", quoteRole: "CEO, Fit4Lyfe", quoteInitials: "BB" },
  { id: id("ig"), headline: "\u201CThe attention to detail is incredible. Every animation, every interaction feels purposeful.\u201D", subtext: "", cta: "See All Testimonials", format: "ig-post", category: "testimonial", theme: "light", layout: "quote", quoteName: "Cindy Evanoff", quoteRole: "Manager, Pine Crest Camp", quoteInitials: "CE" },
  { id: id("ig"), headline: "\u201CBest $200 I\u2019ve\never spent.\u201D", subtext: "\u2014 Restaurant owner, Decatur", cta: "Get Your Quote", format: "ig-post", category: "testimonial", theme: "gradient", layout: "quote", quoteName: "Local Business Owner", quoteRole: "Restaurant, Decatur GA", quoteInitials: "LB" },

  // Seasonal
  { id: id("ig"), headline: "New Year,\nNew Website", subtext: "Start 2026 right. Custom sites from $200. Limited slots available.", cta: "Book Now", format: "ig-post", category: "seasonal", theme: "dark", layout: "diagonal", badge: "New Year Special" },
  { id: id("ig"), headline: "Summer Sale\n20% Off", subtext: "Custom websites starting at $160 this month only.", cta: "Claim Offer", format: "ig-post", category: "seasonal", theme: "gradient", layout: "stacked-badges", badge: "Summer Deal", pills: ["20% Off", "Custom Code", "Free Demo"] },
  { id: id("ig"), headline: "Black Friday\nWeb Deals", subtext: "Get a custom website + 6 months free hosting. Our biggest deal ever.", cta: "Shop Now", format: "ig-post", category: "seasonal", theme: "dark", layout: "corner-accent", badge: "Black Friday" },

  // Referral
  { id: id("ig"), headline: "Refer a Friend,\nEarn $50", subtext: "Know someone who needs a website? Send them our way and get $50 credit.", cta: "Start Referring", format: "ig-post", category: "referral", theme: "dark", layout: "big-number", statNumber: "$50", statLabel: "Per Referral" },
  { id: id("ig"), headline: "Share the Savings", subtext: "$50 for you. $50 off for them. Everyone wins.", cta: "Get Your Link", format: "ig-post", category: "referral", theme: "light", layout: "icon-top", icon: "\ud83e\udd1d" },

  // Service
  { id: id("ig"), headline: "Web + Design\nBundle", subtext: "Website + logo + business cards + social media kit. One price, one team.", cta: "See Bundles", format: "ig-post", category: "service", theme: "gradient", layout: "stacked-badges", pills: ["Website", "Logo", "Cards", "Social Kit"] },
  { id: id("ig"), headline: "AI Tools For\nYour Business", subtext: "Automated booking, smart forms, chatbots \u2014 custom-built for you.", cta: "Explore AI", format: "ig-post", category: "service", theme: "dark", layout: "icon-top", icon: "\ud83e\udd16" },
  { id: id("ig"), headline: "Graphic Design\nThat Pops", subtext: "Business cards, flyers, social media ads \u2014 all designed to convert.", cta: "View Gallery", format: "ig-post", category: "service", theme: "minimal", layout: "left-align" },

  // Stats
  { id: id("ig"), headline: "150+ Projects\nDelivered", subtext: "Trusted by small businesses across Atlanta and beyond.", cta: "Join Them", format: "ig-post", category: "stats", theme: "dark", layout: "big-number", statNumber: "150+", statLabel: "Projects Shipped" },
  { id: id("ig"), headline: "98% Client\nSatisfaction", subtext: "We don\u2019t just build websites. We build relationships.", cta: "See Reviews", format: "ig-post", category: "stats", theme: "light", layout: "big-number", statNumber: "98%", statLabel: "Satisfaction Rate" },

  // Limited Time
  { id: id("ig"), headline: "Only 5 Spots\nLeft This Month", subtext: "We cap projects to ensure quality. Don\u2019t miss your slot.", cta: "Reserve Now", format: "ig-post", category: "limited", theme: "dark", layout: "bottom-bar", badge: "Almost Full" },
  { id: id("ig"), headline: "Flash Sale:\n$150 Websites", subtext: "48 hours only. Custom-coded, not template. First come, first served.", cta: "Grab This Deal", format: "ig-post", category: "limited", theme: "gradient", layout: "diagonal", badge: "48hrs Only" },

  // Comparison
  { id: id("ig"), headline: "Us vs Agencies", subtext: "Year 1 cost comparison", cta: "Compare", format: "ig-post", category: "comparison", theme: "dark", layout: "comparison-table", compareLeft: "Agency\n$2,000 design\n$20/mo hosting\n$2,240/year", compareRight: "Us\n$200 design\n$3/mo hosting\n$236/year" },
  { id: id("ig"), headline: "Wix vs Us", subtext: "Wix: $17/mo + limited design. Us: $200 once + $3/mo. You decide.", cta: "See the Difference", format: "ig-post", category: "comparison", theme: "minimal", layout: "comparison-table", compareLeft: "Wix\n$17/mo\nTemplates\nLimited control", compareRight: "DOA\n$200 once\nCustom code\nFull ownership" },

  // FAQ
  { id: id("ig"), headline: "\"Why So Cheap?\"", subtext: "We cut the overhead, not the quality. No office, no middlemen, no markup.", cta: "Learn Why", format: "ig-post", category: "faq", theme: "dark", layout: "minimal-line" },

  // Bonus
  { id: id("ig"), headline: "Design That\nConverts", subtext: "We don\u2019t just make it pretty. We make it work for your business.", cta: "See Results", format: "ig-post", category: "service", theme: "dark", layout: "split" },
  { id: id("ig"), headline: "Built Different.\nPriced Fair.", subtext: "Custom websites from $200. No shortcuts, no surprises.", cta: "Get a Quote", format: "ig-post", category: "pricing", theme: "minimal", layout: "corner-accent" },

  // ══════════════════════════════════════
  // INSTAGRAM STORY (1080x1920) — 26 ads
  // ══════════════════════════════════════

  { id: id("story"), headline: "Custom\nWebsites\nFrom $200", subtext: "Hand-coded. No templates. Your brand, amplified.", cta: "Swipe Up", format: "ig-story", category: "launch", theme: "dark", layout: "corner-accent" },
  { id: id("story"), headline: "Your New\nWebsite\nAwaits", subtext: "Professional. Affordable. Built in days, not months.", cta: "Tap to Start", format: "ig-story", category: "launch", theme: "gradient", layout: "diagonal" },
  { id: id("story"), headline: "Stop\nOverpaying\nFor Websites", subtext: "Agencies charge $2,000+.\nWe start at $200.", cta: "See How", format: "ig-story", category: "launch", theme: "light", layout: "split" },

  { id: id("story"), headline: "$200\nCustom\nWebsite", subtext: "Not a template.\nNot a page builder.\n100% custom code.", cta: "Get Quote", format: "ig-story", category: "pricing", theme: "dark", layout: "big-number", statNumber: "$200", statLabel: "One-Time" },
  { id: id("story"), headline: "The $200\nWebsite\nChallenge", subtext: "Show us a better custom site at this price.\nWe\u2019ll wait.", cta: "Try Us", format: "ig-story", category: "pricing", theme: "gradient", layout: "bottom-bar" },

  { id: id("story"), headline: "$3/mo\nHosting\nDeal", subtext: "Industry avg: $20/mo\nSave $204/year\nThat\u2019s 85% less", cta: "Switch Now", format: "ig-story", category: "hosting", theme: "dark", layout: "big-number", statNumber: "$3", statLabel: "/month" },
  { id: id("story"), headline: "Your\nHosting\nBill:", subtext: "$36/year with us\nvs\n$240/year elsewhere", cta: "Compare", format: "ig-story", category: "hosting", theme: "minimal", layout: "comparison-table", compareLeft: "Them\n$240/yr", compareRight: "Us\n$36/yr" },

  { id: id("story"), headline: "See Your\nSite Before\nYou Pay", subtext: "Free demo included with every project.\nZero risk.", cta: "Request Demo", format: "ig-story", category: "demo", theme: "dark", layout: "icon-top", icon: "\u2728" },
  { id: id("story"), headline: "Demo\nFirst.\nPay\nLater.", subtext: "We believe in showing, not telling.\nYour free preview is one tap away.", cta: "Get Started", format: "ig-story", category: "demo", theme: "gradient", layout: "centered" },

  // Testimonial — REAL QUOTES
  { id: id("story"), headline: "\u201CHunter delivered beyond expectations. Converts 3x better than our previous site.\u201D", subtext: "", cta: "Read More", format: "ig-story", category: "testimonial", theme: "dark", layout: "quote", quoteName: "Brooke Brum", quoteRole: "CEO, Fit4Lyfe", quoteInitials: "BB" },
  { id: id("story"), headline: "\u201CEvery animation, every interaction feels purposeful. Our users love it!\u201D", subtext: "", cta: "See Reviews", format: "ig-story", category: "testimonial", theme: "light", layout: "quote", quoteName: "Cindy Evanoff", quoteRole: "Manager, Pine Crest Camp", quoteInitials: "CE" },

  { id: id("story"), headline: "Spring\nRefresh\nSale", subtext: "New season, new look.\nCustom sites from $180.", cta: "Claim Offer", format: "ig-story", category: "seasonal", theme: "gradient", layout: "stacked-badges", badge: "Spring Sale", pills: ["20% Off", "Custom", "Free Demo"] },
  { id: id("story"), headline: "Holiday\nSpecial", subtext: "Free logo design with any website order.\nEnds Dec 31.", cta: "Book Now", format: "ig-story", category: "seasonal", theme: "dark", layout: "diagonal", badge: "Holiday Deal" },

  { id: id("story"), headline: "Refer.\nEarn $50.\nRepeat.", subtext: "Send us a friend.\nWhen they sign up, you get $50 credit.", cta: "Get Your Link", format: "ig-story", category: "referral", theme: "dark", layout: "big-number", statNumber: "$50", statLabel: "Per Referral" },
  { id: id("story"), headline: "$50\nReferral\nBonus", subtext: "Share the love.\nEarn rewards.\nUnlimited referrals.", cta: "Start Now", format: "ig-story", category: "referral", theme: "gradient", layout: "icon-top", icon: "\ud83d\udcb0" },

  { id: id("story"), headline: "Websites\nDesign\nAI Tools", subtext: "Everything your business needs.\nOne team. One price.", cta: "Explore", format: "ig-story", category: "service", theme: "dark", layout: "stacked-badges", pills: ["Websites", "Design", "AI Tools", "Hosting"] },
  { id: id("story"), headline: "Need a\nLogo?\nFlyer?\nWebsite?", subtext: "We do it all.\nStarting at $50 for design,\n$200 for websites.", cta: "See Services", format: "ig-story", category: "service", theme: "light", layout: "left-align" },

  { id: id("story"), headline: "150+\nProjects\nLaunched", subtext: "Small businesses trust us.\nAtlanta\u2019s go-to design team.", cta: "Be Next", format: "ig-story", category: "stats", theme: "dark", layout: "big-number", statNumber: "150+", statLabel: "Launched" },
  { id: id("story"), headline: "85%\nCheaper\nHosting", subtext: "$3/mo vs $20/mo\nThe numbers don\u2019t lie.", cta: "Save Now", format: "ig-story", category: "stats", theme: "gradient", layout: "big-number", statNumber: "85%", statLabel: "Cheaper" },

  { id: id("story"), headline: "3 Spots\nLeft\nThis Week", subtext: "We limit projects for quality.\nDon\u2019t wait.", cta: "Claim Yours", format: "ig-story", category: "limited", theme: "dark", layout: "bottom-bar", badge: "Almost Gone" },

  { id: id("story"), headline: "Them:\n$2,240/yr\n\nUs:\n$236/yr", subtext: "Same quality website.\n10x less cost.", cta: "Switch", format: "ig-story", category: "comparison", theme: "dark", layout: "comparison-table", compareLeft: "Agencies\n$2,240/yr", compareRight: "Us\n$236/yr" },
  { id: id("story"), headline: "Template\nvs\nCustom", subtext: "Squarespace gives you templates.\nWe give you custom code.\nSame price.", cta: "Go Custom", format: "ig-story", category: "comparison", theme: "minimal", layout: "split" },

  { id: id("story"), headline: "\"Is $200\nToo Good\nTo Be True?\"", subtext: "Nope. No office = no overhead.\nSavings go to you.", cta: "Learn More", format: "ig-story", category: "faq", theme: "dark", layout: "minimal-line" },
  { id: id("story"), headline: "\"How Is\nHosting\nOnly $3?\"", subtext: "Smart infrastructure.\nNo upsells.\nJust honest pricing.", cta: "See Plans", format: "ig-story", category: "faq", theme: "gradient", layout: "centered" },

  // Bonus story
  { id: id("story"), headline: "Free\nDemo.\nNo\nStrings.", subtext: "See your finished site\nbefore spending a penny.", cta: "Tap Here", format: "ig-story", category: "demo", theme: "minimal", layout: "minimal-line" },

  // ══════════════════════════════════════
  // FACEBOOK POST (1200x630) — 26 ads
  // ══════════════════════════════════════

  { id: id("fb"), headline: "Custom Websites From $200", subtext: "Professional web design for small businesses. No templates, no page builders \u2014 100% custom code.", cta: "Get a Free Demo", format: "fb-post", category: "launch", theme: "dark", layout: "left-align" },
  { id: id("fb"), headline: "Your Business Deserves a Real Website", subtext: "Not a Wix template. A hand-built, lightning-fast site that actually converts.", cta: "See Examples", format: "fb-post", category: "launch", theme: "gradient", layout: "diagonal" },
  { id: id("fb"), headline: "Atlanta\u2019s Most Affordable Web Design", subtext: "Custom websites, graphic design & AI tools. Starting at just $200.", cta: "Learn More", format: "fb-post", category: "launch", theme: "light", layout: "corner-accent" },

  { id: id("fb"), headline: "$200 Custom Site vs $2,000+ Agencies", subtext: "Same results. Fraction of the price. No contracts, no hidden fees.", cta: "Compare Pricing", format: "fb-post", category: "pricing", theme: "dark", layout: "comparison-table", compareLeft: "Agencies\n$2,000+\nContracts\nSlow", compareRight: "Us\n$200\nNo contracts\nFast" },
  { id: id("fb"), headline: "Why Are We So Affordable?", subtext: "No office. No middlemen. No markup. Just great design at honest prices.", cta: "See Our Rates", format: "fb-post", category: "pricing", theme: "minimal", layout: "minimal-line" },

  { id: id("fb"), headline: "$3/mo Hosting \u2014 85% Less", subtext: "Industry average is $20/mo. Save $204 per year with Design over Atlanta.", cta: "Switch Today", format: "fb-post", category: "hosting", theme: "dark", layout: "big-number", statNumber: "$3", statLabel: "/mo Hosting" },
  { id: id("fb"), headline: "Stop Overpaying For Hosting", subtext: "$3/mo. Reliable. Fast. No gimmicks. Your website savings start now.", cta: "View Plans", format: "fb-post", category: "hosting", theme: "gradient", layout: "bottom-bar" },

  { id: id("fb"), headline: "See Your Website Before You Pay a Dime", subtext: "Every project includes a free demo. If you don\u2019t love it, you don\u2019t pay.", cta: "Request Free Demo", format: "fb-post", category: "demo", theme: "dark", layout: "icon-top", icon: "\ud83d\udd0d" },
  { id: id("fb"), headline: "100% Risk-Free Web Design", subtext: "Free demo first. Payment only after approval. That\u2019s our promise.", cta: "Get Started", format: "fb-post", category: "demo", theme: "light", layout: "split" },

  // Testimonial — REAL QUOTES
  { id: id("fb"), headline: "\u201CHunter delivered beyond expectations. Our landing page loads instantly and converts 3x better than our previous site. Absolute wizard with code!\u201D", subtext: "", cta: "Read Testimonials", format: "fb-post", category: "testimonial", theme: "dark", layout: "quote", quoteName: "Brooke Brum", quoteRole: "CEO, Fit4Lyfe", quoteInitials: "BB" },
  { id: id("fb"), headline: "\u201CThe attention to detail is incredible. Every animation, every interaction feels purposeful. Our users love the new experience!\u201D", subtext: "", cta: "See Reviews", format: "fb-post", category: "testimonial", theme: "light", layout: "quote", quoteName: "Cindy Evanoff", quoteRole: "Manager, Pine Crest Camp", quoteInitials: "CE" },

  { id: id("fb"), headline: "New Year, New Website \u2014 From $200", subtext: "Kick off 2026 with a professional online presence. Limited spots available.", cta: "Book Your Spot", format: "fb-post", category: "seasonal", theme: "dark", layout: "diagonal", badge: "2026 Special" },
  { id: id("fb"), headline: "Back to Business Sale", subtext: "Fall special: 15% off all website packages + 3 months free hosting.", cta: "Claim Deal", format: "fb-post", category: "seasonal", theme: "gradient", layout: "stacked-badges", badge: "Fall Sale", pills: ["15% Off", "Free Hosting", "Custom Code"] },

  { id: id("fb"), headline: "Refer a Friend, Earn $50 Credit", subtext: "Know a business that needs a website? Send them our way. $50 for you, $50 off for them.", cta: "Start Referring", format: "fb-post", category: "referral", theme: "dark", layout: "icon-top", icon: "\ud83c\udf81" },

  { id: id("fb"), headline: "Websites + Design + AI Tools", subtext: "Custom websites from $200. Graphic design from $50. AI business tools built to order.", cta: "See All Services", format: "fb-post", category: "service", theme: "dark", layout: "stacked-badges", pills: ["Websites", "Graphic Design", "AI Tools", "Hosting"] },
  { id: id("fb"), headline: "The Complete Business Design Bundle", subtext: "Website + logo + business cards + social media kit. One team, one price.", cta: "View Bundles", format: "fb-post", category: "service", theme: "gradient", layout: "left-align" },
  { id: id("fb"), headline: "AI-Powered Business Tools", subtext: "Automated booking, smart chatbots, custom dashboards \u2014 built for your workflow.", cta: "Explore AI Tools", format: "fb-post", category: "service", theme: "minimal", layout: "icon-top", icon: "\ud83e\udd16" },

  { id: id("fb"), headline: "150+ Projects. 98% Satisfaction.", subtext: "The numbers speak for themselves. Atlanta\u2019s most trusted design team.", cta: "Join 150+ Businesses", format: "fb-post", category: "stats", theme: "dark", layout: "big-number", statNumber: "150+", statLabel: "Projects Delivered" },

  { id: id("fb"), headline: "Only 5 Spots Left This Month", subtext: "We cap projects at 8/month to maintain quality. First come, first served.", cta: "Reserve Your Spot", format: "fb-post", category: "limited", theme: "dark", layout: "bottom-bar", badge: "Almost Full" },
  { id: id("fb"), headline: "48-Hour Flash Sale: $150 Websites", subtext: "Our lowest price ever. Custom-coded, not templates. Act fast.", cta: "Get This Deal", format: "fb-post", category: "limited", theme: "gradient", layout: "diagonal", badge: "Flash Sale" },

  { id: id("fb"), headline: "Design over Atlanta vs Agencies", subtext: "Year 1 comparison", cta: "See Full Comparison", format: "fb-post", category: "comparison", theme: "dark", layout: "comparison-table", compareLeft: "Agency\n$2,000 design\n$20/mo host\n$2,240 total", compareRight: "DOA\n$200 design\n$3/mo host\n$236 total" },
  { id: id("fb"), headline: "Wix vs Squarespace vs Us", subtext: "They charge monthly for templates. We charge once for custom. Plus $3/mo hosting.", cta: "Compare All 3", format: "fb-post", category: "comparison", theme: "minimal", layout: "minimal-line" },

  { id: id("fb"), headline: "\"How Do You Charge So Little?\"", subtext: "No office rent. No sales team. No BS. Just a skilled developer who cuts the overhead.", cta: "Read Our Story", format: "fb-post", category: "faq", theme: "dark", layout: "left-align" },
  { id: id("fb"), headline: "\"What\u2019s the Catch?\"", subtext: "No catch. Free demo, $200 sites, $3/mo hosting. We just run a lean operation.", cta: "Learn More", format: "fb-post", category: "faq", theme: "light", layout: "corner-accent" },

  // Bonus FB
  { id: id("fb"), headline: "Your Competitor Already Has a Website", subtext: "Don\u2019t let them win by default. Get a custom site from $200.", cta: "Get Started Today", format: "fb-post", category: "launch", theme: "dark", layout: "split" },

  // ══════════════════════════════════════
  // TWITTER / X POST (1200x675) — 26 ads
  // ══════════════════════════════════════

  { id: id("tw"), headline: "Custom Websites From $200", subtext: "No templates. No page builders. 100% hand-coded for your brand.", cta: "Get a Demo", format: "twitter", category: "launch", theme: "dark", layout: "left-align" },
  { id: id("tw"), headline: "Your Business Needs a Real Website", subtext: "Ditch the drag-and-drop. Go custom. Starting at $200.", cta: "Build Yours", format: "twitter", category: "launch", theme: "gradient", layout: "corner-accent" },
  { id: id("tw"), headline: "Atlanta Web Design, Simplified", subtext: "Professional sites. Honest pricing. Fast delivery.", cta: "See Our Work", format: "twitter", category: "launch", theme: "light", layout: "minimal-line" },

  { id: id("tw"), headline: "$200 vs $2,000+", subtext: "Same quality website. One-tenth the agency price.", cta: "Get Quote", format: "twitter", category: "pricing", theme: "dark", layout: "big-number", statNumber: "$200", statLabel: "vs $2,000+" },
  { id: id("tw"), headline: "Custom Web Design, No Markup", subtext: "Other shops charge $2K+. We charge $200. Same craft, less overhead.", cta: "See Why", format: "twitter", category: "pricing", theme: "minimal", layout: "bottom-bar" },

  { id: id("tw"), headline: "$3/mo vs $20/mo Hosting", subtext: "Save $204/year. 85% cheaper than competitors.", cta: "Switch Now", format: "twitter", category: "hosting", theme: "dark", layout: "comparison-table", compareLeft: "Others\n$20/mo", compareRight: "Us\n$3/mo" },
  { id: id("tw"), headline: "Hosting Shouldn\u2019t Cost $20/mo", subtext: "We charge $3/mo. Because it shouldn\u2019t cost more.", cta: "Learn Why", format: "twitter", category: "hosting", theme: "gradient", layout: "big-number", statNumber: "85%", statLabel: "Less" },

  { id: id("tw"), headline: "See It Before You Buy It", subtext: "Free demo with every project. No payment until you approve.", cta: "Request Demo", format: "twitter", category: "demo", theme: "dark", layout: "split" },
  { id: id("tw"), headline: "Zero Risk Web Design", subtext: "We build your preview for free. Love it? Then we talk money.", cta: "Start Free", format: "twitter", category: "demo", theme: "light", layout: "icon-top", icon: "\u2705" },

  // Testimonial — REAL QUOTES
  { id: id("tw"), headline: "\u201CLanding page loads instantly and converts 3x better.\u201D", subtext: "", cta: "See Reviews", format: "twitter", category: "testimonial", theme: "dark", layout: "quote", quoteName: "Brooke Brum", quoteRole: "CEO, Fit4Lyfe", quoteInitials: "BB" },
  { id: id("tw"), headline: "\u201CEvery animation feels purposeful. Our users love it!\u201D", subtext: "", cta: "Read More", format: "twitter", category: "testimonial", theme: "minimal", layout: "quote", quoteName: "Cindy Evanoff", quoteRole: "Manager, Pine Crest Camp", quoteInitials: "CE" },

  { id: id("tw"), headline: "New Year Launch Special", subtext: "Custom websites from $200 + first month hosting free.", cta: "Claim Offer", format: "twitter", category: "seasonal", theme: "dark", layout: "diagonal", badge: "2026" },
  { id: id("tw"), headline: "Summer Web Sale \u2014 20% Off", subtext: "Custom sites from $160 this month. Limited availability.", cta: "Book Now", format: "twitter", category: "seasonal", theme: "gradient", layout: "stacked-badges", badge: "Summer", pills: ["20% Off", "Custom", "Fast"] },

  { id: id("tw"), headline: "Refer & Earn $50", subtext: "Know a business that needs a site? $50 credit when they sign up.", cta: "Get Link", format: "twitter", category: "referral", theme: "dark", layout: "big-number", statNumber: "$50", statLabel: "Per Referral" },
  { id: id("tw"), headline: "Share. Refer. Earn.", subtext: "$50 for every friend who becomes a client. No limits.", cta: "Start Earning", format: "twitter", category: "referral", theme: "gradient", layout: "icon-top", icon: "\ud83d\udcb8" },

  { id: id("tw"), headline: "Web + Design + AI", subtext: "Websites from $200. Graphic design from $50. AI automation built to order.", cta: "View All", format: "twitter", category: "service", theme: "dark", layout: "stacked-badges", pills: ["Web", "Design", "AI", "Host"] },
  { id: id("tw"), headline: "Full-Stack Business Design", subtext: "Website, logo, cards, social kit. One team handles it all.", cta: "See Packages", format: "twitter", category: "service", theme: "light", layout: "left-align" },

  { id: id("tw"), headline: "150+ Projects Shipped", subtext: "Atlanta\u2019s go-to for affordable, custom web design.", cta: "Be #151", format: "twitter", category: "stats", theme: "dark", layout: "big-number", statNumber: "150+", statLabel: "Shipped" },
  { id: id("tw"), headline: "85% Less Than Competitors", subtext: "$3/mo hosting. $200 websites. Numbers don\u2019t lie.", cta: "See Plans", format: "twitter", category: "stats", theme: "gradient", layout: "corner-accent" },

  { id: id("tw"), headline: "5 Spots Left This Month", subtext: "Quality over quantity. We cap at 8 projects/month.", cta: "Reserve", format: "twitter", category: "limited", theme: "dark", layout: "bottom-bar", badge: "Almost Full" },

  { id: id("tw"), headline: "Us: $236/yr \u2014 Agencies: $2,240/yr", subtext: "Same professionalism. 10x the savings.", cta: "Compare", format: "twitter", category: "comparison", theme: "dark", layout: "comparison-table", compareLeft: "Agency\n$2,240/yr", compareRight: "DOA\n$236/yr" },
  { id: id("tw"), headline: "Templates vs Custom Code", subtext: "Wix gives you templates for $17/mo. We give you custom for $200 + $3/mo.", cta: "Choose Custom", format: "twitter", category: "comparison", theme: "minimal", layout: "split" },

  { id: id("tw"), headline: "\"Why Is It So Cheap?\"", subtext: "No office. No sales team. No middlemen. Just a dev who builds.", cta: "Our Story", format: "twitter", category: "faq", theme: "dark", layout: "left-align" },
  { id: id("tw"), headline: "\"Do You Use Templates?\"", subtext: "Never. Every site is hand-coded from scratch. That\u2019s the whole point.", cta: "See Process", format: "twitter", category: "faq", theme: "gradient", layout: "minimal-line" },

  // Bonus TW
  { id: id("tw"), headline: "Your Website, Your Rules", subtext: "No locked-in platforms. No monthly template fees. Just custom code you own.", cta: "Learn More", format: "twitter", category: "service", theme: "gradient", layout: "diagonal" },

  // ══════════════════════════════════════════
  // FOUNDER STORY — PERSONAL BRAND (12 ads)
  // ══════════════════════════════════════════

  // IG Post — Founder
  { id: id("ig"), headline: "One Dev.\nNo Agency.\nBetter Results.", subtext: "I'm Hunter. I build custom websites for $200 that agencies charge $2,000+ for. Direct access, no middlemen.", cta: "Work With Me", format: "ig-post", category: "founder", theme: "dark", layout: "left-align" },
  { id: id("ig"), headline: "I'm Not\nAn Agency.\nThat's The Point.", subtext: "No account managers. No project managers. Just one developer who builds your site and talks to you directly.", cta: "Skip the Agency", format: "ig-post", category: "founder", theme: "gradient", layout: "diagonal" },
  { id: id("ig"), headline: "What $200\nActually Gets You", subtext: "Custom responsive design. Hand-coded React/Next.js. Mobile-first. SEO optimized. SSL included. Full source code — you own it.", cta: "See the Full Stack", format: "ig-post", category: "founder", theme: "dark", layout: "icon-top", icon: "⚡" },

  // IG Story — Founder
  { id: id("story"), headline: "Hi, I'm\nHunter.", subtext: "I build custom websites\nfor small businesses.\nFrom $200.\nNo templates. No BS.", cta: "Tap to Start", format: "ig-story", category: "founder", theme: "dark", layout: "centered" },
  { id: id("story"), headline: "Why I\nCharge\n$200", subtext: "No office rent.\nNo sales team.\nNo overhead.\nJust a dev who builds.", cta: "Learn More", format: "ig-story", category: "founder", theme: "gradient", layout: "minimal-line" },

  // FB Post — Founder
  { id: id("fb"), headline: "Meet Your Developer — Not an Account Manager", subtext: "At Design over Atlanta, you talk directly to the person building your site. No telephone game. No miscommunication. Faster results.", cta: "Meet Hunter", format: "fb-post", category: "founder", theme: "dark", layout: "left-align" },
  { id: id("fb"), headline: "One Developer. 150+ Businesses. $200 Websites.", subtext: "I cut the overhead so you don't pay for my office rent, sales team, or project managers. Just clean code at honest prices.", cta: "See My Work", format: "fb-post", category: "founder", theme: "minimal", layout: "corner-accent" },

  // Twitter — Founder
  { id: id("tw"), headline: "Your dev should know your name.", subtext: "At DOA, you work directly with me. No ticket system, no account rep.", cta: "Let's Talk", format: "twitter", category: "founder", theme: "dark", layout: "minimal-line" },
  { id: id("tw"), headline: "I'm the anti-agency.", subtext: "One dev. $200 websites. 150+ happy clients. Direct communication. Fast turnaround.", cta: "See Results", format: "twitter", category: "founder", theme: "gradient", layout: "bottom-bar" },

  // ══════════════════════════════════════════
  // NICHE CALLOUTS (12 ads)
  // ══════════════════════════════════════════

  // Restaurants
  { id: id("ig"), headline: "Your Restaurant\nNeeds More Than\nA Menu PDF.", subtext: "Online ordering, reservations, Google Maps, reviews — all in one custom $200 website.", cta: "See Restaurant Demos", format: "ig-post", category: "niche", theme: "dark", layout: "icon-top", icon: "🍽️" },
  { id: id("story"), headline: "Restaurant\nOwners:", subtext: "Your competitors are\ntaking online orders.\nAre you?\n\nCustom site from $200.", cta: "Get Started", format: "ig-story", category: "niche", theme: "dark", layout: "split" },
  { id: id("fb"), headline: "Restaurant Owners: Your Customers Are Ordering Online", subtext: "If you don't have online ordering, you're losing revenue to the place down the street that does. Custom site from $200.", cta: "Build Your Restaurant Site", format: "fb-post", category: "niche", theme: "dark", layout: "left-align" },

  // Fitness / Gyms
  { id: id("ig"), headline: "Your Gym's\nWebsite Should\nWork As Hard\nAs You Do.", subtext: "Class schedules, membership sign-ups, trainer profiles — custom-built from $200.", cta: "Build Your Gym Site", format: "ig-post", category: "niche", theme: "dark", layout: "corner-accent" },
  { id: id("story"), headline: "Gym\nOwners:", subtext: "Class schedules.\nMembership signups.\nTrainer bios.\nAll for $200.", cta: "Let's Build", format: "ig-story", category: "niche", theme: "gradient", layout: "stacked-badges", pills: ["Classes", "Signups", "Trainers", "Gallery"] },
  { id: id("fb"), headline: "Gym & Fitness Studio Websites From $200", subtext: "Class schedules, membership sign-ups, trainer profiles, photo galleries. Custom-coded, not a template.", cta: "See Fitness Demos", format: "fb-post", category: "niche", theme: "dark", layout: "icon-top", icon: "💪" },

  // Barbers / Salons
  { id: id("ig"), headline: "Barbers. Salons.\nSpas. Your Clients\nAre Googling You.", subtext: "Online booking, portfolio gallery, pricing page — all custom. Starting at $200.", cta: "Get Your Salon Site", format: "ig-post", category: "niche", theme: "gradient", layout: "diagonal" },
  { id: id("story"), headline: "Barbers\n&\nSalons:", subtext: "Online booking.\nBefore/after gallery.\nPricing & services.\nAll from $200.", cta: "Book a Demo", format: "ig-story", category: "niche", theme: "dark", layout: "icon-top", icon: "✂️" },

  // Contractors
  { id: id("ig"), headline: "Contractors:\nYour Best Lead\nGen Is A Website.", subtext: "Project galleries, quote requests, service areas, reviews — custom-coded for $200.", cta: "Build Your Site", format: "ig-post", category: "niche", theme: "dark", layout: "left-align" },
  { id: id("fb"), headline: "Contractors & Home Services: Get More Leads for $200", subtext: "Project galleries, quote request forms, service area maps, review integration. Custom website, not a template.", cta: "See Contractor Demos", format: "fb-post", category: "niche", theme: "dark", layout: "stacked-badges", pills: ["Gallery", "Quotes", "Maps", "Reviews"] },

  // ══════════════════════════════════════════
  // PORTFOLIO SHOWCASE (6 ads)
  // ══════════════════════════════════════════

  { id: id("ig"), headline: "Real Sites.\nReal Businesses.\nReal Results.", subtext: "Every project in our portfolio is live and generating revenue for real businesses.", cta: "See All Projects", format: "ig-post", category: "portfolio", theme: "dark", layout: "big-number", statNumber: "150+", statLabel: "Live Websites" },
  { id: id("story"), headline: "Our Work\nSpeaks\nFor Itself.", subtext: "BookNST. Pine Crest Camp.\nAlchemy Auto Spa. Fit4Lyfe.\n\nAll custom. All $200.", cta: "View Portfolio", format: "ig-story", category: "portfolio", theme: "dark", layout: "stacked-badges", pills: ["BookNST", "Pine Crest", "Alchemy", "Fit4Lyfe"] },
  { id: id("fb"), headline: "150+ Live Websites. Every One Custom-Coded.", subtext: "BookNST, Pine Crest Camp, Alchemy Auto Spa, Fit4Lyfe — real businesses with real results. See our full portfolio.", cta: "View Our Work", format: "fb-post", category: "portfolio", theme: "dark", layout: "corner-accent" },
  { id: id("tw"), headline: "150+ websites shipped. All custom.", subtext: "BookNST. Pine Crest Camp. Alchemy Auto Spa. Fit4Lyfe. Real sites, real businesses.", cta: "See Portfolio", format: "twitter", category: "portfolio", theme: "dark", layout: "left-align" },
  { id: id("ig"), headline: "Fit4Lyfe:\n3x Conversions\nAfter Launch", subtext: "We built their landing page. It loads instantly and converts 3x better than their old site.", cta: "Get Results Like This", format: "ig-post", category: "portfolio", theme: "gradient", layout: "big-number", statNumber: "3x", statLabel: "More Conversions" },
  { id: id("story"), headline: "Case Study:\nFit4Lyfe", subtext: "Before: slow template site.\nAfter: custom-coded, blazing fast.\nResult: 3x better conversions.\n\nAll for $200.", cta: "Your Turn", format: "ig-story", category: "portfolio", theme: "dark", layout: "bottom-bar" },
];

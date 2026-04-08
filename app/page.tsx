"use client";

import { useMemo, useState } from "react";

const offerings = [
  {
    title: "Business intelligence and performance dashboards",
    text: "Executive-ready visibility into operations, sales, inventory, supplier performance, and financial health.",
  },
  {
    title: "AI-powered process automation",
    text: "Automation for document processing, order workflows, customer operations, and internal coordination.",
  },
  {
    title: "AI readiness assessment and roadmap",
    text: "A practical plan for where to start, what to automate, and how to implement AI without unnecessary complexity.",
  },
];

const industries = [
  "Manufacturing",
  "Trading and distribution",
  "Retail and e-commerce",
  "Construction and infrastructure",
  "FMCG and consumer goods",
];

const differentiators = [
  "We understand business metrics, operations, and decision-making, not just software terminology.",
  "We work with SME realities and focus on practical systems that teams can adopt quickly.",
  "We build working prototypes fast so clients can validate value early.",
  "We focus on measurable outcomes such as time saved, errors reduced, and decisions accelerated.",
];

const engagement = [
  "Discovery and scoping",
  "Proposal and implementation roadmap",
  "Prototype development",
  "Deployment and training",
  "Ongoing optimization and support",
];

const projects = [
  {
    title: "Multilingual mutual fund intelligence platform",
    category: "Voice-enabled financial analysis",
    description:
      "A mutual fund analysis platform that summarizes schemes, supports comparison workflows, and delivers voice-enabled explanations across languages including Hindi, Marathi, Tamil, Gujarati, and English.",
    image: "/projects/project-2-campus-crypto-trading.jpeg",
    alt: "Multilingual mutual fund intelligence platform interface",
  },
  {
    title: "College fest crypto paper trading platform",
    category: "Event engagement and simulation platform",
    description:
      "A controlled paper trading environment designed for college fests, enabling organizers to run crypto trading competitions with live rankings, simulated capital, and structured participant engagement.",
    image: "/projects/project-3-mock-ipl-auction.jpeg",
    alt: "College fest crypto paper trading platform dashboard",
  },
  {
    title: "Mock IPL auction competition platform",
    category: "Interactive competition platform",
    description:
      "A live mock auction system built for competitions and campus events, allowing organizers to conduct IPL-style bidding rounds, participant interactions, and leaderboard-driven engagement in a structured format.",
    image: "/projects/project-4-market-terminal.jpeg",
    alt: "Mock IPL auction competition platform interface",
  },
  {
    title: "Market intelligence terminal",
    category: "News and technical analysis workspace",
    description:
      "An internal market terminal inspired by professional trading workstations, combining live news monitoring, technical analysis views, and decision-support workflows in a single operating interface.",
    image: "/projects/project-5-food-beverage-dashboard.jpeg",
    alt: "Bloomberg-style market intelligence terminal",
  },
  {
    title: "Food and beverage ERP operations dashboard",
    category: "Operational analytics dashboard",
    description:
      "An ERP-linked analytics dashboard for a food and beverage business, designed to improve visibility into business performance, operational trends, and management reporting requirements.",
    image: "/projects/project-6-maritime-dashboard.jpeg",
    alt: "Food and beverage ERP dashboard",
  },
  {
    title: "Real-time maritime tracking dashboard",
    category: "Global logistics monitoring",
    description:
      "A live maritime monitoring dashboard that tracks vessel movement across global routes, supporting visibility for logistics, shipment awareness, and operational tracking requirements.",
    image: "/projects/project-1-mutual-fund-voice-ai.jpeg",
    alt: "Real-time maritime tracking dashboard",
  },
  {
    title: "Market sentiment and sector analysis engine",
    category: "News-driven market analytics",
    description:
      "A market analysis engine that reads current news flow or manually entered developments to evaluate sentiment conditions and identify the sectors most affected by emerging market narratives.",
    image: "/projects/project-7-market-sentiment-engine.jpeg",
    alt: "Market sentiment and sector analysis engine",
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    workflow: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const proposalMailto = useMemo(() => {
    const subject = `Pragati Invest Discovery Request${form.company ? ` - ${form.company}` : ""}`;
    const body = [
      `Name: ${form.name || "-"}`,
      `Company: ${form.company || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      "",
      "Operational challenge:",
      form.workflow || "-",
    ].join("\n");
    return `mailto:pragatii.invest@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.workflow.trim()) {
      setFormMessage("Please add your name, email, and operational challenge.");
      return;
    }
    setFormMessage("Opening your email client with the completed brief.");
    window.location.href = proposalMailto;
  }

  return (
    <main className="min-h-screen bg-[#eef2ef] text-slate-900">
      <header className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-6 lg:px-10">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Pragati Invest</div>
          <div className="mt-1 text-lg font-semibold tracking-tight text-slate-950">Strategic AI and Automation Partner</div>
        </div>
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#offerings" className="text-sm text-slate-600 transition hover:text-slate-950">
            Offerings
          </a>
          <a href="#projects" className="text-sm text-slate-600 transition hover:text-slate-950">
            Projects
          </a>
          <a href="#approach" className="text-sm text-slate-600 transition hover:text-slate-950">
            Approach
          </a>
          <a href="#contact" className="text-sm text-slate-600 transition hover:text-slate-950">
            Contact
          </a>
        </nav>
      </header>

      <section className="border-y border-slate-300/70 bg-white">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#2c5b53]">Business Solutions Partnership</div>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 lg:text-7xl">
              AI, analytics, and automation for growth-oriented businesses.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              We help Indian SMEs and family-run businesses modernize operations, improve visibility, and remove manual process friction
              through intelligent automation and decision-ready systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[#234f47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17352f]"
              >
                Schedule a consultation
              </a>
              <a
                href="mailto:pragatii.invest@gmail.com"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                pragatii.invest@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Who we help</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            Businesses that need better execution, not more manual work.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Our work is best suited for manufacturing, trading, distribution, and operations-heavy businesses that need clearer reporting,
            better workflows, and faster decision-making.
          </p>
        </div>

        <div className="mt-12 border-t border-slate-300 pt-4">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center justify-between border-b border-slate-200 py-4 last:border-b-0">
              <div className="text-lg font-medium text-slate-800">{industry}</div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#234f47]" />
            </div>
          ))}
        </div>
      </section>

      <section id="offerings" className="border-y border-slate-300/70 bg-[#dde7e3]">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Core offerings</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              Three focused service lines.
            </h2>
          </div>

          <div className="mt-12 space-y-10">
            {offerings.map((item, index) => (
              <div key={item.title} className="grid gap-5 border-t border-slate-300 pt-8 lg:grid-cols-[100px_1fr] lg:gap-8">
                <div className="text-sm font-semibold text-slate-500 lg:pt-1">0{index + 1}</div>
                <div>
                  <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Why partner with us</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              Business-first thinking with implementation discipline.
            </h2>
          </div>

          <div className="space-y-5">
            {differentiators.map((item) => (
              <p key={item} className="border-t border-slate-300 pt-5 text-base leading-8 text-slate-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-300/70 bg-white">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Our projects</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              Selected systems built across analytics, automation, and digital operations.
            </h2>
          </div>

          <div className="mt-12 space-y-14">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="grid gap-8 border-t border-slate-300 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="overflow-hidden rounded-[28px] border border-slate-300 bg-slate-100">
                    <img src={project.image} alt={project.alt} className="block h-full w-full object-cover" />
                  </div>
                </div>

                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#234f47]">{project.category}</div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{project.title}</h3>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-300/70 bg-white">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Engagement model</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              A simple path from workflow review to deployment.
            </h2>
          </div>

          <div className="mt-12 grid gap-y-6 border-t border-slate-300 pt-8 md:grid-cols-2 md:gap-x-10">
            {engagement.map((step, index) => (
              <div key={step} className="flex gap-4">
                <div className="w-10 text-sm font-semibold text-[#234f47]">{index + 1}</div>
                <div className="text-base leading-8 text-slate-700">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1120px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:pt-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Contact</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              Tell us where your workflow is breaking.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              We will use that as the starting point for a practical automation conversation. No pricing is shown here because the right
              scope depends on the workflow.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-300 pt-6 lg:pt-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-slate-600">Name</span>
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#234f47]"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-600">Company</span>
                <input
                  value={form.company}
                  onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                  className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#234f47]"
                  placeholder="Company name"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-600">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#234f47]"
                  placeholder="name@company.com"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-600">Phone</span>
                <input
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#234f47]"
                  placeholder="+91"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm">
              <span className="text-slate-600">Operational challenge</span>
              <textarea
                rows={6}
                value={form.workflow}
                onChange={(event) => setForm((current) => ({ ...current, workflow: event.target.value }))}
                className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#234f47]"
                placeholder="Describe the workflow, delay, or repeated task that should be improved."
              />
            </label>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-[#234f47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17352f]">
                Send project brief
              </button>
              <a
                href={proposalMailto}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                Open in email
              </a>
            </div>
            {formMessage ? <p className="mt-4 text-sm text-slate-600">{formMessage}</p> : null}
          </form>
        </div>

        <div className="mt-16 border-t border-slate-300 pt-6 text-sm text-slate-500">Pragati Invest • Intelligent automation for growth-oriented enterprises</div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Pragati Invest",
            url: "https://pragatiinvest.com",
            description:
              "Pragati Invest provides business intelligence, AI-powered process automation, and AI readiness advisory for Indian SMEs and family-run businesses.",
            email: "pragatii.invest@gmail.com",
            areaServed: "India",
            serviceType: [
              "Business Intelligence",
              "Process Automation",
              "AI Readiness Assessment",
            ],
          }),
        }}
      />
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";

const services = [
  {
    title: "Workflow Automation",
    text: "We reduce manual business work across finance, operations, reporting, document handling, approvals, and follow-ups.",
  },
  {
    title: "Internal Tools",
    text: "We build focused dashboards, portals, trackers, and review panels that fit the way your team already works.",
  },
  {
    title: "AI Assistants",
    text: "We add OCR, extraction, summaries, validation layers, and smart assistants where repetitive information work slows teams down.",
  },
  {
    title: "System Integration",
    text: "We connect spreadsheets, CRMs, ERPs, APIs, WhatsApp, email, and databases so information moves without copy-paste.",
  },
];

const outcomes = [
  "Lower turnaround time for repetitive tasks",
  "Fewer manual errors in day-to-day operations",
  "Better visibility across teams and processes",
  "Faster decisions through live dashboards and alerts",
];

const sectors = [
  "Trading and finance operations",
  "Manufacturing and procurement teams",
  "Real estate and service businesses",
  "CA firms, back offices, and admin-heavy teams",
];

const process = [
  {
    step: "1. Understand the workflow",
    detail: "We study how work moves today, where delays happen, and which steps are still manual.",
  },
  {
    step: "2. Build the smallest useful system",
    detail: "We start with a focused MVP that solves the highest-friction bottleneck first.",
  },
  {
    step: "3. Deploy and refine quickly",
    detail: "We improve with live feedback from your staff instead of spending months on broad assumptions.",
  },
  {
    step: "4. Scale only what works",
    detail: "Once the system proves value, we extend it into adjacent workflows and reporting layers.",
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
    const subject = `Automation Discovery Request${form.company ? ` - ${form.company}` : ""}`;
    const body = [
      `Name: ${form.name || "-"}`,
      `Company: ${form.company || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      "",
      "Workflow / Problem Statement:",
      form.workflow || "-",
    ].join("\n");
    return `mailto:hello@pragatiinvest.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.workflow.trim()) {
      setFormMessage("Please fill in your name, email, and workflow details.");
      return;
    }
    setFormMessage("Opening your email client with the filled project brief.");
    window.location.href = proposalMailto;
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(24,113,255,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(11,143,101,0.16),_transparent_30%),linear-gradient(180deg,_#f2f6ff_0%,_#f9fbff_52%,_#eef4ff_100%)] text-slate-900">
      <section className="mx-auto max-w-[1360px] px-8 pb-10 pt-8 lg:px-12">
        <header className="flex items-center justify-between rounded-[28px] border border-slate-200/80 bg-white/70 px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Pragati Invest</div>
            <div className="mt-1 text-2xl font-semibold tracking-tight">Business Automation Studio</div>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#services" className="text-sm text-slate-600 transition hover:text-slate-900">
              Services
            </a>
            <a href="#process" className="text-sm text-slate-600 transition hover:text-slate-900">
              Process
            </a>
            <a href="#proposal" className="text-sm text-slate-600 transition hover:text-slate-900">
              Proposal
            </a>
            <a
              href="mailto:hello@pragatiinvest.com"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Book a discovery call
            </a>
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[36px] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_24px_80px_rgba(22,34,61,0.1)] lg:px-10">
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
              Progress you can measure
            </div>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-slate-950 lg:text-7xl">
              We help businesses invest in operational progress, not more manual work.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 lg:text-xl">
              Pragati Invest builds automation systems for businesses that are stuck in spreadsheets, repeated data entry,
              document-heavy approvals, and slow internal workflows. We are a lean two-person team that ships useful systems
              fast, keeps scope practical, and focuses on outcomes that management can actually see.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@pragatiinvest.com?subject=Automation%20Discovery%20Call"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Request a business audit
              </a>
              <a
                href="#proposal"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                View our proposal
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-semibold text-slate-950">2</div>
                <div className="mt-2 text-sm text-slate-600">Founders building directly with clients</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-semibold text-slate-950">MVP-first</div>
                <div className="mt-2 text-sm text-slate-600">We start with the highest-friction workflow, not a huge software promise.</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-semibold text-slate-950">ROI-led</div>
                <div className="mt-2 text-sm text-slate-600">Every project is framed around saved time, fewer errors, and process visibility.</div>
              </div>
            </div>
          </section>

          <aside className="grid gap-6">
            <div className="rounded-[32px] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
              <div className="text-sm uppercase tracking-[0.22em] text-blue-200">What Pragati means</div>
              <p className="mt-5 text-3xl font-semibold leading-tight">
                Pragati means progress. Our clients invest in systems that move their business forward.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                The name Pragati Invest stands for investing in better workflows, better reporting, and better execution. We do not
                sell generic software. We design operational progress that compounds.
              </p>
            </div>

            <div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-8">
              <div className="text-sm uppercase tracking-[0.22em] text-emerald-700">Best fit clients</div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {sectors.map((sector) => (
                  <li key={sector} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1360px] px-8 py-10 lg:px-12">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Services</div>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-slate-950 lg:text-5xl">Automation built around real bottlenecks</h2>
          </div>
          <p className="hidden max-w-xl text-sm leading-7 text-slate-600 lg:block">
            We focus on workflows that waste staff hours every week: documents, reconciliation, reporting, approvals, data movement,
            and repetitive decision support.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.07)]">
              <div className="text-lg font-semibold text-slate-950">{service.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1360px] px-8 py-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.07)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">How we work</div>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-slate-950">Small team. Direct access. Fast iteration.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              We are not a bulky agency layer. You work directly with the builders. That keeps communication short, scope sharper,
              and delivery faster.
            </p>
            <div className="mt-8 space-y-3">
              {outcomes.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {process.map((item) => (
              <article key={item.step} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.07)]">
                <div className="text-lg font-semibold text-slate-950">{item.step}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proposal" className="mx-auto max-w-[1360px] px-8 py-10 lg:px-12">
        <div className="rounded-[36px] border border-slate-200 bg-white px-8 py-9 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Business proposal</div>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-serif text-4xl tracking-tight text-slate-950 lg:text-5xl">Pragati Invest is a partner for business progress.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We help businesses identify one workflow that is slowing revenue, team efficiency, or decision speed, then convert it
                into a structured digital system. Instead of asking clients to adopt a heavy platform, we build practical automation
                around the way their teams already operate.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] bg-slate-950 p-6 text-white">
                <div className="text-sm uppercase tracking-[0.22em] text-blue-200">Positioning statement</div>
                <p className="mt-4 text-xl leading-9">
                  Pragati Invest helps companies invest in efficiency, clarity, and execution by turning manual workflows into reliable
                  automation systems.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-950">Ideal engagement</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    A business audit, one high-impact MVP, and a 2 to 6 week delivery cycle with rapid iteration.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-950">Commercial message</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    You are not paying for software complexity. You are paying for reduced friction in a business process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-8 pb-14 pt-6 lg:px-12">
        <div className="grid gap-6 rounded-[36px] border border-blue-200 bg-[linear-gradient(135deg,_#135dff_0%,_#0c2d73_100%)] px-8 py-10 text-white shadow-[0_24px_80px_rgba(19,93,255,0.2)] lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-100">Let’s build something useful</div>
            <h2 className="mt-3 font-serif text-4xl tracking-tight lg:text-5xl">Tell us which workflow is costing your team the most time.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-blue-50/90">
              We will help you convert that problem into a practical automation roadmap, a scoped MVP, and a deployment plan your team
              can actually adopt.
            </p>
            <div className="mt-8 space-y-3 text-sm text-blue-50/90">
              <div>Ideal for businesses dealing with repeated reporting, approvals, manual entry, reconciliation, and fragmented internal coordination.</div>
              <div>Response format: discovery call, workflow map, problem statement, MVP scope, and rollout recommendation.</div>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:hello@pragatiinvest.com"
                className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                hello@pragatiinvest.com
              </a>
              <div className="text-sm text-blue-100">Pragati Invest • Automation for operational progress</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[32px] border border-white/20 bg-white/10 p-6 backdrop-blur">
            <div className="text-sm uppercase tracking-[0.22em] text-blue-100">Contact form</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-blue-100">Your name</span>
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-slate-950 outline-none"
                  placeholder="Enter your name"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-blue-100">Company</span>
                <input
                  value={form.company}
                  onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-slate-950 outline-none"
                  placeholder="Your company name"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-blue-100">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-slate-950 outline-none"
                  placeholder="name@company.com"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-blue-100">Phone</span>
                <input
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-slate-950 outline-none"
                  placeholder="+91"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm">
              <span className="text-blue-100">Which workflow do you want to improve?</span>
              <textarea
                rows={6}
                value={form.workflow}
                onChange={(event) => setForm((current) => ({ ...current, workflow: event.target.value }))}
                className="w-full rounded-[24px] border border-white/20 bg-white/90 px-4 py-3 text-slate-950 outline-none"
                placeholder="Describe the manual workflow, repeated task, or operational bottleneck."
              />
            </label>

            <div className="mt-5 flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Send project brief
              </button>
              <a
                href={proposalMailto}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Open in email
              </a>
            </div>
            {formMessage ? <p className="mt-4 text-sm text-blue-100">{formMessage}</p> : null}
          </form>
        </div>
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
              "Pragati Invest helps businesses reduce manual work through workflow automation, internal tools, AI assistants, and system integrations.",
            email: "hello@pragatiinvest.com",
            areaServed: "India",
            serviceType: [
              "Workflow Automation",
              "Internal Tools",
              "AI Assistants",
              "System Integration",
            ],
          }),
        }}
      />
    </main>
  );
}

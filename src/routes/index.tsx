import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain, ArrowUpRight, Sparkles, Languages, Database, Eye,
  GraduationCap, Stethoscope, Beaker, Shield, Cpu, Check,
  Menu, X, ChevronRight, Quote, Globe, Activity, LineChart,
  Layers, Zap, Lock, FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Biruni — A calm instrument for behavioral science" },
      { name: "description", content: "Biruni is a bilingual workspace for behavioral research, education, and clinical practice across the MENA region — calm, precise, and built in your language." },
      { property: "og:title", content: "Biruni — A calm instrument for behavioral science" },
      { property: "og:description", content: "Bilingual workspace for behavioral research, education, and clinical practice across MENA." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [rtl, setRtl] = useState(false);
  const [open, setOpen] = useState(false);
  const t = (en: string, ar: string) => (rtl ? ar : en);

  return (
    <div dir={rtl ? "rtl" : "ltr"} className={`min-h-screen bg-canvas text-foreground ${rtl ? "font-arabic" : ""}`}>
      {/* ── Nav ───────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Brain className="h-4 w-4" />
            </div>
            <span className="font-display text-[15px] font-semibold tracking-tight">Biruni</span>
            <span className="hidden rounded-full bg-gold-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-foreground sm:inline">MENA</span>
          </Link>

          <nav className="ms-6 hidden items-center gap-5 text-[13px] text-muted-foreground md:flex">
            <a href="#product" className="calm hover:text-foreground">{t("Product", "المنتج")}</a>
            <a href="#personas" className="calm hover:text-foreground">{t("For teams", "للفرق")}</a>
            <a href="#bilingual" className="calm hover:text-foreground">{t("Bilingual", "ثنائي اللغة")}</a>
            <a href="#pricing" className="calm hover:text-foreground">{t("Pricing", "الأسعار")}</a>
          </nav>

          <div className="ms-auto flex items-center gap-2">
            <button
              onClick={() => setRtl((v) => !v)}
              className="hidden h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-[12px] tactile sm:inline-flex"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-mono">{rtl ? "EN" : "ع"}</span>
            </button>
            <a href="#cta" className="hidden h-8 items-center gap-1.5 rounded-md bg-foreground px-3 text-[12px] font-medium text-background tactile sm:inline-flex">
              {t("Request access", "اطلب الوصول")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden" aria-label="Menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border bg-surface md:hidden">
            <div className="flex flex-col gap-1 px-4 py-3 text-[14px]">
              {[
                ["#product", t("Product", "المنتج")],
                ["#personas", t("For teams", "للفرق")],
                ["#bilingual", t("Bilingual", "ثنائي اللغة")],
                ["#pricing", t("Pricing", "الأسعار")],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 hover:bg-muted">{label}</a>
              ))}
              <button onClick={() => setRtl((v) => !v)} className="mt-1 inline-flex items-center gap-2 rounded-md border border-border px-2 py-2 text-start">
                <Globe className="h-4 w-4" /> {rtl ? "Switch to English" : "التبديل إلى العربية"}
              </button>
              <a href="#cta" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-3 py-2 text-background">
                {t("Request access", "اطلب الوصول")} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="grad-canvas relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 grid-fine opacity-60" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-12 md:gap-8 md:py-28 lg:px-8 lg:py-32">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1 ps-1 pe-3 text-[12px] backdrop-blur">
                <span className="rounded-full bg-gold-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">Beta · 2026</span>
                <span className="text-muted-foreground">{t("Behavioral instrument for MENA", "أداة السلوك للشرق الأوسط")}</span>
              </div>

              <h1 className={`mt-6 font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.022em] sm:text-[56px] lg:text-[72px] ${rtl ? "font-arabic font-bold" : ""}`}>
                {rtl ? (
                  <>منصة هادئة <span className="text-foreground/55">للقياس،</span><br /> مصممة <span className="bg-gradient-to-r from-gold to-primary bg-clip-text text-transparent">بلغتك</span>.</>
                ) : (
                  <>A calm instrument <span className="text-foreground/55">for measurement,</span><br className="hidden sm:block" /> designed in <span className="bg-gradient-to-r from-gold to-primary bg-clip-text text-transparent">your language</span>.</>
                )}
              </h1>

              <p className={`mt-6 max-w-xl text-[15px] leading-[1.7] text-muted-foreground sm:text-[17px] ${rtl ? "font-arabic" : ""}`}>
                {t(
                  "Biruni is a bidirectional-by-default workspace that helps researchers, educators, and clinicians across MENA design experiments, run sessions, and turn behavior into evidence.",
                  "بيروني مساحة عمل ثنائية الاتجاه افتراضيا، تعين الباحثين والمعلمين والأطباء في الشرق الأوسط على تصميم التجارب وإجراء الجلسات وتحويل السلوك إلى دليل علمي."
                )}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <a href="#cta" className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-[13px] font-medium text-background tactile">
                  {t("Request early access", "اطلب وصولا مبكرا")} <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#product" className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-[13px] font-medium tactile">
                  <Sparkles className="h-4 w-4 text-gold" /> {t("See how it works", "شاهد كيف يعمل")}
                </a>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                {[
                  { v: "12+", l: t("Pilot labs", "مختبرات تجريبية") },
                  { v: "4.2k", l: t("Participants", "مشاركون") },
                  { v: "3", l: t("Countries", "دول") },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-2xl font-semibold tracking-tight num-tab sm:text-3xl">{s.v}</dt>
                    <dd className={`mt-1 text-[12px] text-muted-foreground ${rtl ? "font-arabic" : "font-mono uppercase tracking-wider"}`}>{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Hero visual — pure design-system composition */}
            <div className="md:col-span-5">
              <HeroInstrument rtl={rtl} t={t} />
            </div>
          </div>
        </section>

        {/* ── Trust band ──────────────────────────────────────── */}
        <section className="border-y border-border bg-surface-2">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-4 px-4 py-6 sm:px-6 lg:px-8">
            <span className={`text-[11px] uppercase tracking-[0.18em] text-muted-foreground ${rtl ? "font-arabic normal-case tracking-normal" : "font-mono"}`}>
              {t("Trusted by labs at", "موثوق به في مختبرات")}
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] font-medium text-muted-foreground">
              {["KAUST", "AUB", "Cairo Uni", "Mohammed VI", "Qatar U", "NYUAD"].map((n) => (
                <span key={n} className="opacity-80">{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────────── */}
        <section id="product" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Kicker>{t("The problem", "المشكلة")}</Kicker>
              <h2 className={`mt-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[36px] ${rtl ? "font-arabic font-bold" : ""}`}>
                {t("Behavioral tools weren't built for our language — or our reality.",
                   "أدوات السلوك لم تصنع للغتنا، ولا لواقعنا.")}
              </h2>
              <p className={`mt-4 text-[15px] leading-[1.7] text-muted-foreground ${rtl ? "font-arabic" : ""}`}>
                {t(
                  "Researchers and clinicians stitch together English-only tools, broken RTL, and exported spreadsheets to make sense of human behavior. The cost is precision.",
                  "يراكم الباحثون والأطباء أدوات إنجليزية، واتجاها مكسورا، وجداول مصدرة، ليفهموا السلوك البشري. والثمن هو الدقة."
                )}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { i: Languages, t: t("Bilingual is an afterthought", "ثنائية اللغة متأخرة دائما"), d: t("RTL bolted on, Arabic typography neglected.", "اتجاه ملصق، وطباعة عربية مهملة.") },
                  { i: Database, t: t("Data lives in 6 places", "البيانات في ستة أماكن"), d: t("Spreadsheets, drives, custom scripts, repeat.", "جداول، أقراص، نصوص مخصصة، وتكرار.") },
                  { i: Eye, t: t("Sessions are fragile", "الجلسات هشة"), d: t("Hardware, browser quirks, lost trials.", "أعطال الأجهزة، وغرابة المتصفح، وفقدان المحاولات.") },
                  { i: Shield, t: t("Compliance is unclear", "الامتثال غامض"), d: t("Cross-border PII rules are inconsistent.", "قواعد البيانات عبر الحدود متضاربة.") },
                ].map(({ i: Icon, t: title, d }) => (
                  <div key={title} className="precision-card p-5 tactile">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                    <div className="mt-3 font-display text-[15px] font-semibold">{title}</div>
                    <div className="mt-1 text-[13px] leading-[1.55] text-muted-foreground">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Solution / How it works ─────────────────────────── */}
        <section className="border-y border-border bg-surface-2">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <Kicker>{t("How it works", "كيف يعمل")}</Kicker>
              <h2 className={`mt-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[36px] ${rtl ? "font-arabic font-bold" : ""}`}>
                {t("One workspace, three calm steps.", "مساحة واحدة، ثلاث خطوات هادئة.")}
              </h2>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
              {[
                { n: "01", icon: Layers, t: t("Design the experiment", "صمم التجربة"), d: t("Bilingual stimulus library, drag-and-drop trials, version control.", "مكتبة مثيرات ثنائية، محاولات بالسحب، وتحكم بالإصدارات.") },
                { n: "02", icon: Activity, t: t("Run the session", "أجر الجلسة"), d: t("Eye-tracking, RT, audio — captured in one calm canvas.", "تتبع العين، زمن الاستجابة، الصوت — في لوحة هادئة.") },
                { n: "03", icon: LineChart, t: t("Read the evidence", "اقرأ الدليل"), d: t("Auto-cleaned data, AI-assisted summaries, exportable reports.", "بيانات منقاة، خلاصات بمعونة الذكاء، وتقارير قابلة للتصدير.") },
              ].map((s) => (
                <li key={s.n} className="precision-card grad-card p-6 tactile">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-wider text-gold">{s.n}</span>
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mt-3 font-display text-lg font-semibold">{s.t}</div>
                  <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>

            {/* Workspace preview — pure tokens */}
            <div className="mt-10">
              <WorkspacePreview rtl={rtl} t={t} />
            </div>
          </div>
        </section>

        {/* ── Personas ────────────────────────────────────────── */}
        <section id="personas" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-xl">
            <Kicker>{t("For teams", "للفرق")}</Kicker>
            <h2 className={`mt-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[36px] ${rtl ? "font-arabic font-bold" : ""}`}>
              {t("Built for the way your discipline works.", "مبني على طريقة عمل تخصصك.")}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { color: "research", icon: Beaker, kicker: t("Research", "بحث"),
                t: t("Designed for principal investigators", "مصمم للباحثين الرئيسيين"),
                d: t("Pre-registration, IRB-friendly logs, reproducible pipelines.", "تسجيل مسبق، سجلات ودودة للجان الأخلاق، وأنابيب تحليل قابلة للنسخ."),
                points: [t("Stimulus library", "مكتبة المثيرات"), t("Version control", "إدارة الإصدارات"), t("Open data exports", "تصدير البيانات")] },
              { color: "education", icon: GraduationCap, kicker: t("Education", "تعليم"),
                t: t("Calm classrooms, measurable learning", "فصول هادئة، تعلم قابل للقياس"),
                d: t("Cohort dashboards, attention metrics, progress timelines.", "لوحات المجموعات، مقاييس الانتباه، خطوط التقدم الزمنية."),
                points: [t("Cohort dashboards", "لوحات المجموعات"), t("Attention analytics", "تحليلات الانتباه"), t("Curriculum templates", "قوالب المنهج")] },
              { color: "clinical", icon: Stethoscope, kicker: t("Clinical", "سريري"),
                t: t("Evidence-based practice, in your clinic", "ممارسة مبنية على الدليل، في عيادتك"),
                d: t("Patient timelines, secure notes, validated assessments.", "خطوط المريض الزمنية، ملاحظات آمنة، تقييمات موثقة."),
                points: [t("Validated assessments", "تقييمات موثقة"), t("Patient timeline", "خط زمني للمريض"), t("HIPAA-aligned", "متوافق مع HIPAA")] },
            ].map((p) => (
              <article key={p.kicker} className="precision-card group flex flex-col overflow-hidden tactile">
                <PersonaHeader color={p.color} icon={p.icon} kicker={p.kicker} />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{p.t}</h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">{p.d}</p>
                  <ul className="mt-4 space-y-1.5 text-[13px]">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-success" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Bilingual + AI showcase ─────────────────────────── */}
        <section id="bilingual" className="border-y border-border bg-surface-2">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-2 md:gap-12 lg:px-8">
            <div className="precision-card overflow-hidden">
              <div className="grad-gold p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground"><Cpu className="h-3.5 w-3.5" /></span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">AI Assistant · Summary</span>
                </div>
                <p className="mt-4 font-display text-[18px] leading-snug">
                  "Across 412 trials, recognition latency improved 14% on Arabic stimuli versus baseline."
                </p>
              </div>
              <div className="grid grid-cols-2 border-t border-border">
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">English</div>
                  <p className="mt-2 text-[14px] leading-snug">"Participants showed 14% faster recognition on Arabic stimuli."</p>
                </div>
                <div dir="rtl" className="border-is p-5 font-arabic">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">العربية</div>
                  <p className="mt-2 text-[14px] leading-snug">«تحسن التعرف على المثيرات العربية بنسبة 14٪.»</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Kicker>{t("Bilingual & intelligent", "ثنائية وذكية")}</Kicker>
              <h2 className={`mt-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[36px] ${rtl ? "font-arabic font-bold" : ""}`}>
                {t("Arabic & English, treated as equals.", "العربية والإنجليزية، معاملتان كنظراء.")}
              </h2>
              <p className={`mt-4 text-[15px] leading-[1.65] text-muted-foreground ${rtl ? "font-arabic" : ""}`}>
                {t(
                  "Every component is bidirectional, every type-system tuned for Arabic optical balance, and every report can be read in either language without translation loss.",
                  "كل مكون ثنائي الاتجاه، وكل نظام كتابة مضبوط لتوازن بصري عربي، وكل تقرير يقرأ بأي لغة دون فقدان."
                )}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { i: Cpu, t: t("AI summaries", "خلاصات بالذكاء") },
                  { i: Eye, t: t("Eye-tracking ready", "جاهز لتتبع العين") },
                  { i: Lock, t: t("Region-aware data", "بيانات تراعي المنطقة") },
                  { i: Languages, t: t("RTL by default", "اتجاه افتراضي من اليمين") },
                ].map(({ i: I, t: tx }) => (
                  <div key={tx} className="flex items-center gap-2.5 rounded-md border border-border bg-background p-3 text-[13px] tactile">
                    <I className="h-4 w-4 text-gold" /> {tx}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quote ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <Quote className="mx-auto h-6 w-6 text-gold" />
          <blockquote className={`mt-5 font-display text-[24px] leading-[1.4] tracking-[-0.01em] sm:text-[32px] ${rtl ? "font-arabic" : ""}`}>
            {t(
              "“Biruni is the first tool that didn't ask my Arabic stimuli to apologize for existing.”",
              "«بيروني أول أداة لم تطلب من مثيراتي العربية أن تعتذر عن وجودها.»"
            )}
          </blockquote>
          <div className="mt-5 text-[12px] text-muted-foreground">
            <span className="font-medium text-foreground">Dr. Layla Al-Hassan</span> · Principal Investigator, Riyadh Behavioral Lab
          </div>
        </section>

        {/* ── Pricing ─────────────────────────────────────────── */}
        <section id="pricing" className="border-t border-border bg-surface-2">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <Kicker>{t("Pricing", "الأسعار")}</Kicker>
              <h2 className={`mt-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[36px] ${rtl ? "font-arabic font-bold" : ""}`}>
                {t("Calm pricing, scaled to your team.", "أسعار هادئة، تتناسب مع فريقك.")}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { name: t("Lab", "مختبر"), price: "$49", per: t("/seat / month", "/مقعد / شهر"), tag: t("For small labs", "للمختبرات الصغيرة"), feats: [t("3 active studies", "٣ دراسات نشطة"), t("10 GB data", "١٠ غيغابايت"), t("Email support", "دعم بالبريد")] },
                { name: t("Department", "قسم"), price: "$129", per: t("/seat / month", "/مقعد / شهر"), tag: t("Most popular", "الأكثر شيوعا"), highlight: true, feats: [t("Unlimited studies", "دراسات غير محدودة"), t("100 GB data", "١٠٠ غيغابايت"), t("AI summaries", "خلاصات بالذكاء"), t("Priority support", "دعم ذو أولوية")] },
                { name: t("Institution", "مؤسسة"), price: t("Custom", "مخصص"), per: "", tag: t("For universities & ministries", "للجامعات والوزارات"), feats: [t("SSO & SAML", "تسجيل دخول موحد"), t("Region-locked data", "بيانات مقيدة جغرافيا"), t("Dedicated success", "مدير نجاح مخصص"), t("On-prem option", "خيار محلي")] },
              ].map((tier) => (
                <div key={tier.name} className={`precision-card relative flex flex-col p-6 ${tier.highlight ? "ring-2 ring-gold" : ""}`}>
                  {tier.highlight && (
                    <span className="absolute -top-2 start-6 rounded-full bg-gold px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">
                      {tier.tag}
                    </span>
                  )}
                  <div className="font-display text-lg font-semibold">{tier.name}</div>
                  {!tier.highlight && <div className="mt-1 text-[12px] text-muted-foreground">{tier.tag}</div>}
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-semibold tracking-tight num-tab">{tier.price}</span>
                    <span className="text-[12px] text-muted-foreground">{tier.per}</span>
                  </div>
                  <ul className="mt-5 flex-1 space-y-2 text-[13px]">
                    {tier.feats.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-success" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#cta" className={`mt-6 inline-flex h-10 items-center justify-center gap-1.5 rounded-md text-[13px] font-medium tactile ${tier.highlight ? "bg-foreground text-background" : "border border-border bg-background"}`}>
                    {t("Get started", "ابدأ الآن")} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────────── */}
        <section id="cta" className="relative overflow-hidden bg-primary text-primary-foreground">
          <div aria-hidden className="absolute inset-0 opacity-[0.08] grid-fine" />
          <div
            aria-hidden
            className="absolute -top-32 end-[-10%] h-[420px] w-[420px] rounded-full"
            style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--gold) 55%, transparent), transparent)" }}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl">
              <h2 className={`font-display text-[32px] font-semibold leading-tight tracking-[-0.02em] sm:text-[44px] ${rtl ? "font-arabic font-bold" : ""}`}>
                {t("Bring calm precision to your behavioral work.",
                   "أحضر الدقة الهادئة إلى عملك السلوكي.")}
              </h2>
              <p className={`mt-4 max-w-xl text-[15px] leading-[1.65] text-primary-foreground/80 ${rtl ? "font-arabic" : ""}`}>
                {t("Join the early-access cohort. Onboarding sessions in Arabic and English, every week.",
                   "انضم إلى مجموعة الوصول المبكر. جلسات التهيئة بالعربية والإنجليزية كل أسبوع.")}
              </p>
              <form className="mt-8 flex max-w-lg flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="you@institution.edu"
                  className="h-11 flex-1 rounded-md border border-white/20 bg-white/10 px-3 text-[14px] text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-4 text-[13px] font-semibold text-accent-foreground tactile">
                  {t("Request access", "اطلب الوصول")} <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-3 font-mono text-[11px] text-primary-foreground/60">No spam. We reply within 48 hours.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
                <Brain className="h-4 w-4" />
              </div>
              <span className="font-display text-[15px] font-semibold tracking-tight">Biruni</span>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-[1.6] text-muted-foreground">
              {t("A calm bilingual workspace for behavioral science across the MENA region.",
                 "مساحة عمل هادئة ثنائية اللغة للعلوم السلوكية في الشرق الأوسط.")}
            </p>
          </div>
          {[
            { h: t("Product", "المنتج"), l: [["#product", t("Overview", "نظرة عامة")], ["#personas", t("For teams", "للفرق")], ["#pricing", t("Pricing", "الأسعار")]] },
            { h: t("Company", "الشركة"), l: [["/system", t("Design system", "نظام التصميم")], ["#cta", t("Contact", "تواصل")]] },
          ].map((col) => (
            <div key={col.h}>
              <div className={`font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${rtl ? "font-arabic normal-case tracking-normal" : ""}`}>{col.h}</div>
              <ul className="mt-3 space-y-2 text-[13px]">
                {col.l.map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-foreground/80 calm hover:text-foreground">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-[12px] text-muted-foreground sm:px-6 lg:px-8">
            <span>© {new Date().getFullYear()} Biruni Labs. All rights reserved.</span>
            <span className="font-mono">Made with calm in Riyadh · بيروني</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ───────────── Helper components (pure design-system) ───────────── */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-gold" />
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">{children}</span>
    </span>
  );
}

function HeroInstrument({ rtl, t }: { rtl: boolean; t: (en: string, ar: string) => string }) {
  return (
    <div className="precision-card relative overflow-hidden">
      {/* Top status bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-success" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Session · Live</span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground num-tab">00:14:32</span>
      </div>

      {/* Body */}
      <div className="grad-card p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("Trial", "محاولة")}</div>
            <div className="mt-0.5 font-display text-[15px] font-semibold">{t("Arabic word recognition", "التعرف على الكلمات العربية")}</div>
          </div>
          <span className="rounded-md bg-gold-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">N=412</span>
        </div>

        {/* Sparkline-like bars */}
        <div className="mt-5 flex h-24 items-end gap-1">
          {[40, 62, 48, 70, 55, 78, 66, 84, 72, 90, 80, 95, 88, 76, 82, 70, 92, 86].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 11 ? "var(--gold)" : "color-mix(in srgb, var(--primary) 22%, transparent)",
              }}
            />
          ))}
        </div>

        {/* Metrics row */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { k: t("Mean RT", "متوسط الزمن"), v: "612ms", up: true },
            { k: t("Accuracy", "الدقة"), v: "94.2%", up: true },
            { k: t("Trials", "المحاولات"), v: "412", up: false },
          ].map((m) => (
            <div key={m.k} className="rounded-md border border-border bg-background p-3">
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="font-display text-[16px] font-semibold tracking-tight num-tab">{m.v}</span>
                {m.up && <span className="font-mono text-[10px] text-success">▲</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer chip */}
      <div className="flex items-center justify-between border-t border-border bg-surface-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
            <Brain className="h-3 w-3" />
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">Biruni · Riyadh Behavioral Lab</span>
        </div>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-accent-foreground">
          <ChevronRight className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} />
        </span>
      </div>
    </div>
  );
}

function WorkspacePreview({ rtl, t }: { rtl: boolean; t: (en: string, ar: string) => string }) {
  return (
    <div className="precision-card overflow-hidden">
      <div className="grid md:grid-cols-12">
        {/* Sidebar */}
        <aside className="hidden border-ie bg-surface-2 p-4 md:col-span-3 md:block">
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("Studies", "الدراسات")}</div>
          <ul className="mt-3 space-y-1 text-[13px]">
            {[
              [t("Arabic word recognition", "التعرف على الكلمات"), true],
              [t("Attention in classrooms", "الانتباه في الفصول"), false],
              [t("Clinical baseline", "قاعدة سريرية"), false],
              [t("Eye-tracking pilot", "تجربة تتبع العين"), false],
            ].map(([label, active]) => (
              <li
                key={label as string}
                className={`flex items-center justify-between rounded-md px-2 py-1.5 ${active ? "bg-background ring-1 ring-border" : ""}`}
              >
                <span className={active ? "text-foreground" : "text-muted-foreground"}>{label as string}</span>
                {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
              </li>
            ))}
          </ul>

          <div className="mt-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("Tools", "أدوات")}</div>
          <ul className="mt-3 space-y-1 text-[13px] text-muted-foreground">
            {[[Activity, t("Sessions", "الجلسات")], [LineChart, t("Analytics", "التحليلات")], [FileText, t("Reports", "التقارير")], [Zap, t("Automations", "التشغيل الآلي")]].map(([Icon, label], i) => (
              <li key={i} className="flex items-center gap-2 px-2 py-1.5">
                <Icon className="h-3.5 w-3.5" /> <span>{label as string}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main panel */}
        <div className="md:col-span-9">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-[14px] font-semibold">{t("Arabic word recognition", "التعرف على الكلمات العربية")}</span>
              <span className="rounded-full bg-gold-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">v 1.4</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">412 {t("participants", "مشاركا")}</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground text-background">
                <ChevronRight className={`h-3 w-3 ${rtl ? "rotate-180" : ""}`} />
              </span>
            </div>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-3">
            {[
              { k: t("Latency Δ", "فرق الزمن"), v: "−14%", tone: "success" as const },
              { k: t("Accuracy", "الدقة"), v: "94.2%", tone: "muted" as const },
              { k: t("Drop-off", "التسرب"), v: "2.1%", tone: "warning" as const },
            ].map((m) => (
              <div key={m.k} className="rounded-md border border-border bg-surface p-4">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold tracking-tight num-tab">{m.v}</span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: m.tone === "success" ? "var(--success)" : m.tone === "warning" ? "var(--warning)" : "var(--muted-foreground)" }}
                  >
                    {m.tone === "success" ? "▲" : m.tone === "warning" ? "▲" : "—"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart strip */}
          <div className="px-5 pb-5">
            <div className="rounded-md border border-border bg-surface p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("Recognition latency · last 18 sessions", "زمن التعرف · آخر ١٨ جلسة")}</span>
                <span className="font-mono text-[10px] text-muted-foreground num-tab">ms</span>
              </div>
              <svg viewBox="0 0 600 120" className="mt-3 h-24 w-full">
                <defs>
                  <linearGradient id="grad-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--gold)" />
                  </linearGradient>
                </defs>
                {[20, 40, 60, 80, 100].map((y) => (
                  <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />
                ))}
                <polyline
                  fill="none"
                  stroke="url(#grad-line)"
                  strokeWidth="2.5"
                  points="0,80 35,72 70,78 105,60 140,66 175,52 210,58 245,44 280,50 315,38 350,44 385,30 420,36 455,28 490,34 525,22 560,28 600,18"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonaHeader({ color, icon: Icon, kicker }: { color: string; icon: any; kicker: string }) {
  return (
    <div
      className="relative h-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, var(--${color}) 18%, var(--surface)), var(--surface) 70%)`,
      }}
    >
      <div aria-hidden className="absolute inset-0 grid-fine opacity-50" />
      <div className="relative flex h-full items-end justify-between p-4">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl bg-background ring-1 ring-border"
          style={{ color: `var(--${color})` }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur"
          style={{ color: `var(--${color})` }}
        >
          {kicker}
        </span>
      </div>
    </div>
  );
}

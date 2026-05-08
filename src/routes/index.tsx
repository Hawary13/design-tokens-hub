import { createFileRoute } from "@tanstack/react-router";
import {
  Beaker, GraduationCap, Stethoscope, Brain, Sparkles, Check, AlertTriangle,
  Info, X, Search, Settings, Bell, User, Play, Pause, ChevronRight, Layers,
  BarChart3, Database, Lock, Globe, Zap, BookOpen, Users, FileText, Plus,
  Eye, Edit3, Trash2, Download, Upload, Filter, Calendar, Clock, Heart,
  CircleCheck, CircleAlert, Star, Command, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Biruni — Design System v1.0" },
      { name: "description", content: "Comprehensive design system for Biruni: a MENA-centric behavioral science platform. Tokens, typography, color, components." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Naskh+Arabic:wght@400;600&display=swap" },
    ],
  }),
  component: DesignSystem,
});

/* ────────────────────────────────────────────────────────────────────── */

function Section({ id, eyebrow, title, titleAr, children }: { id: string; eyebrow: string; title: string; titleAr?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-8">
        <header className="mb-10 grid gap-6 md:grid-cols-[320px_1fr] md:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</div>
            <h2 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">{title}</h2>
            {titleAr && (
              <div dir="rtl" className="mt-2 font-arabic text-2xl text-muted-foreground">{titleAr}</div>
            )}
          </div>
          <div className="h-px w-full bg-border md:mb-3" />
        </header>
        {children}
      </div>
    </section>
  );
}

function Swatch({ name, varName, hex, fg = "text-ink-50" }: { name: string; varName: string; hex?: string; fg?: string }) {
  return (
    <div className="group">
      <div
        className={`relative flex h-24 items-end justify-between rounded-xl p-3 ring-1 ring-inset ring-black/5 ${fg}`}
        style={{ background: `var(${varName})` }}
      >
        <span className="font-mono text-[10px] opacity-80">{name}</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono text-[11px] text-foreground">{name}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{hex ?? varName}</span>
      </div>
    </div>
  );
}

function Token({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md bg-muted/60 px-3 py-2 font-mono text-xs">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}

function DesignSystem() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden md:block">
              <div className="font-display text-lg leading-none text-foreground">Biruni</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Design System · v1.0</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#foundations" className="hover:text-foreground">Foundations</a>
            <a href="#color" className="hover:text-foreground">Color</a>
            <a href="#type" className="hover:text-foreground">Type</a>
            <a href="#components" className="hover:text-foreground">Components</a>
            <a href="#bilingual" className="hover:text-foreground">EN · ع</a>
            <a href="#patterns" className="hover:text-foreground">Patterns</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90">
            <Download size={14} /> Tokens
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-paper opacity-40" />
        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-8 py-24 md:py-32">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span>A MENA-centric behavioral science platform</span>
            <span className="opacity-40">·</span>
            <span dir="rtl" className="font-arabic text-sm normal-case tracking-normal">منصة لعلوم السلوك في الشرق الأوسط</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-6xl font-light leading-[0.95] tracking-tight text-foreground md:text-8xl">
            The grammar of <em className="text-accent not-italic">behavioral</em> science.
          </h1>
          <div dir="rtl" className="mt-4 max-w-3xl font-arabic text-3xl font-normal leading-[1.4] text-foreground md:text-5xl">
            <span className="text-muted-foreground">قواعدُ </span>
            <em className="not-italic text-accent">علمِ السلوك</em>
            <span className="text-muted-foreground">.</span>
          </div>
          <div className="mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A design system for researchers, educators, and clinicians. Built on scholarly
              typography, ink-on-paper restraint, and three persona-driven accents.
            </p>
            <p dir="rtl" className="font-arabic text-lg leading-loose text-muted-foreground">
              نظامُ تصميمٍ للباحثين والمعلّمين والأطبّاء. مبنيٌّ على طباعةٍ علميّةٍ وثلاثةِ ألوانٍ مميّزة لكلّ تخصّص.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">v1.0.0</span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">142 tokens</span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">3 personas</span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">EN · ع</span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">LTR · RTL</span>
          </div>
        </div>
      </section>

      {/* ── Foundations ── */}
      <Section id="foundations" eyebrow="01 · Foundations" title="Principles" titleAr="المبادئ">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Brain, title: "Cognitive clarity", titleAr: "وضوحٌ معرفي", body: "Every surface earns its weight. Density serves the work, not the brand.", bodyAr: "كلُّ عنصرٍ يستحقُّ مكانه. الكثافةُ تخدمُ العمل، لا العلامة." },
            { icon: Globe, title: "Bilingual by default", titleAr: "ثنائيُّ اللغة افتراضيًا", body: "Latin and Arabic share the same vertical rhythm. Mirror gracefully.", bodyAr: "اللاتينيّةُ والعربيّةُ على إيقاعٍ واحد. ينعكسُ التخطيطُ بأناقة." },
            { icon: Layers, title: "Persona-aware", titleAr: "مدركٌ للأدوار", body: "Research, Education, Clinical — three accents, one system.", bodyAr: "بحثٌ، تعليمٌ، عيادةٌ — ثلاثةُ ألوانٍ في نظامٍ واحد." },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p.icon className="text-accent" size={22} />
              <h3 className="mt-4 font-display text-2xl font-medium">{p.title}</h3>
              <div dir="rtl" className="font-arabic text-xl text-foreground/80">{p.titleAr}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <p dir="rtl" className="mt-2 font-arabic text-base leading-loose text-muted-foreground">{p.bodyAr}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Color ── */}
      <Section id="color" eyebrow="02 · Color" title="Tokens & palette" titleAr="الألوان">
        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Ink — primary neutral (scholarly indigo)</h3>
            <div className="grid grid-cols-5 gap-3 md:grid-cols-10">
              {[50,100,200,300,400,500,600,700,800,900].map((s) => (
                <Swatch key={s} name={`ink-${s}`} varName={`--ink-${s}`} fg={s>=400?"text-ink-50":"text-ink-900"} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Sand — warm MENA neutral</h3>
            <div className="grid grid-cols-5 gap-3 md:grid-cols-10">
              {[50,100,200,300,400,500,600,700,800,900].map((s) => (
                <Swatch key={s} name={`sand-${s}`} varName={`--sand-${s}`} fg={s>=500?"text-sand-50":"text-sand-900"} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Saffron — accent</h3>
            <div className="grid grid-cols-3 gap-3 md:max-w-md">
              <Swatch name="saffron-300" varName="--saffron-300" fg="text-ink-900" />
              <Swatch name="saffron-500" varName="--saffron-500" fg="text-ink-900" />
              <Swatch name="saffron-700" varName="--saffron-700" fg="text-ink-50" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Semantic</h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <Swatch name="primary" varName="--primary" />
              <Swatch name="accent" varName="--accent" fg="text-ink-900" />
              <Swatch name="success" varName="--success" />
              <Swatch name="warning" varName="--warning" fg="text-ink-900" />
              <Swatch name="info" varName="--info" />
              <Swatch name="destructive" varName="--destructive" />
              <Swatch name="muted" varName="--muted" fg="text-ink-900" />
              <Swatch name="border" varName="--border" fg="text-ink-900" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Persona accents</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { key: "research", label: "Research", labelAr: "بحث", icon: Beaker, copy: "Cool indigo. Empirical. Data-forward.", copyAr: "نيليٌّ هادئ. تجريبيٌّ. مُوجَّهٌ بالبيانات." },
                { key: "education", label: "Education", labelAr: "تعليم", icon: GraduationCap, copy: "Warm saffron. Inviting. Classroom-ready.", copyAr: "زعفرانيٌّ دافئ. مُرحِّب. جاهزٌ للفصل." },
                { key: "clinical", label: "Clinical", labelAr: "عيادة", icon: Stethoscope, copy: "Calm teal. Trustworthy. Care-first.", copyAr: "فيروزيٌّ ساكن. موثوق. الرعايةُ أوّلًا." },
              ].map((p) => (
                <div key={p.key} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="flex h-32 items-end justify-between p-5" style={{ background: `var(--${p.key})`, color: `var(--${p.key}-foreground)` }}>
                    <div>
                      <p.icon size={22} />
                      <div className="mt-3 font-display text-2xl">{p.label}</div>
                    </div>
                    <div dir="rtl" className="font-arabic text-2xl opacity-90">{p.labelAr}</div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground">{p.copy}</p>
                    <p dir="rtl" className="mt-1 font-arabic text-base leading-loose text-muted-foreground">{p.copyAr}</p>
                    <div className="mt-3 font-mono text-[11px] text-muted-foreground">--{p.key} / --{p.key}-foreground</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Typography ── */}
      <Section id="type" eyebrow="03 · Typography" title="Type system" titleAr="نظام الطباعة">
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <div className="border-b border-border pb-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Display · Fraunces · 96/0.95/-0.02em</div>
              <div className="mt-2 font-display text-7xl font-light leading-[0.95] tracking-tight">Discover the mind.</div>
            </div>
            <div className="border-b border-border pb-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">H1 · 56/1/-0.02em</div>
              <div className="mt-2 font-display text-5xl font-medium">Stroop interference task</div>
            </div>
            <div className="border-b border-border pb-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">H2 · 36/1.1</div>
              <div className="mt-2 font-display text-4xl">Methodology</div>
            </div>
            <div className="border-b border-border pb-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Body · Inter · 16/1.6</div>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground">
                Biruni provides a unified, collaborative environment for designing behavioral
                experiments and clinical assessments — built for the rhythms and writing systems of the MENA region.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Arabic · Noto Naskh · 24/1.7</div>
              <p dir="rtl" className="mt-2 font-arabic text-2xl leading-relaxed">
                منصة بيروني لعلوم السلوك — أبحاث، تعليم، وتقييم سريري في مكان واحد.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Mono · JetBrains Mono · 13/1.5</div>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-ink-900 p-4 font-mono text-[13px] leading-relaxed text-sand-100">
{`trial.show({
  stimulus: "RED",
  ink: "blue",
  duration_ms: 1500,
})`}
              </pre>
            </div>
          </div>
          <aside className="space-y-2 self-start rounded-2xl border border-border bg-card p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Scale tokens</div>
            <Token k="text-xs" v="12 / 16" />
            <Token k="text-sm" v="14 / 20" />
            <Token k="text-base" v="16 / 26" />
            <Token k="text-lg" v="18 / 28" />
            <Token k="text-xl" v="20 / 30" />
            <Token k="text-2xl" v="24 / 32" />
            <Token k="text-3xl" v="30 / 38" />
            <Token k="text-4xl" v="36 / 44" />
            <Token k="text-5xl" v="48 / 56" />
            <Token k="text-6xl" v="60 / 60" />
            <Token k="text-7xl" v="72 / 72" />
            <Token k="text-8xl" v="96 / 95" />
          </aside>
        </div>
      </Section>

      {/* ── Spacing / Radius / Shadow ── */}
      <Section id="primitives" eyebrow="04 · Primitives" title="Spacing, radius, elevation" titleAr="المسافات والحواف">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-2xl">Spacing</h3>
            <div className="mt-5 space-y-3">
              {[1,2,3,4,6,8,12,16,24].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="w-10 font-mono text-[11px] text-muted-foreground">{n*4}px</span>
                  <div className="h-3 rounded bg-accent" style={{ width: `${n*8}px` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-2xl">Radius</h3>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["sm","6px"], ["md","8px"], ["lg","10px"],
                ["xl","14px"], ["2xl","18px"], ["3xl","22px"],
              ].map(([k,v]) => (
                <div key={k} className="text-center">
                  <div className={`mx-auto h-16 w-16 bg-primary/15 ring-1 ring-primary/25 rounded-${k}`} />
                  <div className="mt-2 font-mono text-[11px] text-muted-foreground">{k} · {v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-2xl">Elevation</h3>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                ["xs","shadow-xs"], ["sm","shadow-sm"], ["md","shadow-md"], ["lg","shadow-lg"],
              ].map(([k,c]) => (
                <div key={k} className="text-center">
                  <div className={`mx-auto h-16 w-full rounded-xl bg-card ${c} border border-border`} />
                  <div className="mt-2 font-mono text-[11px] text-muted-foreground">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Iconography ── */}
      <Section id="icons" eyebrow="05 · Iconography" title="Lucide · 1.75 stroke" titleAr="الأيقونات">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid grid-cols-6 gap-4 md:grid-cols-12">
            {[
              Brain, Beaker, GraduationCap, Stethoscope, Sparkles, BarChart3,
              Database, Lock, Globe, Zap, BookOpen, Users, FileText, Plus,
              Eye, Edit3, Trash2, Download, Upload, Filter, Calendar, Clock,
              Heart, Search, Settings, Bell, User, Play, Pause, ChevronRight,
              Layers, Star, Command, Check, Info, AlertTriangle,
            ].map((Icon, i) => (
              <div key={i} className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition hover:border-accent hover:text-accent">
                <Icon size={20} strokeWidth={1.75} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Components ── */}
      <Section id="components" eyebrow="06 · Components" title="Buttons, inputs, badges, alerts" titleAr="المكوّنات">
        {/* Buttons */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Buttons</div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90">
              <Sparkles size={15} /> Primary
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground shadow-sm hover:opacity-90">
              Accent
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted">
              Secondary
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted">
              Ghost <ArrowRight size={14} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-destructive px-4 py-2.5 text-sm font-medium text-destructive-foreground shadow-sm hover:opacity-90">
              <Trash2 size={14} /> Destructive
            </button>
            <button disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-muted px-4 py-2.5 text-sm font-medium text-muted-foreground opacity-60">
              Disabled
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">sm</button>
            <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">md</button>
            <button className="rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground">lg</button>
            <button className="rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground">pill</button>
            <button className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground"><Plus size={16} /></button>
          </div>
        </div>

        {/* Inputs */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Inputs</div>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-xs font-medium text-foreground">Experiment name</span>
                <input className="mt-1.5 w-full rounded-lg border border-input bg-surface-elevated px-3 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" defaultValue="Stroop Task — Pilot 03" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-foreground">Search</span>
                <div className="relative mt-1.5">
                  <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input className="w-full rounded-lg border border-input bg-surface-elevated py-2.5 pl-9 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" placeholder="Search the Exchange…" />
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-foreground">Notes</span>
                <textarea rows={3} className="mt-1.5 w-full resize-none rounded-lg border border-input bg-surface-elevated px-3 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" defaultValue="Reaction time threshold: 1500ms" />
              </label>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-11 items-center rounded-full bg-primary p-0.5">
                  <span className="h-5 w-5 translate-x-5 rounded-full bg-background shadow" />
                </span>
                <span className="text-sm text-foreground">Auto-save versions</span>
              </div>
            </div>
          </div>

          {/* Badges & alerts */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Badges</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge tone="primary">Primary</Badge>
              <Badge tone="accent">Verified</Badge>
              <Badge tone="success"><CircleCheck size={11}/> Live</Badge>
              <Badge tone="warning"><CircleAlert size={11}/> Draft</Badge>
              <Badge tone="destructive">Archived</Badge>
              <Badge tone="research"><Beaker size={11}/> Research</Badge>
              <Badge tone="education"><GraduationCap size={11}/> Education</Badge>
              <Badge tone="clinical"><Stethoscope size={11}/> Clinical</Badge>
            </div>

            <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Alerts</div>
            <div className="mt-3 space-y-2">
              <Alert icon={Info} tone="info" title="42 participants completed" body="Data is syncing to your warehouse." />
              <Alert icon={CircleCheck} tone="success" title="HIPAA controls active" body="Patient data is encrypted at rest." />
              <Alert icon={AlertTriangle} tone="warning" title="Offline mode" body="Responses will sync when reconnected." />
              <Alert icon={X} tone="destructive" title="Validation failed" body="Trial 4 has an unreachable branch." />
            </div>
          </div>
        </div>

        {/* Cards / table snippet */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <PersonaCard tone="research" icon={Beaker} title="Working Memory · N-Back" meta="12 collaborators · v3.4">
            Real-time co-editing, code injection, full export.
          </PersonaCard>
          <PersonaCard tone="education" icon={GraduationCap} title="Stroop · Classroom" meta="One-click deploy">
            Pre-built visualizations for class-wide results.
          </PersonaCard>
          <PersonaCard tone="clinical" icon={Stethoscope} title="PHQ-9 · Longitudinal" meta="HIPAA · GDPR">
            Patient progress with one-click PDF reports.
          </PersonaCard>
        </div>
      </Section>

      {/* ── Bilingual ── */}
      <Section id="bilingual" eyebrow="07 · Bilingual" title="English & Arabic" titleAr="الإنجليزيّة والعربيّة">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Type pairing</div>
            <div className="mt-5 space-y-5">
              {[
                { en: "Working Memory", ar: "الذاكرة العاملة" },
                { en: "Reaction Time", ar: "زمن الاستجابة" },
                { en: "Patient Assessment", ar: "تقييم المريض" },
                { en: "Classroom Mode", ar: "وضع الفصل" },
              ].map((r) => (
                <div key={r.en} className="grid grid-cols-2 items-baseline gap-6 border-b border-border pb-4 last:border-0">
                  <div className="font-display text-3xl font-light">{r.en}</div>
                  <div dir="rtl" className="font-arabic text-3xl">{r.ar}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Fraunces · Inter ⇄ Noto Naskh Arabic
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Numerals</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">Latin · default</div>
                  <div className="mt-1 font-display text-4xl">1,284 · 92.4%</div>
                </div>
                <div dir="rtl">
                  <div className="font-arabic text-xs text-muted-foreground">عربيّة-هنديّة</div>
                  <div className="mt-1 font-arabic text-4xl">١٬٢٨٤ · ٪٩٢٫٤</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Directionality · LTR ⇄ RTL</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="flex items-center justify-between">
                    <Beaker size={16} className="text-research" />
                    <ChevronRight size={14} className="text-muted-foreground" />
                  </div>
                  <div className="mt-3 font-display text-base">N-Back Task</div>
                  <div className="mt-1 text-xs text-muted-foreground">342 participants</div>
                </div>
                <div dir="rtl" className="rounded-lg border border-border bg-surface p-4">
                  <div className="flex items-center justify-between">
                    <Beaker size={16} className="text-research" />
                    <ChevronRight size={14} className="rotate-180 text-muted-foreground" />
                  </div>
                  <div className="mt-3 font-arabic text-lg">مهمّة N-Back</div>
                  <div className="mt-1 font-arabic text-xs text-muted-foreground">٣٤٢ مشاركًا</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Bilingual button</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"><Play size={14}/> Start study</button>
                <button dir="rtl" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-arabic text-sm font-medium text-primary-foreground"><Play size={14}/> ابدأ الدراسة</button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-card px-4 py-2.5 text-sm font-medium"><Download size={14}/> Export</button>
                <button dir="rtl" className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-card px-4 py-2.5 font-arabic text-sm font-medium"><Download size={14}/> تصدير</button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Patterns ── */}
      <Section id="patterns" eyebrow="08 · Patterns" title="In context" titleAr="في السياق">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">
          <div className="grid md:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="border-r border-border bg-surface-elevated p-5">
              <div className="flex items-center gap-2">
                <Logo small /> <span className="font-display text-lg">Biruni</span>
              </div>
              <div className="mt-6 space-y-1 text-sm">
                {[
                  { i: BarChart3, l: "Overview", a: true },
                  { i: Beaker, l: "Experiments" },
                  { i: BookOpen, l: "Exchange" },
                  { i: Users, l: "Participants" },
                  { i: Database, l: "Data" },
                  { i: Settings, l: "Settings" },
                ].map((it) => (
                  <a key={it.l} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${it.a ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                    <it.i size={16} /> {it.l}
                  </a>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-gradient-to-br from-accent/30 to-saffron-300/20 p-4">
                <Sparkles size={16} className="text-saffron-700" />
                <div className="mt-2 font-display text-base">Upgrade to Clinical</div>
                <div className="text-xs text-muted-foreground">HIPAA workspace · patient CRM</div>
              </div>
            </aside>

            {/* Main */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Workspace · Dr. Aris Thorne</div>
                  <h3 className="mt-1 font-display text-3xl">Studies overview</h3>
                </div>
                <div className="flex gap-2">
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground"><Bell size={15}/></button>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"><Plus size={14}/> New</button>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <Stat label="Active studies" value="14" delta="+3" />
                <Stat label="Participants" value="1,284" delta="+162" />
                <Stat label="Avg. completion" value="92.4%" delta="+1.8%" tone="success" />
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2.5 text-left">Study</th>
                      <th className="px-4 py-2.5 text-left">Persona</th>
                      <th className="px-4 py-2.5 text-left">Status</th>
                      <th className="px-4 py-2.5 text-right">N</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { n: "N-Back · WM Capacity", p: "research", s: "Live", v: "342" },
                      { n: "Stroop · Classroom S2", p: "education", s: "Draft", v: "—" },
                      { n: "PHQ-9 · Cohort A", p: "clinical", s: "Live", v: "118" },
                      { n: "Visual Search · Pilot", p: "research", s: "Paused", v: "27" },
                    ].map((r) => (
                      <tr key={r.n} className="border-t border-border">
                        <td className="px-4 py-3 font-medium text-foreground">{r.n}</td>
                        <td className="px-4 py-3"><Badge tone={r.p as any}>{r.p}</Badge></td>
                        <td className="px-4 py-3 text-muted-foreground">{r.s}</td>
                        <td className="px-4 py-3 text-right font-mono">{r.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-display text-base">Biruni Design System</div>
              <div className="font-mono text-[11px] text-muted-foreground">© 2026 · بيروني · v1.0.0</div>
            </div>
          </div>
          <div className="font-mono text-[11px] text-muted-foreground">
            Crafted in OKLCH · Light & Dark · LTR & RTL
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Building blocks ── */

function Logo({ small = false }: { small?: boolean }) {
  const s = small ? 28 : 36;
  return (
    <div className="grid place-items-center rounded-xl bg-gradient-to-br from-ink-800 to-ink-600 text-sand-100" style={{ width: s, height: s }}>
      <span className="font-display text-base font-medium">B</span>
    </div>
  );
}

function Badge({ children, tone = "default" }: { children: React.ReactNode; tone?: "default"|"primary"|"accent"|"success"|"warning"|"destructive"|"research"|"education"|"clinical" }) {
  const map: Record<string,string> = {
    default: "bg-muted text-foreground border-border",
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/20 text-saffron-700 border-accent/30",
    success: "bg-success/15 text-success border-success/30",
    warning: "bg-warning/25 text-warning-foreground border-warning/40",
    destructive: "bg-destructive/10 text-destructive border-destructive/30",
    research: "bg-research/15 text-research border-research/30",
    education: "bg-education/25 text-education-foreground border-education/40",
    clinical: "bg-clinical/15 text-clinical border-clinical/30",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium capitalize ${map[tone]}`}>
      {children}
    </span>
  );
}

function Alert({ icon: Icon, tone, title, body }: { icon: any; tone: "info"|"success"|"warning"|"destructive"; title: string; body: string }) {
  const map: Record<string,string> = {
    info: "bg-info/10 text-info border-info/25",
    success: "bg-success/10 text-success border-success/25",
    warning: "bg-warning/15 text-warning-foreground border-warning/30",
    destructive: "bg-destructive/10 text-destructive border-destructive/25",
  };
  return (
    <div className={`flex items-start gap-3 rounded-lg border px-3 py-2.5 ${map[tone]}`}>
      <Icon size={16} className="mt-0.5 shrink-0" />
      <div className="text-sm">
        <div className="font-medium">{title}</div>
        <div className="opacity-80">{body}</div>
      </div>
    </div>
  );
}

function PersonaCard({ tone, icon: Icon, title, meta, children }: { tone: "research"|"education"|"clinical"; icon: any; title: string; meta: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between p-5" style={{ background: `color-mix(in oklab, var(--${tone}) 12%, transparent)` }}>
        <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: `var(--${tone})`, color: `var(--${tone}-foreground)` }}>
          <Icon size={16} />
        </div>
        <Badge tone={tone}>{tone}</Badge>
      </div>
      <div className="p-5">
        <h4 className="font-display text-xl">{title}</h4>
        <p className="mt-1.5 text-sm text-muted-foreground">{children}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
          <span>{meta}</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, delta, tone }: { label: string; value: string; delta: string; tone?: "success" }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="font-display text-3xl font-medium">{value}</div>
        <div className={`font-mono text-xs ${tone === "success" ? "text-success" : "text-muted-foreground"}`}>{delta}</div>
      </div>
    </div>
  );
}

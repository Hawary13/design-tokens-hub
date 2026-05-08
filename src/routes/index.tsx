import { createFileRoute } from "@tanstack/react-router";
import {
  Beaker, GraduationCap, Stethoscope, Brain, Check, AlertTriangle, Info, X,
  Search, Bell, Play, ChevronRight, BarChart3, Database, Globe, Download,
  ArrowUpRight, Plus, Filter, Circle, Square, Triangle, Minus, Equal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIRUNI / DS-001 — Behavioral Instrument Design System" },
      { name: "description", content: "BIRUNI DS-001: a Swiss-brutalist design system for a MENA-centric behavioral science instrument." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap" },
    ],
  }),
  component: DS,
});

const SIGNAL = "var(--color-signal)";

/* ── Primitives ───────────────────────────────────────────────────────── */

function Tag({ children, mode = "ink" }: { children: React.ReactNode; mode?: "ink" | "signal" | "outline" }) {
  const m = {
    ink: "bg-foreground text-background",
    signal: "bg-[var(--color-signal)] text-foreground",
    outline: "border border-foreground text-foreground",
  }[mode];
  return <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${m}`}>{children}</span>;
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-foreground/20 py-1.5 font-mono text-[11px]">
      <span className="text-muted-foreground uppercase tracking-wider">{k}</span>
      <span className="text-foreground num-tab">{v}</span>
    </div>
  );
}

function Block({ id, code, title, titleAr, children, span = "" }: {
  id?: string; code: string; title: string; titleAr?: string; children: React.ReactNode; span?: string;
}) {
  return (
    <section id={id} className={`relative border-2 border-foreground bg-background ${span}`}>
      <div className="flex items-center justify-between border-b-2 border-foreground bg-foreground px-3 py-1.5 text-background">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">{code}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">{title}</span>
          {titleAr && <span dir="rtl" className="font-arabic text-[12px] opacity-80">{titleAr}</span>}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */

function DS() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ─── Ticker bar ────────────────────────────────────────────────── */}
      <div className="ticker overflow-hidden whitespace-nowrap border-b-2 border-foreground py-1.5">
        <div className="flex animate-[marquee_40s_linear_infinite] gap-8 px-4 font-mono text-[11px] uppercase tracking-[0.25em]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8">
              <span>● LIVE BUILD 2026.05.08</span>
              <span>DS-001 / v1.0.0</span>
              <span>Tokens 142</span>
              <span>Components 38</span>
              <span>Personas 03</span>
              <span>Locale EN · ع</span>
              <span>Direction LTR ⇄ RTL</span>
              <span>WCAG AA ✓</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Masthead ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
        <div className="grid grid-cols-12 items-stretch">
          <div className="col-span-3 flex items-center gap-3 border-r-2 border-foreground px-4 py-3">
            <Mark />
            <div className="leading-none">
              <div className="font-display text-lg font-bold tracking-tight">BIRUNI</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Behavioral Instrument</div>
            </div>
          </div>
          <nav className="col-span-7 hidden items-center gap-0 border-r-2 border-foreground md:flex">
            {["00 Index","01 Tokens","02 Type","03 Color","04 Grid","05 Components","06 Patterns","07 RTL"].map((l, i) => (
              <a key={l} href={`#s${i}`} className={`flex h-full items-center px-3 font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background ${i === 0 ? "bg-[var(--color-signal)]" : ""}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="col-span-12 flex items-center justify-between gap-2 px-4 py-3 md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">EN/ع</span>
            <button className="inline-flex items-center gap-1 bg-foreground px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background">
              <Download size={11} /> .json
            </button>
          </div>
        </div>
      </header>

      {/* ─── Hero / Cover plate ────────────────────────────────────────── */}
      <section id="s0" className="relative border-b-2 border-foreground">
        <div className="grid grid-cols-12">
          {/* Big numeral plate */}
          <div className="relative col-span-12 border-r-2 border-foreground md:col-span-5">
            <div className="absolute inset-0 blueprint opacity-60" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="flex items-start justify-between">
                <Tag mode="signal">Plate 001</Tag>
                <div className="text-right font-mono text-[10px] uppercase tracking-[0.22em]">
                  <div>Spec sheet</div>
                  <div className="text-muted-foreground">DS-001 / 2026·Q2</div>
                </div>
              </div>
              <div>
                <div className="font-display text-[180px] font-bold leading-[0.82] tracking-[-0.06em] num-tab md:text-[260px]">
                  DS<span className="text-[var(--color-signal)]">·</span>01
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Issue one — first observation
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 border-t-2 border-foreground pt-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                <div><div className="text-muted-foreground">Tokens</div><div className="num-tab text-lg">142</div></div>
                <div><div className="text-muted-foreground">Comp.</div><div className="num-tab text-lg">038</div></div>
                <div><div className="text-muted-foreground">Personae</div><div className="num-tab text-lg">003</div></div>
              </div>
            </div>
          </div>

          {/* Statement */}
          <div className="col-span-12 flex flex-col justify-between p-6 md:col-span-7">
            <div className="flex items-center gap-2">
              <Tag mode="outline">A MENA-centric behavioral science instrument</Tag>
              <Tag>EN · ع</Tag>
            </div>

            <h1 className="my-8 font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] md:text-7xl">
              Measure behavior <br />
              <span className="bg-[var(--color-signal)] px-1.5">like an instrument</span>,<br />
              <span className="italic font-light">read it like a manuscript.</span>
            </h1>

            <div dir="rtl" className="mb-6 font-arabic text-3xl font-medium leading-[1.4] md:text-5xl">
              قِسِ السلوك <span className="bg-[var(--color-signal)] px-1.5">كالأداة</span>،
              <br /> واقرأه <span className="italic">كالمخطوطة</span>.
            </div>

            <div className="grid gap-4 border-t-2 border-foreground pt-4 md:grid-cols-2">
              <p className="text-[14px] leading-[1.6]">
                BIRUNI is a workbench for behavioral research, classroom assessment, and clinical practice.
                This document is its operating manual — every token, every grid, every gesture catalogued.
              </p>
              <p dir="rtl" className="font-arabic text-[15px] leading-[1.9]">
                بيروني منصةٌ للأبحاث السلوكية، والتقييم الصفّي، والممارسة السريرية. هذا المستندُ دليلُ تشغيلها — كلُّ رمزٍ وكلُّ شبكةٍ موثَّق.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-background hover:bg-[var(--color-signal)] hover:text-foreground">
                Open workbench <ArrowUpRight size={14} />
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background">
                <Download size={14} /> Specimen.pdf
              </button>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">↳ scroll for spec</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 01 TOKENS / Color ─────────────────────────────────────────── */}
      <section id="s1" className="border-b-2 border-foreground">
        <SectionHead n="01" name="Color & tokens" nameAr="الألوان والرموز" abstract="Two-tone foundation — paper & ink — with a single SIGNAL accent. Three persona hues are used only for classification, never decoration." />
        <div className="grid grid-cols-12 gap-0">
          {/* Two-tone strip */}
          <div className="col-span-12 grid grid-cols-2 border-b-2 border-foreground md:col-span-7 md:border-b-0 md:border-r-2">
            <div className="flex h-64 flex-col justify-between border-r-2 border-foreground bg-[var(--color-paper)] p-4 text-foreground">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">PAPER · base</span>
              <div>
                <div className="font-display text-3xl font-medium">paper</div>
                <div className="font-mono text-[11px] text-muted-foreground">--paper · oklch(.965 .008 95)</div>
              </div>
            </div>
            <div className="flex h-64 flex-col justify-between bg-foreground p-4 text-background">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">INK · contrast</span>
              <div>
                <div className="font-display text-3xl font-medium">ink</div>
                <div className="font-mono text-[11px] opacity-70">--ink · oklch(.165 .012 260)</div>
              </div>
            </div>
          </div>
          {/* Signal */}
          <div className="col-span-12 flex h-64 flex-col justify-between bg-[var(--color-signal)] p-4 text-foreground md:col-span-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">SIGNAL · single accent</span>
              <Tag mode="ink">USE SPARINGLY</Tag>
            </div>
            <div>
              <div className="font-display text-5xl font-bold tracking-tight">signal</div>
              <div className="font-mono text-[11px]">--signal · oklch(.78 .19 130)</div>
            </div>
          </div>
        </div>

        {/* Persona swatches */}
        <div className="grid grid-cols-12 border-t-2 border-foreground">
          {[
            { key: "research", label: "Research", ar: "بحث", code: "P-01", icon: Beaker },
            { key: "education", label: "Education", ar: "تعليم", code: "P-02", icon: GraduationCap },
            { key: "clinical", label: "Clinical", ar: "عيادة", code: "P-03", icon: Stethoscope },
          ].map((p, i) => (
            <div key={p.key} className={`col-span-12 md:col-span-4 ${i < 2 ? "md:border-r-2 md:border-foreground" : ""} border-b-2 border-foreground md:border-b-0`}>
              <div className="h-40" style={{ background: `var(--color-${p.key})` }} />
              <div className="grid grid-cols-[40px_1fr] items-stretch border-t-2 border-foreground">
                <div className="grid place-items-center border-r border-foreground bg-foreground text-background">
                  <p.icon size={16} />
                </div>
                <div className="flex items-center justify-between p-3">
                  <div>
                    <div className="font-display text-lg font-medium leading-tight">{p.label}</div>
                    <div dir="rtl" className="font-arabic text-sm leading-tight text-muted-foreground">{p.ar}</div>
                  </div>
                  <Tag mode="outline">{p.code}</Tag>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Token table */}
        <div className="grid grid-cols-12 border-t-2 border-foreground">
          <div className="col-span-12 border-r-2 border-foreground p-5 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">— Manifest —</div>
            <h3 className="mt-1 font-display text-3xl font-medium leading-tight">Semantic tokens</h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-muted-foreground">Every surface and every state resolves to a named token. No raw hex in components — ever.</p>
          </div>
          <div className="col-span-12 p-5 md:col-span-8">
            <div className="grid gap-x-8 md:grid-cols-2">
              <Spec k="--background" v="paper" />
              <Spec k="--foreground" v="ink" />
              <Spec k="--primary" v="ink" />
              <Spec k="--accent" v="signal" />
              <Spec k="--muted" v="oklch(.92 .010 95)" />
              <Spec k="--border" v="ink · 2px" />
              <Spec k="--ring" v="signal · 2px" />
              <Spec k="--destructive" v="oklch(.55 .22 28)" />
              <Spec k="--success" v="oklch(.65 .16 145)" />
              <Spec k="--warning" v="oklch(.78 .16 75)" />
              <Spec k="--research" v="ultramarine" />
              <Spec k="--clinical" v="cyan" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 TYPE ────────────────────────────────────────────────────── */}
      <section id="s2" className="border-b-2 border-foreground">
        <SectionHead n="02" name="Typography" nameAr="الطباعة" abstract="Space Grotesk for UI & display. JetBrains Mono for measurement & metadata. IBM Plex Sans Arabic for ع. Set on a 4px baseline." />
        <div className="grid grid-cols-12">
          <div className="col-span-12 border-r-2 border-foreground p-6 md:col-span-8">
            <TypeRow tag="DISPLAY/120" spec="Space Grotesk · 120/96/-0.04em">Behavioral grammar.</TypeRow>
            <TypeRow tag="H1/56" spec="Space Grotesk · 56/56/-0.025em" weight="font-medium">Stroop interference task</TypeRow>
            <TypeRow tag="H2/36" spec="Space Grotesk · 36/40/-0.02em" weight="font-medium">Methodology</TypeRow>
            <TypeRow tag="LEAD/20" spec="Space Grotesk · 20/30" weight="font-light italic">A workbench for measurement.</TypeRow>
            <TypeRow tag="BODY/15" spec="Space Grotesk · 15/24">
              We instrument behavior across three settings — research, education, clinical — using one grammar of trials, stimuli, and responses.
            </TypeRow>
            <TypeRow tag="MONO/12" spec="JetBrains Mono · 12/18 · tabular">
              <span className="font-mono">trial.id = 0042 · rt = 487ms · acc = 0.92</span>
            </TypeRow>
            <TypeRow tag="ARABIC/24" spec="IBM Plex Sans Arabic · 24/40">
              <span dir="rtl" className="font-arabic">منصّة بيروني — أداةٌ لقياس السلوك في البحث والتعليم والممارسة السريريّة.</span>
            </TypeRow>
          </div>
          {/* Type ratio diagram */}
          <div className="relative col-span-12 md:col-span-4">
            <div className="absolute inset-0 blueprint opacity-60" />
            <div className="relative flex h-full flex-col justify-end gap-1 p-5">
              {[
                { s: 120, l: "DSP" }, { s: 56, l: "H1" }, { s: 36, l: "H2" }, { s: 24, l: "H3" },
                { s: 20, l: "LD" }, { s: 15, l: "BD" }, { s: 12, l: "MN" },
              ].map((r) => (
                <div key={r.l} className="flex items-end gap-2">
                  <span className="w-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{r.l}</span>
                  <div className="h-3 bg-foreground" style={{ width: `${r.s * 1.4}px` }} />
                  <span className="font-mono text-[10px] num-tab">{r.s}</span>
                </div>
              ))}
              <div className="mt-3 border-t-2 border-foreground pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Type ramp · base 16 · ratio 1.333
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 GRID & SPACE ───────────────────────────────────────────── */}
      <section id="s3" className="border-b-2 border-foreground">
        <SectionHead n="03" name="Grid · spacing · radius" nameAr="الشبكة والمسافات" abstract="A 12-column grid on a 4-px base. Radius is zero. Borders are 2-px. There is no shadow." />
        <div className="grid grid-cols-12">
          {/* 12-col diagram */}
          <div className="col-span-12 border-r-2 border-foreground p-5 md:col-span-7">
            <div className="grid h-48 grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="relative bg-[var(--color-signal)]/40">
                  <span className="absolute left-1 top-1 font-mono text-[9px] num-tab">{String(i+1).padStart(2,"0")}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>← gutter 16 →</span>
              <span>12 col · max-w 1280</span>
              <span>baseline 4</span>
            </div>
          </div>
          {/* Spacing scale */}
          <div className="col-span-12 p-5 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Spacing scale (px)</div>
            <div className="mt-3 space-y-1.5">
              {[2, 4, 8, 12, 16, 24, 32, 48, 64, 96].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="w-10 font-mono text-[11px] num-tab">{n}</span>
                  <div className="h-3 bg-foreground" style={{ width: n * 2 }} />
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="border-2 border-foreground p-3 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Radius</div>
                <div className="font-display text-3xl font-bold num-tab">0</div>
              </div>
              <div className="border-2 border-foreground p-3 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Border</div>
                <div className="font-display text-3xl font-bold num-tab">2</div>
              </div>
              <div className="border-2 border-foreground p-3 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Shadow</div>
                <div className="font-display text-3xl font-bold">∅</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 ICONOGRAPHY ────────────────────────────────────────────── */}
      <section id="s4" className="border-b-2 border-foreground">
        <SectionHead n="04" name="Iconography" nameAr="الرموز التصويريّة" abstract="Lucide line set, 1.5-px stroke, drawn on the 24-grid. Geometric primitives carry meaning before metaphor." />
        <div className="grid grid-cols-3 gap-0 md:grid-cols-6 lg:grid-cols-12">
          {[Beaker, GraduationCap, Stethoscope, Brain, BarChart3, Database, Globe, Bell, Search, Play, Filter, Plus, Check, X, Info, AlertTriangle, Circle, Square, Triangle, Minus, Equal, ChevronRight, ArrowUpRight, Download].map((I, i) => (
            <div key={i} className="flex aspect-square flex-col items-center justify-center gap-1 border border-foreground/40 hover:bg-foreground hover:text-background">
              <I size={20} strokeWidth={1.5} />
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">{String(i+1).padStart(2,"0")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 05 COMPONENTS ─────────────────────────────────────────────── */}
      <section id="s5" className="border-b-2 border-foreground">
        <SectionHead n="05" name="Components" nameAr="المكوّنات" abstract="Specimens shown with a measurement crosshair. Every variant declares its tokens." />
        <div className="grid grid-cols-12 gap-0">
          <Block code="C-01" title="Buttons" titleAr="أزرار" span="col-span-12 md:col-span-6 border-r-2 md:border-b-2 border-foreground">
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-background">Primary</button>
              <button className="bg-[var(--color-signal)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em]">Signal</button>
              <button className="border-2 border-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em]">Outline</button>
              <button className="px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] underline underline-offset-4">ghost ↗</button>
              <button disabled className="bg-muted px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">disabled</button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-6">
              <Spec k="height" v="36px" />
              <Spec k="padding" v="16/8" />
              <Spec k="border" v="2px ink" />
              <Spec k="font" v="mono · 11/0.22em" />
            </div>
          </Block>

          <Block code="C-02" title="Inputs" titleAr="حقول" span="col-span-12 md:col-span-6 md:border-b-2 border-foreground">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Participant ID</span>
              <input defaultValue="P-0042" className="mt-1 block w-full border-2 border-foreground bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:bg-[var(--color-signal)]" />
            </label>
            <div className="mt-3 flex items-center gap-3">
              <label className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="grid h-4 w-4 place-items-center border-2 border-foreground bg-[var(--color-signal)]"><Check size={12} strokeWidth={3} /></span>
                Consent
              </label>
              <label className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="h-4 w-4 border-2 border-foreground" />
                Anonymous
              </label>
              <span className="ml-auto inline-flex h-5 w-9 items-center border-2 border-foreground bg-[var(--color-signal)]">
                <span className="ml-auto h-full w-4 bg-foreground" />
              </span>
            </div>
          </Block>

          <Block code="C-03" title="Status" titleAr="الحالة" span="col-span-12 md:col-span-6 border-r-2 md:border-b-2 border-foreground">
            <div className="flex flex-wrap gap-2">
              {[
                { l: "PASS", t: "ink", icon: Check },
                { l: "WARN", t: "signal", icon: AlertTriangle },
                { l: "INFO", t: "outline", icon: Info },
                { l: "FAIL · 422", t: "outline", icon: X },
              ].map((b) => (
                <span key={b.l} className={`inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${b.t === "ink" ? "bg-foreground text-background" : b.t === "signal" ? "bg-[var(--color-signal)] text-foreground" : "border-2 border-foreground"}`}>
                  <b.icon size={11} strokeWidth={2.5} /> {b.l}
                </span>
              ))}
            </div>
            <div className="mt-4 border-2 border-foreground">
              <div className="flex items-center justify-between bg-foreground px-3 py-1.5 text-background">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em]">log · n-back</span>
                <span className="font-mono text-[10px] num-tab">14:32:08</span>
              </div>
              <pre className="overflow-x-auto p-3 font-mono text-[11px] leading-[1.6]">
{`> trial 042 ........ rt 487ms acc ✓
> trial 043 ........ rt 612ms acc ✗
> trial 044 ........ rt 401ms acc ✓
> block.end       n=20 acc=0.85`}
              </pre>
            </div>
          </Block>

          <Block code="C-04" title="Cards · personae" titleAr="بطاقات الأدوار" span="col-span-12 md:col-span-6 md:border-b-2 border-foreground">
            {[
              { p: "research", l: "Stroop · v3.2", ar: "ستروب", n: "27 trials", I: Beaker },
              { p: "education", l: "Vocab recall", ar: "استرجاع المفردات", n: "5th grade", I: GraduationCap },
              { p: "clinical", l: "ADHD screen", ar: "فحص فرط الحركة", n: "DSM-5", I: Stethoscope },
            ].map((c) => (
              <div key={c.l} className="flex items-stretch gap-0 border-2 border-foreground" style={{ marginBottom: 8 }}>
                <div className="grid w-10 place-items-center" style={{ background: `var(--color-${c.p})` }}>
                  <c.I size={16} />
                </div>
                <div className="flex flex-1 items-center justify-between px-3 py-2">
                  <div>
                    <div className="font-display text-sm font-semibold leading-tight">{c.l}</div>
                    <div dir="rtl" className="font-arabic text-xs leading-tight text-muted-foreground">{c.ar}</div>
                  </div>
                  <div className="text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.n}</div>
                </div>
              </div>
            ))}
          </Block>

          <Block code="C-05" title="Data table" titleAr="جدول البيانات" span="col-span-12 border-foreground">
            <table className="w-full border-collapse font-mono text-[12px]">
              <thead>
                <tr className="bg-foreground text-background">
                  {["ID", "Subject", "Task", "RT (ms)", "Accuracy", "Status"].map((h) => (
                    <th key={h} className="border-r border-background/30 px-3 py-1.5 text-left text-[10px] uppercase tracking-[0.22em] last:border-r-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["042", "Layla A.", "Stroop", "487", "0.92", "PASS"],
                  ["043", "Omar K.",  "N-back", "612", "0.71", "WARN"],
                  ["044", "Sara T.",  "Stroop", "401", "0.95", "PASS"],
                  ["045", "Yusuf M.", "Flanker","—",   "—",    "FAIL"],
                ].map((r) => (
                  <tr key={r[0]} className="border-b border-foreground/30 last:border-b-0 hover:bg-[var(--color-signal)]/30">
                    {r.map((c, i) => (
                      <td key={i} className="border-r border-foreground/20 px-3 py-1.5 num-tab last:border-r-0">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Block>
        </div>
      </section>

      {/* ─── 06 PATTERNS · workbench preview ───────────────────────────── */}
      <section id="s6" className="border-b-2 border-foreground">
        <SectionHead n="06" name="Pattern · workbench" nameAr="نمط · ورشة العمل" abstract="A composite specimen showing the system at work — a single experiment view." />
        <div className="grid grid-cols-12">
          {/* sidebar */}
          <aside className="col-span-12 border-r-2 border-foreground bg-foreground p-4 text-background md:col-span-3">
            <div className="flex items-center gap-2">
              <Mark inverse />
              <div className="font-mono text-[10px] uppercase tracking-[0.22em]">workbench / lab-04</div>
            </div>
            <div className="mt-6 space-y-1 font-mono text-[11px] uppercase tracking-[0.18em]">
              {[
                ["▸ experiments", "12"],
                ["• participants", "248"],
                ["• stimuli", "1.4k"],
                ["• datasets", "07"],
                ["• exports", "—"],
              ].map(([l, n]) => (
                <div key={l} className="flex items-center justify-between border-b border-background/20 py-1.5">
                  <span>{l}</span><span className="num-tab opacity-60">{n}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-background/30 p-3">
              <div className="text-[10px] uppercase tracking-[0.22em] opacity-60">storage</div>
              <div className="mt-1 font-mono text-2xl num-tab">62%</div>
              <div className="mt-2 h-1.5 w-full bg-background/20">
                <div className="h-full bg-[var(--color-signal)]" style={{ width: "62%" }} />
              </div>
            </div>
          </aside>

          {/* main */}
          <main className="col-span-12 p-5 md:col-span-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-foreground pb-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">EXP-024 · Stroop interference / Arabic vs Latin</div>
                <h3 className="font-display text-2xl font-medium">Color–word congruence across scripts</h3>
              </div>
              <div className="flex items-center gap-2">
                <Tag mode="signal">RUNNING</Tag>
                <Tag mode="outline">N · 248</Tag>
                <button className="border-2 border-foreground bg-foreground px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-background">Export ↓</button>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[
                ["Mean RT", "487", "ms"],
                ["Accuracy", "0.91", "ratio"],
                ["Trials", "4,960", "n"],
                ["Drop-out", "0.04", "ratio"],
              ].map(([l, v, u]) => (
                <div key={l} className="border-2 border-foreground p-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{l}</div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <div className="font-display text-3xl font-medium num-tab">{v}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">{u}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* fake bar chart */}
            <div className="mt-4 border-2 border-foreground p-4">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
                <span>RT distribution · ms</span>
                <span className="text-muted-foreground">bin = 50ms</span>
              </div>
              <div className="mt-3 flex h-32 items-end gap-1.5">
                {[12, 18, 28, 44, 62, 78, 92, 88, 70, 52, 36, 22, 14, 9, 5].map((h, i) => (
                  <div key={i} className="flex-1" style={{ height: `${h}%`, background: i === 6 ? SIGNAL : "var(--color-foreground)" }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] num-tab text-muted-foreground">
                <span>200</span><span>500</span><span>800</span><span>1100</span>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* ─── 07 RTL ────────────────────────────────────────────────────── */}
      <section id="s7" className="border-b-2 border-foreground">
        <SectionHead n="07" name="Bilingual & RTL" nameAr="ثنائيّة اللغة" abstract="The grid mirrors. Numerals can switch between Latin and Arabic-Indic. Type pairs preserve x-height." />
        <div className="grid grid-cols-12">
          <div className="col-span-12 border-r-2 border-foreground p-5 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">LTR · default</div>
            <div className="mt-3 flex items-center justify-between border-2 border-foreground p-3">
              <div className="flex items-center gap-2">
                <Beaker size={16} />
                <span className="font-display text-sm font-medium">Stroop · v3.2</span>
              </div>
              <span className="font-mono text-xs num-tab">042 / 100</span>
              <button className="bg-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background">Start</button>
            </div>
          </div>
          <div dir="rtl" className="col-span-12 p-5 md:col-span-6">
            <div className="font-arabic text-[12px] text-muted-foreground">من اليمين إلى اليسار · افتراضي</div>
            <div className="mt-3 flex items-center justify-between border-2 border-foreground p-3">
              <div className="flex items-center gap-2">
                <Beaker size={16} />
                <span className="font-arabic text-base font-semibold">ستروب · ٣٫٢</span>
              </div>
              <span className="font-arabic text-sm num-tab">٠٤٢ / ١٠٠</span>
              <button className="bg-foreground px-3 py-1 font-arabic text-[12px] text-background">ابدأ</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Colophon ──────────────────────────────────────────────────── */}
      <footer className="border-foreground bg-foreground text-background">
        <div className="grid grid-cols-12">
          <div className="col-span-12 border-r border-background/30 p-6 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">Colophon</div>
            <div className="mt-2 font-display text-3xl font-medium leading-tight">
              Set in Space Grotesk, JetBrains Mono, and IBM Plex Sans Arabic. Built as a workbench, not a brand book.
            </div>
          </div>
          <div className="col-span-6 border-r border-background/30 p-6 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">Reference</div>
            <ul className="mt-2 space-y-1 font-mono text-[12px]">
              <li>↳ DS-001 / v1.0.0</li>
              <li>↳ tokens · 142</li>
              <li>↳ components · 38</li>
              <li>↳ WCAG · AA</li>
            </ul>
          </div>
          <div className="col-span-6 p-6 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">Filed</div>
            <div className="mt-2 font-display text-2xl">Riyadh · Beirut · Cairo</div>
            <div dir="rtl" className="font-arabic text-lg opacity-80">الرياض · بيروت · القاهرة</div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">© 2026 BIRUNI</div>
          </div>
        </div>
      </footer>

      {/* keyframes for ticker */}
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────── */

function SectionHead({ n, name, nameAr, abstract }: { n: string; name: string; nameAr: string; abstract: string }) {
  return (
    <div className="grid grid-cols-12 border-b-2 border-foreground">
      <div className="col-span-3 flex items-center justify-center border-r-2 border-foreground bg-foreground p-4 text-background md:col-span-2">
        <div className="font-display text-6xl font-bold leading-none num-tab md:text-8xl">{n}</div>
      </div>
      <div className="col-span-9 flex flex-col justify-center p-4 md:col-span-7">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">— Section —</div>
        <div className="font-display text-3xl font-medium leading-tight md:text-4xl">{name}</div>
        <div dir="rtl" className="font-arabic text-xl text-muted-foreground">{nameAr}</div>
      </div>
      <div className="col-span-12 border-t-2 border-foreground p-4 md:col-span-3 md:border-l-2 md:border-t-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Abstract</div>
        <p className="mt-1 text-[12px] leading-[1.6]">{abstract}</p>
      </div>
    </div>
  );
}

function TypeRow({ tag, spec, weight, children }: { tag: string; spec: string; weight?: string; children: React.ReactNode }) {
  const sizeClass = tag.startsWith("DISPLAY") ? "text-7xl md:text-9xl"
    : tag.startsWith("H1") ? "text-5xl"
    : tag.startsWith("H2") ? "text-3xl"
    : tag.startsWith("LEAD") ? "text-xl"
    : tag.startsWith("ARABIC") ? "text-2xl"
    : tag.startsWith("MONO") ? "text-xs"
    : "text-base";
  return (
    <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-foreground/20 py-4">
      <div>
        <Tag mode="outline">{tag}</Tag>
        <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">{spec}</div>
      </div>
      <div className={`${sizeClass} ${weight ?? "font-medium"} leading-[1.05] tracking-[-0.02em]`}>
        {children}
      </div>
    </div>
  );
}

function Mark({ inverse = false }: { inverse?: boolean }) {
  const c = inverse ? "var(--color-background)" : "var(--color-foreground)";
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <rect x="0" y="0" width="32" height="32" fill={c} />
      <rect x="6" y="6" width="20" height="20" fill={SIGNAL} />
      <rect x="12" y="12" width="8" height="8" fill={c} />
    </svg>
  );
}

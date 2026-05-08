import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search, Command, Plus, Bell, Settings, Inbox, Layers, Database,
  Beaker, GraduationCap, Stethoscope, Brain, BarChart3, FileText,
  Users, Sparkles, ChevronRight, ChevronDown, ArrowUpRight, Check,
  Circle, AlertTriangle, Info, X, Filter, MoreHorizontal, Play, Pause,
  Globe, Sun, Moon, Hash, Type, Palette, Grid3x3, Component, Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Biruni — Behavioral Science Workspace" },
      { name: "description", content: "Biruni: a calm, bilingual command-center for behavioral research, education, and clinical practice across MENA." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Workspace,
});

/* ─── Page ─────────────────────────────────────────────────────────────── */

function Workspace() {
  const [rtl, setRtl] = useState(false);
  const [arabicNumerals, setArabicNumerals] = useState(false);

  return (
    <div dir={rtl ? "rtl" : "ltr"} className={`min-h-screen bg-canvas text-foreground ${rtl ? "font-arabic" : ""}`}>
      <div className="flex min-h-screen w-full">
        <Sidebar rtl={rtl} />
        <div className="flex flex-1 flex-col">
          <TopBar rtl={rtl} setRtl={setRtl} arabicNumerals={arabicNumerals} setArabicNumerals={setArabicNumerals} />
          <Main rtl={rtl} arabicNumerals={arabicNumerals} />
        </div>
      </div>
    </div>
  );
}

/* ─── Sidebar (Linear-style command center) ───────────────────────────── */

function Sidebar({ rtl }: { rtl: boolean }) {
  const groups: Array<{ label: string; labelAr: string; items: Array<{ icon: any; label: string; labelAr: string; badge?: string; active?: boolean }> }> = [
    {
      label: "Workspace", labelAr: "مساحة العمل",
      items: [
        { icon: Inbox, label: "Inbox", labelAr: "الوارد", badge: "12" },
        { icon: Layers, label: "Overview", labelAr: "نظرة عامة", active: true },
        { icon: BarChart3, label: "Analytics", labelAr: "التحليلات" },
      ],
    },
    {
      label: "Research", labelAr: "بحث",
      items: [
        { icon: Beaker, label: "Experiments", labelAr: "التجارب", badge: "24" },
        { icon: Database, label: "Datasets", labelAr: "البيانات" },
        { icon: FileText, label: "Stimuli library", labelAr: "مكتبة المثيرات" },
      ],
    },
    {
      label: "Practice", labelAr: "ممارسة",
      items: [
        { icon: GraduationCap, label: "Classrooms", labelAr: "الفصول" },
        { icon: Stethoscope, label: "Patients", labelAr: "المرضى" },
        { icon: Users, label: "Cohorts", labelAr: "المجموعات" },
      ],
    },
  ];

  return (
    <aside className="hidden w-[260px] shrink-0 flex-col border-ie bg-surface-2 md:flex">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 py-3">
        <Mark />
        <div className="leading-tight">
          <div className="font-display text-[15px] font-semibold tracking-tight">Biruni</div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Riyadh Lab</div>
        </div>
        <button className="ms-auto grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground tactile">
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Quick search */}
      <div className="px-3 pb-3">
        <button className="flex w-full items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-start text-[13px] text-muted-foreground tactile hover:border-border-strong">
          <Search size={14} />
          <span className="flex-1">{rtl ? "بحث أو أمر" : "Search or run command"}</span>
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
        </button>
      </div>

      {/* New */}
      <div className="px-3 pb-2">
        <button className="flex w-full items-center justify-between rounded-md bg-foreground px-2.5 py-1.5 text-[13px] font-medium text-background tactile">
          <span className="inline-flex items-center gap-2"><Plus size={14} /> {rtl ? "تجربة جديدة" : "New experiment"}</span>
          <kbd className="rounded bg-background/15 px-1.5 py-0.5 font-mono text-[10px]">N</kbd>
        </button>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-2 py-2">
        {groups.map((g) => (
          <div key={g.label} className="mb-4">
            <div className="flex items-center justify-between px-2 pb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {rtl ? g.labelAr : g.label}
              </span>
              <button className="grid h-5 w-5 place-items-center rounded text-muted-foreground hover:bg-muted hover:text-foreground">
                <Plus size={12} />
              </button>
            </div>
            <ul className="space-y-0.5">
              {g.items.map((it) => (
                <li key={it.label}>
                  <a className={`group flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] tactile ${it.active ? "bg-muted font-medium text-foreground" : "text-foreground/80 hover:bg-muted"}`}>
                    {it.active && <span className="absolute h-4 w-0.5 -ms-3 rounded-full bg-gold" />}
                    <it.icon size={14} className={it.active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"} strokeWidth={1.75} />
                    <span className="flex-1">{rtl ? it.labelAr : it.label}</span>
                    {it.badge && <span className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground num-tab">{it.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2 rounded-md border border-border bg-background p-2 tactile">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-research to-clinical text-[11px] font-semibold text-white">LA</div>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="truncate text-[12px] font-medium">Layla A.</div>
            <div className="truncate font-mono text-[10px] text-muted-foreground">Principal investigator</div>
          </div>
          <Settings size={14} className="text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}

/* ─── Top bar ─────────────────────────────────────────────────────────── */

function TopBar({ rtl, setRtl, arabicNumerals, setArabicNumerals }: any) {
  return (
    <header className="sticky top-0 z-40 flex h-12 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-md">
      <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
        <Layers size={14} />
        <span>{rtl ? "نظرة عامة" : "Overview"}</span>
        <ChevronRight size={12} className={rtl ? "rotate-180" : ""} />
        <span className="text-foreground">{rtl ? "نظام التصميم" : "Design system"}</span>
        <span className="ms-2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">v1.0</span>
      </div>
      <div className="ms-auto flex items-center gap-1.5">
        <Toggle label="ع" active={rtl} onClick={() => setRtl((v: boolean) => !v)} title="RTL" />
        <Toggle label={arabicNumerals ? "١٢٣" : "123"} active={arabicNumerals} onClick={() => setArabicNumerals((v: boolean) => !v)} title="Numerals" />
        <button className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground tactile"><Bell size={15} /></button>
        <button className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground tactile"><Settings size={15} /></button>
      </div>
    </header>
  );
}

function Toggle({ label, active, onClick, title }: { label: string; active: boolean; onClick: () => void; title: string }) {
  return (
    <button title={title} onClick={onClick}
      className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2 font-mono text-[11px] tactile ${active ? "border-gold bg-gold-soft text-foreground" : "border-border bg-background text-muted-foreground hover:bg-muted"}`}>
      <span className="num-tab">{label}</span>
    </button>
  );
}

/* ─── Main canvas ─────────────────────────────────────────────────────── */

function Main({ rtl, arabicNumerals }: { rtl: boolean; arabicNumerals: boolean }) {
  const num = (n: number | string) => arabicNumerals ? String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]) : String(n);

  return (
    <main className="grad-canvas flex-1 overflow-x-hidden">
      {/* Page header */}
      <div className="mx-auto max-w-[1320px] px-8 py-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1 ps-1 pe-3 text-[12px] backdrop-blur tactile">
              <span className="rounded-full bg-gold-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">DS · 1.0</span>
              <span className="text-muted-foreground">{rtl ? "نظام تصميم بيروني" : "Biruni design system"}</span>
              <span className="text-foreground/40">·</span>
              <span dir={rtl ? "ltr" : "rtl"} className={rtl ? "" : "font-arabic"}>{rtl ? "Behavioral instrument" : "أداةُ السلوك"}</span>
            </div>
            <h1 className={`mt-5 max-w-3xl font-display text-[44px] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground md:text-[58px] ${rtl ? "font-arabic font-bold" : ""}`}>
              {rtl ? (
                <>منصةٌ هادئةٌ <span className="text-foreground/60">للقياس،</span> مصمّمةٌ <span className="bg-gradient-to-r from-gold to-research bg-clip-text text-transparent">بلغتك</span>.</>
              ) : (
                <>A calm instrument <span className="text-foreground/60">for measurement,</span> designed in <span className="bg-gradient-to-r from-gold to-research bg-clip-text text-transparent">your language</span>.</>
              )}
            </h1>
            <p className={`mt-5 max-w-2xl text-[16px] leading-[1.6] text-muted-foreground ${rtl ? "font-arabic" : ""}`}>
              {rtl
                ? "نظامُ تصميمٍ ثنائيُّ الاتّجاهِ افتراضيًّا، يبني عوالمَ هادئةً للأبحاثِ والتعليمِ والممارسةِ السريريّة عبر الشرقِ الأوسط."
                : "A bidirectional-by-default design system that builds calm worlds for research, education, and clinical practice across the MENA region."}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-4 text-[13px] font-medium text-background tactile">
                {rtl ? "افتح ورشة العمل" : "Open workbench"} <ArrowUpRight size={14} />
              </button>
              <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-4 text-[13px] font-medium tactile">
                <Sparkles size={14} className="text-gold" /> {rtl ? "جوّل في النظام" : "Tour the system"}
              </button>
              <span className="ms-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <kbd className="rounded border border-border bg-background px-1.5 py-0.5">⌘</kbd>
                <kbd className="rounded border border-border bg-background px-1.5 py-0.5">K</kbd>
                {rtl ? "للأوامر" : "for commands"}
              </span>
            </div>
          </div>

          {/* KPI cluster */}
          <div className="hidden grid-cols-2 gap-2 md:grid">
            {[
              { l: rtl ? "تجارب" : "Experiments", v: num(248), d: "+12" },
              { l: rtl ? "مشاركون" : "Participants", v: num("4.2k"), d: "+316" },
              { l: rtl ? "متوسط الزمن" : "Mean RT", v: `${num(487)}ms`, d: "−14ms" },
              { l: rtl ? "الدقّة" : "Accuracy", v: num("0.91"), d: "+0.02" },
            ].map((k) => (
              <div key={k.l} className="grad-card min-w-[150px] rounded-lg border border-border p-3 tactile">
                <div className={`text-[11px] text-muted-foreground ${rtl ? "font-arabic" : "font-mono uppercase tracking-wider"}`}>{k.l}</div>
                <div className="mt-1 font-display text-2xl font-semibold tracking-tight num-tab">{k.v}</div>
                <div className="mt-0.5 inline-flex items-center gap-1 font-mono text-[10px] text-success">▲ {k.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 01 — Color: Clinical Oasis */}
      <Sect n="01" name={rtl ? "واحة سريريّة" : "Clinical Oasis"} kicker={rtl ? "لوحة الألوان" : "Color palette"}
        intro={rtl ? "نِيليُّ الواحة، ذهبيُّ الكثبان، نعناعُ المغرب، تيراكوتا، أنثراسيت، ورَقُّ البَردي." : "Oasis Indigo, Dune Gold, Maghreb Mint, Terracotta, Anthracite, and Parchment."}>
        <div className="grid gap-3 md:grid-cols-12">
          {/* The six named tokens */}
          <div className="md:col-span-12">
            <div className="precision-card overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-6">
                {[
                  { name: "Oasis Indigo",  hex: "#1A2B47", token: "--primary",     fg: "#F9FAFB", role: rtl ? "أساسي"   : "Primary" },
                  { name: "Dune Gold",     hex: "#C5A059", token: "--accent",      fg: "#1A2B47", role: rtl ? "حركي"    : "CTA · Active" },
                  { name: "Maghreb Mint",  hex: "#26DE81", token: "--success",     fg: "#1A2B47", role: rtl ? "نجاح"    : "Success" },
                  { name: "Terracotta",    hex: "#E67E22", token: "--destructive", fg: "#1A2B47", role: rtl ? "تنبيه"   : "Alert" },
                  { name: "Anthracite",    hex: "#121417", token: "--canvas (dark)", fg: "#F9FAFB", role: rtl ? "وضع المختبر" : "Lab Mode" },
                  { name: "Parchment",     hex: "#F9FAFB", token: "--canvas",      fg: "#1A2B47", role: rtl ? "لوحة"    : "Surface" },
                ].map((s) => (
                  <div key={s.name} className="group relative flex h-44 flex-col justify-between border-b border-e border-border p-3 calm hover:saturate-[1.05]"
                       style={{ background: s.hex, color: s.fg }}>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider opacity-80">{s.role}</span>
                      <span className="font-mono text-[10px] num-tab opacity-70">{s.hex}</span>
                    </div>
                    <div>
                      <div className="font-display text-[15px] font-semibold leading-tight">{s.name}</div>
                      <div className="mt-0.5 font-mono text-[10px] opacity-75">{s.token}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 text-[12px]">
                <div><span className="font-medium">Clinical Oasis</span> <span className="text-muted-foreground">· Desert High-Tech base</span></div>
                <span className="font-mono text-[10px] text-muted-foreground">WCAG AA · text on white uses Oasis Indigo</span>
              </div>
            </div>
          </div>

          {/* Diverging palette for data viz */}
          <div className="md:col-span-7">
            <div className="precision-card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-[15px] font-semibold">{rtl ? "تدرّجٌ متباين للبيانات" : "Diverging palette · data viz"}</div>
                  <div className="mt-0.5 text-[12px] text-muted-foreground">{rtl ? "أداء عالٍ → أساس → استثناء" : "High-performance → Baseline → Outlier"}</div>
                </div>
                <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">3-stop</span>
              </div>
              <div className="mt-4 h-7 w-full rounded-md"
                   style={{ background: "linear-gradient(90deg, #1A2B47 0%, #C5A059 50%, #E67E22 100%)" }} />
              <div className="mt-2 grid grid-cols-3 text-[11px] font-mono text-muted-foreground">
                <span>#1A2B47 · High</span>
                <span className="text-center">#C5A059 · Baseline</span>
                <span className="text-end">#E67E22 · Outlier</span>
              </div>
              {/* Mini bars demo */}
              <div className="mt-5 flex h-24 items-end gap-1.5">
                {[20,34,46,58,72,84,96,88,72,58,46,34,22,14].map((h, i) => {
                  const c = i < 5 ? "#1A2B47" : i < 10 ? "#C5A059" : "#E67E22";
                  return <div key={i} className="flex-1 rounded-sm calm" style={{ height: `${h}%`, background: c }} />;
                })}
              </div>
            </div>
          </div>

          {/* Status cards */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: rtl ? "نجاح / نموّ" : "Success / Growth", t: "success",     hex: "#26DE81", note: rtl ? "نعناع المغرب" : "Maghreb Mint" },
                { l: rtl ? "تنبيه" : "Alert / Soft warn",    t: "destructive", hex: "#E67E22", note: rtl ? "تيراكوتا"      : "Terracotta" },
                { l: rtl ? "أساسي" : "Authoritative",        t: "primary",     hex: "#1A2B47", note: rtl ? "نيلي الواحة"  : "Oasis Indigo" },
                { l: rtl ? "متميّز" : "Premium accent",      t: "accent",      hex: "#C5A059", note: rtl ? "ذهبي الكثبان" : "Dune Gold" },
              ].map((s) => (
                <div key={s.l} className="precision-card p-3 tactile">
                  <div className="h-9 rounded-md" style={{ background: s.hex }} />
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-[12px] font-medium">{s.l}</span>
                    <span className="font-mono text-[10px] num-tab text-muted-foreground">{s.hex}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground">{s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personae */}

          <div className="md:col-span-12">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { k: "research",  l: rtl ? "بحث" : "Research",   sub: rtl ? "هادئٌ ومنهجيّ" : "Calm · methodical",  I: Beaker },
                { k: "education", l: rtl ? "تعليم" : "Education", sub: rtl ? "دافئٌ ومرحّب" : "Warm · inviting",    I: GraduationCap },
                { k: "clinical",  l: rtl ? "عيادة" : "Clinical",  sub: rtl ? "موثوقٌ ودقيق" : "Trusted · precise", I: Stethoscope },
              ].map((p) => (
                <div key={p.k} className="grad-card group flex items-center gap-3 rounded-xl border border-border p-3 tactile">
                  <div className="grid h-12 w-12 place-items-center rounded-lg" style={{ background: `color-mix(in oklab, var(--color-${p.k}) 18%, var(--color-surface))`, color: `var(--color-${p.k})` }}>
                    <p.I size={20} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-[14px] font-medium ${rtl ? "font-arabic" : ""}`}>{p.l}</div>
                    <div className={`text-[12px] text-muted-foreground ${rtl ? "font-arabic" : ""}`}>{p.sub}</div>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">--{p.k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sect>

      {/* Section 02 — Type */}
      <Sect n="02" name={rtl ? "الطباعة" : "Typography"} kicker={rtl ? "نظام صوتٍ هادئ" : "A quiet voice system"}
        intro={rtl ? "Inter للواجهة، IBM Plex Sans Arabic للعربيّة، JetBrains Mono للقياس. إيقاعٌ مشترَك على ٤ بكسل." : "Inter for UI, IBM Plex Sans Arabic for ع, JetBrains Mono for measurement. Shared 4-px rhythm."}>
        <div className="grid gap-3 md:grid-cols-12">
          <div className="grad-card rounded-xl border border-border p-6 md:col-span-8">
            <TypeRow tag="Display / 64" spec="Inter · 64/64/-0.025em · 600">
              <span>Cognition, mapped.</span>
            </TypeRow>
            <TypeRow tag="H1 / 36" spec="Inter · 36/40/-0.020em · 600">
              <span>Stroop interference task</span>
            </TypeRow>
            <TypeRow tag="H2 / 24" spec="Inter · 24/30/-0.015em · 500">
              <span>Methodology</span>
            </TypeRow>
            <TypeRow tag="Lead / 18" spec="Inter · 18/28 · 400">
              <span className="text-muted-foreground">A workbench for measurement, designed for the rhythms of the region.</span>
            </TypeRow>
            <TypeRow tag="Body / 14" spec="Inter · 14/22 · 400">
              <span>Biruni instruments behavior across research, education, and clinical settings using one shared grammar.</span>
            </TypeRow>
            <TypeRow tag="Mono / 12" spec="JetBrains Mono · 12/18 · tabular">
              <span className="font-mono">trial.id = 0042 · rt = 487ms · acc = 0.92</span>
            </TypeRow>
            <TypeRow tag="عربي / 24" spec="IBM Plex Sans Arabic · 24/36 · 500">
              <span dir="rtl" className="font-arabic">منصّة بيروني لقياسِ السلوك في البحث والتعليم والممارسة السريريّة.</span>
            </TypeRow>
          </div>

          {/* Type ramp visualization */}
          <div className="grad-card relative overflow-hidden rounded-xl border border-border p-5 md:col-span-4">
            <div className="absolute inset-0 grid-fine opacity-60" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Type ramp</span>
                <span className="font-mono text-[10px] text-muted-foreground">base 16 · 1.250</span>
              </div>
              <div className="mt-4 space-y-1.5">
                {[
                  { s: 64, l: "DSP" }, { s: 36, l: "H1" }, { s: 30, l: "H2" }, { s: 24, l: "H3" },
                  { s: 18, l: "LD" }, { s: 14, l: "BD" }, { s: 12, l: "MN" },
                ].map((r) => (
                  <div key={r.l} className="flex items-end gap-2.5">
                    <span className="w-7 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r.l}</span>
                    <div className="h-2 rounded-sm bg-gradient-to-r from-foreground to-foreground/40" style={{ width: `${r.s * 1.6}px` }} />
                    <span className="ms-auto font-mono text-[10px] num-tab text-muted-foreground">{r.s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-border bg-background/60 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Numerals · contextual</div>
                <div className="mt-1.5 flex items-baseline justify-between font-display text-2xl font-semibold">
                  <span className="num-tab">123,456</span>
                  <span className="font-arabic">١٢٣٬٤٥٦</span>
                </div>
                <div className="mt-1 font-mono text-[10px] text-muted-foreground">switches by script context</div>
              </div>
            </div>
          </div>
        </div>
      </Sect>

      {/* Section 03 — Tokens table */}
      <Sect n="03" name={rtl ? "الرموز" : "Tokens"} kicker={rtl ? "طبقةٌ دلاليّة" : "Semantic layer"}
        intro={rtl ? "كلُّ سطحٍ وكلُّ حالةٍ يُحلّان إلى رمزٍ مُسمّى — لا ألوانَ خامًا في المكوّنات." : "Every surface and state resolves to a named token — no raw values in components."}>
        <div className="grad-card overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-12 border-b border-border bg-surface-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <div className="col-span-4">Token</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-3">Value</div>
            <div className="col-span-2">Light</div>
            <div className="col-span-1">Dark</div>
          </div>
          {[
            { t: "--background",   c: "Surface",  v: "oklch(.985 .003 250)", lDark: true },
            { t: "--foreground",   c: "Surface",  v: "oklch(.205 .020 255)", lDark: false },
            { t: "--primary",      c: "Action",   v: "oklch(.225 .022 255)", lDark: false },
            { t: "--accent / gold",c: "Signal",   v: "oklch(.760 .105 78)",  lDark: false },
            { t: "--research",     c: "Persona",  v: "oklch(.520 .090 252)", lDark: false },
            { t: "--education",    c: "Persona",  v: "oklch(.760 .105 78)",  lDark: false },
            { t: "--clinical",     c: "Persona",  v: "oklch(.585 .075 195)", lDark: false },
            { t: "--success",      c: "Status",   v: "oklch(.640 .130 152)", lDark: false },
            { t: "--warning",      c: "Status",   v: "oklch(.785 .130 75)",  lDark: false },
            { t: "--destructive",  c: "Status",   v: "oklch(.585 .190 25)",  lDark: false },
            { t: "--border",       c: "Stroke",   v: "oklch(.925 .006 250)", lDark: true },
            { t: "--ring",         c: "Focus",    v: "oklch(.760 .105 78)",  lDark: false },
          ].map((r, i) => (
            <div key={r.t} className={`grid grid-cols-12 items-center px-4 py-2 text-[12px] ${i % 2 ? "bg-surface-2/40" : ""} hover:bg-gold-soft/30`}>
              <div className="col-span-4 font-mono">{r.t}</div>
              <div className="col-span-2 text-muted-foreground">{r.c}</div>
              <div className="col-span-3 font-mono text-muted-foreground num-tab">{r.v}</div>
              <div className="col-span-2"><span className="inline-block h-4 w-10 rounded border border-border" style={{ background: r.v }} /></div>
              <div className="col-span-1"><span className="inline-block h-4 w-10 rounded border border-border" style={{ background: r.lDark ? "oklch(.18 .016 255)" : r.v }} /></div>
            </div>
          ))}
        </div>
      </Sect>

      {/* Section 04 — Components specimen */}
      <Sect n="04" name={rtl ? "المكوّنات" : "Components"} kicker={rtl ? "نماذج" : "Specimens"}
        intro={rtl ? "أنماطٌ تفاعليّةٌ هادئةٌ مع لمسةٍ ميكرويّةٍ ملموسة." : "Calm interactive patterns with tactile micro-interactions."}>
        <div className="grid gap-3 md:grid-cols-12">
          {/* Buttons */}
          <Card title={rtl ? "أزرار" : "Buttons"} code="btn" span="md:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <button className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-3.5 text-[13px] font-medium text-background tactile">Primary</button>
              <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3.5 text-[13px] font-medium tactile">Secondary</button>
              <button className="inline-flex h-9 items-center gap-2 rounded-md border border-gold bg-gold-soft px-3.5 text-[13px] font-medium text-accent-foreground tactile">
                <Sparkles size={13} /> Accent
              </button>
              <button className="inline-flex h-9 items-center gap-2 rounded-md px-3.5 text-[13px] font-medium text-foreground/80 hover:bg-muted tactile">Ghost</button>
              <button disabled className="inline-flex h-9 items-center gap-2 rounded-md bg-muted px-3.5 text-[13px] font-medium text-muted-foreground">Disabled</button>
            </div>
          </Card>

          {/* Inputs */}
          <Card title={rtl ? "حقول" : "Inputs"} code="input" span="md:col-span-6">
            <div className="space-y-2.5">
              <div>
                <label className="block text-[11px] text-muted-foreground">{rtl ? "معرّف المشارك" : "Participant ID"}</label>
                <input defaultValue="P-0042" className="mt-1 h-9 w-full rounded-md border border-border bg-background px-3 text-[13px] font-mono focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
              </div>
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2 text-[12px]">
                  <span className="grid h-4 w-4 place-items-center rounded border border-border bg-foreground text-background"><Check size={11} strokeWidth={3} /></span>
                  {rtl ? "موافقة" : "Consent"}
                </label>
                <label className="inline-flex items-center gap-2 text-[12px]">
                  <span className="h-4 w-4 rounded border border-border bg-background" />
                  {rtl ? "مجهول" : "Anonymous"}
                </label>
                <span className="ms-auto inline-flex h-5 w-9 items-center rounded-full bg-foreground p-0.5">
                  <span className="ms-auto h-4 w-4 rounded-full bg-background" />
                </span>
              </div>
            </div>
          </Card>

          {/* Status */}
          <Card title={rtl ? "الحالة والشارات" : "Status & badges"} code="status" span="md:col-span-6">
            <div className="flex flex-wrap gap-1.5">
              {[
                { l: rtl ? "نشِط" : "Running",   t: "success", I: Play },
                { l: rtl ? "مسوّدة" : "Draft",   t: "muted",   I: Circle },
                { l: rtl ? "مراجعة" : "Review",  t: "warning", I: AlertTriangle },
                { l: rtl ? "أرشيف" : "Archived", t: "muted",   I: Pause },
                { l: rtl ? "خطأ" : "Failed",     t: "destructive", I: X },
              ].map((s) => (
                <span key={s.l} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2 py-0.5 text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: `var(--color-${s.t})` }} />
                  {s.l}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Pill tone="research">Research</Pill>
              <Pill tone="education">Education</Pill>
              <Pill tone="clinical">Clinical</Pill>
              <Pill tone="info">Beta</Pill>
              <Pill tone="gold">Featured</Pill>
            </div>
          </Card>

          {/* Mini chart */}
          <Card title={rtl ? "توزيع زمن الاستجابة" : "RT distribution"} code="chart" span="md:col-span-6">
            <div className="flex items-end gap-1 h-28">
              {[14,22,32,48,66,82,94,90,72,54,38,24,16,10,6].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm tactile"
                     style={{ height: `${h}%`, background: i === 6 ? "var(--gold)" : "color-mix(in oklab, var(--foreground) 25%, transparent)" }} />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] num-tab text-muted-foreground">
              <span>{num(200)}</span><span>{num(500)}</span><span>{num(800)}</span><span>{num(1100)}</span>
            </div>
          </Card>

          {/* Data table */}
          <Card title={rtl ? "جدول الجلسات" : "Sessions"} code="table" span="md:col-span-12">
            <div className="overflow-hidden rounded-md border border-border">
              <table className="w-full text-[12.5px]">
                <thead className="bg-surface-2 text-muted-foreground">
                  <tr>
                    {(rtl
                      ? ["الحالة","المهمّة","المشارك","الزمن","الدقّة","التاريخ",""]
                      : ["Status","Task","Participant","RT","Accuracy","Date",""]
                    ).map((h) => (
                      <th key={h} className="px-3 py-2 text-start font-mono text-[10px] uppercase tracking-wider font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "success", task: "Stroop", p: "Layla A.",  rt: 487, acc: 0.92, d: "2026-05-08" },
                    { s: "success", task: "N-back", p: "Omar K.",   rt: 612, acc: 0.71, d: "2026-05-07" },
                    { s: "warning", task: "Flanker",p: "Sara T.",   rt: 401, acc: 0.95, d: "2026-05-07" },
                    { s: "muted",   task: "Stroop", p: "Yusuf M.",  rt: "—", acc: "—",  d: "2026-05-06" },
                  ].map((r, i) => (
                    <tr key={i} className="border-t border-border hover:bg-gold-soft/30 tactile">
                      <td className="px-3 py-2"><span className="inline-block h-2 w-2 rounded-full" style={{ background: `var(--color-${r.s})` }} /></td>
                      <td className="px-3 py-2 font-medium">{r.task}</td>
                      <td className="px-3 py-2">{r.p}</td>
                      <td className="px-3 py-2 font-mono num-tab">{typeof r.rt === "number" ? num(r.rt) : r.rt}</td>
                      <td className="px-3 py-2 font-mono num-tab">{typeof r.acc === "number" ? num(r.acc) : r.acc}</td>
                      <td className="px-3 py-2 font-mono text-muted-foreground num-tab">{num(r.d)}</td>
                      <td className="px-3 py-2 text-end"><MoreHorizontal size={14} className="text-muted-foreground" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Command palette specimen */}
          <Card title={rtl ? "لوحة الأوامر" : "Command palette"} code="cmd-k" span="md:col-span-6">
            <div className="rounded-lg border border-border bg-background shadow-sm">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <Command size={14} className="text-muted-foreground" />
                <input placeholder={rtl ? "ابحث أو شغّل أمراً…" : "Search or run command…"}
                       className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground" />
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">esc</kbd>
              </div>
              <ul className="p-1">
                {[
                  { I: Plus, l: rtl ? "تجربة جديدة" : "New experiment", k: "N" },
                  { I: Beaker, l: rtl ? "افتح ستروب ٣٫٢" : "Open Stroop v3.2", k: "→" },
                  { I: Database, l: rtl ? "استورد بيانات" : "Import dataset", k: "I" },
                  { I: Globe, l: rtl ? "بدّل إلى الإنجليزيّة" : "Switch to Arabic", k: "L" },
                ].map((it, i) => (
                  <li key={it.l} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] ${i === 0 ? "bg-gold-soft" : "hover:bg-muted"}`}>
                    <it.I size={14} className="text-muted-foreground" />
                    <span className="flex-1">{it.l}</span>
                    <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px]">{it.k}</kbd>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Bilingual block */}
          <Card title={rtl ? "ثنائيّ اللغة افتراضيًّا" : "Bilingual by default"} code="bidi" span="md:col-span-6">
            <div className="grid grid-cols-2 gap-2">
              <div dir="ltr" className="rounded-lg border border-border bg-background p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">LTR · Latin</div>
                <div className="mt-1 font-display text-base font-semibold">Stroop · v3.2</div>
                <div className="mt-1 font-mono text-[12px] num-tab text-muted-foreground">042 / 100 · 487 ms</div>
              </div>
              <div dir="rtl" className="rounded-lg border border-border bg-background p-3 font-arabic">
                <div className="text-[11px] text-muted-foreground">من اليمين إلى اليسار</div>
                <div className="mt-1 text-base font-semibold">ستروب · ٣٫٢</div>
                <div className="mt-1 font-mono text-[12px] num-tab text-muted-foreground">٠٤٢ / ١٠٠ · ٤٨٧ مث</div>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-border bg-surface-2/60 p-2.5 text-[11px] text-muted-foreground">
              <span className="font-mono">padding-inline-start</span> · <span className="font-mono">margin-inline-end</span> ·
              {rtl ? " ينعكس التخطيط تلقائيًّا." : " logical CSS mirrors automatically."}
            </div>
          </Card>
        </div>
      </Sect>

      {/* Footer / colophon */}
      <footer className="mx-auto max-w-[1320px] px-8 py-12">
        <div className="grad-card flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border p-5">
          <div className="flex items-center gap-3">
            <Mark />
            <div className="leading-tight">
              <div className="font-display text-[14px] font-semibold">Biruni Design System</div>
              <div className="font-mono text-[11px] text-muted-foreground">v1.0.0 · {num(142)} tokens · {num(38)} components</div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <span>Riyadh</span><span>·</span><span>Beirut</span><span>·</span><span>Cairo</span>
            <span className="ms-3">© {num(2026)} Biruni</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ─── Helpers ─────────────────────────────────────────────────────────── */

function Sect({ n, name, kicker, intro, children }: { n: string; name: string; kicker: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[1320px] px-8 py-10">
      <header className="mb-5 flex items-end justify-between gap-6 border-b border-border pb-4">
        <div className="flex items-end gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground num-tab">{n}</span>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-[28px]">{name}</h2>
          <span className="hidden text-[12px] text-muted-foreground md:inline">— {kicker}</span>
        </div>
        <p className="hidden max-w-md text-end text-[13px] text-muted-foreground md:block">{intro}</p>
      </header>
      {children}
    </section>
  );
}

function Card({ title, code, children, span = "" }: { title: string; code: string; children: React.ReactNode; span?: string }) {
  return (
    <div className={`grad-card rounded-xl border border-border ${span}`}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="text-[13px] font-medium">{title}</div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{code}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Pill({ tone, children }: { tone: "research"|"education"|"clinical"|"info"|"gold"; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium"
      style={{
        background: `color-mix(in oklab, var(--color-${tone === "gold" ? "gold" : tone}) 14%, var(--color-surface))`,
        borderColor: `color-mix(in oklab, var(--color-${tone === "gold" ? "gold" : tone}) 30%, var(--color-border))`,
        color: `color-mix(in oklab, var(--color-${tone === "gold" ? "gold" : tone}) 65%, var(--color-foreground))`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: `var(--color-${tone === "gold" ? "gold" : tone})` }} />
      {children}
    </span>
  );
}

function TypeRow({ tag, spec, children }: { tag: string; spec: string; children: React.ReactNode }) {
  const big =
    tag.startsWith("Display") ? "text-5xl md:text-6xl font-semibold tracking-[-0.025em]" :
    tag.startsWith("H1") ? "text-3xl md:text-4xl font-semibold tracking-[-0.02em]" :
    tag.startsWith("H2") ? "text-2xl font-medium" :
    tag.startsWith("Lead") ? "text-lg" :
    tag.startsWith("Mono") ? "text-xs font-mono" :
    tag.startsWith("عربي") ? "text-2xl" :
    "text-[15px]";
  return (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-4 border-b border-border/70 py-3 last:border-0">
      <div>
        <div className="text-[12px] font-medium">{tag}</div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{spec}</div>
      </div>
      <div className={big}>{children}</div>
    </div>
  );
}

function Mark() {
  return (
    <div className="relative grid h-7 w-7 place-items-center rounded-md bg-foreground text-background tactile">
      <div className="absolute inset-0.5 rounded-[5px] bg-gradient-to-br from-foreground to-foreground/80" />
      <div className="relative h-2 w-2 rounded-full bg-gold shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_25%,transparent)]" />
    </div>
  );
}

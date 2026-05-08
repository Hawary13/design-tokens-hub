import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft, ChevronRight, Maximize2, Brain, Database, Languages,
  Building2, GraduationCap, Stethoscope, Megaphone, Eye, Sparkles,
  Shield, Zap, TrendingUp, Target, Coins, Users, Check, X, Quote,
  Globe, Lock, Cpu, BarChart3, Mail, Phone, ArrowUpRight,
} from "lucide-react";

import dashboardImg from "@/assets/deck/dashboard.jpg";
import researcherImg from "@/assets/deck/researcher.jpg";
import clinicianImg from "@/assets/deck/clinician.jpg";
import eyetrackImg from "@/assets/deck/eyetrack.jpg";
import studentsImg from "@/assets/deck/students.jpg";
import aiImg from "@/assets/deck/ai.jpg";
import heroImg from "@/assets/deck/hero.jpg";

export const Route = createFileRoute("/deck")({
  head: () => ({
    meta: [
      { title: "Biruni — Pitch Deck" },
      { name: "description", content: "Biruni: المحرك المعرفي للشرق الأوسط — Seed pitch deck." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Deck,
});

/* ───────── Deck shell ───────── */

function Deck() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;
  const next = useCallback(() => setI((v) => Math.min(total - 1, v + 1)), [total]);
  const prev = useCallback(() => setI((v) => Math.max(0, v - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "f") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const Current = SLIDES[i].component;

  return (
    <div dir="rtl" className="min-h-screen bg-canvas text-foreground font-arabic">
      {/* Top progress + index bar */}
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-surface/85 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[1600px] items-center gap-4 px-5">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Brain className="h-4 w-4" />
            </div>
            <span className="font-display text-sm font-semibold tracking-tight" style={{ fontFamily: "Inter" }}>Biruni · Pitch Deck</span>
          </div>
          <div className="flex-1" />
          <div className="hidden items-center gap-1 md:flex">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full calm ${idx === i ? "w-6 bg-accent" : "w-2 bg-border-strong hover:bg-muted-foreground"}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="num-tab text-xs tabular-nums text-muted-foreground" style={{ fontFamily: "JetBrains Mono" }}>
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
          <button
            onClick={() => document.documentElement.requestFullscreen?.()}
            className="grid h-8 w-8 place-items-center rounded-md border border-border calm hover:bg-secondary"
            title="Fullscreen (F)"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Slide canvas — 16:9 framed */}
      <div className="mx-auto max-w-[1600px] px-5 pt-16 pb-24">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(26,43,71,0.35)]">
          <Current />
        </div>

        {/* Footer controls */}
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={i === 0}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2 text-sm calm hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
            <span>السابق</span>
          </button>
          <div className="text-xs text-muted-foreground">{SLIDES[i].title}</div>
          <button
            onClick={next}
            disabled={i === total - 1}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground calm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span>التالي</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────── Slide primitives ───────── */

function SlideFrame({ children, tone = "light", pad = true }: { children: React.ReactNode; tone?: "light" | "dark" | "gold"; pad?: boolean }) {
  const bg =
    tone === "dark" ? "bg-[#121417] text-[#F9FAFB]" :
    tone === "gold" ? "grad-gold text-foreground" :
    "bg-surface text-foreground";
  return (
    <div className={`relative h-full w-full ${bg} ${pad ? "p-12 lg:p-16" : ""}`}>
      {children}
    </div>
  );
}

function SlideHeader({ kicker, title, num }: { kicker?: string; title: string; num?: string }) {
  return (
    <div className="mb-8 flex items-start justify-between gap-6">
      <div>
        {kicker && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground" style={{ fontFamily: "Inter" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {kicker}
          </div>
        )}
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-[40px]" style={{ fontFamily: "Inter" }}>
          {title}
        </h2>
      </div>
      {num && (
        <div className="num-tab text-xs text-muted-foreground" style={{ fontFamily: "JetBrains Mono" }}>{num}</div>
      )}
    </div>
  );
}

/* ───────── Slide 1 — Cover ───────── */

function S01_Cover() {
  return (
    <SlideFrame tone="dark" pad={false}>
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#121417]/95 via-[#121417]/70 to-transparent" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between p-14 lg:p-20">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#C5A059] text-[#1A2B47]">
            <Brain className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight" style={{ fontFamily: "Inter" }}>Biruni · بيروني</span>
        </div>

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70" style={{ fontFamily: "Inter" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
            Seed Round · 2026
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            نبني المحرك المعرفي
            <br />
            <span className="text-[#C5A059]">للشرق الأوسط</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            أول منصة سحابية عربية لبناء التجارب السلوكية، التقييمات السريرية، وتأسيس قواعد بيانات معيارية تدعم مشاريع التحول الوطني.
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="grid grid-cols-3 gap-10">
            {[
              { k: "Sovereignty", v: "NDMO" },
              { k: "Language", v: "Arabic-native" },
              { k: "Latency", v: "Frame-perfect" },
            ].map((x) => (
              <div key={x.k}>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45" style={{ fontFamily: "Inter" }}>{x.k}</div>
                <div className="mt-1 font-display text-base font-medium text-white/90" style={{ fontFamily: "Inter" }}>{x.v}</div>
              </div>
            ))}
          </div>
          <div className="text-[11px] tracking-wide text-white/45" style={{ fontFamily: "JetBrains Mono" }}>RIYADH · 2026</div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 2 — Problem ───────── */

function S02_Problem() {
  const items = [
    { icon: Lock, title: "سيادة البيانات", body: "تخزين بيانات المرضى والمبحوثين السعوديين في سيرفرات أمريكا أو أوروبا يمثل مخاطرة قانونية صريحة ويتعارض مع لوائح NDMO." },
    { icon: Languages, title: "المنصات تخذل لغتنا", body: "الأدوات الأجنبية تنهار تقنياً مع النص العربي بدقة الميلي ثانية — الحروف تتقطّع، تنعكس، وتفقد دقّتها العلمية." },
    { icon: Database, title: "بيانات لا تمثّلنا", body: "٩٠٪ من الأدوات والمعايير المعتمدة لدى أطبائنا وباحثينا مبنية على مجتمعات غربية، فتنتج تشخيصات غير دقيقة لبيئتنا." },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Problem" title='العالم العربي يعاني من "عمى بيانات"' num="02 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="precision-card flex flex-col p-7 calm hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.10)]">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#1A2B47]/5 text-[#1A2B47]">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 font-display text-xl font-semibold" style={{ fontFamily: "Inter" }}>{it.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{it.body}</p>
            <div className="mt-auto pt-6">
              <div className="num-tab text-[11px] tracking-wider text-muted-foreground" style={{ fontFamily: "JetBrains Mono" }}>0{idx + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 3 — Solution ───────── */

function S03_Solution() {
  const pillars = [
    { icon: Cpu, title: "محرك عربي ١٠٠٪", body: "تقنية تعرض النص العربي بدقة Frame-perfect للمللي ثانية، بدون تشوّه." },
    { icon: Database, title: "بياناتنا، لمعاييرنا", body: "أول مكتبة رقمية إقليمية للقياسات المعرفية المحلية." },
    { icon: Shield, title: "أمان وسيادة تامّة", body: "مستضافة محلياً ومتوافقة مع NDMO وحماية بيانات القطاع الصحي." },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Solution" title="بيروني · حيث تلتقي الدقة بهويتنا" num="03 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-12 gap-8">
        <div className="col-span-7 flex flex-col justify-center">
          <p className="mb-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            منصة SaaS متكاملة لا تتطلّب أي خبرة برمجية، صُمّمت من الصفر لخدمة الباحث والطبيب العربي، مرتكزة على ثلاثة أعمدة:
          </p>
          <div className="space-y-4">
            {pillars.map((p, idx) => (
              <div key={idx} className="precision-card flex items-start gap-4 p-5 calm">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-[#1A2B47]">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold" style={{ fontFamily: "Inter" }}>{p.title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5 overflow-hidden rounded-xl border border-border">
          <img src={dashboardImg} alt="Biruni dashboard" className="h-full w-full object-cover" />
        </div>
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 4 — Vision alignment ───────── */

function S04_Alignment() {
  const items = [
    { icon: Building2, title: "المدن الإدراكية (نيوم)", body: "هذه المشاريع مبنية على فهم سلوك الإنسان وتحتاج بنية تحتية رقمية حقيقية لجمع وتحليل البيانات السلوكية المحلية." },
    { icon: GraduationCap, title: "تنمية القدرات البشرية", body: "جامعاتنا تستثمر مليارات لرفع تصنيفها العالمي، وذلك يتطلّب أدوات بحثية دقيقة محلياً بدل الاعتماد على منصات قاصرة." },
    { icon: Stethoscope, title: "التحول في القطاع الصحي", body: "رقمنة التشخيصات (ذاكرة، انتباه) تفرض الحاجة لمنصات معتمدة لبيئتنا تحفظ سجلات المرضى بأمان." },
  ];
  return (
    <SlideFrame tone="gold">
      <SlideHeader kicker="Why Now · Vision 2030" title="نتقاطع مع أهم مشاريع التحوّل" num="04 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="flex flex-col rounded-xl border border-border bg-surface p-7 calm">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#1A2B47] text-[#F9FAFB]">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 font-display text-xl font-semibold" style={{ fontFamily: "Inter" }}>{it.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 5 — Customers / Business ───────── */

function S05_Customers() {
  const segments = [
    { icon: GraduationCap, tag: "نقطة الدخول السريعة", title: "القطاع الأكاديمي", body: "الجامعات ومراكز الأبحاث بعقود سنوية للكليات. بيئة عمل تعاونية لبناء ونشر التجارب السلوكية واللغوية بسرعة وسهولة." },
    { icon: Stethoscope, tag: "محرك النمو", title: "القطاع السريري", body: "المستشفيات والعيادات النفسية. تقييم سريري عن بُعد، إدارة ملفات المرضى، ومتابعة آمنة مطابقة لـ NDMO.", featured: true },
    { icon: Megaphone, tag: "فرص بديلة قوية", title: "التسويق والتعليم", body: "وكالات الإعلان ووزارات التعليم. نظام متقدم لتتبّع حركة العين مدرّب على الملامح العربية لقياس التفاعل بدقة." },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Go-to-Market · B2B & B2G" title="من يدفع لنا؟" num="05 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-1 gap-5 md:grid-cols-3">
        {segments.map((s, idx) => (
          <div key={idx} className={`precision-card relative flex flex-col p-7 calm ${s.featured ? "ring-1 ring-accent" : ""}`}>
            {s.featured && (
              <span className="absolute -top-2 right-6 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#1A2B47]" style={{ fontFamily: "Inter" }}>Primary</span>
            )}
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-[#1A2B47]">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground" style={{ fontFamily: "Inter" }}>{s.tag}</div>
            <h3 className="mt-1 mb-3 font-display text-2xl font-semibold" style={{ fontFamily: "Inter" }}>{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 6 — Use case 1: Academic ───────── */

function UseCase({ tag, title, image, points, num }: { tag: string; title: string; image: string; points: { ok: boolean; label: string; body: string }[]; num: string }) {
  return (
    <SlideFrame>
      <div className="grid h-full grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col">
          <SlideHeader kicker={tag} title={title} num={num} />
          <div className="mt-2 space-y-4">
            {points.map((p, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md ${p.ok ? "bg-[#26DE81]/12 text-[#1f9c5d]" : "bg-[#E67E22]/12 text-[#c46315]"}`}>
                  {p.ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </div>
                <div>
                  <div className="font-display text-[15px] font-semibold" style={{ fontFamily: "Inter" }}>{p.label}</div>
                  <div className="mt-1 text-[14.5px] leading-relaxed text-muted-foreground">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5 overflow-hidden rounded-xl border border-border">
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </SlideFrame>
  );
}

function S06_Academic() {
  return (
    <UseCase
      tag="Use Case · Academic"
      title="دراسة القراءة واللهجات بدقة المللي ثانية"
      image={researcherImg}
      num="06 / 15"
      points={[
        { ok: false, label: "المشكلة السابقة", body: "المنصات الأجنبية تقطع الحروف أو تعكسها في السرعات العالية، فتُفسد البحث." },
        { ok: true, label: "الحل مع بيروني", body: "عرض النص العربي بدقة زمنية مطلقة مع تسجيل ردّ فعل المبحوث بالمللي ثانية." },
        { ok: true, label: "ميزة إضافية", body: "بيئة عمل تعاونية (مثل مستندات Google) للأستاذ وطلابه على نفس التجربة في الوقت ذاته." },
      ]}
    />
  );
}

function S07_Clinical() {
  return (
    <UseCase
      tag="Use Case · Clinical"
      title="التقييم السريري وتشخيص الخرف عن بُعد"
      image={clinicianImg}
      num="07 / 15"
      points={[
        { ok: true, label: "تجربة سلسة", body: "المريض يحلّ الاختبار التفاعلي على iPad في بيته دون زيارة العيادة." },
        { ok: true, label: "تحليل ذكي", body: "النظام يقارن نتيجة المريض بالمعيار الطبيعي للمواطن السعودي في نفس الفئة العمرية." },
        { ok: true, label: "حماية قانونية", body: "البيانات تُسجَّل وتُحفظ بأمان داخل سيرفرات محلية متوافقة مع NDMO." },
      ]}
    />
  );
}

function S08_Marketing() {
  return (
    <UseCase
      tag="Use Case · Neuromarketing"
      title="اختبار الإعلانات وتتبّع العين A/B"
      image={eyetrackImg}
      num="08 / 15"
      points={[
        { ok: true, label: "تتبّع عبر الكاميرا", body: "نستخدم كاميرا اللابتوب العادية لتتبّع حركة العين وبناء خرائط حرارية للإعلان." },
        { ok: true, label: "دقة إقليمية", body: "خوارزمياتنا مدرّبة على الملامح والعيون الداكنة السائدة في منطقتنا، مما يرفع دقة القياس." },
        { ok: true, label: "عائد الاستثمار", body: "اختبار نسختين من الإعلان على عيّنة محلية لمعرفة التصميم الأكثر تأثيراً قبل إطلاق الحملة." },
      ]}
    />
  );
}

function S09_Education() {
  return (
    <UseCase
      tag="Use Case · K-12"
      title="اكتشاف صعوبات التعلّم وتشتّت الانتباه مبكراً"
      image={studentsImg}
      num="09 / 15"
      points={[
        { ok: true, label: "مسح شامل وسريع", body: "اختبارات معرفية سريعة عبر iPad لكل الطلاب لاكتشاف الحالات التي تحتاج دعم." },
        { ok: true, label: "اختبارات معرّبة ١٠٠٪", body: "أدوات قراءة وتركيز مصمّمة وموزونة على لغتنا وبيئتنا، بدلاً من الأدوات الأجنبية." },
        { ok: true, label: "تقارير لأولياء الأمور", body: "تقرير فوري يوضّح نقاط القوة والضعف ويساعد المرشد الطلابي في توجيه العائلة." },
      ]}
    />
  );
}

/* ───────── Slide 10 — AI Engine ───────── */

function S10_AI() {
  const features = [
    { icon: BarChart3, title: "إحصائيات فورية", body: "متوسطات وانحرافات معيارية وفروق إحصائية فور انتهاء التجربة، بدون برامج خارجية." },
    { icon: Languages, title: "تحليل النصوص العربية", body: "نفهم الإجابات المفتوحة ونصنّف المشاعر باللهجات المحلية تلقائياً (AraBERT)." },
    { icon: Sparkles, title: "فلترة البيانات العشوائية", body: "خوارزميات تكتشف المشاركين العشوائيين وتستبعد نتائجهم لضمان جودة بحثية ١٠٠٪." },
  ];
  return (
    <SlideFrame tone="dark" pad={false}>
      <div className="absolute inset-0">
        <img src={aiImg} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#121417] via-[#121417]/70 to-[#121417]/20" />
      </div>
      <div className="relative z-10 flex h-full flex-col p-14 lg:p-16">
        <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70" style={{ fontFamily: "Inter" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
          AI Engine · Insights
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          المحرك الذكي
          <br />
          <span className="text-[#C5A059]">من البيانات إلى النتائج بضغطة زر</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
          صمّمنا محلّل بيانات مدعوم بالذكاء الاصطناعي يقرأ بياناتك ويستخرج الرؤى الإحصائية فوراً — بدلاً من أسابيع التنظيف على برامج معقّدة.
        </p>
        <div className="mt-auto grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[#C5A059]/20 text-[#C5A059]">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-semibold text-white" style={{ fontFamily: "Inter" }}>{f.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 11 — Moat ───────── */

function S11_Moat() {
  const moats = [
    { icon: Eye, title: "خوارزميات لبيئتنا", body: "نظامنا لتتبّع حركة العين مدرّب على عيون وملامح داكنة — يحلّ مشكلة كبيرة تفشل فيها الأنظمة الغربية في منطقتنا." },
    { icon: Database, title: "قاعدة بيانات معيارية", body: "أول مكتبة معايير عربية تتضخّم مع كل مستخدم — كلما توسّعنا، صار التشخيص والتقييم أدقّ، وتعاظم الخندق." },
    { icon: Shield, title: "امتثال محلي", body: "بنية متوافقة من اليوم الأول مع NDMO ومتطلبات القطاع الصحي — حاجز قانوني عالي أمام أي منافس أجنبي." },
    { icon: Languages, title: "عربية أصيلة", body: "محرك Frame-perfect للنص العربي — ليست ترجمة لمنتج إنجليزي، بل بنية صُمّمت من الصفر للغة العربية." },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Moat · Defensibility" title="خندقنا الاستراتيجي" num="11 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-2 gap-5">
        {moats.map((m, idx) => (
          <div key={idx} className="precision-card flex items-start gap-5 p-7 calm">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#1A2B47] text-[#F9FAFB]">
              <m.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-2 font-display text-xl font-semibold" style={{ fontFamily: "Inter" }}>{m.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 12 — Pricing ───────── */

function S12_Pricing() {
  const tiers = [
    { name: "Researcher", audience: "الباحث الفردي والطلاب", price: "1,200", unit: "ريال / سنوياً", features: ["مستخدم واحد", "5 تجارب نشطة", "تحليلات أساسية", "استضافة محلية"] },
    { name: "Lab", audience: "المختبرات والكليات الصغيرة", price: "12,000", unit: "ريال / سنوياً", features: ["حتى 15 مستخدم", "تجارب غير محدودة", "AI Insights كامل", "بيئة عمل تعاونية"], featured: true },
    { name: "Enterprise", audience: "الجامعات، المستشفيات، الوزارات", price: "55,000+", unit: "ريال / سنوياً", features: ["مستخدمون غير محدودين", "استضافة منفصلة", "إصدار فواتير محلية (اعتماد)", "دعم NDMO الكامل"] },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Pricing · B2B SaaS" title="نموذج تسعير مرن وإيرادات مستدامة" num="12 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-3 gap-5">
        {tiers.map((t, idx) => (
          <div key={idx} className={`relative flex flex-col rounded-xl border p-7 calm ${t.featured ? "border-accent bg-gold-soft" : "border-border bg-surface"}`}>
            {t.featured && (
              <span className="absolute -top-2.5 right-6 rounded-full bg-accent px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#1A2B47]" style={{ fontFamily: "Inter" }}>Most Popular</span>
            )}
            <div className="font-display text-lg font-semibold" style={{ fontFamily: "Inter" }}>{t.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{t.audience}</div>
            <div className="my-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold tracking-tight num-tab" style={{ fontFamily: "Inter" }}>{t.price}</span>
              <span className="text-xs text-muted-foreground">{t.unit}</span>
            </div>
            <ul className="space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1f9c5d]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 13 — TAM ───────── */

function S13_Market() {
  const segs = [
    { label: "EdTech وأبحاث الجامعات", v: 220, color: "#1A2B47" },
    { label: "الصحة الرقمية والتقييم السريري", v: 220, color: "#C5A059" },
    { label: "أبحاث السوق والتسويق العصبي", v: 110, color: "#26DE81" },
  ];
  const total = segs.reduce((a, s) => a + s.v, 0);
  return (
    <SlideFrame>
      <SlideHeader kicker="Market · TAM" title="حجم السوق المستهدف في الخليج" num="13 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col justify-center">
          <div className="space-y-5">
            {segs.map((s, idx) => (
              <div key={idx}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[15px] font-medium">{s.label}</div>
                  <div className="num-tab text-sm text-muted-foreground" style={{ fontFamily: "JetBrains Mono" }}>{s.v}M ريال</div>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full" style={{ width: `${(s.v / total) * 100}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            للوصول إلى نقطة التعادل، نحتاج توقيع عقود مع <span className="font-semibold text-foreground">٤٠ جهة فقط</span> من أصل مئات الجامعات والمستشفيات في المنطقة.
          </p>
        </div>
        <div className="col-span-5 flex flex-col justify-center">
          <div className="precision-card p-10 text-center">
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontFamily: "Inter" }}>Total Addressable Market</div>
            <div className="mt-3 font-display text-7xl font-semibold tracking-tight num-tab" style={{ fontFamily: "Inter" }}>
              <span className="text-accent">550</span>
              <span className="text-2xl text-muted-foreground"> M</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">ريال سعودي · فرصة فورية</div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <div className="num-tab font-display text-2xl font-semibold" style={{ fontFamily: "Inter" }}>40</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "Inter" }}>Break-even</div>
              </div>
              <div>
                <div className="num-tab font-display text-2xl font-semibold" style={{ fontFamily: "Inter" }}>3</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "Inter" }}>Verticals</div>
              </div>
              <div>
                <div className="num-tab font-display text-2xl font-semibold" style={{ fontFamily: "Inter" }}>6</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "Inter" }}>GCC Markets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 14 — Ask ───────── */

function S14_Ask() {
  const allocs = [
    { p: 45, label: "تطوير التقنية الأساسية ومحرك اللغة العربية", color: "#1A2B47" },
    { p: 30, label: "التأسيس القانوني والمقر (للدخول في منصة اعتماد)", color: "#C5A059" },
    { p: 25, label: "التسويق وعقد شراكات تشغيلية (Pilot)", color: "#26DE81" },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="The Ask · Seed Round" title="الجولة التأسيسية وتوزيع الاستثمار" num="14 / 15" />
      <div className="grid h-[calc(100%-160px)] grid-cols-12 gap-10">
        <div className="col-span-5 flex flex-col justify-center">
          <div className="rounded-2xl bg-[#1A2B47] p-10 text-[#F9FAFB]">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55" style={{ fontFamily: "Inter" }}>Raising</div>
            <div className="mt-3 font-display text-6xl font-semibold tracking-tight num-tab" style={{ fontFamily: "Inter" }}>
              1,850,000
            </div>
            <div className="mt-1 text-sm text-white/70">ريال سعودي · للأشهر الـ ١٨ القادمة</div>
            <div className="mt-8 flex items-center gap-2 text-xs text-white/60">
              <Coins className="h-4 w-4 text-[#C5A059]" />
              <span>Seed · Pre-product-market-fit</span>
            </div>
          </div>
        </div>
        <div className="col-span-7 flex flex-col justify-center">
          <div className="space-y-6">
            {allocs.map((a, idx) => (
              <div key={idx}>
                <div className="mb-2 flex items-baseline justify-between">
                  <div className="text-[15px] font-medium">{a.label}</div>
                  <div className="num-tab font-display text-2xl font-semibold tracking-tight" style={{ fontFamily: "Inter", color: a.color }}>
                    {a.p}<span className="text-base text-muted-foreground">%</span>
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full" style={{ width: `${a.p}%`, background: a.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ───────── Slide 15 — Closing ───────── */

function S15_Closing() {
  return (
    <SlideFrame tone="dark" pad={false}>
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#121417] via-[#121417]/85 to-[#1A2B47]/60" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-center p-14 lg:p-20">
        <Quote className="h-10 w-10 text-[#C5A059]" />
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
          المستقبل سيُكتب
          <br />
          <span className="text-[#C5A059]">ببياناتنا نحن.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
          بيروني ليست مجرد منصة أبحاث — بيروني هي حجر الأساس لاستقلالنا المعرفي والتقني.
        </p>
        <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45" style={{ fontFamily: "Inter" }}>Founder</div>
            <div className="mt-1 font-display text-lg font-medium" style={{ fontFamily: "Inter" }}>Founder Name</div>
          </div>
          <div className="hidden h-10 w-px bg-white/15 md:block" />
          <a href="mailto:founder@biruni.sa" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white" style={{ fontFamily: "Inter" }}>
            <Mail className="h-4 w-4 text-[#C5A059]" /> founder@biruni.sa
          </a>
          <a href="tel:+966500000000" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white" style={{ fontFamily: "Inter" }}>
            <Phone className="h-4 w-4 text-[#C5A059]" /> +966 5X XXX XXXX
          </a>
          <div className="ms-auto inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-4 py-2 text-sm text-[#C5A059]" style={{ fontFamily: "Inter" }}>
            <span>للنقاش والاستثمار</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ───────── Manifest ───────── */

const SLIDES: Array<{ title: string; component: React.FC }> = [
  { title: "Cover · بيروني", component: S01_Cover },
  { title: "Problem · عمى البيانات", component: S02_Problem },
  { title: "Solution · بيروني", component: S03_Solution },
  { title: "Vision Alignment", component: S04_Alignment },
  { title: "Customers · B2B & B2G", component: S05_Customers },
  { title: "Use Case · Academic", component: S06_Academic },
  { title: "Use Case · Clinical", component: S07_Clinical },
  { title: "Use Case · Neuromarketing", component: S08_Marketing },
  { title: "Use Case · K-12", component: S09_Education },
  { title: "AI Engine", component: S10_AI },
  { title: "Moat · Defensibility", component: S11_Moat },
  { title: "Pricing", component: S12_Pricing },
  { title: "Market · TAM", component: S13_Market },
  { title: "The Ask · Seed", component: S14_Ask },
  { title: "Closing · للنقاش", component: S15_Closing },
];

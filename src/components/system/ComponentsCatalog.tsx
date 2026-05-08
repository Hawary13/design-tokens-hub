import { useState } from "react";
import {
  Check, X, Search, Plus, Minus, ChevronDown, ChevronRight, ChevronLeft,
  ChevronUp, MoreHorizontal, Sparkles, Bell, Settings, Filter, Download,
  Upload, Trash2, Edit3, Copy, ExternalLink, AlertTriangle, Info,
  CheckCircle2, XCircle, Loader2, Star, Calendar as CalIcon, Clock,
  FileText, Folder, Image as ImgIcon, Hash, AtSign, Lock, Eye, EyeOff,
  ArrowUp, ArrowDown, ArrowRight, Play, Pause, Beaker, GraduationCap,
  Stethoscope, Database, Layers, Inbox, Users, BarChart3,
} from "lucide-react";

type Props = { rtl: boolean; num: (n: number | string) => string };

/* ─── Reusable wrappers ───────────────────────────────────────────────── */

function Spec({ title, code, span = "", children, ar }: { title: string; code: string; span?: string; children: React.ReactNode; ar?: string }) {
  return (
    <div className={`precision-card flex flex-col ${span}`}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-[13px] font-medium">{title}</span>
          {ar && <span className="font-arabic text-[12px] text-muted-foreground">{ar}</span>}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{code}</span>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}

const btnBase = "calm inline-flex items-center justify-center gap-2 rounded-md font-medium disabled:cursor-not-allowed";

/* ─── Catalog ─────────────────────────────────────────────────────────── */

export default function ComponentsCatalog({ rtl, num }: Props) {
  return (
    <div className="grid gap-3 md:grid-cols-12">
      <Buttons rtl={rtl} />
      <IconButtons rtl={rtl} />
      <TextInputs rtl={rtl} />
      <Textarea rtl={rtl} />
      <SelectCombo rtl={rtl} />
      <ChecksRadios rtl={rtl} />
      <SwitchSegment rtl={rtl} />
      <SliderRange rtl={rtl} num={num} />
      <BadgesPills rtl={rtl} />
      <Avatars rtl={rtl} />
      <Alerts rtl={rtl} />
      <Toasts rtl={rtl} />
      <Progresses rtl={rtl} num={num} />
      <TabsSpec rtl={rtl} />
      <AccordionSpec rtl={rtl} />
      <BreadcrumbsPagination rtl={rtl} num={num} />
      <DropdownMenu rtl={rtl} />
      <TooltipPopover rtl={rtl} />
      <DialogSpec rtl={rtl} num={num} />
      <DrawerSpec rtl={rtl} />
      <Stepper rtl={rtl} num={num} />
      <EmptyState rtl={rtl} />
      <Skeletons rtl={rtl} />
      <KPIGrid rtl={rtl} num={num} />
      <Charts rtl={rtl} num={num} />
      <CalendarSpec rtl={rtl} num={num} />
      <ActivityFeed rtl={rtl} num={num} />
      <CodeBlock rtl={rtl} />
      <FileUpload rtl={rtl} />
      <TagInput rtl={rtl} />
    </div>
  );
}

/* 01 — Buttons */
function Buttons({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "أزرار" : "Buttons"} code="btn-01" span="md:col-span-8">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <button className={`${btnBase} h-9 bg-primary px-3.5 text-[13px] text-primary-foreground hover:bg-primary/90`}>Primary</button>
          <button className={`${btnBase} h-9 border border-border bg-background px-3.5 text-[13px] hover:bg-muted`}>Secondary</button>
          <button className={`${btnBase} h-9 bg-accent px-3.5 text-[13px] text-accent-foreground hover:brightness-105`}>
            <Sparkles size={13} /> Accent
          </button>
          <button className={`${btnBase} h-9 px-3.5 text-[13px] hover:bg-muted`}>Ghost</button>
          <button className={`${btnBase} h-9 px-3.5 text-[13px] text-primary underline-offset-4 hover:underline`}>Link →</button>
          <button className={`${btnBase} h-9 bg-destructive px-3.5 text-[13px] text-destructive-foreground hover:brightness-105`}>Destructive</button>
          <button disabled className={`${btnBase} h-9 bg-muted px-3.5 text-[13px] text-muted-foreground`}>Disabled</button>
          <button className={`${btnBase} h-9 bg-primary px-3.5 text-[13px] text-primary-foreground`}>
            <Loader2 size={13} className="animate-spin" /> Loading…
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className={`${btnBase} h-7 px-2.5 text-[11px] bg-primary text-primary-foreground`}>SM</button>
          <button className={`${btnBase} h-9 px-3.5 text-[13px] bg-primary text-primary-foreground`}>MD</button>
          <button className={`${btnBase} h-11 px-5 text-[14px] bg-primary text-primary-foreground`}>LG</button>
          <button className={`${btnBase} h-12 px-6 text-[15px] bg-primary text-primary-foreground`}>XL</button>
          <button className={`${btnBase} h-9 w-full bg-primary text-primary-foreground sm:w-auto sm:px-6`}>Block (sm:auto)</button>
        </div>
      </div>
    </Spec>
  );
}

/* 02 — Icon buttons */
function IconButtons({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "أزرار أيقونيّة" : "Icon buttons"} code="btn-02" span="md:col-span-4">
      <div className="flex flex-wrap items-center gap-2">
        {[Settings, Bell, Search, Filter, Plus, Trash2, Edit3, Copy, MoreHorizontal].map((I, i) => (
          <button key={i} className={`${btnBase} h-9 w-9 border border-border bg-background hover:bg-muted`}>
            <I size={14} />
          </button>
        ))}
        <button className={`${btnBase} h-9 w-9 bg-primary text-primary-foreground`}><Plus size={14} /></button>
        <button className={`${btnBase} h-9 w-9 bg-accent text-accent-foreground`}><Sparkles size={14} /></button>
      </div>
    </Spec>
  );
}

/* 03 — Text inputs */
function TextInputs({ rtl }: { rtl: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <Spec title={rtl ? "حقول نصّيّة" : "Text inputs"} code="input-01" span="md:col-span-6">
      <div className="space-y-3">
        <Field label={rtl ? "البريد" : "Email"}>
          <span className="grid h-9 w-9 place-items-center text-muted-foreground"><AtSign size={14} /></span>
          <input defaultValue="layla@biruni.lab" className="h-9 w-full bg-transparent pe-3 text-[13px] outline-none" />
        </Field>
        <Field label={rtl ? "كلمة السرّ" : "Password"}>
          <span className="grid h-9 w-9 place-items-center text-muted-foreground"><Lock size={14} /></span>
          <input type={show ? "text" : "password"} defaultValue="oasis-001" className="h-9 w-full bg-transparent pe-1 text-[13px] outline-none font-mono" />
          <button onClick={() => setShow(!show)} className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground">
            {show ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </Field>
        <Field label={rtl ? "بحث" : "Search"}>
          <span className="grid h-9 w-9 place-items-center text-muted-foreground"><Search size={14} /></span>
          <input placeholder={rtl ? "ابحث عن تجربة…" : "Search experiments…"} className="h-9 w-full bg-transparent pe-3 text-[13px] outline-none" />
          <kbd className="me-2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
        </Field>
        <Field label={rtl ? "حقل خاطئ" : "Error state"} error>
          <span className="grid h-9 w-9 place-items-center text-destructive"><XCircle size={14} /></span>
          <input defaultValue="invalid@" className="h-9 w-full bg-transparent pe-3 text-[13px] outline-none" />
        </Field>
        <div className="text-[11px] text-destructive">{rtl ? "الرجاء إدخال بريدٍ صحيح." : "Please enter a valid email."}</div>
      </div>
    </Spec>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-muted-foreground">{label}</label>
      <div className={`calm mt-1 flex items-center rounded-md border bg-background ${error ? "border-destructive ring-2 ring-destructive/20" : "border-border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/25"}`}>
        {children}
      </div>
    </div>
  );
}

/* 04 — Textarea */
function Textarea({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "منطقة نصّ" : "Textarea"} code="input-02" span="md:col-span-6">
      <label className="block text-[11px] font-medium text-muted-foreground">{rtl ? "ملاحظات الجلسة" : "Session notes"}</label>
      <textarea
        rows={5}
        defaultValue={rtl ? "المشارك يستجيب جيّداً للمثيرات اللاتينيّة، ولكن يُظهر تباطؤاً ملحوظاً مع المثيرات العربيّة." :
          "Participant responds well to Latin stimuli, but shows notable slowdown with Arabic stimuli."}
        className="calm mt-1 block w-full resize-none rounded-md border border-border bg-background p-3 text-[13px] outline-none focus:border-accent focus:ring-2 focus:ring-accent/25"
      />
      <div className="mt-1 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span>{rtl ? "Markdown مدعوم" : "Markdown supported"}</span>
        <span className="num-tab">142 / 500</span>
      </div>
    </Spec>
  );
}

/* 05 — Select & combobox */
function SelectCombo({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "قوائم منسدلة" : "Select & combobox"} code="select-01" span="md:col-span-6">
      <label className="block text-[11px] font-medium text-muted-foreground">{rtl ? "نوع المهمّة" : "Task type"}</label>
      <button className="calm mt-1 flex h-9 w-full items-center justify-between rounded-md border border-border bg-background px-3 text-[13px] hover:border-border-strong">
        <span className="inline-flex items-center gap-2"><Beaker size={13} className="text-muted-foreground" /> Stroop interference</span>
        <ChevronDown size={14} className="text-muted-foreground" />
      </button>
      {/* Open combobox */}
      <div className="precision-card mt-3 overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <Search size={13} className="text-muted-foreground" />
          <input placeholder={rtl ? "ابحث…" : "Search…"} className="h-6 w-full bg-transparent text-[12px] outline-none" />
        </div>
        <div className="max-h-44 overflow-auto p-1">
          {[
            { I: Beaker, l: "Stroop interference", on: true },
            { I: Beaker, l: "N-back working memory" },
            { I: Beaker, l: "Flanker · congruence" },
            { I: GraduationCap, l: "Vocabulary recall" },
            { I: Stethoscope, l: "ADHD-RS screening" },
          ].map((it, i) => (
            <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] ${it.on ? "bg-gold-soft" : "hover:bg-muted"}`}>
              <it.I size={13} className="text-muted-foreground" />
              <span className="flex-1">{it.l}</span>
              {it.on && <Check size={13} className="text-accent" />}
            </div>
          ))}
        </div>
      </div>
    </Spec>
  );
}

/* 06 — Checks & radios */
function ChecksRadios({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "خانات اختيار" : "Checkbox & radio"} code="form-01" span="md:col-span-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="text-[11px] font-medium text-muted-foreground">{rtl ? "الموافقات" : "Consents"}</div>
          <div className="mt-2 space-y-1.5">
            {[
              { l: rtl ? "موافقة مستنيرة" : "Informed consent", on: true },
              { l: rtl ? "تخزين البيانات" : "Data retention", on: true },
              { l: rtl ? "مشاركة مجهّلة" : "Anonymous sharing", on: false },
            ].map((c) => (
              <label key={c.l} className="flex items-center gap-2 text-[13px]">
                <span className={`grid h-4 w-4 place-items-center rounded border ${c.on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"}`}>
                  {c.on && <Check size={11} strokeWidth={3} />}
                </span>
                {c.l}
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] font-medium text-muted-foreground">{rtl ? "اللغة" : "Language"}</div>
          <div className="mt-2 space-y-1.5">
            {[
              { l: "English", on: false },
              { l: "العربيّة", on: true },
              { l: "Français", on: false },
            ].map((c) => (
              <label key={c.l} className="flex items-center gap-2 text-[13px]">
                <span className={`grid h-4 w-4 place-items-center rounded-full border-2 ${c.on ? "border-primary" : "border-border"}`}>
                  {c.on && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </span>
                <span className={c.l === "العربيّة" ? "font-arabic" : ""}>{c.l}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </Spec>
  );
}

/* 07 — Switch & segmented */
function SwitchSegment({ rtl }: { rtl: boolean }) {
  const [on, setOn] = useState(true);
  const [seg, setSeg] = useState(1);
  const segs = rtl ? ["يومي","أسبوعي","شهري"] : ["Day","Week","Month"];
  return (
    <Spec title={rtl ? "مفاتيح ومجموعات" : "Switch & segmented"} code="form-02" span="md:col-span-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[13px] font-medium">{rtl ? "وضع المختبر" : "Lab Mode"}</div>
            <div className="text-[11px] text-muted-foreground">{rtl ? "خلفيّة الأنثراسيت لتركيز عميق" : "Anthracite background for deep focus"}</div>
          </div>
          <button onClick={() => setOn(!on)} className={`calm relative inline-flex h-6 w-11 items-center rounded-full ${on ? "bg-primary" : "bg-muted"}`}>
            <span className={`calm h-5 w-5 rounded-full bg-background shadow ${on ? "translate-x-[22px]" : "translate-x-0.5"} ${rtl ? "scale-x-[-1]" : ""}`} />
          </button>
        </div>
        <div>
          <div className="text-[11px] font-medium text-muted-foreground">{rtl ? "العرض الزمني" : "Time view"}</div>
          <div className="mt-2 inline-flex rounded-md border border-border bg-muted p-0.5">
            {segs.map((s, i) => (
              <button key={s} onClick={() => setSeg(i)} className={`calm rounded px-3 py-1 text-[12px] font-medium ${seg === i ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Spec>
  );
}

/* 08 — Slider & range */
function SliderRange({ rtl, num }: Props) {
  const [v, setV] = useState(487);
  return (
    <Spec title={rtl ? "شريط تمرير" : "Slider & range"} code="slider-01" span="md:col-span-6">
      <div className="space-y-5">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-[12px] font-medium">{rtl ? "زمن العرض (مث)" : "Stimulus duration (ms)"}</span>
            <span className="font-mono text-[13px] num-tab text-accent">{num(v)}</span>
          </div>
          <input type="range" min={100} max={1500} value={v} onChange={(e) => setV(+e.target.value)}
                 className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
                 style={{ background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${((v-100)/1400)*100}%, var(--muted) ${((v-100)/1400)*100}%, var(--muted) 100%)` }} />
          <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground"><span>{num(100)}</span><span>{num(1500)}</span></div>
        </div>
        <div>
          <div className="text-[12px] font-medium">{rtl ? "عمر المشارك" : "Participant age"}</div>
          <div className="mt-2 relative h-1.5 rounded-full bg-muted">
            <div className="absolute h-full rounded-full bg-primary" style={{ insetInlineStart: "20%", insetInlineEnd: "30%" }} />
            <div className="absolute h-3 w-3 -mt-0.5 rounded-full border-2 border-primary bg-background" style={{ insetInlineStart: "calc(20% - 6px)" }} />
            <div className="absolute h-3 w-3 -mt-0.5 rounded-full border-2 border-primary bg-background" style={{ insetInlineEnd: "calc(30% - 6px)" }} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[11px] num-tab"><span>{num(18)}</span><span>{num(45)}</span></div>
        </div>
      </div>
    </Spec>
  );
}

/* 09 — Badges & pills */
function BadgesPills({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "شارات وأوسمة" : "Badges & pills"} code="badge-01" span="md:col-span-6">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {[
            { l: rtl ? "نشِط" : "Running", t: "success" },
            { l: rtl ? "مسوّدة" : "Draft", t: "muted" },
            { l: rtl ? "مراجعة" : "Review", t: "warning" },
            { l: rtl ? "أرشيف" : "Archived", t: "muted" },
            { l: rtl ? "خطأ" : "Failed", t: "destructive" },
          ].map((s) => (
            <span key={s.l} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2 py-0.5 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: `var(--color-${s.t})` }} />{s.l}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { l: "Research", t: "research" }, { l: "Education", t: "education" },
            { l: "Clinical", t: "clinical" }, { l: "Beta", t: "info" }, { l: "v3.2", t: "primary" },
          ].map((b) => (
            <span key={b.l} className="rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                  style={{
                    background: `color-mix(in srgb, var(--color-${b.t === "primary" ? "primary" : b.t}) 12%, var(--color-surface))`,
                    color: `var(--color-${b.t === "primary" ? "primary" : b.t})`,
                    borderColor: `color-mix(in srgb, var(--color-${b.t === "primary" ? "primary" : b.t}) 30%, var(--color-border))`,
                  }}>
              {b.l}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["#stroop", "#arabic", "#stage-2", "#riyadh"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground hover:bg-gold-soft hover:text-foreground">
              <Hash size={10} />{t.replace("#","")}
              <button className="ms-1 text-muted-foreground/60 hover:text-destructive"><X size={10} /></button>
            </span>
          ))}
        </div>
      </div>
    </Spec>
  );
}

/* 10 — Avatars */
function Avatars({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "صور المستخدمين" : "Avatars"} code="avatar-01" span="md:col-span-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {[
            { i: "LA", g: "from-primary to-clinical" },
            { i: "OK", g: "from-research to-primary" },
            { i: "ST", g: "from-accent to-success" },
            { i: "YM", g: "from-success to-clinical" },
          ].map((a, i) => (
            <div key={i} className={`relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${a.g} text-[12px] font-semibold text-white`}>
              {a.i}
              {i === 0 && <span className="absolute -end-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-background bg-success" />}
            </div>
          ))}
          <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-muted text-[12px] font-medium text-muted-foreground">+4</div>
        </div>
        {/* Stack */}
        <div>
          <div className="text-[11px] text-muted-foreground">{rtl ? "فريق التجربة" : "Experiment team"}</div>
          <div className="mt-2 flex -space-x-2 rtl:space-x-reverse">
            {["LA","OK","ST","YM","RR"].map((i, k) => (
              <div key={k} style={{ background: `var(--color-${["primary","research","accent","clinical","success"][k]})` }} className="grid h-7 w-7 place-items-center rounded-full border-2 border-background text-[10px] font-semibold text-white">{i}</div>
            ))}
            <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-muted text-[10px] text-muted-foreground">+8</div>
          </div>
        </div>
      </div>
    </Spec>
  );
}

/* 11 — Alerts */
function Alerts({ rtl }: { rtl: boolean }) {
  const items = [
    { t: "info", I: Info, title: rtl ? "نسخة تجريبيّة" : "Beta release", body: rtl ? "هذا النموذج تحت التقييم العلمي." : "This module is under scientific review." },
    { t: "success", I: CheckCircle2, title: rtl ? "نُشر التقرير" : "Report published", body: rtl ? "تم تصدير ٤٬٢٤٨ جلسة بنجاح." : "4,248 sessions exported successfully." },
    { t: "warning", I: AlertTriangle, title: rtl ? "زمن استجابة بطيء" : "Slow RT detected", body: rtl ? "متوسّط أعلى من ٧٠٠ مث." : "Mean exceeds 700 ms." },
    { t: "destructive", I: XCircle, title: rtl ? "فشل الحفظ" : "Save failed", body: rtl ? "تحقّق من الاتصال بالخادم." : "Check the server connection." },
  ];
  return (
    <Spec title={rtl ? "تنبيهات وبانرات" : "Alerts & banners"} code="alert-01" span="md:col-span-12">
      <div className="grid gap-2 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.t} className="calm flex items-start gap-3 rounded-lg border p-3"
               style={{
                 background: `color-mix(in srgb, var(--color-${it.t}) 8%, var(--color-surface))`,
                 borderColor: `color-mix(in srgb, var(--color-${it.t}) 30%, var(--color-border))`,
               }}>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-white" style={{ background: `var(--color-${it.t})` }}>
              <it.I size={14} />
            </span>
            <div className="flex-1">
              <div className="text-[13px] font-medium">{it.title}</div>
              <div className="text-[12px] text-muted-foreground">{it.body}</div>
            </div>
            <button className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
          </div>
        ))}
      </div>
    </Spec>
  );
}

/* 12 — Toasts */
function Toasts({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "إشعارات منبثقة" : "Toasts"} code="toast-01" span="md:col-span-6">
      <div className="space-y-2">
        {[
          { t: "success", I: CheckCircle2, l: rtl ? "تم حفظ التجربة" : "Experiment saved", s: "ok" },
          { t: "primary", I: Info, l: rtl ? "بدأ تشغيل المهمّة" : "Task started", s: "info" },
          { t: "destructive", I: XCircle, l: rtl ? "تعذّر التصدير" : "Export failed", s: "fail" },
        ].map((t) => (
          <div key={t.s} className="precision-card flex items-center gap-3 p-3">
            <span className="grid h-7 w-7 place-items-center rounded-md text-white" style={{ background: `var(--color-${t.t})` }}>
              <t.I size={14} />
            </span>
            <div className="flex-1 text-[13px] font-medium">{t.l}</div>
            <button className="text-[11px] font-medium text-accent hover:underline">{rtl ? "تراجع" : "Undo"}</button>
            <button className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
          </div>
        ))}
      </div>
    </Spec>
  );
}

/* 13 — Progress */
function Progresses({ rtl, num }: Props) {
  return (
    <Spec title={rtl ? "أشرطة التقدّم" : "Progress"} code="prog-01" span="md:col-span-6">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-[11px]"><span>{rtl ? "تجميع البيانات" : "Data collection"}</span><span className="font-mono num-tab">{num(62)}%</span></div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: "62%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px]"><span>{rtl ? "ترميز" : "Coding"}</span><span className="font-mono num-tab">{num(34)}%</span></div>
          <div className="mt-1 grid grid-cols-12 gap-0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-2 rounded-sm" style={{ background: i < 4 ? "var(--accent)" : "var(--muted)" }} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CircleProg pct={78} />
          <div>
            <div className="font-display text-2xl font-semibold num-tab">{num(78)}%</div>
            <div className="text-[11px] text-muted-foreground">{rtl ? "متوسّط الدقّة" : "Mean accuracy"}</div>
          </div>
        </div>
      </div>
    </Spec>
  );
}

function CircleProg({ pct }: { pct: number }) {
  const r = 22, c = 2 * Math.PI * r;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
      <circle cx="32" cy="32" r={r} stroke="var(--muted)" strokeWidth="6" fill="none" />
      <circle cx="32" cy="32" r={r} stroke="var(--primary)" strokeWidth="6" fill="none"
              strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} strokeLinecap="round" />
    </svg>
  );
}

/* 14 — Tabs */
function TabsSpec({ rtl }: { rtl: boolean }) {
  const [tab, setTab] = useState(1);
  const tabs = rtl ? ["نظرة عامة","البيانات","المثيرات","الإعدادات"] : ["Overview","Data","Stimuli","Settings"];
  return (
    <Spec title={rtl ? "ألسنة" : "Tabs"} code="tabs-01" span="md:col-span-6">
      <div className="border-b border-border">
        <div className="flex gap-1">
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)}
                    className={`calm relative px-3 py-2 text-[13px] font-medium ${tab === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t}
              {tab === i && <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent" />}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-md bg-muted/50 p-3 text-[12px] text-muted-foreground">
        {rtl ? "محتوى لسان " : "Content for "}<b className="text-foreground">{tabs[tab]}</b>{rtl ? "" : ""}.
      </div>
    </Spec>
  );
}

/* 15 — Accordion */
function AccordionSpec({ rtl }: { rtl: boolean }) {
  const [open, setOpen] = useState(0);
  const items = [
    { q: rtl ? "كيف أبدأ تجربة؟" : "How do I start an experiment?", a: rtl ? "اختر قالباً ثم اضغط 'تشغيل'." : "Pick a template, then click Run." },
    { q: rtl ? "هل تدعم العربيّة؟" : "Does it support Arabic?", a: rtl ? "نعم، بشكلٍ كاملٍ مع RTL واختيارٍ للأرقام." : "Yes, fully with RTL and contextual numerals." },
    { q: rtl ? "أين تُخزّن البيانات؟" : "Where is data stored?", a: rtl ? "خوادمُ معتمدةٌ في الرياض." : "Compliant servers in Riyadh." },
  ];
  return (
    <Spec title={rtl ? "أكورديون" : "Accordion"} code="acc-01" span="md:col-span-6">
      <div className="divide-y divide-border rounded-lg border border-border">
        {items.map((it, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-3 py-2 text-[13px] font-medium hover:bg-muted/50">
              {it.q}
              <ChevronDown size={14} className={`calm text-muted-foreground ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-3 pb-3 text-[12px] text-muted-foreground">{it.a}</div>}
          </div>
        ))}
      </div>
    </Spec>
  );
}

/* 16 — Breadcrumbs & pagination */
function BreadcrumbsPagination({ rtl, num }: Props) {
  return (
    <Spec title={rtl ? "تصفّح" : "Breadcrumbs & pagination"} code="nav-01" span="md:col-span-6">
      <nav className="flex items-center gap-1 text-[12px]">
        <a className="text-muted-foreground hover:text-foreground">Lab</a>
        <ChevronRight size={12} className={`text-muted-foreground ${rtl ? "rotate-180" : ""}`} />
        <a className="text-muted-foreground hover:text-foreground">Experiments</a>
        <ChevronRight size={12} className={`text-muted-foreground ${rtl ? "rotate-180" : ""}`} />
        <a className="text-muted-foreground hover:text-foreground">Stroop</a>
        <ChevronRight size={12} className={`text-muted-foreground ${rtl ? "rotate-180" : ""}`} />
        <span className="font-medium text-foreground">v3.2</span>
      </nav>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-[11px] text-muted-foreground">{rtl ? `${num(1)}–${num(10)} من ${num(248)}` : `${num(1)}–${num(10)} of ${num(248)}`}</div>
        <div className="flex items-center gap-1">
          <PageBtn><ChevronLeft size={13} className={rtl ? "rotate-180" : ""} /></PageBtn>
          <PageBtn active>{num(1)}</PageBtn>
          <PageBtn>{num(2)}</PageBtn>
          <PageBtn>{num(3)}</PageBtn>
          <span className="px-1 text-muted-foreground">…</span>
          <PageBtn>{num(25)}</PageBtn>
          <PageBtn><ChevronRight size={13} className={rtl ? "rotate-180" : ""} /></PageBtn>
        </div>
      </div>
    </Spec>
  );
}
function PageBtn({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return <button className={`calm grid h-7 min-w-7 place-items-center rounded-md border px-2 text-[12px] font-medium ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-muted"}`}>{children}</button>;
}

/* 17 — Dropdown menu */
function DropdownMenu({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "قائمة منسدلة" : "Dropdown menu"} code="menu-01" span="md:col-span-6">
      <div className="flex items-start gap-3">
        <button className="calm inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-[13px] hover:bg-muted">
          {rtl ? "إجراءات" : "Actions"} <ChevronDown size={13} className="text-muted-foreground" />
        </button>
        <div className="precision-card min-w-[200px] p-1">
          <MenuItem I={Edit3} l={rtl ? "تحرير" : "Edit"} k="E" />
          <MenuItem I={Copy} l={rtl ? "نسخ الرابط" : "Copy link"} k="⌘C" />
          <MenuItem I={ExternalLink} l={rtl ? "فتح في نافذة" : "Open in new"} />
          <div className="my-1 h-px bg-border" />
          <MenuItem I={Download} l={rtl ? "تصدير CSV" : "Export CSV"} />
          <MenuItem I={Upload} l={rtl ? "رفع نتيجة" : "Upload result"} />
          <div className="my-1 h-px bg-border" />
          <MenuItem I={Trash2} l={rtl ? "حذف" : "Delete"} danger k="⌫" />
        </div>
      </div>
    </Spec>
  );
}
function MenuItem({ I, l, k, danger }: { I: any; l: string; k?: string; danger?: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] ${danger ? "text-destructive hover:bg-destructive/10" : "hover:bg-muted"}`}>
      <I size={13} className={danger ? "" : "text-muted-foreground"} />
      <span className="flex-1">{l}</span>
      {k && <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">{k}</kbd>}
    </div>
  );
}

/* 18 — Tooltip & Popover */
function TooltipPopover({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "تلميحات ونوافذ" : "Tooltip & popover"} code="overlay-01" span="md:col-span-6">
      <div className="space-y-6">
        {/* Tooltip */}
        <div className="relative inline-block">
          <button className="calm inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-[13px]">
            <Info size={13} /> {rtl ? "حوم لمعرفة المزيد" : "Hover for more"}
          </button>
          <div className="absolute -top-9 start-1/2 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-[11px] text-background shadow-md whitespace-nowrap">
            {rtl ? "زمن الاستجابة الوسيط" : "Median response time"}
            <span className="absolute -bottom-1 start-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
          </div>
        </div>
        {/* Popover */}
        <div className="precision-card max-w-xs p-3">
          <div className="flex items-start gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gold-soft text-accent-foreground"><Sparkles size={13} /></span>
            <div className="flex-1">
              <div className="text-[13px] font-medium">{rtl ? "نصيحة قياس" : "Measurement tip"}</div>
              <div className="mt-0.5 text-[12px] text-muted-foreground">{rtl ? "اختبر الإضاءة قبل بدء المهمّة." : "Calibrate lighting before starting the task."}</div>
              <button className="mt-2 text-[11px] font-medium text-accent hover:underline">{rtl ? "اعرف المزيد →" : "Learn more →"}</button>
            </div>
            <button className="text-muted-foreground hover:text-foreground"><X size={13} /></button>
          </div>
        </div>
      </div>
    </Spec>
  );
}

/* 19 — Dialog */
function DialogSpec({ rtl, num }: Props) {
  return (
    <Spec title={rtl ? "نافذة حوار" : "Dialog · modal"} code="dialog-01" span="md:col-span-6">
      <div className="precision-card mx-auto max-w-md p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-display text-[15px] font-semibold">{rtl ? "تأكيد التشغيل" : "Confirm run"}</div>
            <div className="mt-1 text-[12px] text-muted-foreground">{rtl ? `سيتمّ توزيع المهمّة على ${num(248)} مشاركاً.` : `Task will be assigned to ${num(248)} participants.`}</div>
          </div>
          <button className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
        </div>
        <div className="mt-4 rounded-md bg-gold-soft p-3 text-[12px]">
          <div className="font-medium">{rtl ? "غير قابل للتراجع" : "This action cannot be undone."}</div>
          <div className="mt-0.5 text-muted-foreground">{rtl ? "ستبدأ التجربة فور التأكيد." : "The experiment starts immediately."}</div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          <button className={`${btnBase} h-9 border border-border bg-background px-3.5 text-[13px] hover:bg-muted`}>{rtl ? "إلغاء" : "Cancel"}</button>
          <button className={`${btnBase} h-9 bg-primary px-3.5 text-[13px] text-primary-foreground hover:brightness-110`}>{rtl ? "تشغيل" : "Run"}</button>
        </div>
      </div>
    </Spec>
  );
}

/* 20 — Drawer / Sheet */
function DrawerSpec({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "درج جانبي" : "Drawer · sheet"} code="drawer-01" span="md:col-span-6">
      <div className="precision-card overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="font-display text-[14px] font-semibold">{rtl ? "تفاصيل الجلسة" : "Session details"}</div>
          <button className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
        </div>
        <div className="space-y-3 p-4">
          <Row k={rtl ? "المعرّف" : "ID"} v="P-0042" />
          <Row k={rtl ? "المهمّة" : "Task"} v="Stroop · v3.2" />
          <Row k={rtl ? "الزمن" : "RT"} v="487 ms" />
          <Row k={rtl ? "الدقّة" : "Accuracy"} v="0.92" />
          <Row k={rtl ? "الحالة" : "Status"} v={<span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2 py-0.5 text-[11px]"><span className="h-1.5 w-1.5 rounded-full bg-success" />OK</span>} />
        </div>
        <div className="border-t border-border bg-surface-2 p-3">
          <button className={`${btnBase} h-9 w-full bg-primary text-[13px] text-primary-foreground`}>{rtl ? "افتح كاملاً" : "Open full record"} <ArrowRight size={13} className={rtl ? "rotate-180" : ""} /></button>
        </div>
      </div>
    </Spec>
  );
}
function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[12px]">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-mono font-medium num-tab">{v}</span>
    </div>
  );
}

/* 21 — Stepper */
function Stepper({ rtl, num }: Props) {
  const steps = rtl ? ["التصميم","المثيرات","التوظيف","الإصدار"] : ["Design","Stimuli","Recruit","Publish"];
  const current = 1;
  return (
    <Spec title={rtl ? "خطوات" : "Stepper"} code="stepper-01" span="md:col-span-12">
      <div className="flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center" style={{ flex: i < steps.length - 1 ? 1 : "0 0 auto" }}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`grid h-8 w-8 place-items-center rounded-full border-2 text-[12px] font-semibold ${
                i < current ? "border-success bg-success text-white" :
                i === current ? "border-accent bg-accent text-accent-foreground" :
                "border-border bg-background text-muted-foreground"}`}>
                {i < current ? <Check size={14} strokeWidth={3} /> : <span className="num-tab">{num(i + 1)}</span>}
              </div>
              <span className={`text-[11px] font-medium ${i === current ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-3 h-px flex-1" style={{ background: i < current ? "var(--success)" : "var(--border)" }} />
            )}
          </div>
        ))}
      </div>
    </Spec>
  );
}

/* 22 — Empty state */
function EmptyState({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "حالة فارغة" : "Empty state"} code="empty-01" span="md:col-span-6">
      <div className="grid place-items-center gap-3 py-6 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-soft">
          <Inbox size={22} className="text-accent" />
        </div>
        <div>
          <div className="font-display text-[15px] font-semibold">{rtl ? "لا توجد جلسات بعد" : "No sessions yet"}</div>
          <div className="mt-1 max-w-xs text-[12px] text-muted-foreground">{rtl ? "ابدأ بدعوة مشاركيك أو استورد بيانات سابقة." : "Invite participants or import existing data to get started."}</div>
        </div>
        <div className="flex gap-2">
          <button className={`${btnBase} h-9 bg-primary px-3.5 text-[13px] text-primary-foreground`}><Plus size={13} /> {rtl ? "أنشئ جلسة" : "New session"}</button>
          <button className={`${btnBase} h-9 border border-border bg-background px-3.5 text-[13px]`}><Upload size={13} /> {rtl ? "استورد" : "Import"}</button>
        </div>
      </div>
    </Spec>
  );
}

/* 23 — Skeletons */
function Skeletons({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "هياكل التحميل" : "Skeletons"} code="skel-01" span="md:col-span-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-3/5 animate-pulse rounded bg-muted" />
            <div className="h-2.5 w-2/5 animate-pulse rounded bg-muted" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-2.5 w-full animate-pulse rounded bg-muted" />
          <div className="h-2.5 w-11/12 animate-pulse rounded bg-muted" />
          <div className="h-2.5 w-9/12 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0,1,2].map((i) => <div key={i} className="h-16 animate-pulse rounded-md bg-muted" />)}
        </div>
      </div>
    </Spec>
  );
}

/* 24 — KPI grid */
function KPIGrid({ rtl, num }: Props) {
  const k = [
    { l: rtl ? "تجارب نشطة" : "Active experiments", v: num(24), d: "+3", trend: "up" },
    { l: rtl ? "متوسط زمن الاستجابة" : "Mean RT", v: `${num(487)}ms`, d: "−14ms", trend: "down" },
    { l: rtl ? "الدقّة" : "Accuracy", v: num("0.91"), d: "+0.02", trend: "up" },
    { l: rtl ? "معدّل التسرّب" : "Drop-out", v: num("0.04"), d: "−0.01", trend: "down" },
  ];
  return (
    <Spec title={rtl ? "مؤشّرات الأداء" : "KPI cards"} code="kpi-01" span="md:col-span-12">
      <div className="grid gap-3 md:grid-cols-4">
        {k.map((it) => (
          <div key={it.l} className="precision-card p-4">
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">{it.l}</span>
              <span className={`inline-flex items-center gap-0.5 font-mono text-[10px] ${it.trend === "up" ? "text-success" : "text-destructive"}`}>
                {it.trend === "up" ? <ArrowUp size={10} /> : <ArrowDown size={10} />}{it.d}
              </span>
            </div>
            <div className="mt-1.5 font-display text-3xl font-semibold tracking-tight num-tab">{it.v}</div>
            {/* sparkline */}
            <svg viewBox="0 0 100 24" className="mt-2 h-6 w-full">
              <polyline fill="none" stroke="var(--accent)" strokeWidth="1.5" points="0,18 12,14 24,16 36,10 48,12 60,6 72,9 84,4 100,7" />
            </svg>
          </div>
        ))}
      </div>
    </Spec>
  );
}

/* 25 — Charts (bar, line, donut, heatmap) */
function Charts({ rtl, num }: Props) {
  return (
    <Spec title={rtl ? "تصوّرات بصريّة" : "Data viz"} code="viz-01" span="md:col-span-12">
      <div className="grid gap-3 md:grid-cols-12">
        {/* Bar */}
        <div className="precision-card p-4 md:col-span-4">
          <div className="text-[12px] font-medium">{rtl ? "RT بالنوع" : "RT by task"}</div>
          <div className="mt-3 space-y-2">
            {[
              { l: "Stroop", v: 80, c: "primary" },
              { l: "N-back", v: 64, c: "research" },
              { l: "Flanker", v: 52, c: "clinical" },
              { l: "Vocab",   v: 38, c: "accent" },
            ].map((b) => (
              <div key={b.l} className="flex items-center gap-2">
                <span className="w-14 text-[11px] text-muted-foreground">{b.l}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-sm bg-muted">
                  <div className="h-full rounded-sm" style={{ width: `${b.v}%`, background: `var(--color-${b.c})` }} />
                </div>
                <span className="w-10 text-end font-mono text-[10px] num-tab">{num(b.v * 6)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Line */}
        <div className="precision-card p-4 md:col-span-5">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-medium">{rtl ? "الدقّة عبر الأسابيع" : "Accuracy over weeks"}</div>
            <div className="font-mono text-[10px] text-muted-foreground">52w</div>
          </div>
          <svg viewBox="0 0 300 100" className="mt-2 h-28 w-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity=".4" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[20,40,60,80].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="var(--border)" strokeWidth="0.5" />)}
            <path d="M0,70 L25,62 L50,66 L75,55 L100,58 L125,42 L150,48 L175,32 L200,38 L225,28 L250,22 L275,30 L300,18 L300,100 L0,100 Z" fill="url(#g1)" />
            <polyline fill="none" stroke="var(--primary)" strokeWidth="1.5"
              points="0,70 25,62 50,66 75,55 100,58 125,42 150,48 175,32 200,38 225,28 250,22 275,30 300,18" />
            {[[150,48],[225,28]].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="var(--accent)" stroke="white" strokeWidth="1.5" />
            ))}
          </svg>
        </div>

        {/* Donut */}
        <div className="precision-card p-4 md:col-span-3">
          <div className="text-[12px] font-medium">{rtl ? "توزيع المشاركين" : "Participant mix"}</div>
          <div className="mt-2 flex items-center gap-3">
            <Donut segments={[{ v: 48, c: "var(--primary)" }, { v: 32, c: "var(--accent)" }, { v: 20, c: "var(--success)" }]} />
            <ul className="space-y-1 text-[11px]">
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-primary" />Adult · {num(48)}%</li>
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-accent" />Youth · {num(32)}%</li>
              <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-success" />Senior · {num(20)}%</li>
            </ul>
          </div>
        </div>

        {/* Heatmap */}
        <div className="precision-card p-4 md:col-span-12">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-medium">{rtl ? "كثافة الجلسات (٧ أسابيع × ٢٤ سا)" : "Session density · 7 weeks × 24h"}</div>
            <div className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
              <span>low</span>
              {[10,25,45,70,95].map((o) => <span key={o} className="h-2.5 w-3 rounded-sm" style={{ background: `color-mix(in srgb, var(--primary) ${o}%, var(--muted))` }} />)}
              <span>high</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-24 gap-0.5" style={{ gridTemplateColumns: "repeat(24, minmax(0,1fr))" }}>
            {Array.from({ length: 7 * 24 }).map((_, i) => {
              const v = (Math.sin(i * 0.7) + Math.cos(i * 0.3)) * 50 + 50;
              return <div key={i} className="h-3.5 rounded-[2px]" style={{ background: `color-mix(in srgb, var(--primary) ${Math.max(5, Math.min(95, v))}%, var(--muted))` }} />;
            })}
          </div>
        </div>
      </div>
    </Spec>
  );
}

function Donut({ segments }: { segments: { v: number; c: string }[] }) {
  const r = 26, c = 2 * Math.PI * r;
  let off = 0;
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
      <circle cx="40" cy="40" r={r} stroke="var(--muted)" strokeWidth="10" fill="none" />
      {segments.map((s, i) => {
        const len = c * (s.v / 100);
        const el = <circle key={i} cx="40" cy="40" r={r} stroke={s.c} strokeWidth="10" fill="none"
                          strokeDasharray={`${len} ${c}`} strokeDashoffset={-off} />;
        off += len;
        return el;
      })}
    </svg>
  );
}

/* 26 — Calendar */
function CalendarSpec({ rtl, num }: Props) {
  const days = rtl ? ["أ","إ","ث","ر","خ","ج","س"] : ["S","M","T","W","T","F","S"];
  const today = 8;
  return (
    <Spec title={rtl ? "تقويم" : "Calendar"} code="cal-01" span="md:col-span-6">
      <div className="flex items-center justify-between">
        <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-muted"><ChevronLeft size={13} className={rtl ? "rotate-180" : ""} /></button>
        <div className="font-display text-[14px] font-semibold">{rtl ? "أيار / مايو ٢٠٢٦" : "May 2026"}</div>
        <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-muted"><ChevronRight size={13} className={rtl ? "rotate-180" : ""} /></button>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-0.5 text-center">
        {days.map((d, i) => <div key={i} className="font-mono text-[10px] text-muted-foreground">{d}</div>)}
        {Array.from({ length: 35 }).map((_, i) => {
          const day = i - 4;
          if (day < 1 || day > 31) return <div key={i} />;
          const isToday = day === today;
          const hasEvent = [3, 8, 14, 22, 27].includes(day);
          return (
            <button key={i} className={`calm relative grid aspect-square place-items-center rounded-md text-[12px] num-tab ${isToday ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"}`}>
              {num(day)}
              {hasEvent && !isToday && <span className="absolute bottom-1 h-1 w-1 rounded-full bg-accent" />}
            </button>
          );
        })}
      </div>
    </Spec>
  );
}

/* 27 — Activity feed */
function ActivityFeed({ rtl, num }: Props) {
  const items = [
    { I: CheckCircle2, t: "success", who: "Layla A.", what: rtl ? "نشرت تقرير ستروب" : "published Stroop report", when: "2m" },
    { I: Plus, t: "primary", who: "Omar K.", what: rtl ? "أضاف ١٢ مشاركاً" : `added ${num(12)} participants`, when: "1h" },
    { I: AlertTriangle, t: "warning", who: "System", what: rtl ? "زمن استجابة بطيء في N-back" : "slow RT detected in N-back", when: "3h" },
    { I: Edit3, t: "muted", who: "Sara T.", what: rtl ? "حدّثت قالب المثير" : "edited stimulus template", when: "yesterday" },
  ];
  return (
    <Spec title={rtl ? "سجلّ النشاط" : "Activity feed"} code="feed-01" span="md:col-span-6">
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white" style={{ background: `var(--color-${it.t})` }}>
              <it.I size={13} />
            </span>
            <div className="flex-1">
              <div className="text-[13px]"><b>{it.who}</b> <span className="text-muted-foreground">{it.what}</span></div>
              <div className="font-mono text-[10px] text-muted-foreground">{it.when}</div>
            </div>
          </li>
        ))}
      </ul>
    </Spec>
  );
}

/* 28 — Code block */
function CodeBlock({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "كتلة شيفرة" : "Code block"} code="code-01" span="md:col-span-6">
      <div className="overflow-hidden rounded-md border border-border bg-[#121417] text-[#F9FAFB]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/60">
          <span>experiment.json</span>
          <button className="hover:text-white"><Copy size={11} /></button>
        </div>
        <pre dir="ltr" className="overflow-x-auto p-3 font-mono text-[11.5px] leading-[1.65]">
{`{
  "id": "stroop-3.2",
  "lang": ["en", "ar"],
  "trials": 100,
  "stimuli": {
    "congruent":   ${"\u0022"}#1A2B47${"\u0022"},
    "incongruent": ${"\u0022"}#E67E22${"\u0022"}
  }
}`}
        </pre>
      </div>
    </Spec>
  );
}

/* 29 — File upload */
function FileUpload({ rtl }: { rtl: boolean }) {
  return (
    <Spec title={rtl ? "منطقة رفع" : "File upload"} code="upload-01" span="md:col-span-6">
      <div className="calm rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 text-center hover:border-accent hover:bg-gold-soft/40">
        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-background border border-border"><Upload size={16} /></div>
        <div className="mt-2 text-[13px] font-medium">{rtl ? "اسحب الملفات أو انقر للرفع" : "Drag files or click to upload"}</div>
        <div className="mt-0.5 text-[11px] text-muted-foreground">CSV · JSON · XLSX · {rtl ? "حتى ٢٠ م.ب" : "up to 20MB"}</div>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { n: "participants.csv", s: "184 KB", p: 100 },
          { n: "stroop-trials.json", s: "1.2 MB", p: 65 },
        ].map((f) => (
          <div key={f.n} className="flex items-center gap-3 rounded-md border border-border bg-background p-2">
            <FileText size={14} className="text-muted-foreground" />
            <div className="flex-1">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-medium">{f.n}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{f.s}</span>
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full" style={{ width: `${f.p}%`, background: f.p === 100 ? "var(--success)" : "var(--accent)" }} />
              </div>
            </div>
            <button className="text-muted-foreground hover:text-destructive"><X size={13} /></button>
          </div>
        ))}
      </div>
    </Spec>
  );
}

/* 30 — Tag input */
function TagInput({ rtl }: { rtl: boolean }) {
  const [tags, setTags] = useState(["arabic", "stage-2", "riyadh"]);
  const [v, setV] = useState("");
  return (
    <Spec title={rtl ? "حقل وسوم" : "Tag input"} code="tag-01" span="md:col-span-12">
      <div className="calm flex flex-wrap items-center gap-1.5 rounded-md border border-border bg-background p-2 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/25">
        {tags.map((t) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[12px]">
            <Hash size={10} className="text-muted-foreground" />{t}
            <button onClick={() => setTags(tags.filter((x) => x !== t))} className="text-muted-foreground hover:text-destructive"><X size={11} /></button>
          </span>
        ))}
        <input value={v} onChange={(e) => setV(e.target.value)}
               onKeyDown={(e) => { if (e.key === "Enter" && v.trim()) { setTags([...tags, v.trim()]); setV(""); } }}
               placeholder={rtl ? "أضف وسماً واضغط Enter…" : "Add a tag, press Enter…"}
               className="flex-1 min-w-[140px] bg-transparent px-1 py-0.5 text-[13px] outline-none" />
      </div>
    </Spec>
  );
}

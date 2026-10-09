import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  FlaskConical,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const description =
  "PRESENCE AI conçoit et déploie des serveurs MCP sécurisés et des agents LangGraph prêts pour la production, pour les équipes techniques exigeantes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRESENCE AI — Serveurs MCP & intégration d'agents IA" },
      { name: "description", content: description },
      { property: "og:title", content: "PRESENCE AI — Serveurs MCP & intégration d'agents IA" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Server,
    title: "Ingénierie de serveurs MCP sur mesure",
    text: "Connecteurs de bases de données (PostgreSQL, Snowflake, MongoDB), API REST/GraphQL internes et outils d'affaires bâtis avec FastMCP et le SDK TypeScript.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance d'entreprise & OAuth 2.1",
    text: "Authentification par jetons, RBAC, portée des actions (lecture vs écriture), limiteurs de débit et journalisation d'audit complète.",
  },
  {
    icon: Workflow,
    title: "Architecture d'agents LangGraph",
    text: "Systèmes multi-agents avec état, approvals humaines dans la boucle, persistance tolérante aux pannes et orchestration d'outils sur mesure.",
  },
  {
    icon: FlaskConical,
    title: "Intégration JupyterHub & science des données",
    text: "Exécution de sessions de notebook à distance via MCP et exposition de vos modèles de données internes comme outils d'IA réutilisables.",
  },
];

const oldWay = [
  "Code personnalisé fragmenté pour chaque LLM et chaque framework",
  "Maintenance lourde à chaque mise à jour de modèle",
  "Risques de sécurité liés aux identifiants API codés en dur",
  "Intégrations à refaire pour chaque nouvel outil d'IA",
];

const mcpWay = [
  "Protocole universel : construisez une fois, connectez partout",
  "Compatible LangGraph, Claude Desktop, Cursor et ChatGPT",
  "Authentification OAuth 2.1 et contrôle d'accès par rôle",
  "Journal d'audit complet sur chaque action exécutée",
];

const plans = [
  {
    name: "Starter MCP",
    price: "À partir de 3 500 $",
    blurb: "Idéal pour valider la valeur auprès de vos équipes (preuve de concept).",
    features: ["1 serveur MCP", "Jusqu'à 3 outils", "Transport stdio/HTTP", "Authentification basique (clé API)"],
    featured: false,
    cta: "Démarrer un projet",
  },
  {
    name: "Enterprise MCP Gateway",
    price: "À partir de 12 000 $",
    blurb: "Le choix des équipes qui passent en production.",
    features: ["Jusqu'à 3 serveurs", "10+ outils exposés", "OAuth 2.1 + RBAC", "Journalisation d'audit complète"],
    featured: true,
    cta: "Demander une estimation",
  },
  {
    name: "Full Agent Suite",
    price: "Sur devis",
    blurb: "Pour des opérations agentiques à l'échelle de l'entreprise.",
    features: ["Outils personnalisés illimités", "Intégration multi-agents LangGraph", "Déploiement CI/CD complet", "Surveillance et support continu"],
    featured: false,
    cta: "Parler à un expert",
  },
];

const processSteps = [
  { number: "01", title: "Diagnostic", text: "Nous cartographions vos données, APIs et cas d'usage prioritaires." },
  { number: "02", title: "Prototype", text: "Un premier serveur MCP fonctionnel connecté à vos systèmes, en semaines." },
  { number: "03", title: "Déploiement", text: "Mise en production sécurisée avec OAuth 2.1, RBAC et audit." },
  { number: "04", title: "Itération", text: "Nouveaux outils, nouveaux agents et support continu au fil de vos besoins." },
];

const techChips = [
  ["Protocoles & frameworks", ["FastMCP", "TypeScript MCP SDK", "LangGraph", "LangChain", "Claude Desktop", "Cursor", "LlamaIndex"]],
  ["Infrastructure", ["Docker", "Kubernetes", "AWS", "Cloudflare Workers", "FastAPI", "PostgreSQL"]],
];

const navLinks = [
  ["Services", "#services"],
  ["Architecture", "#architecture"],
  ["Tarification", "#tarification"],
  ["Processus", "#processus"],
];

const fmt = (n: number) => `${new Intl.NumberFormat("fr-CA").format(n)} $`;

function Brand() {
  return (
    <a href="#accueil" className="flex items-center gap-3" aria-label="PRESENCE AI, accueil">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span className="text-[1.08rem] font-extrabold uppercase tracking-[0.16em]">PRESENCE&nbsp;<b className="text-primary">AI</b></span>
    </a>
  );
}

function Estimator() {
  const [servers, setServers] = useState<"1" | "2-3" | "4+">("1");
  const [security, setSecurity] = useState<"basic" | "oauth">("basic");
  const [agents, setAgents] = useState<"none" | "single" | "multi">("none");

  const scopeRange: Record<string, [number, number]> = {
    "1": [3500, 7000],
    "2-3": [7000, 14000],
    "4+": [14000, 28000],
  };
  const [scopeLo, scopeHi] = scopeRange[servers];
  const secRange = security === "oauth" ? [4000, 8000] : [0, 0];
  const agentRange = agents === "single" ? [3000, 5000] : agents === "multi" ? [8000, 15000] : [0, 0];
  const low = scopeLo + secRange[0] + agentRange[0];
  const high = scopeHi + secRange[1] + agentRange[1];

  let weeks = 2;
  if (servers !== "1") weeks += 2;
  if (security === "oauth") weeks += 2;
  if (agents === "single") weeks += 2;
  if (agents === "multi") weeks += 4;
  const timeline = `${weeks}–${weeks + 2} semaines`;

  const optionClass = "option-card";
  const serversOptions: Array<{ value: typeof servers; label: string }> = [
    { value: "1", label: "1 serveur / API" },
    { value: "2-3", label: "2 à 3 serveurs" },
    { value: "4+", label: "4 serveurs et plus" },
  ];

  return (
    <div className="estimator-panel">
      <div className="estimator-group" role="radiogroup" aria-label="Nombre de serveurs MCP">
        <p className="estimator-label">1. Combien de serveurs MCP ou d'APIs à connecter?</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {serversOptions.map((o) => (
            <label key={o.value} className={optionClass}>
              <input type="radio" name="servers" checked={servers === o.value} onChange={() => setServers(o.value)} />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="estimator-group" role="radiogroup" aria-label="Exigences de sécurité">
        <p className="estimator-label">2. Vos exigences de sécurité</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className={optionClass}>
            <input type="radio" name="security" checked={security === "basic"} onChange={() => setSecurity("basic")} />
            <span>Clé API basique</span>
          </label>
          <label className={optionClass}>
            <input type="radio" name="security" checked={security === "oauth"} onChange={() => setSecurity("oauth")} />
            <span>OAuth 2.1 + RBAC + journaux d'audit</span>
          </label>
        </div>
      </div>
      <div className="estimator-group" role="radiogroup" aria-label="Intégration d'agents LangGraph">
        <p className="estimator-label">3. Intégration d'agents LangGraph</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {([
            { value: "none", label: "Aucun agent" },
            { value: "single", label: "Agent unique" },
            { value: "multi", label: "Système multi-agents" },
          ] as Array<{ value: typeof agents; label: string }>).map((o) => (
            <label key={o.value} className={optionClass}>
              <input type="radio" name="agents" checked={agents === o.value} onChange={() => setAgents(o.value)} />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="estimator-result">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">Estimation du projet</p>
          <p className="mt-2 text-4xl font-black text-primary md:text-5xl">{fmt(low)} – {fmt(high)}</p>
        </div>
        <div className="border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">Délai estimé</p>
          <p className="mt-2 text-2xl font-black md:text-3xl">{timeline}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Fourchette indicative. Un devis détaillé suit notre diagnostic initial, sans frais.</p>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="accueil" className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="page-shell flex h-20 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild size="lg" className="h-11 px-6 shadow-none">
              <a href="#contact">Demander une estimation <ArrowRight /></a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Ouvrir le menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-full border-l-border sm:max-w-sm">
              <SheetHeader>
                <SheetTitle><Brand /></SheetTitle>
                <SheetDescription>Serveurs MCP et agents IA prêts pour la production.</SheetDescription>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-1" aria-label="Navigation mobile">
                {navLinks.map(([label, href]) => (
                  <SheetClose asChild key={href}><a href={href} className="border-b border-border py-4 text-lg font-semibold">{label}</a></SheetClose>
                ))}
                <SheetClose asChild><Button asChild size="lg" className="mt-6"><a href="#contact">Demander une estimation</a></Button></SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative bg-hero pt-20">
        <div className="hero-glow" aria-hidden="true" />
        <div className="page-shell grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="relative z-10 animate-rise">
            <div className="eyebrow mb-7"><Sparkles /> Serveurs MCP · Agents LangGraph</div>
            <h1 className="display-title max-w-3xl">Rendez vos données et APIs internes <em>prêts pour les agents.</em></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Nous concevons, bâtissons et déployons des serveurs MCP sécurisés de niveau production et des flux d'agents LangGraph pour les équipes techniques d'entreprise.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 px-7 text-base"><a href="#contact">Demander une estimation <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-13 px-7 text-base"><a href="#tarification">Architecture & tarification</a></Button>
            </div>
          </div>
          <div className="relative animate-rise-delayed">
            <div className="terminal" aria-hidden="true">
              <div className="terminal-bar"><span /><span /><span /><p className="ml-3 font-mono text-xs text-muted-foreground">presence-ai-server — mcp</p></div>
              <pre className="font-mono text-sm leading-7">
{`$ npx fastmcp init presence-ai-server
`}
                <span className="text-primary">{`✓ Serveur "presence-ai" créé
`}</span>
                <span className="text-primary">{`✓ Outils : query_database, run_analysis
`}</span>
{`
→ Connecté à : Claude Desktop · Cursor · LangGraph
→ Auth      : OAuth 2.1 · RBAC · audit activé`}
              </pre>
            </div>
            <div className="absolute -bottom-6 -left-2 border border-border bg-card p-5 shadow-2xl sm:-left-8">
              <p className="text-2xl font-black">Build once, connect everything.</p>
              <p className="mt-1 text-sm text-muted-foreground">Un protocole, tous vos outils d'IA.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="border-y border-border bg-surface py-24 md:py-32">
        <div className="page-shell">
          <p className="section-kicker">Pourquoi le protocole MCP</p>
          <h2 className="section-title mt-5 max-w-4xl">Arrêtez de réécrire vos intégrations. <span>Adoptez la norme.</span></h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="contrast-card contrast-card-old">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-muted-foreground">L'ancienne méthode</p>
              <ul className="mt-6 grid gap-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3"><X className="mt-1 size-5 shrink-0 text-destructive" /><span className="leading-7 text-muted-foreground">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="contrast-card contrast-card-new">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-primary">La voie MCP</p>
              <ul className="mt-6 grid gap-4">
                {mcpWay.map((item) => (
                  <li key={item} className="flex items-start gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" /><span className="leading-7">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 grid gap-3">
            {techChips.map(([group, chips]) => (
              <div key={group as string} className="flex flex-wrap items-center gap-3">
                <p className="min-w-56 text-sm font-black uppercase tracking-[0.14em] text-muted-foreground">{group}</p>
                {(chips as string[]).map((chip) => <span key={chip} className="chip">{chip}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="section-kicker">Ce que nous faisons</p><h2 className="section-title mt-5 max-w-3xl">De vos systèmes internes <span>aux agents qui les utilisent.</span></h2></div>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">Une offre complète, de la connexion des données à l'orchestration des agents, sans complexité inutile.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-border md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="service-cell group" key={service.title}>
                  <div className="flex items-start justify-between"><span className="service-number">0{index + 1}</span><Icon className="size-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} /></div>
                  <h3 className="mt-12 text-2xl font-black md:text-3xl">{service.title}</h3>
                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">{service.text}</p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground">Discuter de votre cas<ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="estimation" className="border-y border-border bg-surface py-24 md:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="section-kicker">Estimateur interactif</p>
            <h2 className="section-title mt-5">Combien coûte <span>votre projet MCP?</span></h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">Configurez la portée de votre projet et obtenez instantanément une fourchette de budget et un délai de livraison estimé.</p>
          </div>
          <Estimator />
        </div>
      </section>

      <section id="tarification" className="py-24 md:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="section-kicker">Forfaits de service</p><h2 className="section-title mt-5 max-w-3xl">Un niveau d'engagement <span>pour chaque étape.</span></h2></div>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">Du preuve de concept rapide à la plateforme agentique complète, évoluez au rythme de vos besoins.</p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={plan.featured ? "price-card price-card-featured" : "price-card"}>
                {plan.featured && <p className="price-flag">Le plus populaire</p>}
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className="mt-3 text-3xl font-black text-primary">{plan.price}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{plan.blurb}</p>
                <ul className="mt-8 grid gap-3 border-t border-border pt-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>
                  ))}
                </ul>
                <Button asChild variant={plan.featured ? "default" : "outline"} className="mt-8 w-full">
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processus" className="bg-foreground py-24 text-background md:py-32">
        <div className="page-shell">
          <p className="section-kicker" style={{ color: "var(--color-background)" }}>Notre processus</p>
          <h2 className="section-title mt-5 max-w-3xl">Du diagnostic au déploiement, <span style={{ color: "var(--color-primary)" }}>en semaines.</span></h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t border-background/25 pt-6">
                <p className="text-5xl font-black text-primary">{step.number}</p>
                <h3 className="mt-4 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-background/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div><p className="section-kicker">Passons à l'action</p><h2 className="section-title mt-5">Quel système voulez-vous <span>rendre accessible aux agents?</span></h2><p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Décrivez-nous vos APIs et vos données : nous revenons vers vous avec une évaluation de faisabilité et une estimation de projet.</p><p className="mt-10 text-sm font-bold uppercase tracking-[0.14em]">Montréal · Toronto · À distance</p></div>
          {sent ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center border border-border bg-surface p-10 text-center"><span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-8" /></span><h3 className="mt-6 text-3xl font-black">Merci pour votre intérêt.</h3><p className="mt-3 max-w-md text-muted-foreground">Votre demande est prête. Reliez votre adresse courriel au formulaire avant la mise en ligne pour recevoir les messages.</p></div>
          ) : (
            <form onSubmit={submitContact} className="grid gap-5 border border-border bg-surface p-6 md:p-9">
              <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Nom complet<Input required name="name" placeholder="Votre nom" /></label><label className="form-label">Courriel professionnel<Input required type="email" name="email" placeholder="vous@entreprise.com" /></label></div>
              <label className="form-label">Entreprise<Input name="company" placeholder="Nom de votre entreprise" /></label>
              <label className="form-label">Budget du projet
                <Select name="budget" required>
                  <SelectTrigger className="w-full"><SelectValue placeholder="Sélectionnez une fourchette" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lt-5k">Moins de 5 000 $</SelectItem>
                    <SelectItem value="5k-15k">5 000 $ – 15 000 $</SelectItem>
                    <SelectItem value="15k-50k">15 000 $ – 50 000 $</SelectItem>
                    <SelectItem value="50k-plus">Plus de 50 000 $</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <label className="form-label">Description du projet / détails des APIs<Textarea required name="message" placeholder="Parlez-nous de vos systèmes, des APIs à exposer ou des agents à déployer..." className="min-h-32" /></label>
              <Button type="submit" size="lg" className="mt-2 h-13 w-full text-base">Demander une estimation <ArrowRight /></Button>
              <p className="text-center text-xs text-muted-foreground">Nous vous répondrons dans un délai d'un jour ouvrable.</p>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="page-shell flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><Brand /><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Des serveurs MCP et des agents IA conçus pour vos systèmes, vos équipes et vos ambitions.</p></div><div className="flex flex-wrap gap-6 text-sm text-muted-foreground"><a href="#services" className="hover:text-foreground">Services</a><a href="#tarification" className="hover:text-foreground">Tarification</a><a href="#contact" className="hover:text-foreground">Contact</a><span>© 2026 PRESENCE AI</span></div></div>
      </footer>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  DatabaseZap,
  Menu,
  Quote,
  Sparkles,
  TrendingUp,
  UsersRound,
  Workflow,
} from "lucide-react";

import teamWorkshop from "@/assets/ai-team-workshop.jpg";
import operations from "@/assets/ai-operations.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  "Kamel AI transforme vos opérations grâce à des solutions d'intelligence artificielle concrètes, utiles et adaptées à votre entreprise.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamel AI — L'IA qui fait avancer votre entreprise" },
      { name: "description", content: description },
      { property: "og:title", content: "Kamel AI — L'IA qui fait avancer votre entreprise" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Stratégie IA",
    text: "Une feuille de route claire, priorisée selon vos objectifs et votre réalité opérationnelle.",
    link: "Structurer votre vision",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automatisation intelligente",
    text: "Des processus plus rapides et plus fiables, sans bouleverser les outils que vos équipes utilisent déjà.",
    link: "Automatiser vos opérations",
  },
  {
    number: "03",
    icon: DatabaseZap,
    title: "Données & analytique",
    text: "Transformez vos données dispersées en décisions mieux informées et en occasions d'affaires concrètes.",
    link: "Valoriser vos données",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Formation & adoption",
    text: "Des ateliers pratiques pour que vos équipes adoptent l'IA avec confiance, méthode et discernement.",
    link: "Mobiliser vos équipes",
  },
];

const navLinks = [
  ["Approche", "#approche"],
  ["Services", "#services"],
  ["Résultats", "#resultats"],
  ["À propos", "#a-propos"],
];

function Brand() {
  return (
    <a href="#accueil" className="flex items-center gap-3" aria-label="Kamel AI, accueil">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span className="text-[1.08rem] font-extrabold uppercase tracking-[0.16em]">PRESENCE&nbsp;<b className="text-primary">AI</b></span>
    </a>
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
              <a href="#contact">Parlons de votre projet <ArrowRight /></a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Ouvrir le menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-full border-l-border sm:max-w-sm">
              <SheetHeader>
                <SheetTitle><Brand /></SheetTitle>
                <SheetDescription>Des solutions d'IA utiles, mesurables et adoptées.</SheetDescription>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-1" aria-label="Navigation mobile">
                {navLinks.map(([label, href]) => (
                  <SheetClose asChild key={href}><a href={href} className="border-b border-border py-4 text-lg font-semibold">{label}</a></SheetClose>
                ))}
                <SheetClose asChild><Button asChild size="lg" className="mt-6"><a href="#contact">Parlons de votre projet</a></Button></SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative min-h-[760px] bg-hero pt-20">
        <div className="page-shell grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.03fr_.97fr] lg:py-12">
          <div className="relative z-10 max-w-3xl animate-rise">
            <div className="eyebrow mb-7"><Sparkles /> IA appliquée. Impact réel.</div>
            <h1 className="display-title max-w-3xl">L'IA qui fait avancer <em>votre entreprise.</em></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Nous transformons vos défis d'affaires en solutions d'intelligence artificielle concrètes, utiles et adoptées par vos équipes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 px-7 text-base"><a href="#contact">Explorer votre potentiel <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-13 px-7 text-base"><a href="#services">Découvrir nos services</a></Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-foreground/75">
              {["Stratégie claire", "Déploiement rapide", "Résultats mesurables"].map((item) => <span className="flex items-center gap-2" key={item}><Check className="size-4 text-primary" />{item}</span>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[590px] animate-rise-delayed lg:mx-0">
            <div className="hero-image-shape">
              <img src={teamWorkshop} alt="Équipe multidisciplinaire en atelier stratégique d'intelligence artificielle" width={1536} height={1024} />
            </div>
            <div className="absolute -bottom-8 -left-2 z-10 bg-foreground p-5 text-background shadow-2xl sm:-left-8 sm:p-6">
              <p className="text-3xl font-black">De l'idée à l'impact</p>
              <p className="mt-1 text-sm text-background/70">Un seul partenaire, du diagnostic au déploiement.</p>
            </div>
          </div>
        </div>
        <div className="data-line" aria-hidden="true" />
      </section>

      <section id="approche" className="border-y border-border bg-surface py-24 md:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div><p className="section-kicker">Notre promesse</p><p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">Simple. Pragmatique. Mesurable.</p></div>
          <div>
            <h2 className="section-title">Votre entreprise n'a pas besoin de plus de technologie. <span>Elle a besoin de meilleurs résultats.</span></h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">Nous réunissons expertise d'affaires, données et intelligence artificielle pour cibler les occasions à forte valeur et les transformer en solutions qui fonctionnent vraiment.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="section-kicker">Ce que nous faisons</p><h2 className="section-title mt-5 max-w-3xl">L'expertise qu'il faut, <span>au moment où il le faut.</span></h2></div>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">Une offre complète pour passer de l'ambition à une valeur concrète, sans complexité inutile.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-border md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-cell group" key={service.number}>
                  <div className="flex items-start justify-between"><span className="service-number">{service.number}</span><Icon className="size-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} /></div>
                  <h3 className="mt-12 text-3xl font-black">{service.title}</h3>
                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">{service.text}</p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground">{service.link}<ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="resultats" className="bg-foreground py-24 text-background md:py-32">
        <div className="page-shell">
          <p className="section-kicker section-kicker-inverse">L'IA en action</p>
          <div className="mt-8 grid items-stretch lg:grid-cols-2">
            <div className="min-h-[430px] overflow-hidden"><img src={operations} alt="Gestionnaire utilisant une solution d'IA dans un environnement industriel" width={1536} height={1024} loading="lazy" className="h-full w-full object-cover" /></div>
            <div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground md:p-12">
              <div><p className="text-sm font-extrabold uppercase tracking-[0.15em]">Cas d'usage · Opérations</p><h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl">Anticiper plutôt que réagir.</h2><p className="mt-6 text-lg leading-8 text-primary-foreground/80">Une solution prédictive qui aide les équipes à repérer les risques, prioriser les interventions et réduire les temps d'arrêt.</p></div>
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-foreground/30 pt-8"><div><p className="text-4xl font-black">24/7</p><p className="mt-2 text-sm text-primary-foreground/75">Surveillance continue</p></div><div><p className="text-4xl font-black">1 vue</p><p className="mt-2 text-sm text-primary-foreground/75">Pour décider plus vite</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="a-propos" className="bg-accent py-24 md:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><p className="section-kicker">Pourquoi Kamel AI</p><h2 className="section-title mt-5">L'intelligence artificielle rencontre <span>l'intelligence humaine.</span></h2></div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div><Bot className="size-9 text-primary" /><h3 className="mt-5 text-xl font-black">Technologie utile</h3><p className="mt-3 leading-7 text-muted-foreground">Nous choisissons la bonne technologie pour votre enjeu, jamais l'inverse.</p></div>
            <div><TrendingUp className="size-9 text-primary" /><h3 className="mt-5 text-xl font-black">Valeur d'affaires</h3><p className="mt-3 leading-7 text-muted-foreground">Chaque initiative part d'un résultat attendu et d'une façon claire de le mesurer.</p></div>
            <div className="sm:col-span-2 border-t border-border pt-8"><Quote className="size-8 text-primary" /><blockquote className="mt-4 text-2xl font-bold leading-relaxed">« Nous ne livrons pas des démonstrations. Nous bâtissons des outils que vos équipes veulent réellement utiliser. »</blockquote></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div><p className="section-kicker">Passons à l'action</p><h2 className="section-title mt-5">Quel défi voulez-vous <span>résoudre avec l'IA?</span></h2><p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Une première conversation suffit pour clarifier votre occasion, évaluer sa faisabilité et définir la prochaine étape.</p><p className="mt-10 text-sm font-bold uppercase tracking-[0.14em]">Montréal · Toronto · À distance</p></div>
          {sent ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center border border-border bg-surface p-10 text-center"><span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-8" /></span><h3 className="mt-6 text-3xl font-black">Merci pour votre intérêt.</h3><p className="mt-3 max-w-md text-muted-foreground">Votre demande est prête. Reliez votre adresse courriel au formulaire avant la mise en ligne pour recevoir les messages.</p></div>
          ) : (
            <form onSubmit={submitContact} className="grid gap-5 border border-border bg-surface p-6 md:p-9">
              <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Nom complet<Input required name="name" placeholder="Votre nom" /></label><label className="form-label">Courriel professionnel<Input required type="email" name="email" placeholder="vous@entreprise.com" /></label></div>
              <label className="form-label">Entreprise<Input name="company" placeholder="Nom de votre entreprise" /></label>
              <label className="form-label">Votre défi<Textarea required name="message" placeholder="Parlez-nous de votre objectif, de votre processus ou de votre idée..." className="min-h-32" /></label>
              <Button type="submit" size="lg" className="mt-2 h-13 w-full text-base">Démarrer la conversation <ArrowRight /></Button>
              <p className="text-center text-xs text-muted-foreground">Nous vous répondrons dans un délai d'un jour ouvrable.</p>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border bg-foreground py-12 text-background">
        <div className="page-shell flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><Brand /><p className="mt-4 max-w-md text-sm leading-6 text-background/60">Des solutions d'intelligence artificielle conçues autour de vos ambitions d'affaires.</p></div><div className="flex flex-wrap gap-6 text-sm text-background/60"><a href="#services" className="hover:text-background">Services</a><a href="#a-propos" className="hover:text-background">À propos</a><a href="#contact" className="hover:text-background">Contact</a><span>© 2026 Kamel AI</span></div></div>
      </footer>
    </main>
  );
}
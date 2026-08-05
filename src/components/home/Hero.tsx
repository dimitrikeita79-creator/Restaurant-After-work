import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import etablissement1 from "@/assets/afterwork/Etablissement (1).jpeg";
import etablissement2 from "@/assets/afterwork/Etablissement (2).jpeg";
import etablissement3 from "@/assets/afterwork/Etablissement (3).jpeg";
import etablissement4 from "@/assets/afterwork/Etablissement (4).jpeg";
import etablissement5 from "@/assets/afterwork/Etablissement (5).jpeg";
import etablissement6 from "@/assets/afterwork/Etablissement (6).jpeg";
import etablissement7 from "@/assets/afterwork/Etablissement (7).jpeg";
import etablissement10 from "@/assets/afterwork/Etablissement (10).jpeg";
import plats2 from "@/assets/afterwork/Plats (2).jpeg";
import plats3 from "@/assets/afterwork/Plats (3).jpeg";
import evenement3 from "@/assets/After work/Evenement/Evenement 3.jpeg";

const slides = [
  {
    src: evenement3,
    alt: "Décoration et table d'un événement privé",
  },
  {
    src: etablissement1,
    alt: "Terrasse After Work vue de face",
  },
  {
    src: etablissement2,
    alt: "Ambiance festive du restaurant",
  },
  {
    src: etablissement3,
    alt: "Salle éclairée et décor événementiel",
  },
  {
    src: etablissement4,
    alt: "Espace extérieur pendant une soirée",
  },
  {
    src: etablissement5,
    alt: "Terrasse After Work avec installation extérieure",
  },
  {
    src: etablissement6,
    alt: "Tables et service dans l'établissement",
  },
  {
    src: etablissement7,
    alt: "Décoration d'un événement à After Work",
  },
  {
    src: etablissement10,
    alt: "Vue extérieure After Work en soirée",
  },
  {
    src: plats2,
    alt: "Plat gourmand du restaurant After Work",
  },
  {
    src: plats3,
    alt: "Assiette de spécialités à partager",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-background pt-24">
      <div className="mt-8 lg:mt-0">
        <div className="mx-auto grid min-h-[calc(100dvh-6rem)] w-full max-w-6xl 2xl:max-w-7xl grid-cols-1 items-end gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12 lg:pb-24 lg:px-8">

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl 2xl:max-w-4xl"
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              After Work Experience
            </div>

            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.5rem] 2xl:text-[7rem]">
              La nuit
              <br />
              commence <em className="not-italic text-primary">ici.</em>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 md:text-lg">
              Restauration, live karaoké et événements privés. Un lieu pensé pour
              prolonger la journée avec ceux qui comptent.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-9 sm:gap-3">
              <Link
                to="/reservation"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-8px_oklch(0.62_0.19_28/0.5)] transition-all hover:-translate-y-px hover:opacity-95 sm:px-7"
              >
                Réserver une table <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                to="/catalogue"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-foreground/5 sm:px-7"
              >
                Voir la carte
              </Link>
            </div>

          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass glass-strong relative overflow-hidden rounded-4xl bg-slate-950/5 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.25)]">
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="h-115 w-full object-cover sm:h-130 lg:h-155"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 rounded-3xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-950/10 backdrop-blur sm:left-6 sm:right-auto sm:w-auto">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100"
                  aria-label="Image précédente"
                >
                  <CaretLeft size={18} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100"
                  aria-label="Image suivante"
                >
                  <CaretRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="glass flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          Utilise les flèches pour changer d'image
        </motion.div>
      </motion.div>
    </section>
  );
}
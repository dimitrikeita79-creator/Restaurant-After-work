import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import etablissement2 from "@/assets/afterwork/Etablissement (2).jpeg";
import etablissement3 from "@/assets/afterwork/Etablissement (3).jpeg";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-background pt-24">

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
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-8px_oklch(0.62_0.19_28/0.5)] transition-all hover:translate-y-[-1px] hover:opacity-95 sm:px-7"
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
          className="relative hidden lg:block"
        >
          <div className="glass glass-strong relative overflow-hidden rounded-[2rem] aspect-[4/5] 2xl:aspect-[5/6]">
            <img
              src={etablissement2}
              alt="Ambiance festive au Restaurant After Work"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="glass glass-strong absolute -left-6 -bottom-6 hidden overflow-hidden rounded-3xl xl:block xl:h-40 xl:w-52 2xl:h-48 2xl:w-64">
            <img
              src={etablissement3}
              alt="Terrasse After Work"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
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
          Défilez <CaretDown size={12} weight="bold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
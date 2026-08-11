import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { createFileRoute } from "@tanstack/react-router";
import liveImage from "@/assets/After work/Evenement/live.jpeg";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: "Live — Restaurant After Work" },
      {
        name: "description",
        content:
          "Suivez les lives du Restaurant After Work à Ouagadougou : coupé décalé, rétro, zouglou et reggae les vendredis.",
      },
      { property: "og:title", content: "Live — Restaurant After Work" },
      { property: "og:url", content: "/live" },
    ],
    links: [{ rel: "canonical", href: "/live" }],
  }),
  component: LivePage,
});

function LivePage() {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Live</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Le live After Work.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tous les vendredis, la scène s’illumine avec des sets de coupé décalé, rétro, zouglou et reggae.
            Rendez-vous dès 16h pour l’ambiance, la musique et les bons moments partagés.
          </p>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-[2rem] overflow-hidden"
          >
            <img src={liveImage} alt="Live After Work" className="h-full min-h-[280px] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-[2rem] bg-slate-950/95 p-6 shadow-xl shadow-slate-950/15"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-black">Infos pratiques</h2>
                <p className="mt-3 text-sm leading-relaxed text-black-100">
                  Vendredi live coupé décalé, rétro, zouglou et reggae. Service bar et restauration sur place dès 16h.
                </p>
              </div>

              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-white">Horaires</p>
                  <p className="mt-3 text-slate-100">Mardi – Jeudi : dès 17h</p>
                  <p className="text-slate-100">Vendredi – Dimanche : dès 16h</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-white">Contact</p>
                  <p className="mt-3 text-slate-100">WhatsApp : +226 66 29 29 51</p>
                  <p className="text-slate-100">WhatsApp : +226 56 15 34 44</p>
                  <p className="text-slate-100">WhatsApp : +226 65 43 85 85</p>
                </div>
              </div>

              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-red/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-black">Ambiance</p>
                  <ul className="mt-3 space-y-2 text-black-300">
                    <li>Animation live et DJ.</li>
                    <li>Terrasse musicale et écran géant.</li>
                    <li>Cocktails, bières et plats à partager.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-red/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-black">Conseil</p>
                  <p className="mt-3 text-black-300">Réservez votre table en avance pour profiter d’une place face à la scène.</p>
                </div>
              </div>

              <Link
                to="/reservation"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-95 sm:w-auto"
              >
                Réserver une table
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

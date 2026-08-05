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

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-[2rem] overflow-hidden"
          >
            <img src={liveImage} alt="Live After Work" className="h-full min-h-[320px] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-[2rem] p-8"
          >
            <div className="space-y-5">
              <div>
                <h2 className="text-3xl font-semibold text-white">Infos pratiques</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Vendredi live coupé décalé, rétro, zouglou ou reggae.
                  Programmation à partir de 16h avec service bar et restauration sur place.
                </p>
              </div>

              <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 p-5">
                  <p className="font-semibold text-white">Horaires</p>
                  <p className="mt-3">Mardi – Jeudi : dès 17h</p>
                  <p>Vendredi – Dimanche : dès 16h</p>
                </div>
                <div className="rounded-3xl border border-white/10 p-5">
                  <p className="font-semibold text-white">Contact</p>
                  <p className="mt-3">WhatsApp : +226 65 43 85 85</p>
                  <p>WhatsApp : +226 56 15 34 44</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 p-5">
                <p className="font-semibold text-white">Ambiance</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Animation live et DJ présents.</li>
                  <li>• Terrasse musicale et écrans géants pour les grands matchs.</li>
                  <li>• Cocktails, bières et plats à partager.</li>
                </ul>
              </div>

              <Link
                to="/reservation"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-95"
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

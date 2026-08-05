import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { createFileRoute } from "@tanstack/react-router";
import event3 from "@/assets/After work/Evenement/Evenement 3.jpeg";
import event4 from "@/assets/After work/Evenement/Evenement 4.jpeg";

export const Route = createFileRoute("/evenement")({
  head: () => ({
    meta: [
      { title: "Événements — Restaurant After Work" },
      {
        name: "description",
        content:
          "Organisez vos anniversaires, mariages ou soirées privées au Restaurant After Work à Ouagadougou.",
      },
      { property: "og:title", content: "Événements — Restaurant After Work" },
      { property: "og:url", content: "/evenement" },
    ],
    links: [{ rel: "canonical", href: "/evenement" }],
  }),
  component: EventPage,
});

function EventPage() {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Événement</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Vos événements privés chez After Work.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Anniversaires, mariages, dîners d’entreprise ou soirées à thème : nous préparons une expérience complète avec restauration,
            service et décoration adaptés.
          </p>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-[2rem] p-8"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-white">Ce que nous proposons</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  De la planification à l’exécution, After Work s’occupe de tout : spots dédiés, menu sur mesure, boissons, animation et service.
                </p>
              </div>
              <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 p-5">
                  <p className="font-semibold text-white">Nos espaces</p>
                  <p className="mt-3">Terrasse privatisée, espace billard et salle couverte.</p>
                </div>
                <div className="rounded-3xl border border-white/10 p-5">
                  <p className="font-semibold text-white">Services</p>
                  <p className="mt-3">Traiteur, animation musicale, décor et organisation sur mesure.</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 p-5">
                <p className="font-semibold text-white">Renseignements</p>
                <p className="mt-3">WhatsApp : +226 65 43 85 85</p>
                <p>WhatsApp : +226 56 15 34 44</p>
              </div>
              <div className="rounded-3xl border border-white/10 p-5">
                <p className="font-semibold text-white">Horaires</p>
                <p className="mt-3">Mardi – Jeudi : dès 17h</p>
                <p>Vendredi – Dimanche : dès 16h</p>
              </div>
              <Link
                to="/reservation"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-95"
              >
                Organiser un événement
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5"
          >
            <div className="glass overflow-hidden rounded-[2rem]">
              <img src={event3} alt="Décoration d'événement" className="h-full min-h-[300px] w-full object-cover" />
            </div>
            <div className="glass overflow-hidden rounded-[2rem]">
              <img src={event4} alt="Soirée événementielle" className="h-full min-h-[300px] w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

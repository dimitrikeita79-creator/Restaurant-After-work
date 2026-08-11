import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import livePoster from "@/assets/After work/Evenement/live.jpeg";
import event3 from "@/assets/After work/Evenement/Evenement 3.jpeg";
import event4 from "@/assets/After work/Evenement/Evenement 4.jpeg";
import video1 from "@/assets/After work/Video/Video 1.mp4";
import video2 from "@/assets/After work/Video/Video 2.mp4";

const slides = [
  {
    title: "Live tous les vendredis",
    subtitle: "Coupé décalé, rétro, zouglou ou reggae.",
    to: "/live",
    src: video1,
    type: "video",
  },
  {
    title: "Soirées événementielles",
    subtitle: "Anniversaires, mariages, team building et fêtes privées.",
    to: "/evenement",
    src: video2,
    type: "video",
  },
  {
    title: "Ambiance After Work",
    subtitle: "Terrasse, musique et écrans géants pour vos soirées.",
    to: "/live",
    src: livePoster,
    type: "image",
  },
  {
    title: "Événements sur mesure",
    subtitle: "Espace privatif, traiteur et décoration personnalisée.",
    to: "/evenement",
    src: event3,
    type: "image",
  },
];

export function LiveEventPreview() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Live & événements</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Découvrez nos soirées live et nos offres événementielles.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Mardi au jeudi à partir de 17h. Vendredi, samedi, dimanche dès 16h avec live.
              Réservation WhatsApp, tables et événements privés disponibles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/live"
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
            >
              Voir les lives
            </Link>
            <Link
              to="/evenement"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Voir les événements
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/30"
          >
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="mb-6 space-y-3">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Aperçu</span>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{slide.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{slide.subtitle}</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950/90">
                {slide.type === "video" ? (
                  <video
                    key={slide.src}
                    src={slide.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-[520px] w-full object-cover sm:h-[620px]"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="h-[520px] w-full object-cover sm:h-[620px]"
                  />
                )}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((index + 1) % slides.length)}
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  Suivant
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30">
              <h3 className="font-display text-2xl text-slate-900">Informations pratiques</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <li>📍 Ouaga 2000, à gauche du 2ème feu après l'échangeur.</li>
                <li>🕒 Mardi à jeudi : dès 17h.</li>
                <li>🕓 Vendredi, samedi, dimanche : dès 16h.</li>
                <li>🎶 Vendredi : coupé décalé, rétro, zouglou ou reggae en live.</li>
                <li>📱 WhatsApp : +226 66 29 29 51 / +226 56 15 34 44 / +226 65 43 85 85.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30">
              <h3 className="font-display text-2xl text-slate-900">Votre soirée</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Une expérience After Work pensée pour les groupes, les soirées entre amis et les événements privés.
                Commande, réservation et organisation sur mesure dans un même lieu.
              </p>
              <div className="mt-6 grid gap-3">
                <Link
                  to="/live"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  En savoir plus sur le live
                </Link>
                <Link
                  to="/evenement"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Voir nos événements
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

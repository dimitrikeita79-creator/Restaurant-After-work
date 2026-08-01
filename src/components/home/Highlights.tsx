import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import food from "@/assets/afterwork/Plats (2).jpeg";
import karaoke from "@/assets/afterwork/1.jpeg";
import events from "@/assets/afterwork/Etablissement (4).jpeg";

const items = [
  {
    title: "Restauration",
    body: "Une carte courte, exécutée avec soin. Produits frais, dressage soigné.",
    img: food,
    to: "/catalogue",
    cta: "Voir la carte",
    span: "md:col-span-3 md:row-span-2",
    h: "h-[480px] md:h-full",
  },
  {
    title: "Live tous les samedis",
    body: "Scène ouverte dès 20h. Artistes invités, karaoké et ambiance.",
    img: karaoke,
    to: "/reservation",
    cta: "Réserver une scène",
    span: "md:col-span-3",
    h: "h-[280px]",
  },
  {
    title: "Traiteur & événements",
    body: "Anniversaires, mariages, dîners d'entreprise. Sur mesure.",
    img: events,
    to: "/reservation",
    cta: "Organiser un événement",
    span: "md:col-span-3",
    h: "h-[280px]",
  },
] as const;

export function Highlights() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
            Trois manières de vivre l&apos;After Work.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 md:auto-rows-[280px] lg:auto-rows-[300px] 2xl:auto-rows-[340px]">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className={`glass group relative overflow-hidden rounded-3xl ${it.span} ${it.h}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-5 text-white sm:p-7">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl">{it.title}</h3>
                <p className="mt-2 max-w-md text-sm text-white/75">{it.body}</p>
                <Link
                  to={it.to}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-medium backdrop-blur transition-colors hover:bg-white/25 sm:mt-5"
                >
                  {it.cta}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
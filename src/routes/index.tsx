import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { Gallery } from "@/components/home/Gallery";
import { motion } from "motion/react";
import etablissement10 from "@/assets/afterwork/Etablissement (10).jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurant After Work — Ouagadougou" },
      {
        name: "description",
        content:
          "Cuisine soignée, live karaoké et événements privés à Ouagadougou. Réservez une table ou organisez votre soirée.",
      },
      { property: "og:title", content: "Restaurant After Work" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <ImageBand />
      <Gallery />
    </>
  );
}

function ImageBand() {
  return (
    <section className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl"
        >
          <img
            src={etablissement10}
            alt="Brochettes grillées et ambiance table"
            loading="lazy"
            className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px] 2xl:h-[620px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/70">La table</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
              Espace calme , plaisirs partagés.
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
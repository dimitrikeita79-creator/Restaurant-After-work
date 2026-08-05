import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ImagePreview } from "@/components/ux/ImagePreview";
import etablissement1 from "@/assets/afterwork/Etablissement (1).jpeg";
import etablissement2 from "@/assets/afterwork/Etablissement (2).jpeg";
import etablissement3 from "@/assets/afterwork/Etablissement (3).jpeg";
import etablissement5 from "@/assets/afterwork/Etablissement (5).jpeg";
import etablissement6 from "@/assets/afterwork/Etablissement (6).jpeg";
import etablissement7 from "@/assets/afterwork/Etablissement (7).jpeg";
import etablissement8 from "@/assets/afterwork/Etablissement (8).jpeg";
import etablissement9 from "@/assets/afterwork/Etablissement (9).jpeg";
import etablissement11 from "@/assets/After work/Etablissement/Etablissement 11.jpeg";
import etablissement12 from "@/assets/After work/Etablissement/Etablissement 12.jpeg";

const shots = [
  { src: etablissement1, alt: "Entrée de l'établissement After Work", pos: "object-center" },
  { src: etablissement2, alt: "Ambiance festive du restaurant", pos: "object-center" },
  { src: etablissement3, alt: "Salle accueillante et décoration chaleureuse", pos: "object-center" },
  { src: etablissement5, alt: "Terrasse After Work avec installation extérieure", pos: "object-center" },
  { src: etablissement6, alt: "Tables et service dans l'établissement", pos: "object-center" },
  { src: etablissement7, alt: "Décoration d'un événement privé", pos: "object-[center_35%]" },
  { src: etablissement8, alt: "Ambiance de soirée sur écran géant", pos: "object-center" },
  { src: etablissement9, alt: "Façade lumineuse After Work la nuit", pos: "object-center" },
  { src: etablissement11, alt: "Intérieur cosy et bar After Work", pos: "object-center" },
  { src: etablissement12, alt: "Table dressée pour un événement privé", pos: "object-center" },
];

const allImages = shots.map((s) => s.src);

export function Gallery() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const openPreview = useCallback((idx: number) => {
    setPreviewIndex(idx);
    setPreviewOpen(true);
  }, []);
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-28 lg:px-8">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Le lieu</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              Une adresse à Ouaga 2000.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Terrasse ouverte, éclairage chaud, écran géant les soirs de match. Pensé pour se poser longtemps.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-6">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              onClick={() => openPreview(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm transition hover:shadow-lg sm:aspect-4/5 md:aspect-3/4"
              aria-label="Agrandir l'image"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={`h-full w-full object-cover ${s.pos} transition-transform duration-700 ease-out group-hover:scale-[1.08]`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <ImagePreview
        images={allImages}
        index={previewIndex}
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onIndexChange={setPreviewIndex}
      />
    </section>
  );
}

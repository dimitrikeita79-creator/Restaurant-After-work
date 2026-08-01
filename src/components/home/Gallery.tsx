import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ImagePreview } from "@/components/ux/ImagePreview";
import etablissement5 from "@/assets/afterwork/Etablissement (5).jpeg";
import etablissement6 from "@/assets/afterwork/Etablissement (6).jpeg";
import etablissement7 from "@/assets/afterwork/Etablissement (7).jpeg";
import etablissement8 from "@/assets/afterwork/Etablissement (8).jpeg";
import etablissement9 from "@/assets/afterwork/Etablissement (9).jpeg";

const shots = [
  { src: etablissement9, alt: "Façade lumineuse After Work la nuit", pos: "object-center" },
  { src: etablissement6, alt: "Terrasse à l'heure bleue", pos: "object-center" },
  { src: etablissement7, alt: "Notre chef au buffet événementiel", pos: "object-[center_35%]" },
  { src: etablissement8, alt: "Ambiance de soirée sur écran géant", pos: "object-center" },
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              onClick={() => openPreview(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]"
              aria-label="Agrandir l'image"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover ${s.pos} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/15">
                <span className="scale-0 rounded-full bg-white/20 p-2.5 backdrop-blur transition-transform duration-300 group-hover:scale-100">
                  <MagnifyingGlass size={18} weight="bold" className="text-white" />
                </span>
              </div>
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

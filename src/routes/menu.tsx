import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { ImagePreview } from "@/components/ux/ImagePreview";
import menu1 from "@/assets/afterwork/Menu (1).jpeg";
import menu2 from "@/assets/afterwork/Menu (2).jpeg";
import menu3 from "@/assets/afterwork/Menu (3).jpeg";
import menu4 from "@/assets/afterwork/Menu (4).jpeg";

const menuImages = [menu1, menu2, menu3, menu4];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Restaurant After Work" },
      {
        name: "description",
        content:
          "Découvrez le menu du Restaurant After Work à Ouagadougou. Consultez notre carte et laissez-vous tenter.",
      },
      { property: "og:title", content: "Menu — Restaurant After Work" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const openPreview = useCallback((idx: number) => {
    setPreviewIndex(idx);
    setPreviewOpen(true);
  }, []);

  return (
    <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Notre carte
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
            Le menu.
          </h1>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Feuilletez notre menu. Cliquez sur une image pour l'afficher en plein écran.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {menuImages.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => openPreview(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-3xl"
              aria-label="Agrandir le menu"
            >
              <div className="aspect-[3/4] sm:aspect-auto sm:h-[600px] lg:h-[700px]">
                <img
                  src={src}
                  alt={`Menu After Work page ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                <span className="scale-0 rounded-full bg-white/20 p-3 backdrop-blur transition-transform duration-300 group-hover:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ImagePreview
        images={menuImages}
        index={previewIndex}
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onIndexChange={setPreviewIndex}
      />
    </section>
  );
}
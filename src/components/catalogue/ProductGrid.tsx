import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, MagnifyingGlass, Check, CaretDown } from "@phosphor-icons/react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { ImagePreview } from "@/components/ux/ImagePreview";

type Sort = "default" | "asc" | "desc";

export function ProductGrid() {
  const [cat, setCat] = useState<Category>("Tous");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("default");
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const add = useCart((s) => s.add);

  const openPreview = useCallback((images: string[], idx: number) => {
    setPreviewImages(images);
    setPreviewIndex(idx);
    setPreviewOpen(true);
  }, []);

  const items = useMemo(() => {
    let list = cat === "Tous" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
      );
    }
    if (sort === "asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "desc") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [cat, query, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <div className="glass glass-strong relative rounded-full">
            <MagnifyingGlass
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un plat, un cocktail..."
              className="w-full rounded-full bg-transparent py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="glass glass-strong relative rounded-full">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              aria-label="Trier les produits"
              className="w-full appearance-none rounded-full bg-transparent py-3 pl-5 pr-10 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&>option]:bg-background [&>option]:text-foreground"
            >
              <option value="default">Trier</option>
              <option value="asc">A → Z</option>
              <option value="desc">Z → A</option>
            </select>
            <CaretDown
              size={14}
              weight="bold"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-all ${
                cat === c
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ImagePreview
        images={previewImages}
        index={previewIndex}
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onIndexChange={setPreviewIndex}
      />

      <AnimatePresence mode="popLayout">
        {items.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass grid place-items-center rounded-3xl p-12 text-center"
          >
            <div>
              <p className="font-display text-3xl">Rien à se mettre sous la dent.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Essayez un autre mot-clé ou changez de catégorie.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {items.map((p, i) => {
              const added = justAdded === p.id;
              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(i, 8) * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="glass group relative flex flex-col overflow-hidden rounded-3xl"
                >
                  <button
                    onClick={() => {
                      const catImages = PRODUCTS.filter((x) => x.category === p.category).map((x) => x.image);
                      openPreview(catImages, catImages.indexOf(p.image));
                    }}
                    className="relative aspect-[4/3] w-full overflow-hidden text-left"
                    aria-label="Agrandir l'image"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                      <span className="scale-0 rounded-full bg-white/20 p-2.5 backdrop-blur transition-transform duration-300 group-hover:scale-100">
                        <MagnifyingGlass size={18} weight="bold" className="text-white" />
                      </span>
                    </div>
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">
                        {p.category}
                      </p>
                    </div>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
                    <button
                      onClick={() => {
                        add({ id: p.id, name: p.name, image: p.image });
                        setJustAdded(p.id);
                        setTimeout(() => setJustAdded((id) => (id === p.id ? null : id)), 1200);
                      }}
                      className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                        added
                          ? "bg-accent text-accent-foreground"
                          : "bg-foreground/10 hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {added ? (
                          <motion.span
                            key="ok"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            className="inline-flex items-center gap-2"
                          >
                            <Check size={14} weight="bold" /> Ajouté
                          </motion.span>
                        ) : (
                          <motion.span
                            key="add"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            className="inline-flex items-center gap-2"
                          >
                            <Plus size={14} weight="bold" /> Ajouter au panier
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/catalogue/ProductGrid";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Restaurant After Work" },
      {
        name: "description",
        content:
          "Plats, cocktails signature, boissons et desserts. Ajoutez à votre panier et commandez directement.",
      },
      { property: "og:title", content: "Catalogue — Restaurant After Work" },
      { property: "og:url", content: "/catalogue" },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Notre carte
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
            La carte du soir.
          </h1>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Une sélection courte, renouvelée selon les arrivages. Tout est cuisiné sur
            place.
          </p>
        </header>
        <ProductGrid />
      </div>
    </section>
  );
}
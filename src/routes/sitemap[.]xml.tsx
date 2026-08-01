import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "Sitemap — Restaurant After Work" },
      {
        name: "description",
        content:
          "The sitemap route exists for SPA compatibility. The actual sitemap.xml file is served from the public folder.",
      },
    ],
    links: [{ rel: "canonical", href: "/sitemap.xml" }],
  }),
});

function SitemapPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold">Sitemap</h1>
      <p className="mt-4 text-muted-foreground">
        The sitemap.xml file is served from the public folder at <code>/sitemap.xml</code>.
      </p>
    </main>
  );
}

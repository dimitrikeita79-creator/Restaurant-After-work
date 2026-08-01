import { createFileRoute } from "@tanstack/react-router";
import { ReservationForm } from "@/components/reservation/ReservationForm";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Réservation — Restaurant After Work" },
      {
        name: "description",
        content:
          "Réservez votre table, anniversaire, mariage ou événement privé. Confirmation rapide par WhatsApp.",
      },
      { property: "og:title", content: "Réservation — Restaurant After Work" },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Réservation
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
            Gardez-nous
            <br />
            <em className="not-italic text-primary">une place.</em>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:mt-5 sm:text-base">
            Table, anniversaire, mariage ou événement privé. Nous confirmons sur
            WhatsApp.
          </p>
        </header>
        <ReservationForm />
      </div>
    </section>
  );
}
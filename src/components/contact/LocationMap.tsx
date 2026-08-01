import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { MapPin, NavigationArrow, Phone } from "@phosphor-icons/react";
import { motion } from "motion/react";

export const LOCATION = {
  name: "Restaurant-Terrasse After Work",
  address: "Ouagadougou, Burkina Faso",
  lat: 12.321837,
  lng: -1.5016749,
  mapsUrl: "https://maps.app.goo.gl/5p6c8v1GzuXsVj8s9",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=12.321837,-1.5016749",
};

export function LocationMap() {
  const embed = `https://www.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&z=16&output=embed`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass overflow-hidden rounded-3xl"
    >
      <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-5 p-7 md:p-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <MapPin size={14} /> Localisation
          </div>
          <h3 className="font-display text-3xl leading-tight md:text-4xl">
            {LOCATION.name}
          </h3>
          <p className="text-sm text-muted-foreground">{LOCATION.address}</p>

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <a
              href={LOCATION.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <NavigationArrow size={16} weight="fill" /> Itinéraire
            </a>
            <a
              href={LOCATION.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium"
            >
              <MapPin size={16} /> Voir sur Maps
            </a>
          </div>

          <div className="mt-3 grid gap-2 text-sm">
            <a href="tel:+22606444464" className="inline-flex items-center gap-2 hover:text-accent">
              <Phone size={14} /> +226 06 44 44 64
            </a>
            <a
              href="https://wa.me/22665438585"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <WhatsAppIcon size={14} /> +226 65 43 85 85
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] md:min-h-[440px]">
          <iframe
            title={`Carte — ${LOCATION.name}`}
            src={embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
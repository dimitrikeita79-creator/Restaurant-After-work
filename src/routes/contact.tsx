import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { LocationMap } from "@/components/contact/LocationMap";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Restaurant After Work" },
      {
        name: "description",
        content:
          "Téléphone, WhatsApp, adresse et horaires du Restaurant After Work à Ouagadougou.",
      },
      { property: "og:title", content: "Contact — Restaurant After Work" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const actions = [
  {
    title: "Appeler",
    value: "+226 06 44 44 64",
    href: "tel:+22606444464",
    Icon: Phone,
    bg: "bg-primary",
    fg: "text-primary-foreground",
  },
  {
    title: "WhatsApp",
    value: "+226 66 29 29 51",
    href: "https://wa.me/22666292951",
    Icon: WhatsAppIcon,
    bg: "bg-accent",
    fg: "text-accent-foreground",
  },
  {
    title: "WhatsApp",
    value: "+226 56 15 34 44",
    href: "https://wa.me/22656153444",
    Icon: WhatsAppIcon,
    bg: "bg-accent",
    fg: "text-accent-foreground",
  },
  {
    title: "WhatsApp",
    value: "+226 65 43 85 85",
    href: "https://wa.me/22665438585",
    Icon: WhatsAppIcon,
    bg: "bg-accent",
    fg: "text-accent-foreground",
  },
];

function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
            Un appel suffit.
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Réservation, événements privés, demandes spéciales — choisissez le canal qui
            vous arrange.
          </p>
        </motion.header>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {actions.map(({ title, value, href, Icon, bg, fg }, i) => (
            <motion.a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="glass group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl p-5 transition-all hover:bg-foreground/5 sm:p-7"
            >
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {title}
                </p>
                <p className="mt-2 truncate font-display text-2xl tabular-nums sm:text-3xl">
                  {value}
                </p>
              </div>
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full sm:h-14 sm:w-14 ${bg} ${fg}`}>
                <Icon size={22} weight="fill" />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 sm:p-7"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Clock size={14} /> Horaires
            </div>
            <ul className="mt-4 space-y-2 text-base">
              <li className="flex justify-between"><span>Mardi – Vendredi</span><span className="tabular-nums">17h – 02h</span></li>
              <li className="flex justify-between"><span>Samedi – Dimanche</span><span className="tabular-nums">16h – 02h</span></li>
              <li className="flex justify-between text-muted-foreground"><span>Lundi</span><span>Fermé</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-6 sm:p-7"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Réseaux</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Suivez-nous pour les soirées karaoké et événements à venir.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://www.tiktok.com/@.afterwork" target="_blank" rel="noreferrer" className="glass grid h-12 w-12 place-items-center rounded-full hover:bg-foreground/5"><TiktokLogo size={20} weight="fill" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="glass grid h-12 w-12 place-items-center rounded-full hover:bg-foreground/5"><InstagramLogo size={20} weight="duotone" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="glass grid h-12 w-12 place-items-center rounded-full hover:bg-foreground/5"><FacebookLogo size={20} weight="duotone" /></a>
              <a href="https://wa.me/22666292951" target="_blank" rel="noreferrer" className="glass grid h-12 w-12 place-items-center rounded-full hover:bg-foreground/5"><WhatsAppIcon size={20}  /></a>
            </div>
          </motion.div>
        </div>

        <div className="mt-5">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
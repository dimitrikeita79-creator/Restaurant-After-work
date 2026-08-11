import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, NavigationArrow } from "@phosphor-icons/react";
import { LOCATION } from "@/components/contact/LocationMap";
import logo from "@/assets/afterwork/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 px-4 pb-10 sm:mt-32 sm:pb-10">
      <div className="glass glass-strong mx-auto max-w-6xl 2xl:max-w-7xl rounded-3xl p-6 sm:p-8 md:p-12">
        <div className="grid gap-10 text-center md:grid-cols-[1.3fr_1fr_1fr_1fr] md:text-left">
          <div>
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <img
                src={logo}
                alt="After Work"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full bg-foreground/5 object-cover ring-1 ring-foreground/10"
              />
              <span className="font-display text-xl">Restaurant After Work</span>
            </div>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:mx-0">
              Restauration, live karaoké et traiteur événementiel. L&apos;heure d&apos;après
              le travail, transformée en moment.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Nous trouver
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              {LOCATION.name}
              <br />
              <span className="text-muted-foreground">{LOCATION.address}</span>
            </p>
            <div className="mt-3 flex flex-col items-center gap-1.5 md:items-start">
              <a
                href={LOCATION.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                <NavigationArrow size={14} weight="fill" /> Itinéraire
              </a>
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <MapPin size={14} /> Voir sur Maps
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Horaires
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>Mardi - Vendredi : 17h - 02h</li>
              <li>Samedi - Dimanche : 16h - 02h</li>
              <li className="text-muted-foreground">Lundi : fermé</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-center md:justify-start">
                <a
                  href="tel:+22606444464"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Phone size={16} /> +226 06 44 44 64
                </a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a
                  href="https://wa.me/22666292951"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <WhatsAppIcon size={16} /> +226 66 29 29 51
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} After Work. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/reservation" className="hover:text-foreground">Réserver</Link>
            <Link to="/catalogue" className="hover:text-foreground">Catalogue</Link>
            <Link to="/menu" className="hover:text-foreground">Menu</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
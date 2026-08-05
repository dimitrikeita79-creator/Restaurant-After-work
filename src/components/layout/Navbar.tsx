import { Link } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { List, X, Basket } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useCart } from "@/lib/cart-store";
import logo from "@/assets/afterwork/logo.png";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/menu", label: "Menu" },
  { to: "/live", label: "Live" },
  { to: "/evenement", label: "Événements" },
  { to: "/reservation", label: "Réservation" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const cartCount = useCart((s) => s.lines.reduce((a, l) => a + l.qty, 0));
  const openCart = useCart((s) => s.open);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 24));

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4 md:pt-6"
    >
      <nav
        className={cn(
          "glass glass-strong mx-auto grid max-w-6xl 2xl:max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 sm:py-2.5",
          solid && "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)]",
        )}
      >
        <Link to="/" className="flex min-w-0 items-center gap-2.5 pl-1 sm:pl-2">
          <img
            src={logo}
            alt="After Work"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-full bg-foreground/5 object-cover ring-1 ring-foreground/10"
          />
          <span className="truncate font-display text-lg tracking-tight">After Work</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex lg:justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground bg-foreground/10" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={openCart}
            aria-label={`Ouvrir le panier (${cartCount} article${cartCount > 1 ? "s" : ""})`}
            className="glass relative grid h-10 w-10 place-items-center overflow-visible rounded-full text-foreground transition-colors hover:bg-foreground/10"
          >
            <Basket size={20} weight="duotone" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 16 }}
                className="pointer-events-none absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground ring-2 ring-background"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
          <Link
            to="/reservation"
            className="hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-95 lg:inline-flex"
          >
            Réserver
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground/80 hover:bg-foreground/10 lg:hidden"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden"
        >
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-foreground/10" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-1">
              <Link
                to="/reservation"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
              >
                Réserver une table
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
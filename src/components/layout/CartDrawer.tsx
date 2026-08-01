import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus, X } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-store";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);

  // Lock page scroll (incl. Lenis) while drawer is open so the panel stays
  // pinned to the viewport regardless of where the user was on the page.
  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.classList.add("cart-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      html.classList.remove("cart-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  const orderMessage = encodeURIComponent(
    `Bonjour After Work, je souhaite commander :\n\n${lines
      .map((l) => `- ${l.name} x${l.qty}`)
      .join("\n")}`,
  );
  const waUrl = `https://wa.me/22665438585?text=${orderMessage}`;

  const tree = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
            className="glass glass-strong fixed right-0 top-0 z-[101] flex h-[100dvh] w-full max-w-md flex-col rounded-l-3xl"
            style={{ position: "fixed" }}
            data-lenis-prevent
            role="dialog"
            aria-label="Panier"
          >
            <header className="hairline flex items-center justify-between border-b px-5 py-4 sm:px-6 sm:py-5">
              <h2 className="font-display text-2xl">Votre panier</h2>
              <button
                onClick={close}
                aria-label="Fermer"
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-foreground/10"
              >
                <X size={18} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {lines.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-display text-2xl">Le panier est vide</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Découvrez notre carte et ajoutez vos plats favoris.
                    </p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-4">
                  {lines.map((l) => (
                    <motion.li
                      layout
                      key={l.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="glass-solid flex gap-3 rounded-2xl p-3"
                    >
                      <img
                        src={l.image}
                        alt={l.name}
                        width={72}
                        height={72}
                        loading="lazy"
                        className="h-[72px] w-[72px] flex-none rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-medium leading-tight">{l.name}</p>
                          <button
                            onClick={() => remove(l.id)}
                            aria-label="Retirer"
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="hairline inline-flex items-center gap-1 rounded-full border p-0.5">
                            <button
                              aria-label="Diminuer"
                              onClick={() => setQty(l.id, l.qty - 1)}
                              className="grid h-7 w-7 place-items-center rounded-full hover:bg-foreground/10"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="min-w-6 text-center text-sm">{l.qty}</span>
                            <button
                              aria-label="Augmenter"
                              onClick={() => setQty(l.id, l.qty + 1)}
                              className="grid h-7 w-7 place-items-center rounded-full hover:bg-foreground/10"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            <footer className="hairline border-t px-5 py-5 sm:px-6" style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}>
              <a
                href={lines.length ? waUrl : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={lines.length === 0}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-95 ${lines.length === 0 ? "pointer-events-none opacity-50" : ""}`}
              >
                <WhatsAppIcon size={18}  /> Commander sur WhatsApp
              </a>
              {lines.length > 0 && (
                <button
                  onClick={clear}
                  className="mt-2 w-full text-xs text-muted-foreground hover:text-foreground"
                >
                  Vider le panier
                </button>
              )}
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(tree, document.body);
}
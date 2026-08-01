import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp } from "@phosphor-icons/react";
import { useState } from "react";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 600));
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="stt"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Revenir en haut"
          className="glass glass-strong fixed bottom-5 right-5 z-[80] grid h-11 w-11 place-items-center rounded-full text-foreground shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)] sm:bottom-6 sm:right-6"
          style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
        >
          <ArrowUp size={18} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
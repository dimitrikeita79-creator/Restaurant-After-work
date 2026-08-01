import { Sun, Moon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      className={`glass relative grid h-10 w-10 place-items-center overflow-hidden rounded-full text-foreground transition-colors hover:bg-foreground/10 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -14, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? <Sun size={18} weight="duotone" /> : <Moon size={18} weight="duotone" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function NotFound() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 70, damping: 14 });
  const sy = useSpring(y, { stiffness: 70, damping: 14 });
  const rotX = useTransform(sy, [-1, 1], [8, -8]);
  const rotY = useTransform(sx, [-1, 1], [-12, 12]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set((e.clientX - cx) / cx);
      y.set((e.clientY - cy) / cy);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <section className="relative grid min-h-[100dvh] place-items-center overflow-hidden px-4 pb-16 pt-28 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_40%,oklch(0.62_0.19_28/0.35),transparent_70%)]" />

      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
        initial={{ opacity: 0, scale: 0.92, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="glass glass-strong relative mx-auto w-full max-w-xl rounded-[2rem] p-7 text-center sm:rounded-[2.5rem] sm:p-10 md:p-14"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Erreur 404
        </p>
        <h1 className="mt-5 font-display text-5xl leading-none tracking-tight sm:text-6xl md:text-8xl">
          Page
          <br />
          <em className="not-italic text-primary">introuvable.</em>
        </h1>
        <p className="mx-auto mt-5 max-w-sm text-sm text-muted-foreground">
          Cette expérience n&apos;existe pas encore. La table est ailleurs.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-95 sm:px-6"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            to="/catalogue"
            className="glass inline-flex items-center rounded-full px-5 py-3 text-sm font-medium hover:bg-foreground/5 sm:px-6"
          >
            Explorer la carte
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
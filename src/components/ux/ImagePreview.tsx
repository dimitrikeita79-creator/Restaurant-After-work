import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { createPortal } from "react-dom";

type ImagePreviewProps = {
  images: string[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function ImagePreview({ images, index, open, onClose, onIndexChange }: ImagePreviewProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = index + dir;
      if (next >= 0 && next < images.length) onIndexChange(next);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, go]);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => { html.style.overflow = prev; };
  }, [open]);

  if (!mounted) return null;

  const tree = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu de l'image"
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 backdrop-blur transition-colors hover:bg-white/20 hover:text-white"
          >
            <X size={20} weight="bold" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                disabled={index <= 0}
                aria-label="Image précédente"
                className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white/80 backdrop-blur transition-colors hover:bg-white/20 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <CaretLeft size={22} weight="bold" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); go(1); }}
                disabled={index >= images.length - 1}
                aria-label="Image suivante"
                className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white/80 backdrop-blur transition-colors hover:bg-white/20 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <CaretRight size={22} weight="bold" />
              </button>
            </>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-h-[90dvh] max-w-[95vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index]}
              alt=""
              className="max-h-[90dvh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
              {index + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(tree, document.body);
}

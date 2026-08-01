import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "@phosphor-icons/react";
import { GlassInput, GlassSelect, GlassTextarea } from "@/components/glass/Glass";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  phone: z.string().min(7, "Téléphone requis"),
  date: z.string().min(1, "Date requise"),
  time: z.string().min(1, "Heure requise"),
  type: z.enum(["Table", "Anniversaire", "Mariage", "Événement privé"]),
  guests: z.coerce.number().int().min(1, "Au moins 1 personne").max(300),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: "Table", guests: 2 },
    mode: "onBlur",
  });

  const values = watch();

  const onSubmit = async (data: FormValues) => {
    const text = encodeURIComponent(
      `Réservation After Work\n\nNom: ${data.name}\nTéléphone: ${data.phone}\nType: ${data.type}\nDate: ${data.date} à ${data.time}\nPersonnes: ${data.guests}\n\n${data.message ?? ""}`,
    );
    window.open(`https://wa.me/22665438585?text=${text}`, "_blank");
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset({ type: "Table", guests: 2 } as FormValues);
  };

  return (
    <div className="glass glass-strong rounded-3xl p-5 sm:p-6 md:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="grid place-items-center py-12 text-center sm:py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-accent"
            >
              <Check size={36} weight="bold" className="text-accent-foreground" />
            </motion.div>
            <h3 className="mt-6 font-display text-3xl">Demande envoyée</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Nous revenons vers vous sur WhatsApp pour confirmer votre réservation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-accent hover:underline"
            >
              Faire une autre réservation
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-5"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nom complet" error={errors.name?.message}>
                <GlassInput placeholder="Awa Konaté" {...register("name")} />
              </Field>
              <Field label="Téléphone / WhatsApp" error={errors.phone?.message}>
                <GlassInput
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+226 ..."
                  {...register("phone")}
                />
              </Field>
              <Field label="Date" error={errors.date?.message}>
                <GlassInput type="date" {...register("date")} />
              </Field>
              <Field label="Heure" error={errors.time?.message}>
                <GlassInput type="time" {...register("time")} />
              </Field>
              <Field label="Type d'événement" error={errors.type?.message}>
                <GlassSelect {...register("type")}>
                  <option>Table</option>
                  <option>Anniversaire</option>
                  <option>Mariage</option>
                  <option>Événement privé</option>
                </GlassSelect>
              </Field>
              <Field label="Nombre de personnes" error={errors.guests?.message}>
                <GlassInput
                  type="number"
                  min={1}
                  max={300}
                  inputMode="numeric"
                  {...register("guests")}
                />
              </Field>
            </div>

            <Field label="Message (optionnel)" error={errors.message?.message}>
              <GlassTextarea
                rows={4}
                placeholder="Allergies, demande spéciale, occasion..."
                {...register("message")}
              />
            </Field>

            <div className="mt-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                {values.type} · {values.guests || 0} pers.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-95 disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Envoi..." : "Confirmer la réservation"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-primary">{error}</span>}
    </label>
  );
}
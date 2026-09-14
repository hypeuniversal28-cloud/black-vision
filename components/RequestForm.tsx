"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { categories } from "@/lib/categories";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const fieldLabel =
  "block text-xs font-semibold tracking-[0.18em] text-ink-faint mb-3";
const fieldBase =
  "w-full border-0 border-b border-line bg-transparent pb-3 text-lg text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

export default function RequestForm({
  defaultCategory,
}: {
  defaultCategory?: string;
}) {
  const t = useTranslations();
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      if (!data?.whatsappUrl) throw new Error("Missing destination");
      setWhatsappUrl(data.whatsappUrl);
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <Reveal className="flex flex-col items-center gap-5 border border-line bg-surface px-8 py-16 text-center md:py-20">
        <span className="bv-eyebrow">{t("form.confirmEyebrow")}</span>
        <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {t("form.confirmTitle")}
        </h3>
        <p className="max-w-[42ch] text-ink-dim">{t("form.confirmBody")}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.02]"
        >
          {t("form.sendButton")}
        </a>
        <p className="max-w-[42ch] text-sm text-ink-faint">{t("form.confirmNote")}</p>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14">
      <div>
        <label htmlFor="need" className={fieldLabel}>
          {t("form.needLabel")}
        </label>
        <textarea
          id="need"
          name="need"
          required
          rows={3}
          placeholder={t("form.needPlaceholder")}
          className={`${fieldBase} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="reference_link" className={fieldLabel}>
          {t("form.linkLabel")}
        </label>
        <input
          id="reference_link"
          name="reference_link"
          type="url"
          placeholder={t("form.linkPlaceholder")}
          className={fieldBase}
        />
        <p className="mt-3 text-xs leading-relaxed text-ink-faint">{t("form.linkNote")}</p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className={fieldLabel}>
            {t("form.categoryLabel")}
          </label>
          <select
            id="category"
            name="category"
            defaultValue={defaultCategory ?? ""}
            required
            className={`${fieldBase} appearance-none`}
          >
            <option value="" disabled>
              {t("form.categoryPlaceholder")}
            </option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {t(`categories.${c.slug}.navLabel`)}
              </option>
            ))}
            <option value="other">{t("form.categoryOther")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={fieldLabel}>
            {t("form.budgetLabel")}
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder={t("form.budgetPlaceholder")}
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor="quantity" className={fieldLabel}>
            {t("form.quantityLabel")}
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            placeholder={t("form.quantityPlaceholder")}
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor="destination" className={fieldLabel}>
            {t("form.destinationLabel")}
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            placeholder={t("form.destinationPlaceholder")}
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor="deadline" className={fieldLabel}>
            {t("form.deadlineLabel")}
          </label>
          <input id="deadline" name="deadline" type="date" className={fieldBase} />
        </div>
      </div>

      <div>
        <label htmlFor="details" className={fieldLabel}>
          {t("form.detailsLabel")}
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder={t("form.detailsPlaceholder")}
          className={`${fieldBase} resize-none`}
        />
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={fieldLabel}>
            {t("form.nameLabel")}
          </label>
          <input id="name" name="name" type="text" required className={fieldBase} />
        </div>
        <div>
          <label htmlFor="contact" className={fieldLabel}>
            {t("form.contactLabel")}
          </label>
          <input id="contact" name="contact" type="text" required className={fieldBase} />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? t("form.submitting") : t("form.submitLabel")}
        </button>
        {status === "error" && (
          <p className="text-sm text-ink-dim">
            {t("form.errorText")}{" "}
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {t("form.errorLinkText")}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

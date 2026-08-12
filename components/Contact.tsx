"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { contact, contactFormServices, brand } from "@/data/content";

type Status = "idle" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email.";
    if (!message) newErrors.message = "Please add a short message.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No backend is connected yet. Wire this up to Formspree, Resend,
      // or another form service — this only validates client-side.
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <p className="label text-deep-sage mb-6">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-8">
            Let&apos;s talk about your next step.
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-12 max-w-sm">
            {brand.title}
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 text-charcoal/80 hover:text-champagne transition-colors focus-ring"
            >
              <Mail size={20} className="text-champagne shrink-0" />
              {contact.email}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-charcoal/80 hover:text-champagne transition-colors focus-ring"
            >
              <MessageCircle size={20} className="text-champagne shrink-0" />
              WhatsApp — {contact.whatsappDisplay}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-charcoal/80 hover:text-champagne transition-colors focus-ring"
            >
              <Linkedin size={20} className="text-champagne shrink-0" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          noValidate
          className="md:col-span-7 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="label text-charcoal/50 block mb-3">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full bg-transparent border-b border-charcoal/25 py-3 focus-ring focus:border-champagne outline-none transition-colors"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-700 mt-2">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="label text-charcoal/50 block mb-3">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-transparent border-b border-charcoal/25 py-3 focus-ring focus:border-champagne outline-none transition-colors"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-700 mt-2">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="service" className="label text-charcoal/50 block mb-3">
              Service
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="w-full bg-transparent border-b border-charcoal/25 py-3 focus-ring focus:border-champagne outline-none transition-colors"
            >
              <option value="" disabled>
                Select a service
              </option>
              {contactFormServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="label text-charcoal/50 block mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-transparent border-b border-charcoal/25 py-3 focus-ring focus:border-champagne outline-none transition-colors resize-none"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-700 mt-2">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="label bg-charcoal text-ivory px-8 py-4 hover:bg-champagne hover:text-charcoal transition-colors focus-ring"
          >
            Send Inquiry →
          </button>

          {status === "success" && (
            <p role="status" className="text-deep-sage text-sm pt-2">
              Thanks — your message is ready to send once this form is
              connected to an email service.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

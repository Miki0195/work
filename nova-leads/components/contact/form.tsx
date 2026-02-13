"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    // Validate
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      setStatus("error");
      setMessage("Kérlek javítsd a hibákat és próbáld újra.");
      return;
    }

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock success
      setStatus("success");
      setMessage("Köszönjük az üzeneted! Hamarosan felvesszük veled a kapcsolatot.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Hiba történt. Kérlek próbáld újra később.");
    }
  };

  return (
    <SectionReveal>
      <div className="glass p-8 rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 text-white">
          Küldd el az üzeneted
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
              Név <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full px-4 py-3 bg-dark-800 border ${
                errors.name ? "border-red-500" : "border-dark-700"
              } rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-50`}
              placeholder="Kovács János"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle size={14} />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full px-4 py-3 bg-dark-800 border ${
                errors.email ? "border-red-500" : "border-dark-700"
              } rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-50`}
              placeholder="kovacs@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-dark-300 mb-2">
              Cégnév <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full px-4 py-3 bg-dark-800 border ${
                errors.company ? "border-red-500" : "border-dark-700"
              } rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-50`}
              placeholder="Példa Kft."
            />
            {errors.company && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle size={14} />
                <span>{errors.company}</span>
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-2">
              Telefonszám
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-50"
              placeholder="+36 20 123 4567"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
              Üzenet <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
              rows={5}
              className={`w-full px-4 py-3 bg-dark-800 border ${
                errors.message ? "border-red-500" : "border-dark-700"
              } rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-50 resize-none`}
              placeholder="Mesélj a céljaidról és kihívásaidról..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Küldés...</span>
              </>
            ) : (
              <>
                <span>Üzenet küldése</span>
                <Send size={18} />
              </>
            )}
          </motion.button>

          {/* Status messages */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-start space-x-3 ${
                status === "success"
                  ? "bg-green-500/10 border border-green-500/30 text-green-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              {status === "success" ? (
                <CheckCircle2 className="flex-shrink-0 mt-0.5" size={20} />
              ) : (
                <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
              )}
              <span className="text-sm">{message}</span>
            </motion.div>
          )}
        </form>
      </div>
    </SectionReveal>
  );
}

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "A név legalább 2 karakter hosszú legyen"),
  email: z.string().email("Érvényes email címet adj meg"),
  company: z.string().min(2, "A cégnév legalább 2 karakter hosszú legyen"),
  phone: z.string().optional(),
  message: z.string().min(10, "Az üzenet legalább 10 karakter hosszú legyen"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Érvényes email címet adj meg"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

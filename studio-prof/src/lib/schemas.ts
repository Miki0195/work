import { z } from 'zod';

export const subscribeFormSchema = z.object({
  email: z.string().email('Kérem adjon meg egy érvényes email címet'),
  name: z.string().optional(),
  companySize: z.enum(['1-10', '11-50', '51-200', '200+', 'other']).optional(),
});

export type SubscribeFormData = z.infer<typeof subscribeFormSchema>;

export const companySizeOptions = [
  { value: '1-10', label: '1-10 fő' },
  { value: '11-50', label: '11-50 fő' },
  { value: '51-200', label: '51-200 fő' },
  { value: '200+', label: '200+ fő' },
  { value: 'other', label: 'Egyéni vállalkozó' },
];

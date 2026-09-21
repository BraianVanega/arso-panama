import { z } from "zod";
import { siteContent } from "@/content/site-content";

const clientTypeOptions = siteContent.contact.form.fields.find(
  (field) => field.name === "clientType",
)?.options ?? ["Empresa", "Persona natural"];

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Campo obligatorio"),
  company: z.string().trim().optional(),
  clientType: z.enum(clientTypeOptions),
  email: z.email("Ingrese un correo válido"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "Campo obligatorio"),
});

export type ContactValues = z.infer<typeof contactSchema>;
export const contactRecipient = siteContent.contact.officeDetails.email;

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site-content";
import { contactSchema, type ContactValues } from "@/lib/contact";
import { cn } from "@/lib/cn";

const clientTypeOptions = siteContent.contact.form.fields.find(
  (field) => field.name === "clientType",
)?.options ?? ["Empresa", "Persona natural"];

const fieldClassName =
  "w-full rounded-sm border border-outline bg-surface-container px-3 py-2.5 text-sm text-on-surface transition-shadow placeholder:text-on-surface-variant/70 focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,165,233,0.28)] focus:outline-none";

export function ContactForm() {
  const { form } = siteContent.contact;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      clientType: clientTypeOptions[0],
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <form
      className="space-y-4"
      noValidate
      onSubmit={handleSubmit(async (values) => {
        setStatus("idle");
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          setStatus("error");
          return;
        }

        reset();
        setStatus("success");
      })}
    >
      {form.fields.map((field) => {
        const error = errors[field.name as keyof ContactValues]?.message;
        const describedBy = error ? `${field.name}-error` : undefined;

        return (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-on-surface"
            >
              {field.label}
              {field.required ? (
                <span className="text-primary-light" aria-hidden="true">
                  {" "}
                  *
                </span>
              ) : null}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                rows={5}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={cn(fieldClassName, "min-h-32 resize-y")}
                {...register(field.name as keyof ContactValues)}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={fieldClassName}
                {...register(field.name as keyof ContactValues)}
              >
                {"options" in field
                  ? field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))
                  : null}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={fieldClassName}
                {...register(field.name as keyof ContactValues)}
              />
            )}

            {error ? (
              <p
                id={`${field.name}-error`}
                className="mt-1.5 text-xs text-primary-light"
                role="alert"
              >
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      {status === "success" ? (
        <p className="text-sm text-primary-light" role="status">
          {form.successMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-primary-light" role="alert">
          {form.errorMessage}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {form.submitLabel}
      </Button>
    </form>
  );
}

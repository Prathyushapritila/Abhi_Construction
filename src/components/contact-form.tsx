"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl font-heading">Get In Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your full name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone <span className="text-destructive">*</span>
            </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+91 98765 43210"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            {errors.phone && (
              <p id="phone-error" className="text-sm text-destructive" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">
              Service Type <span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={(value) => setValue("serviceType", value)}>
              <SelectTrigger id="serviceType" aria-invalid={errors.serviceType ? "true" : "false"}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom-home">Custom Home Construction</SelectItem>
                <SelectItem value="design-build">Design-Build (Architecture)</SelectItem>
                <SelectItem value="interior-design">Interior Design & Styling</SelectItem>
                <SelectItem value="renovation">Kitchen & Bath Renovations</SelectItem>
                <SelectItem value="project-management">Project/Permit Management</SelectItem>
                <SelectItem value="smart-sustainable">Smart & Sustainable Homes</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p id="serviceType-error" className="text-sm text-destructive" role="alert">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">
              Budget Range <span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={(value) => setValue("budget", value)}>
              <SelectTrigger id="budget" aria-invalid={errors.budget ? "true" : "false"}>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-500k">Under ₹50 Lakhs</SelectItem>
                <SelectItem value="500k-1m">₹50 Lakhs - ₹1 Crore</SelectItem>
                <SelectItem value="1m-2m">₹1 Crore - ₹2 Crores</SelectItem>
                <SelectItem value="2m-5m">₹2 Crores - ₹5 Crores</SelectItem>
                <SelectItem value="over-5m">Over ₹5 Crores</SelectItem>
              </SelectContent>
            </Select>
            {errors.budget && (
              <p id="budget-error" className="text-sm text-destructive" role="alert">
                {errors.budget.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your project..."
              rows={6}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              {...register("consent")}
              checked={watch("consent")}
              onChange={(e) => setValue("consent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-royalBlue focus:ring-royalBlue"
              aria-invalid={errors.consent ? "true" : "false"}
            />
            <Label htmlFor="consent" className="text-sm">
              I agree to be contacted by Abhi Constructions regarding my inquiry{" "}
              <span className="text-destructive">*</span>
            </Label>
          </div>
          {errors.consent && (
            <p className="text-sm text-destructive" role="alert">
              {errors.consent.message}
            </p>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-destructive/10 border border-destructive/20 rounded-md"
            >
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            </motion.div>
          )}

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-center space-x-2"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-800 dark:text-green-200" role="alert">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              </p>
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-royalBlue hover:bg-royalBlue/90 text-white"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}


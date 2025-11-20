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
    <Card className="border-2 border-premiumGold/30 dark:border-premiumGold/40 bg-white dark:bg-slate-800 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-royalNavy dark:text-slate-100">Get In Touch</CardTitle>
        <CardDescription className="text-steelGray dark:text-slate-300">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-royalNavy dark:text-slate-200 font-medium">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your full name"
                className="border-royalNavy/30 dark:border-slate-600 focus-visible:border-premiumGold focus-visible:ring-premiumGold/50 bg-white dark:bg-slate-800 text-royalNavy dark:text-slate-200 placeholder:text-steelGray dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-premiumGold/50"
                style={{ color: 'rgb(64, 64, 64)' }}
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
              <Label htmlFor="email" className="text-royalNavy dark:text-slate-200 font-medium">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className="border-royalNavy/30 dark:border-slate-600 focus-visible:border-premiumGold focus-visible:ring-premiumGold/50 bg-white dark:bg-slate-800 text-royalNavy dark:text-slate-200 placeholder:text-steelGray dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-premiumGold/50"
                style={{ color: 'rgb(64, 64, 64)' }}
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
            <Label htmlFor="phone" className="text-royalNavy dark:text-slate-200 font-medium">
              Phone <span className="text-destructive">*</span>
            </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+91 98765 43210"
                className="border-royalNavy/30 dark:border-slate-600 focus-visible:border-premiumGold focus-visible:ring-premiumGold/50 bg-white dark:bg-slate-800 text-royalNavy dark:text-slate-200 placeholder:text-steelGray dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-premiumGold/50"
                style={{ color: 'rgb(64, 64, 64)' }}
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
            <Label htmlFor="serviceType" className="text-royalNavy dark:text-slate-200 font-medium">
              Service Type <span className="text-destructive">*</span>
            </Label>
            <div className="w-full">
              <Select onValueChange={(value) => setValue("serviceType", value)}>
                <SelectTrigger 
                  id="serviceType" 
                  aria-invalid={errors.serviceType ? "true" : "false"}
                  className="border-royalNavy/30 dark:border-slate-600 focus:border-premiumGold focus:ring-premiumGold/50 bg-white dark:bg-slate-800 w-full h-10 px-3 py-2"
                  style={{ color: 'rgb(64, 64, 64)', boxSizing: 'border-box', width: '100%', minHeight: '40px' }}
                >
                  <SelectValue placeholder="Select a service" className="w-full text-left" />
                </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-800 border-premiumGold/30 dark:border-premiumGold/40">
                <SelectItem 
                  value="custom-home"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Custom Home Construction
                </SelectItem>
                <SelectItem 
                  value="design-build"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Design-Build (Architecture)
                </SelectItem>
                <SelectItem 
                  value="interior-design"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Interior Design & Styling
                </SelectItem>
                <SelectItem 
                  value="renovation"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Kitchen & Bath Renovations
                </SelectItem>
                <SelectItem 
                  value="project-management"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Project/Permit Management
                </SelectItem>
                <SelectItem 
                  value="smart-sustainable"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Smart & Sustainable Homes
                </SelectItem>
                <SelectItem 
                  value="other"
                  className="focus:bg-premiumGold/20 focus:text-premiumGold dark:focus:bg-premiumGold/30 dark:focus:text-premiumGold text-royalNavy dark:text-slate-200 cursor-pointer"
                >
                  Other
                </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {errors.serviceType && (
              <p id="serviceType-error" className="text-sm text-destructive" role="alert">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-royalNavy dark:text-slate-200 font-medium">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your project..."
              rows={6}
              className="border-royalNavy/30 dark:border-slate-600 focus-visible:border-premiumGold focus-visible:ring-premiumGold/50 bg-white dark:bg-slate-800 text-royalNavy dark:text-slate-200 placeholder:text-steelGray dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-premiumGold/50"
              style={{ color: 'rgb(64, 64, 64)' }}
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
              className="mt-1 h-4 w-4 rounded border-royalNavy/30 dark:border-slate-600 text-premiumGold focus:ring-premiumGold focus:ring-2 focus:ring-offset-2 cursor-pointer"
              aria-invalid={errors.consent ? "true" : "false"}
            />
            <Label htmlFor="consent" className="text-sm text-royalNavy dark:text-slate-200">
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

          <div className="w-full mt-6" style={{ maxWidth: '100%', boxSizing: 'border-box', paddingBottom: '1rem' }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-premiumGold hover:bg-premiumGold/90 text-royalNavy font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 rounded-lg dark:bg-premiumGold dark:hover:bg-premiumGold/90 dark:text-royalNavy"
              size="lg"
              style={{ 
                maxWidth: '100%', 
                width: '100%',
                boxSizing: 'border-box',
                minHeight: '48px',
                padding: '0.875rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin flex-shrink-0 text-royalNavy dark:text-royalNavy" />
                  <span className="whitespace-nowrap font-semibold text-royalNavy dark:text-royalNavy">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 flex-shrink-0 text-royalNavy dark:text-royalNavy" />
                  <span className="whitespace-nowrap font-semibold text-royalNavy dark:text-royalNavy">Send Message</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}


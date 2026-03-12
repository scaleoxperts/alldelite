"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { SITE_CONFIG } from "@/contents/constants";

const CONTACT_INFO = [
  {
    icon: "phone_in_talk",
    title: "Phone",
    value: SITE_CONFIG.phone,
    note: "Mon-Sat: 9 AM - 6 PM",
    valueClass: "text-(--color-primary)",
  },
  {
    icon: "mail",
    title: "Email",
    value: SITE_CONFIG.email,
    note: "Response within 24 hours",
    valueClass: "text-(--color-primary)",
  },
  {
    icon: "location_on",
    title: "Corporate Office",
    value: null,
    note: "Serving nationwide with regional offices across India",
    valueClass: "",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  message: "",
};

export default function ContactSection() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/save-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (!res.ok || !result?.success) {
        setErrorMsg(
          result?.error ? JSON.stringify(result.error) : "Submission failed"
        );
        return;
      }

      setSuccessMsg("Inquiry sent successfully.");
      setForm(INITIAL_FORM);

      const params = new URLSearchParams({
        name: form.name,
        email: form.email,
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-900">
          Get Started Today
        </h2>
        <p className="mb-16 text-center text-gray-500">
          Schedule a consultation with our experts to discuss your specific
          requirements
        </p>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.title}
                className="flex items-start space-x-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="rounded-lg bg-(--color-primary)/10 p-3 text-(--color-primary)">
                  <span className="material-icons-outlined">{info.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{info.title}</h3>
                  {info.value && (
                    <p className={`${info.valueClass} text-sm font-medium`}>
                      {info.value}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">{info.note}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-(--color-primary) p-6 text-white shadow-lg">
              <h3 className="mb-2 font-bold">Need urgent assistance?</h3>
              <p className="text-(--color-primary)-50 mb-4 text-sm">
                Our emergency support team is available 24/7 for existing
                clients
              </p>
              <button className="w-full rounded-lg bg-white py-2 text-sm font-bold text-(--color-primary) transition hover:bg-gray-50">
                Call Emergency Line
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg lg:col-span-2 lg:p-10">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="John Smith"
                    className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="john@company.com"
                    className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    minLength={10}
                    maxLength={15}
                    value={form.phone}
                    onChange={onChange("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={onChange("company")}
                    placeholder="Your Company"
                    className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Industry / Project Type *
                </label>
                <select
                  required
                  value={form.industry}
                  onChange={onChange("industry")}
                  className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                >
                  <option value="">Select an industry...</option>
                  <option value="Hospitality (Hotel/Resort)">
                    Hospitality (Hotel/Resort)
                  </option>
                  <option value="Construction / Real Estate">
                    Construction / Real Estate
                  </option>
                  <option value="Industrial Manufacturing">
                    Industrial Manufacturing
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Project Details / Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell us about your project requirements, building size, timeline, etc."
                  className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center rounded-lg bg-(--color-primary) py-3.5 font-bold text-white shadow-lg transition hover:bg-(--color-primary-dark) disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
                <span className="material-icons-outlined ml-2 text-sm">
                  send
                </span>
              </button>

              {successMsg && (
                <p className="text-center text-sm text-green-600">
                  {successMsg}
                </p>
              )}
              {errorMsg && (
                <p className="text-center text-sm text-red-600">{errorMsg}</p>
              )}

              <p className="mt-4 text-center text-xs text-gray-500">
                By submitting this form, you agree to our privacy policy. We
                will respond within 24 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

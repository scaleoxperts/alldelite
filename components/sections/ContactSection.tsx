"use client";

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

export default function ContactSection() {
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
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
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
                    placeholder="Your Company"
                    className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Industry / Project Type *
                </label>
                <select className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)">
                  <option>Select an industry...</option>
                  <option>Hospitality (Hotel/Resort)</option>
                  <option>Construction / Real Estate</option>
                  <option>Industrial Manufacturing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Project Details / Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project requirements, building size, timeline, etc."
                  className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-(--color-primary) focus:ring-(--color-primary)"
                />
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg bg-(--color-primary) py-3.5 font-bold text-white shadow-lg transition hover:bg-(--color-primary-dark)"
              >
                Send Inquiry
                <span className="material-icons-outlined ml-2 text-sm">
                  send
                </span>
              </button>

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

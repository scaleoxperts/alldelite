import { Mail, MapPin, Phone } from "lucide-react";

import { LOCATION } from "@/contents/about";
import { SITE_CONFIG } from "@/contents/constants";

export default function LocationSection() {
  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-(--color-text-black)">
            {LOCATION.heading}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-(--color-primary)/10 bg-linear-to-br from-(--color-primary)/5 to-white p-10">
            <div className="mb-8 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-(--color-primary)" />
              <h4 className="text-xl font-bold text-(--color-text-black)">
                {LOCATION.address.title}
              </h4>
            </div>
            <address className="space-y-2 text-gray-600 not-italic">
              {LOCATION.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
            <h4 className="mb-8 text-xl font-bold text-(--color-text-black)">
              {LOCATION.contact.title}
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-(--color-primary)/10 p-3 text-(--color-primary)">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Phone
                  </p>
                  <p className="font-medium text-(--color-text-gray)">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-50 p-3 text-blue-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Email
                  </p>
                  <p className="font-medium text-(--color-text-gray)">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

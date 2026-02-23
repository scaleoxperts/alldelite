import {
  FOOTER_PRODUCTS,
  FOOTER_QUICK_LINKS,
  SITE_CONFIG,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-6 block text-2xl font-bold tracking-tight text-white">
              All<span className="text-(--color-primary)">delite</span>
            </span>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Leading provider of sustainable heat pump solutions for commercial
              and hospitality sectors.
            </p>
            <div className="flex space-x-4">
              {["facebook", "smart_display", "work", "camera_alt"].map(
                (icon) => (
                  <a
                    key={icon}
                    className="flex h-8 w-8 items-center justify-center rounded bg-gray-800 transition hover:bg-(--color-primary)"
                    href="#"
                  >
                    <span className="material-icons-outlined text-sm">
                      {icon}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    className="transition hover:text-(--color-primary)"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-bold">Our Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_PRODUCTS.map((product) => (
                <li key={product}>
                  <a
                    className="transition hover:text-(--color-primary)"
                    href="#"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="material-icons-outlined mr-3 text-base text-(--color-primary)">
                  phone
                </span>
                {SITE_CONFIG.phone}
              </li>
              <li className="flex items-center">
                <span className="material-icons-outlined mr-3 text-base text-(--color-primary)">
                  email
                </span>
                {SITE_CONFIG.email}
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined mt-0.5 mr-3 text-base text-(--color-primary)">
                  location_on
                </span>
                India - Serving Nationwide
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-xs text-gray-500 md:flex-row">
          <p>© 2024 Alldelite. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a className="transition hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="transition hover:text-white" href="#">
              Terms of Service
            </a>
            <a className="transition hover:text-white" href="#">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

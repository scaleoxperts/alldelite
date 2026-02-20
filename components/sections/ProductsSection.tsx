import { PRODUCTS } from "@/lib/constants";

export default function ProductsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="group rounded-2xl border border-zinc-500/25 px-6 py-4"
            >
              <div
                className={`${product.iconBg} mb-6 flex h-48 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105`}
              >
                <span className="material-icons-outlined scale-200 text-8xl text-white">
                  {product.icon}
                </span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                {product.title}
              </h3>
              <p className="text-md mb-4 leading-relaxed text-gray-600">
                {product.description}
              </p>
              <a
                className="flex items-center text-sm font-bold text-(--color-primary) group-hover:underline"
                href="#"
              >
                Learn More
                <span className="material-icons-outlined ml-1 text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

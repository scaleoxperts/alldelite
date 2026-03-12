"use client";

import { Suspense, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { CheckCircle } from "lucide-react";

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Guest";
  const email = searchParams.get("email") || "";

  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-(--color-background-light) px-4 py-8">
      <div className="w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-xl sm:p-12">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-(--color-primary)/10">
          <CheckCircle
            className="h-10 w-10 text-(--color-primary)"
            strokeWidth={2.5}
          />
        </div>

        <h1 className="mb-3 text-3xl font-bold text-(--color-text-black) sm:text-4xl">
          Thank You, {name}!
        </h1>

        <p className="mb-4 text-lg font-medium text-(--color-primary)">
          We&apos;ve received your message successfully.
        </p>

        <p className="mb-8 text-sm leading-relaxed text-(--color-text-gray)">
          A confirmation has been sent to{" "}
          <span className="font-semibold text-(--color-primary)">{email}</span>.
          We&apos;ll get back to you within 24 hours.
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-(--color-primary) px-8 py-3 font-semibold text-white transition hover:bg-(--color-primary-dark)"
          >
            Back to Home
          </Link>
          <Link
            href="/solutions"
            className="rounded-lg border border-gray-200 px-8 py-3 font-semibold text-(--color-text-gray) transition hover:bg-gray-50"
          >
            Explore Solutions
          </Link>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-(--color-text-gray)">
            <span>Redirecting in</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--color-primary) text-xs font-bold text-white">
              {countdown}
            </span>
            <span>sec</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-(--color-text-gray)">
          Loading...
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

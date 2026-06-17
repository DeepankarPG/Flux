import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/docs/ThemeProvider";
import { Toaster } from "@payglocal_ui/flux-ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const title = "Flux UI — Open design system by PayGlocal";
const description =
  "68+ production-grade components. React, Tailwind CSS v4, Radix primitives, and semantic tokens — the same system PayGlocal ships in product.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Flux UI" },
  description,
  keywords: ["Flux", "design system", "React", "Tailwind", "Radix", "components", "PayGlocal"],
  openGraph: { title, description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

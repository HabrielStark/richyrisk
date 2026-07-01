import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/fx/scroll-progress";
import { Cursor } from "@/components/fx/cursor";
import { Intro } from "@/components/fx/intro";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const display = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Archivo({
  variable: "--font-sans-face",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://richyrisk.example"),
  title: {
    default: "Richy Risk · Luxury Skin & Color",
    template: "%s · Richy Risk",
  },
  description:
    "Richy Risk is a luxury skincare and color house built on glass-skin rituals. Peptide serums, restorative crèmes and cushiony lip treatments, art-directed for radiance.",
  keywords: [
    "Richy Risk",
    "luxury skincare",
    "glaze serum",
    "peptide serum",
    "lip glaze",
    "cream blush",
  ],
  openGraph: {
    title: "Richy Risk · Luxury Skin & Color",
    description:
      "Glass-skin rituals, art-directed for radiance. Peptide serums, restorative crèmes and cushiony lip treatments.",
    type: "website",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-porcelain text-noir"
        suppressHydrationWarning
      >
        <CartProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Cursor />
          <Intro />
          <div className="grain" aria-hidden />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

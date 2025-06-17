import type { Metadata, Viewport } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { CartProvider } from "@/contexts/CartContext";
import ShoppingCart from "@/components/ShoppingCart";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FLOWCORE | Electronic Music Collective",
  description: "Istanbul merkezli müzik, sanat ve etkinlik kolektifi.  Müzik kültürü ve undergrouronic music sahnesi. We are not an event. We are the event.",
  keywords: "flowcore, electronic music, rave, acidcore, underground, istanbul, techno, collective, elektronik müzik",
  authors: [{ name: "Flowcore Collective" }],
  openGraph: {
    title: "FLOWCORE | Electronic Music & Art Collective",
    description: "Istanbul merkezli elektronik müzik kolektifi",
    type: "website",
    locale: "en_EN",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var font = new FontFace('CS Felice Mono', 'url(/fonts/CSFeliceMonoDrawn-Regular.otf)');
                  font.load().then(function(loadedFont) {
                    document.fonts.add(loadedFont);
                    document.documentElement.classList.add('font-loaded');
                  }).catch(function(error) {
                    console.log('CS Felice Mono font failed to load:', error);
                  });
                } catch (e) {
                  console.log('FontFace API not supported');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${orbitron.variable} antialiased bg-flowcore-black text-pure-white font-mono cyber-grid min-h-screen`}
        suppressHydrationWarning
      >
        <CartProvider>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
          <ShoppingCart />
        </CartProvider>
      </body>
    </html>
  );
}

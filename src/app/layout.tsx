import type { Metadata, Viewport } from "next";
import { Orbitron, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FLOWCORE | Underground Electronic Music Collective",
  description: "Istanbul merkezli elektronik müzik kolektifi. Acidcore, rave kültürü ve underground electronic music sahnesi. We are not an event. We are the event.",
  keywords: "flowcore, electronic music, rave, acidcore, underground, istanbul, techno, collective, elektronik müzik",
  authors: [{ name: "Flowcore Collective" }],
  openGraph: {
    title: "FLOWCORE | Underground Electronic Music Collective",
    description: "Istanbul merkezli elektronik müzik kolektifi",
    type: "website",
    locale: "tr_TR",
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
    <html lang="tr" className="dark">
      <body
        className={`${orbitron.variable} ${ibmPlexMono.variable} antialiased bg-flowcore-black text-acid-green font-mono cyber-grid min-h-screen`}
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

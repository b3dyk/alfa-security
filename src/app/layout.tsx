import type { Metadata } from "next";
import localfont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = localfont({
  src: "../../public/fonts/montserrat-variablefont.woff2",
});

export const metadata: Metadata = {
  title: "Alfa Security",
  description: "Охоронна компанія",
  openGraph: {
    title: "Alfa Security",
    images: [
      {
        url: "https://www.alfa-security.agency/_next/image?url=%2Fimages%2Flogo-alfa-horizontal.png&w=256&q=75",
        width: 256,
        height: 75,
      },
    ],
    url: "https://www.alfa-security.agency/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <div id="portal-root"></div>
      </body>
    </html>
  );
}

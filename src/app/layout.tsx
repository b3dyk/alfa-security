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
        url: "https://www.alfa-security.agency/_next/image?url=%2Fimages%2Fauction-cards%2Fimage-1.jpg&w=640&q=75",
        width: 640,
      },
      {
        url: "https://www.alfa-security.agency/_next/image?url=%2Fimages%2Fauction-cards%2Fimage-2.jpg&w=640&q=75",
        width: 640,
      },
      {
        url: "https://www.alfa-security.agency/_next/image?url=%2Fimages%2Fauction-cards%2Fimage-3.jpg&w=640&q=75",
        width: 640,
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

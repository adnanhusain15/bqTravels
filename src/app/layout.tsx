import type { Metadata } from "next";

import Header from "@/components/Header";
import { poppins } from "@/lib/utils";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>BQ Tours and Travels</title>
        <meta
          name="description"
          content="Your trusted partner for domestic and international travel planning."
        />
        <meta
          name="keywords"
          content="Tours, travels, visa, passport, nagpur, "
        />
        <meta name="author" content="Mustafa Qubbawala" />
        <meta property="og:title" content="BQ Tours and Travels" />
        <meta
          property="og:description"
          content="Your trusted partner for domestic and international travel planning."
        />
        <meta property="og:url" content="https://bqtoursandtravels.com" />
        <meta property="og:image" content="/assets/ogImage.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap`}
          async
        ></script>
      </head>
      <body className={`${poppins.className} antialiased relative h-full`}>
        <main className="relative flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow flex-1">{children}</div>
          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./providers";
import Header from "./header/page";
import Footer from "./footer/page";
import { Toaster, NProgressLoader } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, I'm Nicolas Silva",
  description: "Software Engineer",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-background text-foreground`}
      >
        <I18nProvider>
          <NProgressLoader />
          <div className="flex flex-col py-6 px-4 md:py-10 md:px-32 gap-8 md:gap-14">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}

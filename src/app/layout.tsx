import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "@/styles/global.scss";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Subscription",
  description: "Subscription form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}

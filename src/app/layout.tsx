// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Certificate Generator",
  description: "ICPEP Tech Dept Certificate Generator",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

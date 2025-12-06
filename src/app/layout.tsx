import { Metadata } from "next";
import "./globals.css";

import "@fontsource/days-one";

import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

export const metadata: Metadata = {
  title: "Landsking Infra ",
  description: "Global clients partner with us to build projects.",
  icons: {
    icon: "/finallogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

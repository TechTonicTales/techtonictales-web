import "~/styles/globals.css";

import { Inter, Raleway } from "next/font/google";

import { Providers } from "./providers";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "TechTonicTales",
  description: "Blogs about tech, programming, and more",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${raleway.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Exo } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900']
});
const exo = Exo({
  weight: ['300', '400', '700',],
  style: ['normal','italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Vivencie Residencial Sênior",
  description: "Centro dia, hospedagem permanente e temporária para terceira idade!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}

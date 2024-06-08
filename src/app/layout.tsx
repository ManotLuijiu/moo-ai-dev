import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import {DM_Sans} from 'next/font/google'

import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_sans.variable}`}>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

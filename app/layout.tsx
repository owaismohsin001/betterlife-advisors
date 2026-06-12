import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BetterLife Advisors — Pakistan's Trusted Visa & Immigration Consultants",
  description: "Get your visa approved with Pakistan's most trusted immigration consultants. Work, Student, Visit, and PR visas for UK, Canada, Australia, USA, Europe & more.",
  keywords: "visa consultants pakistan, immigration consultancy, work visa, student visa, canada visa, uk visa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: { extend: {
              colors: {
                red: { DEFAULT:'#9B1B1B', dark:'#6B0F0F', deep:'#3D0808', light:'#C42B2B', lighter:'#e53e3e' },
                gold: '#C8970A',
                darkbg: '#0F0404',
              },
              fontFamily: {
                sans: ['Inter','system-ui','sans-serif'],
                serif: ['"Playfair Display"','serif'],
              }
            }}
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "mp-donancy",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="text-xl font-bold leading-[4rem]">mp-donancy</header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} mp-donancy
        </footer>
      </body>
    </html>
  );
}

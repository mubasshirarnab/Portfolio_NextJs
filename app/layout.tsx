import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Arnab - Full Stack Developer",
  description: "Passionate full-stack developer creating elegant digital experiences with modern technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Arnab" }],
  openGraph: {
    title: "Arnab - Full Stack Developer",
    description: "Passionate full-stack developer creating elegant digital experiences with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnab - Full Stack Developer",
    description: "Passionate full-stack developer creating elegant digital experiences with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-gray-50 dark:bg-dark-black text-slate-800 dark:text-light-grey relative min-h-screen selection:bg-bright-aqua/30 selection:text-white dark:selection:text-dark-black transition-colors duration-500`}>
        {/* Cinematic noise overlay */}
        <div className="css-noise" aria-hidden="true" />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

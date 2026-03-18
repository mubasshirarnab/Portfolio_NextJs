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
  title: "Mubasshir Ahmed Arnab | Full Stack Developer & ML Engineer",
  description: "Explore the portfolio of Mubasshir Ahmed Arnab, a Full Stack Developer & AI enthusiast specializing in React, Node.js, and Python. Let's build together!",
  keywords: ["Mubasshir Ahmed Arnab Portfolio", "Full Stack Software Developer", "Machine Learning Engineer", "React", "Next.js", "Python", "Web Developer"],
  authors: [{ name: "Mubasshir Ahmed Arnab" }],
  openGraph: {
    title: "Mubasshir Ahmed Arnab | Software Developer & ML Engineer",
    description: "Explore the portfolio of Mubasshir Ahmed Arnab, specializing in Full Stack Web Development and Machine Learning. Let's build together!",
    url: "https://mubasshir-arnab-portfolio.vercel.app",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubasshir Ahmed Arnab | Software Developer & ML Engineer",
    description: "Explore the portfolio of Mubasshir Ahmed Arnab, specializing in Full Stack Web Development and Machine Learning.",
    creator: "@ArnabMahdee",
    site: "@ArnabMahdee",
  },
  verification: {
    google: "xK8QaLUsP8YGOI-rb60Ijqavil6iWTo42j4mUXAEANw",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mubasshir-arnab-portfolio.vercel.app/#website",
      "url": "https://mubasshir-arnab-portfolio.vercel.app/",
      "name": "Mubasshir Ahmed Arnab Portfolio",
      "description": "Portfolio of a Full Stack Developer and Machine Learning Engineer",
      "publisher": {
        "@id": "https://mubasshir-arnab-portfolio.vercel.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://mubasshir-arnab-portfolio.vercel.app/#person",
      "name": "Mubasshir Ahmed Arnab",
      "jobTitle": "Full Stack Software Developer & Machine Learning Engineer",
      "url": "https://mubasshir-arnab-portfolio.vercel.app/",
      "sameAs": [
        "https://github.com/mubasshirarnab",
        "https://www.linkedin.com/in/mubasshir-ahmed263/",
        "https://www.facebook.com/mahdee.arnab.0574",
        "https://www.instagram.com/_arnab_0_0_",
        "https://twitter.com/ArnabMahdee"
      ],
      "knowsAbout": [
        "Software Engineering",
        "Web Development",
        "React.js",
        "Next.js",
        "Node.js",
        "Python",
        "Machine Learning",
        "TensorFlow"
      ]
    }
  ]
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
        
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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

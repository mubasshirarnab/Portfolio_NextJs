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
  metadataBase: new URL("https://mubasshirahmed.vercel.app"),
  title: "Mubasshir Ahmed Arnab | ML Engineer & Software Developer",
  description: "Explore the portfolio of Mubasshir Ahmed Arnab, an expert Full Stack Developer & Machine Learning Engineer studying Computer Science at United International University.",
  keywords: ["Mubasshir Ahmed Arnab", "Full Stack Software Developer", "Machine Learning Engineer", "React", "Next.js", "Python", "Web Developer", "UIU"],
  authors: [{ name: "Mubasshir Ahmed Arnab" }],
  openGraph: {
    title: "Mubasshir Ahmed Arnab | Software Developer & ML Engineer",
    description: "Explore the portfolio of Mubasshir Ahmed Arnab, an expert Full Stack Developer & Machine Learning Engineer.",
    url: "https://mubasshirahmed.vercel.app",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/mubasshir_ahmed.jpg",
        width: 1200,
        height: 1200,
        alt: "Mubasshir Ahmed Arnab - Software Developer & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubasshir Ahmed Arnab | Software Developer & ML Engineer",
    description: "Explore the portfolio of Mubasshir Ahmed Arnab, an expert Full Stack Developer & Machine Learning Engineer.",
    creator: "@ArnabMahdee",
    site: "@ArnabMahdee",
    images: ["/mubasshir_ahmed.jpg"],
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
      "@id": "https://mubasshirahmed.vercel.app/#website",
      "url": "https://mubasshirahmed.vercel.app/",
      "name": "Mubasshir Ahmed Arnab Portfolio",
      "description": "Portfolio of a Full Stack Developer and Machine Learning Engineer",
      "publisher": {
        "@id": "https://mubasshirahmed.vercel.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://mubasshirahmed.vercel.app/#person",
      "name": "Mubasshir Ahmed Arnab",
      "alternateName": ["Mubasshir Ahmed", "Arnab"],
      "image": "https://mubasshirahmed.vercel.app/mubasshir_ahmed.jpg",
      "jobTitle": "Full Stack Software Developer & Machine Learning Engineer",
      "description": "Mubasshir Ahmed Arnab is a highly skilled Full Stack Software Developer and Machine Learning Engineer currently studying Computer Science and Engineering at United International University (UIU). Specializing in React.js, Next.js, Node.js, Python, and TensorFlow, he builds intelligent, scalable web applications and AI-driven solutions.",
      "url": "https://mubasshirahmed.vercel.app/",
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
        "TensorFlow",
        "Artificial Intelligence",
        "System Architecture"
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

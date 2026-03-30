import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pragatiinvest.com"),
  title: "Pragati Invest | Business Automation Studio for Workflow Automation",
  description:
    "Pragati Invest helps Indian businesses reduce manual work through workflow automation, internal tools, AI-assisted operations, and system integration.",
  keywords: [
    "business automation India",
    "workflow automation services",
    "internal tools development",
    "AI automation for business",
    "operations automation",
    "Pragati Invest",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pragati Invest | Business Automation Studio",
    description:
      "Lean automation studio helping businesses improve workflows, reporting, and execution with practical software systems.",
    url: "https://pragatiinvest.com",
    siteName: "Pragati Invest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragati Invest | Business Automation Studio",
    description:
      "Workflow automation, internal tools, and AI-assisted systems for businesses that want operational progress.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pragatiinvest.com"),
  title: "Pragati Invest | Business Automation Studio for Workflow Automation",
  description:
    "Pragati Invest helps businesses improve operations with automation, dashboards, AI-powered process solutions, and practical digital systems.",
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
      "Pragati Invest helps businesses improve operations with automation, dashboards, AI-powered process solutions, and practical digital systems.",
    url: "https://pragatiinvest.com",
    siteName: "Pragati Invest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragati Invest | Business Automation Studio",
    description:
      "Pragati Invest helps businesses improve operations with automation, dashboards, AI-powered process solutions, and practical digital systems.",
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

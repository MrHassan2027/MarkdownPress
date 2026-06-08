import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarkdownPress",
  description: "Minimal Next.js static blog from Markdown files",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

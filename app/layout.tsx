import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Interview Question Bank – Curated Coding Questions by Company & Role",
  description: "Database of real interview questions from top tech companies, filtered by role and level. Includes solutions and difficulty ratings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b43d2ea8-ed3b-4ecf-8ecd-eee149d40966"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}

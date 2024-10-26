import "../globals.css";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی دیجی کالا",
  description: "digikala sample project",
  icons: { icon: "./favicon/favicon.ico" },
};

export default function HomePagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  );
}

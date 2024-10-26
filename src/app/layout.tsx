import { Metadata } from 'next';
import Providers from 'redux-tool-kit/Providers'

export const metadata: Metadata = {
    title: "فروشگاه اینترنتی دیجی کالا",
    description: "digikala sample project",
    icons: { icon: "./favicon/favicon.ico" },
  };

function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
    <body>
        <Providers>
          {children}
        </Providers>
    </body>
  </html>
  )
}

export default RootLayout
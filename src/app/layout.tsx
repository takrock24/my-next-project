import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

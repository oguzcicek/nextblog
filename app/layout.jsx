// import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/global.css'
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6ED6SLF9ZR"
          strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6ED6SLF9ZR');
        `}
      </Script>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

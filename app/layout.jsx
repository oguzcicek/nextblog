// import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

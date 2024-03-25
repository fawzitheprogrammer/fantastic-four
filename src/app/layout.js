import '../app/globals.css';
import NavBar from "../components/NavBar";

export const metadata = {
  title: 'FourFilm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

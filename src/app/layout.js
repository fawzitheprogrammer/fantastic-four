import '@/app/globals.css';

export const metadata = {
  title: 'FourFilm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

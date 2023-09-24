import './globals.css'

export const metadata = {
  title: 'Totem',
  description: 'Public Security Totem Service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

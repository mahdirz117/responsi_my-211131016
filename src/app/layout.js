// src/app/layout.js

import Navigation from './navigation/Navigation'; // Pastikan path ini benar
import './globals.css'; // Import CSS global

export const metadata = {
  title: 'My CV Page',
  description: 'A landing page for my CV and portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Anda bisa menambahkan elemen <link>, <meta> tambahan di sini jika diperlukan */}
      </head>
      <body>
        <Navigation /> {/* Navigasi yang akan muncul di semua halaman */}
        {children} {/* Konten utama halaman */}
      </body>
    </html>
  );
}

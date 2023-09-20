import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Feed App',
    description: '최신 유튜브 영상을 여기서 확인하세요.',
    icons: {
        icon: '/favicon.ico',
        apple: [
            '/apple-icon-57x57.png',
            '/apple-icon-60x60.png',
            '/apple-icon-76x76.png',
            '/apple-icon-114x114.png',
            '/apple-icon-120x120.png',
            '/apple-icon-144x144.png',
            '/apple-icon-152x152.png',
            '/apple-icon-180x180.png',
        ],  
    },

    openGraph: {
        title: 'Feed App',
        type: 'website',
        locale: 'ko_KR',
        images: [
            {
                url: '/og.png',
                width: 1200,
                height: 630,
                alt: 'Feed App',
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Feed App',
        description: '최신 유튜브 영상을 여기서 확인하세요.',
        images: ['/og.png']
    },

    manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

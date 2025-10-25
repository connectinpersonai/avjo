import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Avjo AI - AI-Powered Solutions',
    short_name: 'Avjo AI',
    description: 'Build your product fast, affordable, and stress-free with AI-powered solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/avjo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}


import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Viewport is handled by Next.js metadata in index.jsx */}
        
        {/* Primary SEO */}
        <meta name="title" content="Jade Ink Tattoo Studio | Award-Winning Tattoos in Kathmandu, Nepal" />
        <meta name="description" content="Premier tattoo studio in Kathmandu, Nepal. Specializing in custom designs, realism, traditional, neo-traditional, and Japanese tattoos. Professional artists, sterile environment." />
        <meta name="keywords" content="tattoo studio Kathmandu, tattoo artist Nepal, custom tattoo, realism tattoo, traditional tattoo, Japanese tattoo, neo-traditional, blackwork, watercolor tattoo, cover-up tattoo" />
        <meta name="author" content="Jade Ink Tattoo Studio" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://jadeinktattoo.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://jadeinktattoo.com" />
        <meta property="og:title" content="Jade Ink Tattoo Studio | Award-Winning Tattoos in Kathmandu" />
        <meta property="og:description" content="Premier tattoo studio in Kathmandu, Nepal. Custom designs, realism, traditional, and Japanese tattoos by professional artists." />
        <meta property="og:image" content="https://jadeinktattoo.com/og-image.jpg" />
        <meta property="og:locale" content="en_NP" />
        <meta property="business:contact_data:street_address" content="Kathmandu" />
        <meta property="business:contact_data:locality" content="Kathmandu" />
        <meta property="business:contact_data:country_name" content="Nepal" />
        <meta property="business:contact_data:phone_number" content="+9779705086562" />
        
        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jadeinktattoo.com" />
        <meta property="twitter:title" content="Jade Ink Tattoo Studio | Award-Winning Tattoos in Kathmandu" />
        <meta property="twitter:description" content="Premier tattoo studio in Kathmandu, Nepal. Custom designs, realism, traditional, and Japanese tattoos by professional artists." />
        <meta property="twitter:image" content="https://jadeinktattoo.com/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="ICBM" content="27.7172, 85.3240" />
        <meta name="geo.position" content="27.7172;85.3240" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

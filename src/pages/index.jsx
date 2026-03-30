import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ArtistsSection from "@/components/ArtistsSection";
import GallerySection from "@/components/GallerySection";
import WhatsAppBooking from "@/components/WhatsAppBooking";
import TestimonialsSection from "@/components/TestimonialsSection";
import AfterCareSection from "@/components/AfterCareSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Jade Ink Tattoo Studio",
  image: "https://jadeinktattoo.com/og-image.jpg",
  "@id": "https://jadeinktattoo.com",
  url: "https://jadeinktattoo.com",
  telephone: "+9779705086562",
  email: "jadeink@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
    addressRegion: "Bagmati Province",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.7172",
    longitude: "85.3240",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "00:00",
      closes: "00:00",
      description: "By Appointment Only",
    },
  ],
  priceRange: "NPR 5,000 - NPR 100,000+",
  paymentAccepted: "Cash, Bank Transfer, Digital Wallet",
  currenciesAccepted: "NPR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Tattoo Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Realism Tattoo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traditional Tattoo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Neo-Traditional Tattoo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Japanese Tattoo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cover-Up Tattoo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Watercolor Tattoo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blackwork Tattoo" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "127",
  },
  founder: [
    {
      "@type": "Person",
      name: "Shyam",
      jobTitle: "Lead Realism Artist",
    },
    {
      "@type": "Person",
      name: "Ram",
      jobTitle: "Senior Japanese Tattoo Artist",
    },
  ],
  foundingDate: "2012",
  areaServed: {
    "@type": "City",
    name: "Kathmandu",
  },
  sameAs: [
    "https://instagram.com/jadeinktattoo",
    "https://facebook.com/jadeinktattoo",
  ],
  description: "Award-winning tattoo studio in Kathmandu, Nepal. Specializing in custom designs, realism, traditional, neo-traditional, and Japanese tattoos. Professional artists with 6-15 years experience in a sterile environment.",
};

const Index = () => {
  return (
    <>
      <Head>
        <title>Jade Ink Tattoo Studio | Award-Winning Tattoos in Kathmandu, Nepal</title>
        <meta name="description" content="Premier tattoo studio in Kathmandu, Nepal. Specializing in custom designs, realism, traditional, neo-traditional, and Japanese tattoos. Professional artists, sterile environment." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ArtistsSection />
        <GallerySection />
        <WhatsAppBooking />
        <TestimonialsSection />
        <AfterCareSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;

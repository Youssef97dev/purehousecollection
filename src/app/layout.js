import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    default:
      "Pure House Collection | Boutique Hotels & Riad in Morocco – Lake, Farm & Marrakech Stays",
    template: "%s | Pure House Collection",
  },
  description:
    "Pure House Collection unites three unique stays in Morocco: a lakeside takerkoust agafay hotel, an authentic farm hotel in takerkoust, and a luxury riad in Marrakech. Nature, comfort, design, and unforgettable Moroccan experiences",
  keywords: [
    "Pure House",
    "Pure House Collection",
    "Pure house on the lake",
    "Pure farm house",
    "boutique hotels Morocco",
    "boutique hotel Marrakech",
    "Riad Marrakech",
    "lakeside hotel Morocco",
    "farm stay Morocco",
    "Agafay Vibes",
  ],
  authors: [
    { name: "Pure House Collection", url: "https://purehousecollection.com" },
  ],
  openGraph: {
    title: "Pure House Collection",
    description:
      "Pure House Collection unites three unique stays in Morocco: a lakeside takerkoust agafay hotel, an authentic farm hotel in takerkoust, and a luxury riad in Marrakech. Nature, comfort, design, and unforgettable Moroccan experiences",
    url: "https://purehousecollection.com/",
    siteName: "Pure House Collection",
    images: [
      {
        url: "https://purehousecollection.com/pure-house-collection-marrakech-agafay-takerkoust.jpg",
        width: 1200,
        height: 630,
        alt: "Pure House Collection | Boutique Hotels & Riad in Morocco – Lake, Farm & Marrakech Stays",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure House Collection",
    description:
      "Pure House Collection unites three unique stays in Morocco: a lakeside takerkoust agafay hotel, an authentic farm hotel in takerkoust, and a luxury riad in Marrakech. Nature, comfort, design, and unforgettable Moroccan experiences",
    images: [
      "https://purehousecollection.com/pure-house-collection-marrakech-agafay-takerkoust.jpg",
    ],
  },

  alternates: {
    canonical: "https://purehousecollection.com/",
  },
  metadataBase: new URL("https://purehousecollection.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Pure House Collection",
              image:
                "https://purehousecollection.com/pure-house-collection-marrakech-agafay-takerkoust.jpg",
              description:
                "Pure House Collection unites three unique stays in Morocco: a lakeside takerkoust agafay hotel, an authentic farm hotel in takerkoust, and a luxury riad in Marrakech. Nature, comfort, design, and unforgettable Moroccan experiences",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lalla Takerkoust",
                addressLocality: "Marrakech",
                postalCode: "40000",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.352165747303708,
                longitude: -8.131052250924593,
              },
              url: "https://purehousecollection.com",
              telephone: "+212682225235",
              sameAs: ["https://www.instagram.com/pure_house_collection/"],
              amenities: [
                "Free WiFi",
                "Swimming pool",
                "Restaurant",
                "Organic farm",
                "Yoga and wellness area",
              ],
              acceptsReservations: true,
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              hasMap: "https://maps.app.goo.gl/5wtXLVRFzsadpcYX9",
            }),
          }}
        />
      </Head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-R5BH2JJGH8" />
    </html>
  );
}

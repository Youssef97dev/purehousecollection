import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default:
      "Pure House Collection | Hôtels Boutique & Riad au Maroc – Lac, Ferme & Séjour à Marrakech",
    template: "%s | Pure House Collection",
  },
  description:
    "Pure House Collection réunit trois hébergements uniques au Maroc : un hôtel au bord du lac takerkoust et agafay, une ferme-hôtel authentique, et un riad de luxe à Marrakech. Nature, confort, design et expériences marocaines inoubliables",
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
    {
      name: "Pure House Collection",
      url: "https://purehousecollection.com/fr",
    },
  ],
  openGraph: {
    title: "Pure House Collection",
    description:
      "Pure House Collection réunit trois hébergements uniques au Maroc : un hôtel au bord du lac takerkoust et agafay, une ferme-hôtel authentique, et un riad de luxe à Marrakech. Nature, confort, design et expériences marocaines inoubliables",
    url: "https://purehousecollection.com/fr",
    siteName: "Pure House Collection",
    images: [
      {
        url: "https://purehousecollection.com/pure-house-collection-marrakech-agafay-takerkoust.jpg",
        width: 1200,
        height: 630,
        alt: "Pure House Collection | Hôtels Boutique & Riad au Maroc – Lac, Ferme & Séjour à Marrakech",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure House Collection",
    description:
      "Pure House Collection réunit trois hébergements uniques au Maroc : un hôtel au bord du lac takerkoust et agafay, une ferme-hôtel authentique, et un riad de luxe à Marrakech. Nature, confort, design et expériences marocaines inoubliables",
    images: [
      "https://purehousecollection.com/pure-house-collection-marrakech-agafay-takerkoust.jpg",
    ],
  },

  alternates: {
    canonical: "https://purehousecollection.com/fr",
  },
  metadataBase: new URL("https://purehousecollection.com/fr"),
};

const page = () => {
  return <Loader />;
};

export default page;

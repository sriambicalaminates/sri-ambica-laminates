import Head from "next/head";
import Service1 from "../nopage/services/service1";

export const metadata = {
    metadataBase: new URL('https://www.sriambicalaminates.com/services'),
    title: 'Services | Sri Ambica Laminates',
    description: "Explore the range of services offered by Sri Ambica Laminates. We provide innovative surface solutions for residential and commercial projects.",
    keywords: [
      'services', 'Sri Ambica Laminates', 'laminate solutions', 'interior laminates', 
      'residential laminates', 'commercial laminates', 'decorative surfaces'
    ],
    openGraph: {
      title: 'Services | Sri Ambica Laminates',
      description: "Explore the range of services offered by Sri Ambica Laminates. We provide innovative surface solutions for residential and commercial projects.",
      url: 'https://www.sriambicalaminates.com/services',
      siteName: 'Sri Ambica Laminates',
      type: 'website',
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Services | Sri Ambica Laminates',
      description: "Explore the range of services offered by Sri Ambica Laminates. We provide innovative surface solutions for residential and commercial projects.",
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
};


export default function Page() {
  return (
    <>
      
      <Service1 />
    </>
  );
}

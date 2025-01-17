import Head from "next/head";
import Contact1 from "../nopage/contact/contact1";

export const metadata = {
    metadataBase: new URL('https://www.sriambicalaminates.com/contact'),
    title: 'Contact Us | Sri Ambica Laminates',
    description: "Get in touch with Sri Ambica Laminates for inquiries about our products and services. Reach us via phone, email, or visit our location.",
    keywords: [
      'contact us', 'Sri Ambica Laminates', 'laminate inquiries', 'get in touch', 
      'contact information', 'laminate provider contact'
    ],
    openGraph: {
      title: 'Contact Us | Sri Ambica Laminates',
      description: "Get in touch with Sri Ambica Laminates for inquiries about our products and services. Reach us via phone, email, or visit our location.",
      url: 'https://www.sriambicalaminates.com/contact',
      siteName: 'Sri Ambica Laminates',
      type: 'website',
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | Sri Ambica Laminates',
      description: "Get in touch with Sri Ambica Laminates for inquiries about our products and services. Reach us via phone, email, or visit our location.",
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
};


export default function Page() {
  return (
    <>
      
      <Contact1 />
    </>
  );
}

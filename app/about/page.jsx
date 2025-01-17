import Head from "next/head";
import About1 from "../nopage/about/about1";

export const metadata = {
    metadataBase: new URL('https://www.sriambicalaminates.com/about'),
    title: 'About Us | Sri Ambica Laminates',
    description: "Discover the story behind Sri Ambica Laminates. Learn about our mission, vision, and commitment to delivering high-quality laminates.",
    keywords: [
      'about us', 'Sri Ambica Laminates', 'our mission', 'high-quality laminates', 
      'laminate solutions', 'surface designs', 'company profile'
    ],
    openGraph: {
      title: 'About Us | Sri Ambica Laminates',
      description: "Discover the story behind Sri Ambica Laminates. Learn about our mission, vision, and commitment to delivering high-quality laminates.",
      url: 'https://www.sriambicalaminates.com/about',
      siteName: 'Sri Ambica Laminates',
      type: 'website',
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | Sri Ambica Laminates',
      description: "Discover the story behind Sri Ambica Laminates. Learn about our mission, vision, and commitment to delivering high-quality laminates.",
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
};


export default function page() {
  return (
    <>
   
      <About1 />
    </>
  );
}

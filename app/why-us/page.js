import Head from "next/head";
import Whyus1 from "../nopage/whyus/whyus1";

export const metadata = {
    metadataBase: new URL('https://www.sriambicalaminates.com/why-us'),
    title: 'Why Us | Sri Ambica Laminates',
    description: "Find out why Sri Ambica Laminates is the preferred choice for high-quality laminates. Learn about our expertise and commitment to excellence.",
    keywords: [
      'why us', 'Sri Ambica Laminates', 'high-quality laminates', 'trusted laminate provider', 
      'interior design solutions', 'laminate expertise', 'laminate quality'
    ],
    openGraph: {
      title: 'Why Us | Sri Ambica Laminates',
      description: "Find out why Sri Ambica Laminates is the preferred choice for high-quality laminates. Learn about our expertise and commitment to excellence.",
      url: 'https://www.sriambicalaminates.com/why-us',
      siteName: 'Sri Ambica Laminates',
      type: 'website',
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Why Us | Sri Ambica Laminates',
      description: "Find out why Sri Ambica Laminates is the preferred choice for high-quality laminates. Learn about our expertise and commitment to excellence.",
      images: ['https://www.sriambicalaminates.com/Logo.png'],
    },
};


export default function Page() {
  return (
    <>
   
      <Whyus1 />
    </>
  );
}

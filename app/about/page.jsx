import Head from "next/head";
import About1 from "../nopage/about/about1";

export default function page() {
  return (
    <>
      <Head>
        <title>About Us - Sri Ambica Laminates</title>
        <meta
          name="description"
          content="Learn more about Sri Ambica Laminates, a leading provider of high-quality laminate solutions for all your interior and furniture needs."
        />
        <meta
          name="keywords"
          content="Sri Ambica Laminates, about laminates, high-quality laminates, laminate provider, interior laminates, furniture laminates"
        />
        <meta name="author" content="Sri Ambica Laminates" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About Us - Sri Ambica Laminates" />
        <meta
          property="og:description"
          content="Discover more about Sri Ambica Laminates, your trusted partner for premium laminate solutions."
        />
        <meta
          property="og:url"
          content="https://www.sriambicalaminates.com/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sriambicalaminates.com/Logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Us - Sri Ambica Laminates" />
        <meta
          property="twitter:description"
          content="Learn more about Sri Ambica Laminates, offering high-quality laminate solutions for interiors and furniture."
        />
        <meta
          property="twitter:image"
          content="https://www.sriambicalaminates.com/Logo.png"
        />
        <link rel="canonical" href="https://www.sriambicalaminates.com/about" />
      </Head>
      <About1 />
    </>
  );
}

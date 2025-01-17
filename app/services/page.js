import Head from "next/head";
import Service1 from "../nopage/services/service1";

export default function Page() {
  return (
    <>
      <Head>
        <title>Our Services - Sri Ambica Laminates</title>
        <meta
          name="description"
          content="Explore a wide range of high-quality laminate solutions and services at Sri Ambica Laminates. Discover durable and stylish laminates for your needs."
        />
        <meta
          name="keywords"
          content="Sri Ambica Laminates services, laminate solutions, premium laminates, high-quality laminates, durable laminates, stylish laminates"
        />
        <meta name="author" content="Sri Ambica Laminates" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Our Services - Sri Ambica Laminates" />
        <meta
          property="og:description"
          content="Sri Ambica Laminates offers premium laminate solutions and services to meet all your needs. Explore our wide range of stylish and durable laminates."
        />
        <meta
          property="og:url"
          content="https://www.sriambicalaminates.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sriambicalaminates.com/Logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Our Services - Sri Ambica Laminates" />
        <meta
          property="twitter:description"
          content="Discover high-quality laminate solutions and services at Sri Ambica Laminates. Stylish, durable, and designed for your needs."
        />
        <meta
          property="twitter:image"
          content="https://www.sriambicalaminates.com/Logo.png"
        />
        <link rel="canonical" href="https://www.sriambicalaminates.com/services" />
      </Head>
      <Service1 />
    </>
  );
}

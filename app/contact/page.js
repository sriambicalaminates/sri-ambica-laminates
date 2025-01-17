import Head from "next/head";
import Contact1 from "../nopage/contact/contact1";

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact Us - Sri Ambica Laminates</title>
        <meta
          name="description"
          content="Get in touch with Sri Ambica Laminates for high-quality laminate solutions. Contact us today for inquiries, support, and more."
        />
        <meta
          name="keywords"
          content="Sri Ambica Laminates contact, contact Sri Ambica Laminates, laminate inquiries, customer support, laminate solutions"
        />
        <meta name="author" content="Sri Ambica Laminates" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Contact Us - Sri Ambica Laminates" />
        <meta
          property="og:description"
          content="Reach out to Sri Ambica Laminates for all your laminate needs. Contact us for inquiries or support."
        />
        <meta
          property="og:url"
          content="https://www.sriambicalaminates.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sriambicalaminates.com/Logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact Us - Sri Ambica Laminates" />
        <meta
          property="twitter:description"
          content="Contact Sri Ambica Laminates for inquiries, support, or to learn more about our premium laminate solutions."
        />
        <meta
          property="twitter:image"
          content="https://www.sriambicalaminates.com/Logo.png"
        />
        <link rel="canonical" href="https://www.sriambicalaminates.com/contact" />
      </Head>
      <Contact1 />
    </>
  );
}

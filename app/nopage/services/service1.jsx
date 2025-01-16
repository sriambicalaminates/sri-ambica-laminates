import Link from "next/link";
import Image from "next/image";
import S1 from "../../../public/P1.png"

export default function Services() {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-brown mt-2 rounded-xl text-white py-10">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
        <p className="text-center mt-4 text-white text-lg">
          Quality laminates, fast delivery, and exceptional customer service tailored to meet your wholesale needs.
        </p>
      </div>

      {/* Services Section */}
      <div className=" mt-2 rounded-xl px-4 py-12 bg-back">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('/S2.jpg')` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black">Same-Day & Next-Day Delivery</h2>
              <p className="mt-4 text-black">
                Same-day delivery for Hyderabad locations and next-day delivery for nearby areas, even for a single sheet.
              </p>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('/S4.png')` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black">Premium Laminate Sheets</h2>
              <p className="mt-4 text-black">
                Providing premium-quality laminate sheets in bulk for retailers across Hyderabad and nearby regions.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('/S3.png')` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black">24/7 Call & WhatsApp Support</h2>
              <p className="mt-4 text-black">
                Our team is available round-the-clock for queries and orders through call or WhatsApp.
              </p>
            </div>
          </div>
          {/* Service 4 */}
          {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('/customization.jpg')` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Custom Laminates</h2>
              <p className="mt-4 text-gray-600">
              Discover a wide variety of high-quality laminate sheets in diverse designs and finishes, perfect for any project.
              </p>
            </div>
          </div> */}
          {/* Service 5 */}
          {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('/eco-friendly.jpg')` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Sustainable Laminates</h2>
              <p className="mt-4 text-gray-600">
                Eco-friendly laminates crafted with sustainability and durability at the forefront.
              </p>
            </div>
          </div> */}
          {/* Service 6 */}
          {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('/exclusive.jpg')` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Exclusive Laminate Collections</h2>
              <p className="mt-4 text-gray-600">
                Explore our vast range of laminate designs and patterns to find the perfect fit for your projects.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-back text-brown py-10  mt-2 rounded-xl">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Partner with Sri Ambica Laminates</h2>
          <p className="mt-4 text-gray-900">
            Whether you're a retailer or designer, our laminates are crafted to exceed expectations.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 border-brown border-2 text-brown font-bold rounded-lg hover:bg-brown hover:text-white transition"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
  
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown mt-2 rounded-xl text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left ">
          <h2 className="text-xl font-bold">Sri Ambica Laminates</h2>
          <p className="text-sm">Where quality meets style in every sheets</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/">
            <p className="hover:text-gray-400">Home</p>
          </Link>
          <Link href="/services">
            <p className="hover:text-gray-400">Services</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-gray-400">About</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-gray-400">Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm text-black">
        <p>&copy; {new Date().getFullYear()} Sri Ambica Laminates. All rights reserved.</p>
      </div>
    </footer>
  );
}

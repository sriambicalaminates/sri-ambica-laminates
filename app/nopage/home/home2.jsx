"use client";

import Image from "next/image";
import Link from "next/link";
import Dummy from "../../../public/R1.png";
import Dummy1 from "../../../public/R2.png";
import Dummy2 from "../../../public/R3.png";
import Dummy3 from "../../../public/R4.png";


export default function GallerySection() {
  return (
    <>
      <section className="text-gray-600 body-font bg-back mt-36 md:mt-28 rounded-xl">
        <div className="px-5 py-6 mx-auto">
          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font text-brown pt">
              RANGERZ
            </h1>
          </div>

          {/* Gallery Grid */}
          <div className="flex flex-wrap bg-white rounded-xl">
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fit object-center rounded-xl"
                  src={Dummy}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-brown bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fit object-center rounded-xl"
                  src={Dummy1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-brown bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fit object-center rounded-xl"
                  src={Dummy2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-brown bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fit object-center rounded-xl"
                  src={Dummy3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-brown bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-end mt-6">
            <Link href="https://drive.google.com/file/d/1kxavbFfI0g7nRAlpnofjacBCpcCAe7vL/view?usp=sharing" target="_blank">
              <button className="px-6 py-2 hover:text-white border-brown border-2 text-brown rounded-lg shadow-md hover:bg-brown transition-all duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

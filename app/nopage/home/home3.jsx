"use client";

import Image from "next/image";
import Link from "next/link";
import Dummy from "../../../public/W1.png";
import Dummy1 from "../../../public/W2.png";
import Dummy2 from "../../../public/W3.png";
import Dummy3 from "../../../public/W4.png";
import H2 from "../../../public/H2.png"


export default function GallerySection() {
    return (
        <>
            <section className="text-gray-600 body-font bg-back mt-2 md:mt-4 rounded-xl">
                <div className="px-5 py-6 mx-auto">
                    {/* Heading */}
                    <div className="flex flex-col text-center justify-center w-full mb-6">
                        <div className="flex items-center justify-center">
                            <Image
                                src={H2}
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="flex flex-wrap bg-white rounded-xl justify-center">
                    <div className="lg:w-1/4 sm:w-1/2 p-4">
                            <div className="flex hover:scale-105 transition-transform">
                                <Image
                                    alt="gallery"
                                    className=" inset-0 w-full h-64 object-fit object-center rounded-xl"
                                    src={Dummy}
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-1/2 p-4">
                            <div className="flex hover:scale-105 transition-transform">
                                <Image
                                    alt="gallery"
                                    className=" inset-0 w-full h-64 object-fit object-center rounded-xl"
                                    src={Dummy1}
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-1/2 p-4">
                            <div className="flex hover:scale-105 transition-transform">
                                <Image
                                    alt="gallery"
                                    className=" inset-0 w-full h-64 object-fit object-center rounded-xl"
                                    src={Dummy2}
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-1/2 p-4">
                            <div className="flex hover:scale-105 transition-transform">
                                <Image
                                    alt="gallery"
                                    className=" inset-0 w-full h-64 object-fit object-center rounded-xl"
                                    src={Dummy3}
                                />
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-end mt-6">
                        <Link href="https://drive.google.com/file/d/1iGWGbpxvigYdqH0X7k_usdWjeQS6BWw8/view" target="_blank">
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

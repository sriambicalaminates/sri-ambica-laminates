import Image from "next/image";
import A1 from "../../../public/A1.png"

export default function AboutUs() {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="bg-brown mt-2 rounded-xl text-white py-10">
                <h1 className="text-4xl font-bold text-center">About Sri Ambica Laminates</h1>
                <p className="text-center mt-4 text-white text-lg">
                Trusted partner in quality laminate solutions, delivering excellence since our inception.
                </p>
            </div>

            {/* About Section */}
            <div className=" mt-2 rounded-xl md:px-6 py-16 bg-back">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="px-6 md:px-0">
                        <h2 className="text-4xl font-bold text-brown">
                            Crafting Excellence, Delivering Quality
                        </h2>
                        <p className="mt-6 text-black leading-relaxed text-justify">
                            At Sri Ambica Laminates, we pride ourselves on offering top-notch laminate sheets tailored for
                            retailers. From a single sheet to bulk orders, our commitment to quality and customer satisfaction remains unparalleled.
                            Located in Hyderabad, we&apos;ve built a reputation for reliability, fast delivery, and exceptional support.
                        </p>
                        <p className="mt-4 text-black leading-relaxed text-justify">
                            We believe in creating long-lasting partnerships by providing value, innovation, and personalized
                            services that meet your business needs.
                        </p>
                    </div>
                    <div className="relative h-80 lg:h-96">
                        <Image
                            src={A1}
                            alt="About Sri Ambica Laminates"
                            className="w-full h-full object-fit rounded-lg "
                        ></Image>
                    </div>
                </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="bg-back mt-2 text-white py-14  rounded-xl">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Mission */}
                        <div className="border-brown border-2 text-brown hover:bg-brown hover:text-white p-4 rounded-xl">
                            <h3 className="text-2xl font-bold ">Our Mission</h3>
                            <p className="mt-4 ">
                                To be the most trusted supplier of high-quality laminate sheets, delivering unmatched value and customer satisfaction.
                            </p>
                        </div>
                        {/* Vision */}
                        <div className="border-brown border-2 text-brown hover:bg-brown hover:text-white p-4 rounded-xl">
                            <h3 className="  text-2xl font-bold">Our Vision</h3>
                            <p className="mt-4">
                                To revolutionize the laminate industry with innovative designs, sustainable practices, and reliable delivery services.
                            </p>
                        </div>
                        {/* Values */}
                        <div className="border-brown border-2 text-brown hover:bg-brown hover:text-white p-4 rounded-xl">
                            <h3 className="text-2xl font-bold">Our Values</h3>
                            <p className="mt-4">
                                Integrity, commitment, customer-centricity, and quality excellence are at the core of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Testimonials */}
            <div className="bg-back mt-2 rounded-xl py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-brown">What Our Clients Say</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-brown rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
                            <p className="text-white italic">
                                "Sri Ambica Laminates has been our go-to supplier for years. Their fast delivery and customer
                                service are unmatched."
                            </p>
                            <p className="mt-4 font-bold text-gray-800">- Retailer in Hyderabad</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-brown rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
                            <p className="text-white italic">
                                "Their laminates are of exceptional quality. Highly recommended for anyone looking for reliable suppliers."
                            </p>
                            <p className="mt-4 font-bold text-gray-800">- Interior Designer</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-brown rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
                            <p className="text-white italic">
                                "I love their commitment to sustainability and their wide range of designs. <br></br> Truly impressive!"
                            </p>
                            <p className="mt-4 font-bold text-gray-800">- Architect in Telangana</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

import Image from 'next/image';
import Ow1 from "../../../public/Ow1.png"
import Ow2 from "../../../public/Ow2.png"

export default function ContactUs() {
    return (
        <div className="">
            {/* Header */}
            <div className="bg-brown rounded-xl mt-2 text-white py-8 text-center">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="text-sm mt-2">We'd love to hear from you! Reach out to us anytime.</p>
            </div>

            <div className=" mt-2 rounded-xl px-4 py-10 bg-back">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Section */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-brown">Get in Touch</h2>
                        <p className="text-gray-600">
                            Have questions or need assistance? Feel free to contact us using the information below.
                        </p>

                        {/* Owners Info */}
                        <div>
                            <h3 className="text-xl font-bold text-brown mb-4">Our Team</h3>
                            <div className="space-y-6">
                                {/* Owner 1 */}
                                <div className="p-2 w-full">
                                    <a href="https://wa.me/917016079345" target="_blank" rel="noopener noreferrer">
                                        <div className="h-full flex items-center border-brown border p-4 rounded-lg hover:bg-brown hover:text-white transition">
                                            <Image
                                                alt="team"
                                                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                src={Ow2}
                                            />
                                            <div className="flex-grow">
                                                <h2 className="title-font font-medium">Meet Patel</h2>
                                                <p className="">+91 7016079345</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Owner 2 */}
                                <div className="p-2 w-full">
                                    <a href="https://wa.me/916354531450" target="_blank" rel="noopener noreferrer">
                                        <div className="h-full flex items-center border-brown border p-4 rounded-lg hover:bg-brown hover:text-white transition">
                                            <Image
                                                alt="team"
                                                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                src={Ow1}
                                            />
                                            <div className="flex-grow">
                                                <h2 className=" title-font font-medium">Yug Patel</h2>
                                                <p className="">+91 6354531450</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Google Maps Section */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.718457070704!2d78.45498427540292!3d17.377275483508164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9784e325fe5d%3A0x484ef2522d985b96!2ssri%20ambica%20laminate!5e0!3m2!1sen!2sin!4v1737008357441!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

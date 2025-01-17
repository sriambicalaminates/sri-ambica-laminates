"use client"

import CountUp from "react-countup";
import { useEffect, useState } from "react";


export default function WhyUs() {

  


  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger count-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById("stats-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-brown mt-2 rounded-xl text-white py-10">
        <h1 className="text-4xl font-bold text-center">Why Choose Sri Ambica Laminates?</h1>
        <p className="text-center mt-4 text-white text-lg">
          Your trusted partner in delivering premium laminate sheets with unbeatable service and quality.
        </p>
      </div>

      <section id="stats-section" className="bg-back mt-2 rounded-xl">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">The Trusted Name for Laminate Solutions</h2>
            <p className="mt-4 text-black sm:text-xl">
              Trusted by countless retailers across Telangana and beyond, Sri Ambica Laminates is your reliable partner
              for premium laminate sheets, offering unmatched quality, same-day delivery, and dedicated support.
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Designs Available */}
              <div className="flex flex-col rounded-lg border-brown border-2 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-black">Designs Available</dt>
                <dd className="text-4xl font-extrabold text-brown md:text-5xl">
                  {isVisible && <CountUp start={1} end={700} duration={2} suffix="+" />}
                </dd>
              </div>

              {/* Same-Day Delivery */}
              <div className="flex flex-col rounded-lg border-brown border-2 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-black">Same-Day Delivery in Hyderabad</dt>
                <dd className="text-4xl font-extrabold text-brown md:text-5xl">
                  {isVisible && <CountUp start={1} end={100} duration={2} suffix="%" />}
                </dd>
              </div>

              {/* Happy Clients */}
              <div className="flex flex-col rounded-lg border-brown border-2 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-black">Happy Clients</dt>
                <dd className="text-4xl font-extrabold text-brown md:text-5xl">
                  {isVisible && <CountUp start={1} end={1500} duration={2} suffix="+" />}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

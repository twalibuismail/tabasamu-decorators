import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";

export const Hero = () => {
  const handleClick = (e: any, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-8 py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#B76E79]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#E5E4E2]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Content Container - Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* Badge - Shows first on all devices */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <Chip
            className="bg-gradient-to-r from-[#B76E79]/20 to-[#E5E4E2]/20 border border-[#B76E79]/30 w-fit"
            variant="bordered"
            size="lg"
          >
            <span className="text-[#B76E79] font-semibold">✨ Wapambaji wa Kisasa wa Dar es Salaam</span>
          </Chip>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content (order-2 on mobile, order-1 on desktop) */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Sherehe Yako,
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#B76E79] via-[#D48E98] to-[#B76E79] bg-clip-text text-transparent animate-gradient">
                  Tabasamu Letu.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-default-600 max-w-xl leading-relaxed">
                Tunageuza matukio yako kuwa kumbukumbu za kudumu kwa nakshi za kifahari za
                <span className="text-[#B76E79] font-semibold"> Waridi na Kijivu</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                as={Link}
                className="bg-gradient-to-r from-[#B76E79] to-[#D48E98] text-white font-semibold shadow-xl shadow-[#B76E79]/40 hover:shadow-2xl hover:shadow-[#B76E79]/50 transition-all"
                href="#vifurushi"
                onClick={(e) => handleClick(e, "#vifurushi")}
                radius="full"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Angalia Vifurushi
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>

              <Button
                as={Link}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-[#B76E79] border-2 border-[#B76E79] font-semibold hover:bg-[#B76E79] hover:text-white transition-all"
                href="#matunzio"
                onClick={(e) => handleClick(e, "#matunzio")}
                variant="bordered"
                radius="full"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ona Kazi Zetu
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-default-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B76E79]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">200+ Matukio</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B76E79]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Ubora wa Juu</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B76E79]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Miaka 5+</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image (order-1 on mobile, order-2 on desktop) */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#B76E79]/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#E5E4E2]/30 rounded-full blur-3xl -z-10" />

              {/* Image */}
              <Image
                src="/hero-decoration.png"
                alt="Tabasamu Decorators - Beautiful Event Decoration"
                className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                isZoomed
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[#B76E79] rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#B76E79]">5.0</p>
                    <p className="text-xs text-default-500">Ukadiriaji wa Wateja</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
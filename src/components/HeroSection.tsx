import Image from "next/image";

// Placeholder for the image. You'll need to place the image for Character Matters
// in your 'public' directory and update the 'src' path accordingly.
const PASTOR_IMAGE_SRC = "/hero.png";

export default function HeroSection() {
  return (
    // The min-h-screen is kept for full-height, flex for center alignment,
    // and a subtle light gray background is used, matching the image.
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center bg-gray-50"
    >
      {/* Main container to hold the content and image. Max width is set to keep content contained. */}
      <div className="container mx-auto p-4 md:p-8 lg:p-16">
        {/* Mobile: Image first, centered before heading */}
        <div className="lg:hidden relative w-full h-80 mb-8 flex justify-center">
          <Image
            src={PASTOR_IMAGE_SRC}
            alt="Character Matters"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

        {/* The two-column layout using grid. On large screens, it's 2 columns, otherwise 1. */}
        {/* Items-center vertically aligns content in the grid columns. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Text Content and Buttons */}
          <div className="flex flex-col text-center md:text-left">
            {/* Title Section: Matched font size, weight, and color scheme */}
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-2 text-black">
              Walking in Faith,
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-8 text-[#853A75]">
              Serving in Love
            </h2>

            {/* Descriptive Text: Matched font size and text color for readability */}
            <p className="text-base text-gray-700 mb-8 max-w-xl">
              Welcome to Character Matters! It&apos;s our joy to walk with you
              on this beautiful journey of faith. Life can be full of twists and
              turns—moments of celebration, but also seasons of uncertainty and
              heartache. Through it all, we believe God&apos;s love is our
              anchor, and His Word gives us the strength and peace we need.
              <br />
              <br />
              Here, you&apos;ll find a safe and encouraging space where we offer
              spiritual guidance, biblical counseling, and pastoral care to help
              you grow closer to God, discover His purpose for your life, and
              experience the healing comfort of His presence. Our prayer is that
              as we walk together, you&apos;ll be reminded that you are never
              alone, and that with God&apos;s love lighting the way, there is
              always hope for tomorrow.
            </p>

            {/* Buttons Section: Three specific ministry buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {/* Primary Button (Filled) */}
              <a
                href="#about"
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#853A75] text-white hover:bg-[#6a2e5d] transition-colors shadow-md text-center whitespace-nowrap"
              >
                Learn More About My Ministry
              </a>
              {/* Secondary Button (Outlined/Text-only with background match) */}
              <a
                href="#services"
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition-colors shadow-sm text-center whitespace-nowrap"
              >
                Join Bible Study
              </a>
              {/* Tertiary Button (Outlined/Text-only with background match) */}
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition-colors shadow-sm text-center whitespace-nowrap"
              >
                Book Counselling Session
              </a>
            </div>

            {/* Credentials/Badges Section: Using flex and circles for the plus/dot icons */}
            <div className="flex flex-wrap space-x-6">
              {/* Badge 1 */}
              <div className="flex items-center text-sm font-medium text-gray-800">
                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                +15 Years Ministry
              </div>
              {/* Badge 2 */}
              <div className="flex items-center text-sm font-medium text-gray-800">
                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                Licensed Counselor
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block relative w-full h-full min-h-[600px]">
            <Image
              src={PASTOR_IMAGE_SRC}
              alt="Character Matters"
              // Use object-contain to preserve aspect ratio and show full image
              layout="fill"
              objectFit="contain"
              // Remove the rounded border to let the image take full right side
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

// Placeholder for the image. You'll need to place the image for Pastor Naome
// in your 'public' directory and update the 'src' path accordingly.
const PASTOR_NAOME_IMAGE_SRC = "/about-pst-naome.png"; // e.g., /public/pastor-naome.png

export default function AboutSection() {
  return (
    // Using the same section structure as the HeroSection
    <section
      id="about" // Changed id to "about"
      className="pt-16 min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto p-4 md:p-8 lg:p-16">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-8 text-black text-center">
          About Pastor Naome
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Called into ministry more than 20 years ago, I have devoted my life to
          serving God and His people through biblical teaching, pastoral
          counselling, and spiritual mentorship.
        </p>
        {/* Mobile: Image first, then text */}
        <div className="lg:hidden">
          {/* Image First on Mobile */}
          <div className="relative w-full h-80 flex justify-center mb-8">
            <Image
              src={PASTOR_NAOME_IMAGE_SRC}
              alt="Pastor Naome"
              width={300}
              height={300}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* Text Content on Mobile */}
          <div className="flex flex-col space-y-6 text-center">
            {/* Journey in Faith Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                My Journey In Faith
              </h3>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                I am a teacher, author, counsellor, mentor, and businesswoman,
                passionate about:
              </p>
              <ul className="text-xs md:text-sm text-gray-700 mb-2 space-y-0.5 list-disc list-inside text-left">
                <li>Women&apos;s ministry</li>
                <li>Marriage and pre-marital counselling</li>
                <li>Character development</li>
                <li>Biblical study and discipleship</li>
              </ul>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                My ministry is built on the belief that real, lasting change
                begins from within, as hearts are renewed and lives are aligned
                with the character of Christ.
              </p>
              <p className="text-xs md:text-sm text-gray-700 mb-2 italic">
                Gifted with compassion, discernment, and a Spirit-led approach,
                I minister to the whole person — spirit, soul, and body —
                helping believers:
              </p>
              <ul className="text-xs md:text-sm text-gray-700 mb-2 space-y-0.5 list-disc list-inside text-left">
                <li>Break free from spiritual strongholds</li>
                <li>Discover their God-given identity</li>
                <li>Grow in spiritual maturity</li>
                <li>Walk in the freedom Christ provides</li>
              </ul>
            </div>

            {/* Mission Statement */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Mission Statement
              </h3>
              <p className="text-xs md:text-sm text-gray-700 italic">
                To deliver, teach, and demonstrate the living Word of God with
                clarity and power — equipping believers to grow in character,
                spiritual maturity, and Christlikeness.
              </p>
            </div>

            {/* Foundation Scripture */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Foundation Scripture
              </h3>
              <p className="text-xs md:text-sm text-gray-700 italic">
                &quot;Then God said, &apos;Let Us make man in Our image,
                according to Our likeness…&apos;&quot; — Genesis 1:26
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Original layout (text left, image right) */}
        <div className="hidden lg:grid grid-cols-2 gap-24 items-start">
          {/* Left Column: All Text Content */}
          <div className="flex flex-col space-y-6 text-left">
            {/* Journey in Faith Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                My Journey In Faith
              </h3>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                I am a teacher, author, counsellor, mentor, and businesswoman,
                passionate about:
              </p>
              <ul className="text-xs md:text-sm text-gray-700 mb-2 space-y-0.5 list-disc list-inside text-left">
                <li>Women&apos;s ministry</li>
                <li>Marriage and pre-marital counselling</li>
                <li>Character development</li>
                <li>Biblical study and discipleship</li>
              </ul>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                My ministry is built on the belief that real, lasting change
                begins from within, as hearts are renewed and lives are aligned
                with the character of Christ.
              </p>
              <p className="text-xs md:text-sm text-gray-700 mb-2 italic">
                Gifted with compassion, discernment, and a Spirit-led approach,
                I minister to the whole person — spirit, soul, and body —
                helping believers:
              </p>
              <ul className="text-xs md:text-sm text-gray-700 mb-2 space-y-0.5 list-disc list-inside text-left">
                <li>Break free from spiritual strongholds</li>
                <li>Discover their God-given identity</li>
                <li>Grow in spiritual maturity</li>
                <li>Walk in the freedom Christ provides</li>
              </ul>
            </div>

            {/* Mission Statement */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Mission Statement
              </h3>
              <p className="text-xs md:text-sm text-gray-700 italic">
                To deliver, teach, and demonstrate the living Word of God with
                clarity and power — equipping believers to grow in character,
                spiritual maturity, and Christlikeness.
              </p>
            </div>

            {/* Foundation Scripture */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Foundation Scripture
              </h3>
              <p className="text-xs md:text-sm text-gray-700 italic">
                &quot;Then God said, &apos;Let Us make man in Our image,
                according to Our likeness…&apos;&quot; — Genesis 1:26
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-full min-h-[600px] flex justify-end">
            <Image
              src={PASTOR_NAOME_IMAGE_SRC}
              alt="Pastor Naome"
              width={300}
              height={300}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

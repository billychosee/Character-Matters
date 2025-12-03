import { Cross } from "lucide-react"; // Using the Cross icon for the logo

// Define a lighter purple for the quote text and line (visually closer to the image)
const LIGHTER_PURPLE = "#9c609c";

export default function Footer() {
  return (
    // Footer container with padding and a light background
    <footer className="bg-white pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* === Top Section: Three Columns === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-black">
          {/* Column 1: Logo and Mission */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              {/* Logo: Purple Cross Icon */}
              <div className="w-10 h-10 rounded-full bg-[#853A75] flex items-center justify-center mr-2">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Character Matters</span>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Dedicated to providing compassionate pastoral care, biblical
              counseling, and spiritual guidance to help individuals and
              families grow in their faith and find peace in God&apos;s love.
            </p>

            {/* Scripture Quote: Lighter Purple Text */}
            <p className={`text-sm font-semibold text-[${LIGHTER_PURPLE}]`}>
              &quot;Trust in the Lord with all your heart&quot; - Proverbs 3:5
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-black">
              Quick links
            </h4>
            <ul className="space-y-3 text-gray-600 flex flex-col items-center md:items-start">
              {/* Custom bullet points for quick links */}
              <li className="flex items-start w-full justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#853A75] mr-3 mt-2 shrink-0"></span>
                <a
                  href="#about"
                  className="hover:text-[#853A75] transition-colors"
                >
                  About Character Matters
                </a>
              </li>
              <li className="flex items-start w-full justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#853A75] mr-3 mt-2 shrink-0"></span>
                <a
                  href="#services"
                  className="hover:text-[#853A75] transition-colors"
                >
                  Ministry Services
                </a>
              </li>
              <li className="flex items-start w-full justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#853A75] mr-3 mt-2 shrink-0"></span>
                <a
                  href="#books"
                  className="hover:text-[#853A75] transition-colors"
                >
                  Books & Resources
                </a>
              </li>
              <li className="flex items-start w-full justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#853A75] mr-3 mt-2 shrink-0"></span>
                <a
                  href="#contact"
                  className="hover:text-[#853A75] transition-colors"
                >
                  Contact & Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-black">
              Contact information
            </h4>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-bold text-black">Phone</p>
                <p>+44 7879 847236</p>
              </div>
              <div>
                <p className="font-bold text-black">Email</p>
                <p>naome@character-matters.uk</p>
              </div>
              <div>
                <p className="font-bold text-black">Address</p>
                <p>
                  Corby, Northamptonshire
                  <br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Footer Divider === */}
        {/* Horizontal line with the lighter purple color */}
        <hr className={`my-12 border-t border-[${LIGHTER_PURPLE}]/50`} />

        {/* === Copyright === */}
        <div className="text-center pb-8 text-gray-500 text-sm">
          &copy; 2025 Character Matters. All rights reserved
        </div>
      </div>
    </footer>
  );
}

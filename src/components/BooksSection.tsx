import Image from "next/image";

// Placeholder for the book cover image. Replace with the actual path.
const BOOK_COVER_SRC = "/character-matters-cover.png";

export default function BooksSection() {
  // The content for the left purple block is pulled from the image (Hero Section text reused)
  const bookDescription =
    "A powerful and practical guide to understanding the importance of character in the Christian walk. This book helps believers align their daily choices, attitudes, and lifestyle with the heart of Christ.";

  return (
    // Set background to white for the whole section as per the image
    <section id="books" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            Books & Resources
          </h2>
        </div>

        {/* === Main Content: Two-Column Layout === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* === Left Column: Book Details and Buy Button (Maroon Background) === */}
          <div className="bg-[#853A75] p-8 rounded-xl shadow-2xl flex flex-col justify-between">
            <div className="text-white">
              {/* Main Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-6 tracking-tight">
                CHARACTER MATTERS
              </h3>

              {/* Description (Pre-wrap preserves the line breaks from the original text block) */}
              <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap mb-10">
                {bookDescription}
              </p>
            </div>

            {/* Price, Pages, and Button Block */}
            <div>
              <p className="text-2xl font-bold text-white mb-2">$20.99</p>
              <p className="text-sm text-gray-200 mb-6">200 PAGES</p>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-lg bg-[#6a2e5d] text-white text-lg font-semibold hover:bg-[#5a254f] transition-colors shadow-xl">
                {/* Shopping cart icon from lucide-react (assuming it's installed) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          {/* === Right Column: Book Cover and Reviews === */}
          <div className="flex flex-col space-y-8">
            {/* Book Cover Image */}
            <div className="relative h-96 w-full flex items-center justify-center">
              {/* Using a simple div placeholder here, you would use the Next/Image component for a real image */}
              {/* For the tilted 3D effect, using a specific width/height and drop-shadow */}
              <Image
                src={BOOK_COVER_SRC}
                alt="Character Matters Book Cover"
                width={350} // Sizing it appropriately
                height={500}
                className="object-contain"
              />
            </div>

            {/* Reviews and Comments Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-black border-b border-gray-200 pb-2">
                Reviews and comments
              </h4>
              <textarea
                placeholder="Comment"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] transition-colors text-gray-700 resize-none"
              ></textarea>
              {/* Note: The image only shows the text area, not a submit button. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


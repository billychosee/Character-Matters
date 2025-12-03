import { Star, Quote } from "lucide-react"; // Importing icons for stars and quote marks

export default function TestimonialsSection() {
  // Define a reusable component for the testimonial card
  const TestimonialCard = ({ title, text }: { title: string; text: string }) => {
    // Determine the number of filled stars (assuming rating is 5 for the image)
    const stars = Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-yellow-500 text-yellow-500" // Yellow fill and stroke for stars
        />
      ));

    return (
      // Card container: white background, rounded edges, subtle shadow
      <div className="bg-white p-6 pt-12 rounded-xl shadow-md border border-gray-100 relative">
        {/* Yellow Quote Icon */}
        <div className="absolute top-0 left-4 transform -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
            {/* Using the Quote icon (rotated to look like the one in the image) */}
            <Quote className="w-6 h-6 text-white rotate-180" />
          </div>
        </div>

        {/* Content */}
        <div className="mb-4 flex space-x-0.5">{stars}</div>

        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>

        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>

        {/* Name/Source can be added here if needed, but the image only shows the text */}
      </div>
    );
  };

  // Define the testimonials based on the image content (repeated placeholder)
  const testimonialsData = [
    {
      rating: 5,
      title: "Biblical Foundation",
      text: "I believe in the authority and inspiration of Scripture as our guide for faith, life, and spiritual growth.",
    },
    {
      rating: 5,
      title: "Biblical Foundation",
      text: "I believe in the authority and inspiration of Scripture as our guide for faith, life, and spiritual growth.",
    },
    {
      rating: 5,
      title: "Biblical Foundation",
      text: "I believe in the authority and inspiration of Scripture as our guide for faith, life, and spiritual growth.",
    },
    {
      rating: 5,
      title: "Biblical Foundation",
      text: "I believe in the authority and inspiration of Scripture as our guide for faith, life, and spiritual growth.",
    },
    {
      rating: 5,
      title: "Biblical Foundation",
      text: "I believe in the authority and inspiration of Scripture as our guide for faith, life, and spiritual growth.",
    },
    {
      rating: 5,
      title: "Biblical Foundation",
      text: "I believe in the authority and inspiration of Scripture as our guide for faith, life, and spiritual growth.",
    },
  ];

  return (
    // Set background to white (or light gray) and center content
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            Testimonials & Praise
          </h2>
        </div>

        {/* === Testimonials Grid (3 columns) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

// Ministry service images
const INDIVIDUAL_COUNSELING_IMG = "/ministry1.png";
const MARRIAGE_FAMILY_IMG = "/ministry2.png";
const BIBLE_STUDY_IMG = "/ministry3.png";

// Component to render a service card based on the image design
const ServiceCard = ({ title, description, includedItems, imageSrc }: { title: string; description: string; includedItems: string[]; imageSrc: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>

        {/* Description */}
        <p className="text-base text-gray-600 mb-6">{description}</p>

        {/* What's Included Header */}
        <h4 className="text-lg font-bold mb-3 text-gray-800">
          What&apos;s Included:
        </h4>

        {/* List of Included Items - Using custom dots (yellow circles) */}
        <ul className="space-y-2 mb-8 grow">
          {includedItems.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              {/* Custom Yellow Dot */}
              <span className="w-2.5 h-2.5 min-w-2.5 rounded-full bg-yellow-500 mr-3 mt-1.5"></span>
              {item}
            </li>
          ))}
        </ul>

        {/* Schedule Button - Maroon background, rounded, matching the website theme */}
        <button className="w-full px-6 py-3 text-sm font-semibold rounded-lg bg-[#853A75] text-white hover:bg-[#6a2e5d] transition-colors shadow-md mt-auto">
          Schedule Session
        </button>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      title: "Individual Pastoral Counseling",
      imageSrc: INDIVIDUAL_COUNSELING_IMG,
      description:
        "One-on-one spiritual guidance and biblical counseling for personal growth, life transitions, grief, and spiritual questions",
      includedItems: [
        "45-60 minute sessions",
        "Biblical foundation",
        "Confidential environment",
        "Flexible scheduling",
      ],
    },
    {
      title: "Marriage & Family Counseling",
      imageSrc: MARRIAGE_FAMILY_IMG,
      description:
        "Faith-based counseling for couples and families, focusing on communication, conflict resolution, and strengthening relationships",
      includedItems: [
        "Couples counseling",
        "Family therapy",
        "Pre-marital preparation",
        "Relationship restoration",
      ],
    },
    {
      title: "Bible Study & Teaching",
      imageSrc: BIBLE_STUDY_IMG,
      description:
        "In-depth Bible study sessions, workshops, and teaching opportunities for individuals and groups seeking deeper understanding",
      includedItems: [
        "Weekly Bible studies",
        "Topical workshops",
        "Women's ministry",
        "Youth programs",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      {" "}
      {/* Changed background to white to match image */}
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            Ministry Services
          </h2>
          <p className="text-lg text-gray-700">
            Offering comprehensive pastoral care and spiritual guidance to
            support you on your faith journey and help you grow closer to God
          </p>
        </div>

        {/* === Service Cards Container === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              includedItems={service.includedItems}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

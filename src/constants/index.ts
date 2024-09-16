export const appConstants = {
  appName: "B Q Tours & Travels",
  tagLine:
    "Your trusted partner for domestic and international travel planning.",
  getInTouchHelper: "YOUR TRAVEL PARTNER",
  getInTouchTitle: "Explore the world with ease",
  getInTouchContent: `B Q Tours & Travels, based in Nagpur, is your trusted travel agency
            dedicated to making your travel dreams a reality. We specialize in
            crafting tailored domestic and international travel experiences,
            ensuring a hassle-free journey from start to finish. Our expert team
            is committed to providing exceptional services, including flight
            bookings, visa and passport assistance, travel insurance, and
            comprehensive holiday planning. Let us handle the details while you
            focus on making memories.`,
  services: [
    {
      title: "Flight Booking",
      shortDescription:
        "Book your flights effortlessly with our expert assistance.",
      image: "/assets/airTickets.jpg",
      href: "/flights",
      description:
        "At B Q Tours & Travels, we simplify the process of booking air tickets for both domestic and international travel. Our team works closely with major airlines to offer you the best flight options at competitive prices. Whether you are planning a business trip or a family vacation, we ensure a seamless ticket booking experience with a range of options to suit your schedule and budget. Leave the complexities of flight bookings to us, and focus on planning the rest of your journey.",
    },
    {
      title: "Visa and passport assistance",
      shortDescription: "Navigate the visa and passport process with ease.",
      image: "/assets/visaPassport.jpg",
      href: "/visaPassport",
      description:
        "Applying for a visa or passport can be daunting, but our team at B Q Tours & Travels is here to simplify the process for you. We provide comprehensive assistance, guiding you through every step of the application procedures. Our experts are familiar with the latest regulations and requirements for various countries, ensuring that your paperwork is complete and accurate. Whether you’re traveling for leisure or business, we enable you to face the visa and passport process with confidence, so you can focus on planning your adventure without the stress.",
    },
    {
      title: "International Holidays",
      shortDescription:
        "Planning and managing all-inclusive holidays to popular international destinations.",
      image: "/assets/internationalHolidays.jpg",
      href: "/holidays",
      description:
        "Dreaming of a getaway to a far-off destination? Our International Holidays service offers a range of meticulously crafted holiday packages to some of the world’s most sought-after locations. Whether you want to explore the historical landmarks of Europe, relax on the pristine beaches of the Maldives, or experience the vibrant cultures of Southeast Asia, we have the perfect package for you. We handle everything from flights and accommodations to local tours and dining experiences, allowing you to immerse yourself fully in your destination without the stress of planning",
    },
    {
      title: "Travel insurance",
      shortDescription:
        "Protect your travels with comprehensive insurance options.",
      image: "/assets/insurance.jpg",
      href: "/insurance",
      description:
        "Traveling should be enjoyable, and with B Q Tours & Travels, you can safeguard your adventures with our travel insurance solutions. We offer a range of comprehensive policies designed to protect you against unforeseen circumstances while you travel. From trip cancellations and medical emergencies to lost luggage, our insurance plans cover it all. Our team will help you choose the right coverage based on your travel plans, ensuring peace of mind on your journey. Don’t leave home without the protection you need; let us help you travel worry-free.",
    },
    {
      title: "Foreign exchange",
      shortDescription: "Facilitating foreign currency exchange for travelers.",
      image: "/assets/forex.jpg",
      href: "/forex",
      description:
        "At B Q Tours & Travels, we understand that traveling abroad requires access to foreign currency. Our Foreign Exchange service makes it easy and convenient for travelers to get the currency they need before their journey. We offer competitive exchange rates and a hassle-free process, ensuring you have the right amount of cash for your trip. Whether you're heading for a vacation or business, our team is here to assist you with all your foreign exchange needs. Enjoy peace of mind knowing that your currency exchange is taken care of with us.",
    },
  ] as IService[],
};

export type IService = {
  title: string;
  shortDescription: string;
  image: string;
  href: string;
  description: string;
};

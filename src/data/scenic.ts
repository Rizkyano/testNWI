export type ScenicCategory = "Scenic Spots" | "Hot Springs" | "Museums" | "Night Markets & Old Streets" | "Historic Sites";

export type ScenicRegion = "Sumatra" | "Java" | "Bali" | "Kalimantan" | "Sulawesi" | "Papua" | "Maluku";

export type ScenicItem = {
  slug: string;
  title: string;
  region: ScenicRegion;
  category: ScenicCategory;
  image: string;

  // Page content
  description: string;
  overview?: string;
  travelExperience?: string;

  // Sidebar info
  travelInfo: {
    bestSeason: string;
    suggestedDuration: string;
    recommendedFor: string[];
  };

  // Menu content (DIFFERENT per item)
  relatedSlugs: string[]; // shown in "Attraction" menu tab
  events: { title: string; date: string; note?: string }[]; // "Current Events"
  itineraries: { title: string; duration: string; stops: string[] }[]; // "Recommended Itineraries"

  // Tags shown in cards
  tags: string[];
};

export const SCENIC_ITEMS: ScenicItem[] = [
  {
    slug: "mount-bromo",
    title: "Mount Bromo",
    region: "Java",
    category: "Scenic Spots",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    description: "One of Indonesia’s most iconic volcano landscapes, famous for sunrise viewpoints, volcanic sea of sand, and dramatic crater scenery.",
    overview: "Bromo is celebrated for cinematic sunrise panoramas and otherworldly volcanic terrain. The area is easy to explore with early-morning viewpoints and short walks around the crater rim.",
    travelExperience: "Arrive before dawn for the sunrise, continue to the Sea of Sand, and finish with a crater hike. For a quieter experience, visit on weekdays and avoid peak holiday periods.",
    travelInfo: {
      bestSeason: "May – October (dry season)",
      suggestedDuration: "1–2 days",
      recommendedFor: ["Sunrise", "Landscape Photography", "Adventure"],
    },
    relatedSlugs: ["borobudur", "jakarta-old-town"],
    events: [
      { title: "Sunrise Viewing Peak", date: "Every dry-season morning", note: "Arrive early for best viewpoints." },
      { title: "Local Cultural Performances", date: "Weekends (varies)", note: "Check local schedules." },
    ],
    itineraries: [
      {
        title: "Bromo Sunrise Essentials",
        duration: "Half-day",
        stops: ["Sunrise viewpoint", "Sea of Sand", "Crater hike"],
      },
      {
        title: "Bromo + Surrounding Highlands",
        duration: "1 day",
        stops: ["Bromo viewpoint", "Savannah / teletubbies hill", "Local village stop"],
      },
    ],
    tags: ["Volcano", "Sunrise", "Hiking"],
  },

  {
    slug: "raja-ampat",
    title: "Raja Ampat",
    region: "Papua",
    category: "Scenic Spots",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80",
    description: "A pristine island paradise with extraordinary biodiversity—often considered one of the world’s finest diving destinations.",
    overview: "Raja Ampat is renowned for turquoise lagoons, limestone islets, and marine biodiversity. It’s a premium destination for diving, snorkeling, and slow island exploration.",
    travelExperience: "Plan a multi-day stay, hop between islands, and schedule guided dives. Respect local conservation rules and support community-based tourism.",
    travelInfo: {
      bestSeason: "October – April (generally calmer seas; conditions vary)",
      suggestedDuration: "5–8 days",
      recommendedFor: ["Diving", "Snorkeling", "Island Hopping"],
    },
    relatedSlugs: ["spice-islands", "bunaken-marine-park"],
    events: [{ title: "Community Cultural Nights", date: "Monthly (varies)", note: "Ask your resort or local guide." }],
    itineraries: [
      {
        title: "Raja Ampat Signature Islands",
        duration: "3 days",
        stops: ["Viewpoint hike", "Lagoon snorkel", "Island beach day"],
      },
      {
        title: "Diving-Focused Escape",
        duration: "5 days",
        stops: ["2–3 dive days", "Rest day", "Sunset viewpoint"],
      },
    ],
    tags: ["Ocean", "Diving", "Nature"],
  },

  // Add the rest items similarly...
  {
    slug: "borobudur",
    title: "Borobudur",
    region: "Java",
    category: "Historic Sites",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=80",
    description: "A UNESCO-listed Buddhist temple complex celebrated for its grand stone reliefs, tranquil atmosphere, and sunrise experiences.",
    travelInfo: {
      bestSeason: "May – October",
      suggestedDuration: "Half-day to 1 day",
      recommendedFor: ["Culture", "Heritage", "Sunrise"],
    },
    relatedSlugs: ["mount-bromo", "jakarta-old-town"],
    events: [{ title: "Cultural Market Days", date: "Weekends", note: "Best time for local crafts." }],
    itineraries: [{ title: "Heritage Morning", duration: "Half-day", stops: ["Borobudur complex", "Nearby craft village"] }],
    tags: ["Temple", "UNESCO", "Culture"],
  },

  {
    slug: "jakarta-old-town",
    title: "Jakarta Old Town",
    region: "Java",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1549958461-289b1d61b5ab?auto=format&fit=crop&w=1400&q=80",
    description: "A historic district with colonial-era architecture, museums, cafés, and lively public squares—ideal for culture walks and photography.",
    travelInfo: {
      bestSeason: "Year-round",
      suggestedDuration: "2–4 hours",
      recommendedFor: ["City Walk", "Museums", "Photography"],
    },
    relatedSlugs: ["borobudur", "mount-bromo"],
    events: [{ title: "Weekend Street Performances", date: "Weekends", note: "Best around late afternoon." }],
    itineraries: [{ title: "Old Town Highlights", duration: "3 hours", stops: ["Museum stop", "Square walk", "Coffee break"] }],
    tags: ["City", "History", "Museums"],
  },

  {
    slug: "bunaken-marine-park",
    title: "Bunaken Marine Park",
    region: "Sulawesi",
    category: "Scenic Spots",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "A celebrated marine sanctuary known for coral walls, clear visibility, and world-class diving experiences.",
    travelInfo: {
      bestSeason: "April – November",
      suggestedDuration: "3–5 days",
      recommendedFor: ["Diving", "Marine Life", "Relaxation"],
    },
    relatedSlugs: ["raja-ampat"],
    events: [],
    itineraries: [{ title: "Dive + Chill", duration: "3 days", stops: ["Dive day", "Beach day", "Sunset boat"] }],
    tags: ["Diving", "Reef", "Ocean"],
  },

  {
    slug: "spice-islands",
    title: "Spice Islands",
    region: "Maluku",
    category: "Historic Sites",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    description: "Historic islands once central to the spice trade—offering quiet beaches, cultural heritage, and ocean horizons.",
    travelInfo: {
      bestSeason: "May – October",
      suggestedDuration: "3–6 days",
      recommendedFor: ["History", "Island Life", "Slow Travel"],
    },
    relatedSlugs: ["raja-ampat"],
    events: [{ title: "Local Heritage Walks", date: "Weekly (varies)" }],
    itineraries: [{ title: "Spice Route", duration: "2 days", stops: ["Old fort area", "Harbor walk", "Local market"] }],
    tags: ["History", "Culture", "Islands"],
  },
];

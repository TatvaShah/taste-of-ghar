import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Taste of Ghar",
  tagline: "Punjabi home style tiffin, with veg and non veg plans.",
  category: "Punjabi tiffin",
  schemaType: "FoodEstablishment",
  area: "Brampton, ON",
  siteUrl: "https://taste-of-ghar-ca.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#8a4a1c" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Homemade in Brampton",
    headline: "A little taste of ghar, packed for you",
    subhead: "Veg and non veg tiffin plans, with larger containers than a standard tiffin. Order by Instagram DM, WhatsApp or the form.",
    images: [
      { src: "/images/post-1.jpg", alt: "Homemade Punjabi curries by Taste of Ghar", width: 1080, height: 1440 },
      { src: "/images/post-4.jpg", alt: "Tiffin portions by Taste of Ghar", width: 1080, height: 1440 },
      { src: "/images/post-7.jpg", alt: "Daal makhani by Taste of Ghar", width: 1080, height: 1917 },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "https://wa.me/14167066638" },
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: [
    "Veg and non veg tiffin plans",
    "Larger containers than a standard tiffin",
    "Homemade Punjabi meals",
    "Based in Brampton",
  ],

  about: {
    title: "Welcome to Taste of Ghar",
    body: [
      "Taste of Ghar cooks authentic Punjabi and Indian meals in Brampton, with vegetarian and non vegetarian tiffin plans. Tiffins are packed in larger containers than the smaller, standard sized boxes used by many other services.",
      "A caption notes that meals are cooked with Gobind Bilona ghee and olive oil. Orders are placed by Instagram DM, WhatsApp at 416-706-6638, or the Google Form on the Linktree. Uber Eats and DoorDash are listed as coming soon.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Daal makhani by Taste of Ghar", width: 1080, height: 1917 },
  },

  menu: {
    label: "Menu",
    title: "What we cook",
    variant: "list",
    groups: [
      {
        title: "Tiffin plans",
        items: [
          { name: "Vegetarian and non vegetarian tiffin plans", description: "Packed in larger containers than a standard tiffin." },
        ],
      },
      {
        title: "Dishes we have posted",
        items: [
          { name: "Daal makhani" },
          { name: "Rajma chawal" },
          { name: "Punjabi kadhi" },
          { name: "Punjabi saag and mixed vegetable curry" },
          { name: "Gajar matar sabzi" },
          { name: "Ras malai tres leches cake" },
          { name: "Kada prasad", description: "Available on special request." },
        ],
      },
    ],
    footnote: "Send a message, use WhatsApp, or fill in the order form. A full plan menu and prices will be shared as they are posted.",
  },

  gallery: {
    title: "From the kitchen",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Homemade Punjabi curries by Taste of Ghar", caption: "Home style curries", href: "https://www.instagram.com/p/Dfp9JUEoh1y/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Tiffin portions by Taste of Ghar", caption: "Tiffin portions", href: "https://www.instagram.com/p/DfYL3goFkcC/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1917, alt: "Daal makhani by Taste of Ghar", caption: "Daal makhani", href: "https://www.instagram.com/reel/DfYLMeQoaZo/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1920, alt: "Punjabi kadhi by Taste of Ghar", caption: "Punjabi kadhi", href: "https://www.instagram.com/reel/Dfp7tmKI5Rr/" },
      { src: "/images/post-6.jpg", width: 720, height: 1280, alt: "Gajar matar sabzi by Taste of Ghar", caption: "Gajar matar sabzi", href: "https://www.instagram.com/reel/DfYLQ_NolhM/" },
      { src: "/images/post-9.jpg", width: 720, height: 1280, alt: "Rajma in the pan by Taste of Ghar", caption: "Rajma", href: "https://www.instagram.com/reel/DfYK_YpoQaM/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1920, alt: "A slow cooked gravy by Taste of Ghar", caption: "In the kitchen", href: "https://www.instagram.com/reel/DfYLJsYofP_/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Ras malai tres leches cake by Taste of Ghar", caption: "Ras malai tres leches", href: "https://www.instagram.com/p/DfYLpz8I0Uw/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "taste.of.ghar",
    embeds: ["https://www.instagram.com/p/Dfp9JUEoh1y/", "https://www.instagram.com/reel/DfYLMeQoaZo/", "https://www.instagram.com/p/DfYL3goFkcC/"],
  },

  order: {
    label: "How to order",
    title: "Order by DM, WhatsApp or the form",
    intro: "Send a message on Instagram, message on WhatsApp at 416-706-6638, or fill in the Google Form. Uber Eats and DoorDash are listed as coming soon.",
    dmMessage: "Hi Taste of Ghar! I would like to order.\nVeg or non veg plan:\nDate needed:\nPickup or delivery notes:",
    headerCtaLabel: "DM to order",
    links: [
      { label: "Order on WhatsApp", href: "https://wa.me/14167066638" },
      { label: "Order on the form", href: "https://forms.gle/CYp3tonMkQnZM78M6" },
      { label: "Linktree", href: "https://linktr.ee/tasteofghar" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram, message on WhatsApp at 416-706-6638, or fill in the Google Form." },
    { q: "Where are you based?", a: "Taste of Ghar is based in Brampton, Ontario." },
    { q: "Do you offer veg and non veg plans?", a: "Yes. Vegetarian and non vegetarian tiffin plans are available, packed in larger containers than a standard tiffin." },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, Ontario",
    phone: "416-706-6638",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/taste.of.ghar/" },
      { label: "Linktree", href: "https://linktr.ee/tasteofghar" },
    ],
  },

  seo: {
    title: "Taste of Ghar | Punjabi tiffin in Brampton",
    description: "Homemade Punjabi veg and non veg tiffin in Brampton, packed in larger containers than a standard tiffin. Order by Instagram DM, WhatsApp or the Google Form.",
    keywords: ["Punjabi tiffin Brampton", "Taste of Ghar", "veg tiffin Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

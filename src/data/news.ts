import { NewsArticle } from '@/types';

// Sample news data - can be fetched from API in production
export const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    date: "March 08, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    backgroundImage: "/assets/png/brand_news.png",
    featured: true,
    category: "Technology",
    readTime: "5 min read",
    slug: "breakthrough-authentication-technology"
  },
  {
    id: 2,
    title: "LumiLab – Exploring the science and innovation behind luminescent materials",
    date: "March 08, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    category: "Research",
    readTime: "7 min read",
    slug: "lumilab-luminescent-materials"
  },
  {
    id: 3,
    title: "The Glow Factor – Trends, discoveries, and applications in photonic materials",
    date: "March 08, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    category: "Innovation",
    readTime: "6 min read",
    slug: "glow-factor-photonic-materials"
  },
  {
    id: 4,
    title: "Sustainable Manufacturing: Our Journey Towards Carbon Neutrality",
    date: "March 05, 2025",
    description: "Discover how we're revolutionizing our manufacturing processes to achieve carbon neutrality by 2030.",
    category: "Sustainability",
    readTime: "8 min read",
    slug: "sustainable-manufacturing-carbon-neutrality"
  }
];

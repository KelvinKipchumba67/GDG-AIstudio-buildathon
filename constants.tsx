import React from "react";
import { Property } from "./types";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Luxury Heights Apartment",
    location: "Westlands, Nairobi",
    town: "Nairobi",
    price: 85000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1200,
    imageUrl: "https://picsum.photos/800/600?random=1",
    isVerified: true,
    type: "Apartment",
    description:
      "A stunning modern apartment with panoramic views of the Nairobi skyline and premium finishing.",
    coordinates: { lat: -1.2633, lng: 36.8045 },
  },
  {
    id: "2",
    title: "Serene Villa Estate",
    location: "Kilimani, Nairobi",
    town: "Nairobi",
    price: 120000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    imageUrl: "https://picsum.photos/800/600?random=2",
    isVerified: true,
    type: "Villa",
    description:
      "Spacious family villa located in the heart of Kilimani with a private garden and ample parking.",
    coordinates: { lat: -1.2921, lng: 36.7845 },
  },
  {
    id: "3",
    title: "Student Haven Studio",
    location: "Juja Main Stage",
    town: "Juja",
    price: 15000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 350,
    imageUrl: "https://picsum.photos/800/600?random=3",
    isVerified: false,
    type: "Studio",
    description:
      "Perfect for students at JKUAT. Close to transportation and shopping centers.",
    coordinates: { lat: -1.1026, lng: 37.0144 },
  },
  {
    id: "4",
    title: "Modern Ridge Bungalow",
    location: "Chuka Town",
    town: "Chuka",
    price: 35000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 900,
    imageUrl: "https://picsum.photos/800/600?random=4",
    isVerified: true,
    type: "Bungalow",
    description:
      "A newly built bungalow in a quiet neighborhood of Chuka with modern amenities.",
    coordinates: { lat: -0.3308, lng: 37.6461 },
  },
  {
    id: "5",
    title: "Emerald Garden Apartments",
    location: "Kasutini, Juja",
    town: "Juja",
    price: 25000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 750,
    imageUrl: "https://picsum.photos/800/600?random=5",
    isVerified: true,
    type: "Apartment",
    description:
      "Comfortable family living in a gated community with reliable water supply.",
    coordinates: { lat: -1.1086, lng: 37.0184 },
  },
  {
    id: "6",
    title: "The Penthouses",
    location: "Kileleshwa, Nairobi",
    town: "Nairobi",
    price: 150000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    imageUrl: "https://picsum.photos/800/600?random=6",
    isVerified: true,
    type: "Apartment",
    description:
      "Exclusive penthouse with state-of-the-art security, gym, and swimming pool access.",
    coordinates: { lat: -1.2789, lng: 36.7901 },
  },
];

export const Icons = {
  Bed: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  ),
  Bath: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.6 2.4 4 3 4 3.8V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.8c0-.8-.6-1.4-1.5-1.5a1.5 1.5 0 0 0-1 1L17 14" />
      <path d="M12 21a2 2 0 0 1-2-2v-4h4v4a2 2 0 0 1-2 2z" />
    </svg>
  ),
  Area: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  Search: () => (
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
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Verified: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-violet-500 fill-violet-500"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Location: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Map: () => (
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
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  ),
  Grid: () => (
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
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  ),
  Close: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
};


export interface Property {
  id: string;
  title: string;
  location: string;
  town: 'Nairobi' | 'Chuka' | 'Juja' | 'Mombasa' | 'Eldoret';
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  isVerified: boolean;
  type: 'Apartment' | 'Villa' | 'Bungalow' | 'Studio';
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FilterOptions {
  town: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  propertyType: string;
}

export type ViewMode = 'grid' | 'map';

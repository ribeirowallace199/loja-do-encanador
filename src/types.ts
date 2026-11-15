export interface Product {
  id: string;
  name: string;
  category: 'canos' | 'conexoes' | 'torneiras-chuveiros' | 'sifoes' | 'mangueiras' | 'ferramentas-vedacao' | 'loucas-cubas';
  description: string;
  image: string;
  measures: string[];
  brands?: string[];
  highlight?: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface StoreInfo {
  name: string;
  slogan: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string; // no spaces, with country code (e.g. 55...)
  whatsappDisplay: string;
  email: string;
  instagramUrl: string;
  infinitePayUrl: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    reference: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleRating: {
    score: number;
    totalReviews: number;
    reviewUrl?: string;
  };
  delivery: {
    active: boolean;
    bannerText: string;
    details: string;
  };
}

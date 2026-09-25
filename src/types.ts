export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  isBump?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
  location?: string;
}

export interface RecipeSample {
  id: string;
  pageNumber: number;
  title: string;
  category: string;
  intro: string;
  imageHero: string;
  imageIngredients: string;
  ingredients: string[];
  steps: { title: string; instruction: string }[];
  amountFrequency: string[];
  warnings: string[];
}

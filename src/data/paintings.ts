export interface Painting {
  id: string;
  title: string;
  technique: string;
  year: string;
  dimensions: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

// Dipinti con temi siciliani
export const defaultPaintings: Painting[] = [
  {
    id: "1",
    title: "Dipinto Originale",
    technique: "Olio su tela",
    year: "2024",
    dimensions: "60 × 80 cm",
    description: "Un'opera originale di Lombino Giulio Francesco.",
    price: 150,
    imageUrl: "/immagini/1.jpg",
    category: "Opere",
  },
];


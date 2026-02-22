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
    title: "Dipinto 1",
    technique: "Olio su tela",
    year: "2024",
    dimensions: "100 × 50 cm",
    description: "Nuovo dipinto aggiunto alla galleria.",
    price: 150,
    imageUrl: "1.jpg",
    category: "Paesaggi",
  },
];

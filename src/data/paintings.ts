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
    year: "2026 realizzato",
    dimensions: "A4 orizzontale",
    description: "Nuovo dipinto aggiunto alla galleria.",
    price: 150,
    imageUrl: "1.jpg",
    category: "Paesaggi",
  },
  {
    id: "2",
    title: "Dipinto 2",
    technique: "Olio su tela",
    year: "2026 realizzato",
    dimensions: "A4 orizzontale",
    description: "Nuovo dipinto aggiunto alla galleria.",
    price: 150,
    imageUrl: "2.jpg",
    category: "Paesaggi",
  },
  {
    id: "3",
    title: "Dipinto 3",
    technique: "Olio su tela",
    year: "2026 realizzato",
    dimensions: "A4 orizzontale",
    description: "Nuovo dipinto aggiunto alla galleria.",
    price: 150,
    imageUrl: "3.jpg",
    category: "Paesaggi",
  },
];

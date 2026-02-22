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
    title: "Tramonto sulla Valle dei Templi",
    technique: "Olio su tela",
    year: "2023",
    dimensions: "60 × 80 cm",
    description: "La luce dorata del tramonto siciliano avvolge i templi millenari di Agrigento, creando un dialogo poetico tra passato e presente. Un'opera che cattura l'anima più profonda della Sicilia.",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    category: "Paesaggi",
  },
  {
    id: "2",
    title: "Ritratto di Donna Siciliana",
    technique: "Olio su tela",
    year: "2022",
    dimensions: "50 × 70 cm",
    description: "Un ritratto intenso e vibrante che celebra la bellezza delle donne siciliane: sguardo profondo, pelle calda come il sole di Sicilia, dignità e forza interiore.",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    category: "Ritratti",
  },
  {
    id: "3",
    title: "Arance di Sicilia",
    technique: "Acquerello",
    year: "2023",
    dimensions: "40 × 50 cm",
    description: "Le celebri arance siciliane, rosse e profumate, protagoniste assolute di questa composizione luminosa. Il profumo della Sicilia catturato sulla carta con colori vivaci e solari.",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1582201943062-4b814e47e42a?w=800&q=80",
    category: "Natura Morta",
  },
  {
    id: "4",
    title: "Il Mare di Bolognetta",
    technique: "Olio su tela",
    year: "2022",
    dimensions: "70 × 90 cm",
    description: "La campagna siciliana nei dintorni di Bolognetta, con le sue colline dorate e i campi di grano mossi dal vento caldo. Una dichiarazione d'amore alla terra natìa dell'artista.",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    category: "Paesaggi",
  },
  {
    id: "5",
    title: "Interno Siciliano con Luce",
    technique: "Tecnica Mista",
    year: "2021",
    dimensions: "55 × 65 cm",
    description: "Un interno rustico siciliano dove la luce pomeridiana filtra tra le persiane in legno, disegnando strisce dorate sul pavimento in cotto antico.",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Interni",
  },
  {
    id: "6",
    title: "Sole Mediterraneo",
    technique: "Acrilico",
    year: "2024",
    dimensions: "80 × 100 cm",
    description: "Un'esplosione di colori che evoca la luminosità unica del Mediterraneo: il blu intenso del mare siciliano, il giallo del grano, il rosso dei papaveri e il bianco accecante del sole.",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    category: "Astratto",
  },
];

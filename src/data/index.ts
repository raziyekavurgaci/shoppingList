export const shops = ["Migros", "Teknosa", "BİM", "A101"] as const;

export const categories = [
  "Elektronik",
  "Şarküteri",
  "Oyuncak",
  "Fırın",
] as const;

export interface Product {
  id: number;
  name: string;
  shop: (typeof shops)[number];
  category: (typeof categories)[number];
  isBought: boolean;
}

import { FURNITURE_CATEGORIES } from "@/constants";

const furnitureCategories = Object.keys(FURNITURE_CATEGORIES).map((key) => ({
  name: FURNITURE_CATEGORIES[key as keyof typeof FURNITURE_CATEGORIES],
  value: key
}));

export default furnitureCategories;

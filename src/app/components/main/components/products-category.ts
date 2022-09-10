export interface ProductsCategory {
  id: number;
  category: string;
  image: string;
  banner: string
  title: string;
  price: string;
  description: string;
}

export type ProductsCategorys = Array<ProductsCategory>;

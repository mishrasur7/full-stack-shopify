export interface Product {
  title: string;
  price: number;
  sellerId: string;
  productImage: string[];
  categories: string;
}

export interface UpdateActionType {
  id: number;
  update: Partial<Product>;
}

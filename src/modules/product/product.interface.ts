// type for variant object
export type TVariant = {
  type: string;
  value: string;
};
// type for inventory object
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

// Interface for a product
interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: Array<TVariant>;
  inventory: TInventory;
}

export default IProduct;

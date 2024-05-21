type Variant = {
  type: string;
  value: string;
};
// Interface for a product
interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: Array<Variant>;
}

export default IProduct;

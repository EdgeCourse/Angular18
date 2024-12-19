export interface Product {
    id: number;
    name: string;
    variants: Variant[];
  }
  
  export interface Variant {
    id: number;
    color: string;
    size: string;
    price: number;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Shirt',
      variants: [
        { id: 1, color: 'Red', size: 'S', price: 10 },
        { id: 2, color: 'Blue', size: 'M', price: 15 },
      ]
    },
    {
      id: 2,
      name: 'T-shirt',
      variants: [
        { id: 3, color: 'Green', size: 'L', price: 20 },
        { id: 4, color: 'Black', size: 'XL', price: 25 },
      ]
    }
  ];
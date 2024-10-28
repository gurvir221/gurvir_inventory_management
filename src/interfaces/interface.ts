export interface Product {
    name: string,
    category: string,
    value: string,
    quantity: number,
    price: string
}

export interface ProductDataProps {
    productData: Product[]
}

export interface ProductTableProps {
    isUserPresent: boolean
}

export interface StatCardProps {
    title: string;
    value: number | string;
}

export interface State {
    productData: Product[];
    totalProducts: number;
    totalValue: number;
    outOfStock: number;
    categories: Set<string>;
}
  
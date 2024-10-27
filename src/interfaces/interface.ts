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
    productData: Product[]
    setProductData: React.Dispatch<React.SetStateAction<Product[]>>
}

export interface StatCardProps {
    title: string;
    value: number | string;
}
  
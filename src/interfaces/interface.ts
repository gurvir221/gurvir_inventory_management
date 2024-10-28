export interface Product {
    name: string,
    category: string,
    value: string,
    quantity: number,
    price: string
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

export interface ModalProps {
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    currentProduct: Product | undefined
    setCurrentProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
    productData: Product[]
}
  
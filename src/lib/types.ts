export type Product = {
  id: string;
  name: string;
  category: string;
  price: number; // Price per kg
  stock: number; // in kg
  description: string;
  imageId: string;
};

export type Order = {
  id: string;
  customerName: string;
  items: {
    productId: string;
    productName: string;
    quantity: number; // in kg
    price: number;
  }[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  orderDate: string;
  deliveryDate: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Customer';
};

export type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
};

export type DemandForecast = {
  demandForecast: string;
  pricingStrategyRecommendation: string;
  inventoryLevelRecommendation: string;
};

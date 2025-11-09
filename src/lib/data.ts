import type { Order, Product, User } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'HDPE Pellets',
    category: 'Plastics',
    price: 23000,
    stock: 5000,
    description:
      'High-density polyethylene (HDPE) pellets, recycled from post-consumer milk jugs and detergent bottles. Ideal for manufacturing pipes, toys, and plastic lumber.',
    imageId: 'hdpe-pellets',
  },
  {
    id: 'prod_002',
    name: 'PET Flakes',
    category: 'Plastics',
    price: 18500,
    stock: 8000,
    description:
      'Polyethylene terephthalate (PET) flakes, clear and colored, derived from recycled water and soda bottles. Used for producing new bottles, polyester fibers, and packaging materials.',
    imageId: 'pet-flakes',
  },
  {
    id: 'prod_003',
    name: 'LDPE Film',
    category: 'Plastics',
    price: 15500,
    stock: 3500,
    description:
      'Low-density polyethylene (LDPE) film, recycled from plastic bags and packaging film. Suitable for making new trash bags, construction film, and agricultural film.',
    imageId: 'ldpe-film',
  },
  {
    id: 'prod_004',
    name: 'PP Granules',
    category: 'Plastics',
    price: 20000,
    stock: 6000,
    description:
      'Polypropylene (PP) granules from recycled containers, car parts, and carpets. Known for its toughness and heat resistance, used in automotive components and industrial applications.',
    imageId: 'pp-granules',
  },
];

export const orders: Order[] = [
  {
    id: 'ord_001',
    customerName: 'PT. Plastik Jaya',
    items: [
      { productId: 'prod_001', productName: 'HDPE Pellets', quantity: 500, price: 23000 },
      { productId: 'prod_002', productName: 'PET Flakes', quantity: 1000, price: 18500 },
    ],
    total: 500 * 23000 + 1000 * 18500,
    status: 'Delivered',
    orderDate: '2024-05-01',
    deliveryDate: '2024-05-05',
  },
  {
    id: 'ord_002',
    customerName: 'CV. Serat Abadi',
    items: [{ productId: 'prod_002', productName: 'PET Flakes', quantity: 2000, price: 18500 }],
    total: 2000 * 18500,
    status: 'Shipped',
    orderDate: '2024-05-10',
    deliveryDate: '2024-05-15',
  },
  {
    id: 'ord_003',
    customerName: 'Eco Packaging Solutions',
    items: [{ productId: 'prod_003', productName: 'LDPE Film', quantity: 1500, price: 15500 }],
    total: 1500 * 15500,
    status: 'Processing',
    orderDate: '2024-05-20',
    deliveryDate: '2024-05-25',
  },
  {
    id: 'ord_004',
    customerName: 'PT. Otomotif Lestari',
    items: [{ productId: 'prod_004', productName: 'PP Granules', quantity: 800, price: 20000 }],
    total: 800 * 20000,
    status: 'Pending',
    orderDate: '2024-05-22',
    deliveryDate: '2024-05-28',
  },
];

export const users: User[] = [
  { id: 'user_001', name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
  { id: 'user_002', name: 'Customer A', email: 'customera@example.com', role: 'Customer' },
];

export const salesDataExample = JSON.stringify(
  [
    { month: 'January', sales_kg: 1200 },
    { month: 'February', sales_kg: 1500 },
    { month: 'March', sales_kg: 1800 },
    { month: 'April', sales_kg: 1600 },
  ],
  null,
  2
);

export const marketTrendsExample = JSON.stringify(
  {
    competitor_pricing: 'stable',
    end_product_demand: 'increasing for construction materials',
    government_regulations: 'new subsidies for using recycled content',
  },
  null,
  2
);

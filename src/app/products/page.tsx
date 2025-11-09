import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold">Produk Kami</h1>
        <p className="mt-2 text-lg text-muted-foreground">Jelajahi berbagai material daur ulang berkualitas kami.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

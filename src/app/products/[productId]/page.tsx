import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === product.imageId);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="relative aspect-square">
            {image ? (
              <Image
                src={image.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={image.imageHint}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-secondary">
                <span className="text-muted-foreground">No Image</span>
              </div>
            )}
          </div>
        </Card>
        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="mt-2 font-headline text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>

          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary">{formatPrice(product.price)} / kg</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Stok tersedia: {product.stock.toLocaleString()} kg
              </p>
              <Button size="lg" className="mt-6 w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Tambah ke Keranjang
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

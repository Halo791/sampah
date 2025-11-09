import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === product.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary">
              <span className="text-sm text-muted-foreground">No Image</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
        <CardDescription className="mt-2 h-[60px] text-sm line-clamp-3">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-lg font-bold text-primary">
          ${product.price.toFixed(2)}
          <span className="text-sm font-normal text-muted-foreground">/kg</span>
        </p>
        <Button variant="secondary">Details</Button>
      </CardFooter>
    </Card>
  );
}

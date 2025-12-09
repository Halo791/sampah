import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Recycle, Truck, Users } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-image');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full md:h-[70vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="relative container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-primary-foreground">
          <div className="rounded-lg bg-black/30 p-8 backdrop-blur-sm">
            <h1 className="font-headline text-4xl font-bold md:text-6xl">
              Pengelolaan Sampah Mandiri RW 07 Desa Junrejo
            </h1>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/products">
                Lihat Produk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold">Kenapa Memilih Kami?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Komitmen kami untuk lingkungan dan komunitas.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <Recycle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Kualitas Terjamin</h3>
              <p className="mt-2 text-muted-foreground">
                Material daur ulang kami diproses dengan standar tertinggi untuk memastikan kualitas terbaik.
              </p>
            </div>
            <div className="p-6 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Dampak Sosial</h3>
              <p className="mt-2 text-muted-foreground">
                Setiap pembelian mendukung pemberdayaan ekonomi masyarakat lokal di RW 07 Junrejo.
              </p>
            </div>
            <div className="p-6 text-center">
              <Truck className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Pengiriman Andal</h3>
              <p className="mt-2 text-muted-foreground">
                Kami memastikan pengiriman yang efisien dan tepat waktu untuk semua pesanan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold">Produk Unggulan</h2>
            <p className="mt-2 text-lg text-muted-foreground">Jelajahi berbagai material daur ulang berkualitas kami.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/products">Lihat Semua Produk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

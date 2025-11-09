import { Recycle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 text-primary', className)}>
      <Recycle className="h-6 w-6" />
      <span className="font-headline text-lg font-bold">Berkah Daur Ulang</span>
    </div>
  );
}

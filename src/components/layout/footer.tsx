import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <Logo />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Berkah Daur Ulang RW 07. All rights reserved.</p>
      </div>
    </footer>
  );
}

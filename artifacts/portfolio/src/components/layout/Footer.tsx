export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <p className="text-sm font-mono text-muted-foreground">
          Built by <span className="text-primary font-bold">Krishna Yadav</span> © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Designed with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}

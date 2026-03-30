import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-8xl sm:text-9xl text-gradient mb-4">404</h1>
        <p className="font-display text-2xl text-foreground mb-4">Page Not Found</p>
        <p className="text-muted-foreground font-body mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded tracking-wider uppercase hover:bg-primary/90 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

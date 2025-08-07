import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            Find the perfect <span className="text-gradient italic animate-glow-pulse">freelance</span> services for your business
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <div className="flex-1 relative">
              <Input 
                placeholder="Try 'building mobile app'"
                className="h-14 text-base bg-card/80 backdrop-blur-sm text-foreground border-border/30 shadow-xl focus:ring-primary/50"
              />
            </div>
            <Button 
              size="lg" 
              className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow hover:animate-glow-pulse transition-all duration-300"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="mt-6">
            <p className="text-foreground/70 mb-4 text-lg">Popular:</p>
            <div className="flex flex-wrap gap-2">
              {['Website Design', 'WordPress', 'Logo Design', 'AI Services', 'Voice Over'].map((tag) => (
                <Button 
                  key={tag}
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 backdrop-blur-sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
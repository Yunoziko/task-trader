import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find the perfect <span className="italic">freelance</span> services for your business
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <div className="flex-1 relative">
              <Input 
                placeholder="Try 'building mobile app'"
                className="h-12 text-base bg-background text-foreground border-0 shadow-lg"
              />
            </div>
            <Button 
              size="lg" 
              className="h-12 px-8 bg-success hover:bg-success/90 text-success-foreground font-semibold"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="mt-6">
            <p className="text-primary-foreground/80 mb-3">Popular:</p>
            <div className="flex flex-wrap gap-2">
              {['Website Design', 'WordPress', 'Logo Design', 'AI Services', 'Voice Over'].map((tag) => (
                <Button 
                  key={tag}
                  variant="outline" 
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
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
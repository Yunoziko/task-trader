import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="glass border-b border-border/50 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold font-display text-gradient glow">skilleraa</h1>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:glow">Skilleraa Business</a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:glow">Explore</a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:glow">English</a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:glow">Become a Seller</a>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input 
                placeholder="What service are you looking for today?"
                className="pr-10 border-border/50 bg-card/50 backdrop-blur-sm"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 bg-primary hover:bg-primary/90 glow hover:animate-glow-pulse"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-card/50 hover:text-primary">
              Sign in
            </Button>
            <Button size="sm" className="hidden md:flex bg-primary hover:bg-primary/90 glow hover:animate-glow-pulse">
              Join
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
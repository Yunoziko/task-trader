import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  seller: string;
  sellerLevel: string;
  rating: number;
  reviewCount: number;
  price: number;
  isFavorite?: boolean;
}

const ServiceCard = ({ 
  image, 
  title, 
  seller, 
  sellerLevel, 
  rating, 
  reviewCount, 
  price,
  isFavorite = false 
}: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/30 shadow-xl hover-glow transition-all duration-500 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:glow">
          <Heart className={`h-4 w-4 transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500 animate-glow-pulse' : 'text-muted-foreground'}`} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ring-1 ring-primary/30">
            <span className="text-xs font-medium text-primary font-display">{seller[0]}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{seller}</p>
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
              {sellerLevel}
            </Badge>
          </div>
        </div>
        
        <h3 className="text-sm font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-all duration-300">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning animate-glow-pulse" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Starting at</p>
            <p className="text-lg font-bold text-gradient">${price}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
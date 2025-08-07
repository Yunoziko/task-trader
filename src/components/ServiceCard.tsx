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
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-card to-marketplace-gray/20">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition-colors">
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-medium text-primary">{seller[0]}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{seller}</p>
            <Badge variant="secondary" className="text-xs">
              {sellerLevel}
            </Badge>
          </div>
        </div>
        
        <h3 className="text-sm font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Starting at</p>
            <p className="text-lg font-bold text-foreground">${price}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
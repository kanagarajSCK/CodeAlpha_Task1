import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category: string;
  onAddToCart?: () => void;
}

const ProductCard = ({ id, name, price, image_url, category, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg border-border">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onAddToCart}
          className="w-full bg-gradient-to-r from-accent to-accent/90"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
import { useState } from "react";
import { Product } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";
import { ProductSchema } from "./ProductSchema";

interface ProductShowcaseProps {
  products: Product[];
  loading: boolean;
  searchQuery?: string;
}

export const ProductShowcase = ({ products, loading, searchQuery = "" }: ProductShowcaseProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const variant = product.variants[0];
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success('Added to cart', { position: 'top-center' });
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-4">
              Hydration meets ritual.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A mineral-rich hot chocolate made with organic cacao, coconut, and electrolytes — crafted to restore hydration and calm energy
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden shadow-subtle rounded-xl">
                <div className="aspect-square bg-secondary/20 animate-pulse" />
                <CardContent className="p-4 text-center">
                  <div className="h-5 bg-secondary/30 rounded mb-2 animate-pulse" />
                  <div className="h-6 bg-secondary/20 rounded w-20 mx-auto animate-pulse" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="h-10 bg-secondary/30 rounded-xl w-full animate-pulse" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="products" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">
              Hydration meets ritual.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A mineral-rich hot chocolate made with organic cacao, coconut, and electrolytes — crafted to restore hydration and calm energy
            </p>
          </div>
          
          <div className="max-w-md mx-auto text-center py-12">
            <p className="text-lg text-muted-foreground">
              {searchQuery ? `No products found matching "${searchQuery}"` : 'Our products are coming soon. Sign up below to be notified when they launch!'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-4">
            Hydration meets ritual.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A mineral-rich hot chocolate made with organic cacao, coconut, and electrolytes — crafted to restore hydration and calm energy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const defaultVariant = product.variants[0];
            const primaryImage = product.images[0]?.url;
            const secondaryImage = product.images[1]?.url;
            const isHovered = hoveredProduct === product.id;
            const inStock = defaultVariant?.availableForSale ?? true;

            return (
              <div
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <ProductSchema product={product} />
                <Card className="h-full shadow-subtle hover:shadow-xl transition-all duration-300 border-0 rounded-xl overflow-hidden group">
                  <div
                    onClick={() => navigate(`/product/${product.handle}`)}
                    className="cursor-pointer"
                  >
                    <div className="relative overflow-hidden bg-background aspect-square">
                      {primaryImage ? (
                        <>
                          <img
                            src={primaryImage}
                            alt={product.title}
                            loading="lazy"
                            className={`w-full h-full object-cover transition-opacity duration-500 ${
                              isHovered && secondaryImage ? 'opacity-0' : 'opacity-100'
                            }`}
                          />
                          {secondaryImage && (
                            <img
                              src={secondaryImage}
                              alt={`${product.title} - alternate view`}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                              style={{ opacity: isHovered ? 1 : 0 }}
                            />
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                          <div className="text-6xl">☕</div>
                        </div>
                      )}
                      {!inStock && (
                        <Badge className="absolute top-3 right-3 bg-foreground/90 text-background">
                          Out of Stock
                        </Badge>
                      )}
                      <div 
                        className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product, e);
                        }}
                      >
                        <Button 
                          className="w-full shadow-lg rounded-xl" 
                          disabled={!inStock}
                          size="sm"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Quick Add
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xl font-medium text-primary">
                      {product.price.currencyCode}{' '}
                      {parseFloat(product.price.amount).toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full rounded-xl touch-manipulation min-h-[44px]"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product, e);
                      }}
                      disabled={!inStock}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

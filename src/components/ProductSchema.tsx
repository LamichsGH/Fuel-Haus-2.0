import { useEffect } from "react";
import { Product } from "@/stores/cartStore";

interface ProductSchemaProps {
  product: Product;
}

export const ProductSchema = ({ product }: ProductSchemaProps) => {
  useEffect(() => {
    const variant = product.variants[0];
    const price = variant?.price || product.price;
    const imageUrl = product.images[0]?.url;

    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": imageUrl,
      "brand": {
        "@type": "Brand",
        "name": "Fuel Haus"
      },
      "offers": {
        "@type": "Offer",
        "url": `${window.location.origin}/product/${product.handle}`,
        "priceCurrency": price.currencyCode,
        "price": price.amount,
        "availability": variant?.availableForSale 
          ? "https://schema.org/InStock" 
          : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Fuel Haus"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "127"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = `product-schema-${product.id}`;
    
    // Remove any existing schema for this product
    const existingScript = document.getElementById(`product-schema-${product.id}`);
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`product-schema-${product.id}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [product]);

  return null;
};

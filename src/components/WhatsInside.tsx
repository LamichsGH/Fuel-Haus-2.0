import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cocoaImage from "@/assets/ingredient-cocoa.jpg";
import coconutImage from "@/assets/ingredient-coconut.jpg";
import magnesiumImage from "@/assets/ingredient-magnesium.jpg";
import seaSaltImage from "@/assets/ingredient-sea-salt.jpg";
import vanillaImage from "@/assets/ingredient-vanilla.jpg";

const ingredients = [
  {
    name: "Organic Cocoa",
    benefit: "Rich in antioxidants and natural magnesium to support relaxation and restore balance — plus that smooth, indulgent flavor you crave",
    image: cocoaImage,
  },
  {
    name: "Organic Coconut Milk",
    benefit: "Adds creamy texture and healthy fats for comfort and satisfaction without dairy",
    image: coconutImage,
  },
  {
    name: "Magnesium Glycinate",
    benefit: "Known for its calming properties and gentle digestion support — helps ease tension and restore",
    image: magnesiumImage,
  },
  {
    name: "Sea Salt",
    benefit: "Naturally replenishes lost minerals to keep your body balanced and calm",
    image: seaSaltImage,
  },
  {
    name: "Vanilla Bean",
    benefit: "Rounds out the flavor with natural warmth and aroma, adding a touch of indulgence to every sip",
    image: vanillaImage,
  },
];

export const WhatsInside = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#c7cbc1' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl mb-6 font-light tracking-tight" style={{ color: '#1c1c1c' }}>
            What's Inside the Calm
          </h2>
        </div>
        
        {/* First row - 2 cards centered */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-8">
          {ingredients.slice(0, 2).map((ingredient, index) => (
            <Card 
              key={index} 
              className="border-0 backdrop-blur-sm hover:scale-[1.03] transition-all duration-500 shadow-[0_20px_60px_-10px_hsl(24_33%_41%/0.12)] hover:shadow-[0_25px_70px_-10px_hsl(24_33%_41%/0.2)] animate-fade-in group rounded-2xl overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-80"
              style={{ animationDelay: `${index * 0.1}s`, backgroundColor: '#f5efea' }}
            >
              <CardContent className="p-10">
                <div className="mb-6 relative overflow-hidden rounded-xl">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-5 text-center" style={{ color: '#1c1c1c' }}>
                  {ingredient.name}
                </h3>
                <p className="text-base leading-relaxed text-center" style={{ color: '#4a4a4a' }}>
                  {ingredient.benefit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {ingredients.slice(2).map((ingredient, index) => (
            <Card 
              key={index + 2} 
              className="border-0 backdrop-blur-sm hover:scale-[1.03] transition-all duration-500 shadow-[0_20px_60px_-10px_hsl(24_33%_41%/0.12)] hover:shadow-[0_25px_70px_-10px_hsl(24_33%_41%/0.2)] animate-fade-in group rounded-2xl overflow-hidden"
              style={{ animationDelay: `${(index + 2) * 0.1}s`, backgroundColor: '#f5efea' }}
            >
              <CardContent className="p-10">
                <div className="mb-6 relative overflow-hidden rounded-xl">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-5 text-center" style={{ color: '#1c1c1c' }}>
                  {ingredient.name}
                </h3>
                <p className="text-base leading-relaxed text-center" style={{ color: '#4a4a4a' }}>
                  {ingredient.benefit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary bg-card hover:bg-primary hover:text-primary-foreground text-foreground font-medium"
          >
            <Link to="/ingredients" className="hover:scale-105 transition-transform">
              See Full Ingredient List
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
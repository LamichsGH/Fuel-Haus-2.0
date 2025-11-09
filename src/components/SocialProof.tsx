import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users, CheckCircle2, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import cocoaLifestyle from "@/assets/cocoa-lifestyle.webp";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Finally, a hot chocolate I can feel good about. The perfect evening ritual."
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "Tastes amazing and actually helps with recovery after workouts."
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "Sold out for a reason. This is the real deal."
  }
];

const trustIndicators = [
  { icon: CheckCircle2, label: "Organic Certified" },
  { icon: Leaf, label: "8 Real Ingredients" },
  { icon: Award, label: "Clean Label" },
  { icon: Users, label: "5,000+ Happy Customers" }
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main headline */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              The First Drop Sold Out
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              The Haus spoke — every pack was gone in days
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Lifestyle image */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-subtle rounded-xl">
                <div className="aspect-[4/5]">
                  <img 
                    src={cocoaLifestyle} 
                    alt="Cocoa powder in a mug - artisan recovery drink"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 text-base shadow-lg">
                Sold Out
              </Badge>
            </div>

            {/* Right: Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="border-0 bg-background shadow-subtle hover:shadow-xl transition-all duration-300 animate-fade-in rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                    <p className="text-sm text-muted-foreground font-medium">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <Card 
                key={index}
                className="border-0 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 shadow-subtle rounded-xl"
              >
                <CardContent className="p-6 text-center">
                  <indicator.icon className="h-8 w-8 mx-auto mb-3 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-foreground">{indicator.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

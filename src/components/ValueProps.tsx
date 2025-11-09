import { Leaf, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "Made from 8 real ingredients. No gums, no fillers, no nonsense",
  },
  {
    icon: Heart,
    title: "Healthy Indulgence",
    description: "A hot chocolate that nourishes and hydrates",
  },
  {
    icon: Sparkles,
    title: "Light Nutrition",
    description: "118 calories of calm energy and recovery",
  },
];

export const ValueProps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-4">
            Made for how recovery should feel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-0 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 shadow-subtle hover:shadow-xl animate-fade-in rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

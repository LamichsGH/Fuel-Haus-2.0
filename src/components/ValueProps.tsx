import { Leaf, Coffee, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Leaf,
    title: "Clean, Honest Ingredients",
    description: "Made with real, natural ingredients — organic wherever possible — because better hydration starts clean",
  },
  {
    icon: Coffee,
    title: "Healthy Indulgence",
    description: "Tastes like a treat, nourishes like a ritual. You'll think you're indulging — your body knows better",
  },
  {
    icon: Scale,
    title: "Balanced Nourishment",
    description: "Low in calories, rich in feel-good balance — just enough to restore, never enough to weigh you down",
  },
];

export const ValueProps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-4">
            Designed to Hydrate Softly
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

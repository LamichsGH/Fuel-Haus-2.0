import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Clock, Heart, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    number: "01",
    title: "Prepare Your Ritual",
    description: "Add 2 tablespoons to 8oz of hot water or your favorite milk. Stir gently and watch it transform into a rich, creamy hot chocolate."
  },
  {
    icon: Clock,
    number: "02",
    title: "Find Your Moment",
    description: "Best enjoyed in the evening after workouts, or any time you need restoration. Create your quiet moment of calm."
  },
  {
    icon: Heart,
    number: "03",
    title: "Restore & Nourish",
    description: "Let the organic cacao, electrolytes, and minerals work together to support your recovery while you savor every sip."
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Make It Your Own",
    description: "Customize with honey, cinnamon, or extra foam. There's no wrong way to enjoy your ritual."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-4">
              Your Ritual, Simplified
            </h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to restoration and calm
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="border-0 shadow-subtle hover:shadow-xl transition-all duration-300 animate-fade-in rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-4xl font-light text-primary/30">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-0 bg-gradient-to-br from-accent/5 to-primary/5 shadow-subtle rounded-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl mb-4">Pro Tips</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <p className="font-medium mb-2">Best Timing</p>
                  <p className="text-sm text-muted-foreground">30-60 minutes after exercise for optimal recovery</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Temperature</p>
                  <p className="text-sm text-muted-foreground">Heat liquid to 160-180°F for perfect dissolution</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Storage</p>
                  <p className="text-sm text-muted-foreground">Keep in cool, dry place. Seal after each use</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

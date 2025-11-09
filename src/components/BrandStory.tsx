import { Card, CardContent } from "@/components/ui/card";
import hausPromiseImage from "@/assets/haus-promise.png";
import beginningImage from "@/assets/beginning-image.png";

export const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">
              Where Recovery Meets Ritual
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're reimagining the drinks you love — crafting them to nourish better
            </p>
          </div>

          <div className="space-y-12">
            <Card className="border-0 shadow-subtle rounded-xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl mb-4">Our Beginning</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Fuel Haus was born from a simple question: What if the drinks we crave could actually restore us?
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We started in a small kitchen, obsessing over ingredients, testing ratios, and perfecting blends that would feel as good as they taste. No shortcuts. No compromises. Just real ingredients working together to support your body's natural recovery.
                    </p>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src={beginningImage} 
                      alt="Cocoa ingredients - whisk, organic cacao powder, coconut pieces, and hot chocolate preparation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-subtle rounded-xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 aspect-square rounded-xl overflow-hidden">
                    <img 
                      src={hausPromiseImage} 
                      alt="Functional drinks - matcha preparation with whisk, hot cocoa, and iced beverage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl md:text-3xl mb-4">The Haus Promise</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Every ingredient has a purpose. We source organic cacao from small farms, coconut for natural hydration, and electrolytes that your body actually recognizes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      No gums to thicken. No fillers to bulk. Just 8 real ingredients that work in harmony to restore your body while honoring your ritual.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground italic">
                "We're not just making drinks. We're creating moments of restoration, one ritual at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import hausPromiseImage from "@/assets/haus-promise.png";
import beginningImage from "@/assets/beginning-image.png";

export const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-subtle rounded-xl overflow-hidden">
            <CardContent className="p-8 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                    Hydration for the Calm Moments — Not the Finish Line
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We believe hydration isn't just about performance — it's about presence.
                    </p>
                    <p>
                      FuelHaus was created to bring balance back to everyday wellness, blending functional nutrition with emotional calm. Each drink is crafted to restore softly, using clean, natural ingredients that nourish without the noise.
                    </p>
                    <p className="italic">
                      This is hydration as a ritual — not a race.
                    </p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={hausPromiseImage} 
                    alt="Lifestyle wellness moment - mindful hydration and calm restoration ritual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

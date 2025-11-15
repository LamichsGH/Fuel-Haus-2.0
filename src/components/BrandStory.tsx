import { Card, CardContent } from "@/components/ui/card";
import hausPromiseImage from "@/assets/haus-promise.png";
import beginningImage from "@/assets/beginning-image.png";

export const BrandStory = () => {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#f5efea' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card 
            className="border-0 shadow-2xl rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#8b5e46', border: '4px solid #f5efea' }}
          >
            <CardContent className="p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-10 items-center">
                
                {/* Text Content */}
                <div className="space-y-6">
                  <h2 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                    style={{ color: '#f5efea' }}
                  >
                    Hydration for the Calm Moments — Not the Finish Line
                  </h2>
                  
                  <div className="space-y-4 text-sm md:text-base leading-relaxed">
                    <p style={{ color: '#f5efea', opacity: 0.85 }}>
                      We believe hydration isn't just about performance — it's about presence.
                    </p>
                    
                    <p style={{ color: '#f5efea', opacity: 0.85 }}>
                      FuelHaus was created to bring balance back to everyday wellness, blending functional nutrition with emotional calm. Each drink is crafted to restore softly, using clean, natural ingredients that nourish without the noise.
                    </p>
                    
                    <p 
                      className="italic"
                      style={{ color: '#f5efea', opacity: 0.9 }}
                    >
                      This is hydration as a ritual — not a race.
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex items-center justify-center md:justify-end">
                  <img 
                    src={hausPromiseImage} 
                    alt="Lifestyle wellness moment - mindful hydration and calm restoration ritual"
                    className="w-full h-auto rounded-xl object-cover"
                    style={{ maxWidth: '380px', border: '3px solid #f5efea' }}
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

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-background rounded-xl shadow-subtle overflow-hidden border-4 border-primary/20 animate-fade-in">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left Column - Text Content (60% width = 3/5) */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Where Comfort Meets Hydration
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our Recovery Cocoa blends electrolytes with silky-smooth hot chocolate, designed to hydrate as it comforts. Made with real cocoa, mineral-rich electrolytes, and natural coconut creaminess, it restores balance — without the crash or excess sugar.
              </p>
            </div>

            {/* Right Column - Image + CTA (40% width = 2/5) */}
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col items-center justify-center bg-secondary/5">
              {/* Product Image Placeholder */}
              <div className="w-full aspect-square max-w-xs bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl shadow-lg mb-6 flex items-center justify-center">
                <div className="text-8xl opacity-50">☕</div>
              </div>

              {/* Shop Now CTA */}
              <Button
                size="lg"
                className="w-full max-w-xs rounded-xl text-lg font-semibold"
                onClick={() => navigate('/product-detail')}
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

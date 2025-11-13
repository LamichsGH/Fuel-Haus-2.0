import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#8B5E46' }}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2574')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <p className="text-sm font-bold text-white">Loved by our first 50 testers</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            For when you need to refill more than your cup
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
            Electrolyte-infused comfort drinks designed to help you recharge softly
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl shadow-subtle hover:shadow-xl transition-all text-[#1C1C1C] hover:text-[#1C1C1C]"
            style={{ backgroundColor: '#F5EFEA' }}
            onClick={scrollToProducts}
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

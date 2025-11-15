import { Card, CardContent } from "@/components/ui/card";
import brandStoryImage from "@/assets/brand-story-image.png";

export const BrandStory = () => {
  return (
    <section id="brand-story" className="py-32 md:py-40 relative" style={{ backgroundColor: '#f5efea' }}>
      {/* Decorative gradient divider - creates visual break */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 -mt-20" 
        style={{ 
          background: 'linear-gradient(180deg, transparent 0%, #f5efea 100%)'
        }}
      />
      
      {/* Decorative dots pattern */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 flex gap-2 justify-center opacity-20">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8b5e46' }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8b5e46' }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8b5e46' }} />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section eyebrow label */}
          <div className="text-center mb-8 animate-fade-in">
            <span 
              className="inline-block px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase"
              style={{ 
                backgroundColor: 'rgba(139, 94, 70, 0.15)',
                color: '#8b5e46',
                letterSpacing: '0.1em'
              }}
            >
              Our Philosophy
            </span>
          </div>
          <Card 
            className="border-0 shadow-[0_30px_60px_-15px_rgba(139,94,70,0.4)] rounded-3xl overflow-hidden hover:shadow-[0_40px_80px_-15px_rgba(139,94,70,0.5)] transition-shadow duration-500 animate-fade-in"
            style={{ 
              backgroundColor: '#8b5e46', 
              border: '6px solid #f5efea',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <CardContent className="p-10 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 md:gap-12 items-center">
                
                {/* Text Content */}
                <div className="space-y-6">
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                    style={{ color: '#f5efea' }}
                  >
                    Hydration for the Calm Moments
                  </h2>
                  
                  <div className="space-y-4 text-base md:text-lg leading-relaxed">
                    <p style={{ color: '#f5efea', opacity: 0.9 }}>
                      We believe hydration isn't just about performance — it's about presence.
                    </p>
                    
                    <p style={{ color: '#f5efea', opacity: 0.9 }}>
                      FuelHaus was created to bring balance back to everyday wellness, blending functional nutrition with emotional calm. Each drink is crafted to restore softly, using clean, natural ingredients that nourish without the noise.
                    </p>
                    
                    <p 
                      className="italic text-lg"
                      style={{ color: '#f5efea', opacity: 0.95 }}
                    >
                      This is hydration as a ritual — not a race
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex items-center justify-center">
                  <img 
                    src={brandStoryImage} 
                    alt="Lifestyle wellness moment - mindful hydration and calm restoration ritual"
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                    style={{ 
                      maxWidth: '420px', 
                      border: '4px solid #f5efea'
                    }}
                  />
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    q: "What makes FuelHaus different from other hot chocolates?",
    a: "FuelHaus blends real cocoa with electrolytes and magnesium for hydration and calm — without excess sugar or artificial ingredients. Comfort that actually does something for your body"
  },
  {
    q: "How many servings are in a pack?",
    a: "Each pouch makes around 10 servings (based on 40g per serving)."
  },
  {
    q: "Is it vegan or dairy-free?",
    a: "Yes — completely plant-based, made with organic coconut milk instead of dairy."
  },
  {
    q: "Does it actually taste good?",
    a: "Absolutely. Our testers rated taste 10/10 — it's rich and smooth, lightly sweetened with coconut sugar, and naturally creamy from organic coconut milk"
  },
  {
    q: "How does it help with recovery?",
    a: "Our electrolyte and magnesium blend helps restore balance after activity or stress — supporting hydration, muscle function, and calm"
  },
  {
    q: "Is it suitable for everyday use?",
    a: "Yes — it's gentle enough for daily recovery. Most people enjoy a cup after workouts, in the evenings, or anytime they want to unwind and rehydrate softly"
  }
];

export const FAQ = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f5efea' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#1c1c1c' }}>
              FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="border-0 shadow-sm rounded-xl overflow-hidden transition-shadow hover:shadow-md"
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#d8c8b1' : '#c7cbc1'
                }}
              >
                <CardContent className="p-0">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`} className="border-0">
                      <AccordionTrigger 
                        className="text-left px-6 py-4 hover:no-underline"
                        style={{ color: '#1c1c1c' }}
                      >
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent 
                        className="px-6 pb-4 leading-relaxed"
                        style={{ color: '#4a4a4a' }}
                      >
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
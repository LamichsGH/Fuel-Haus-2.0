import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    category: "Product & Ingredients",
    questions: [
      {
        q: "What are the 8 ingredients in Fuel Haus hot chocolate?",
        a: "Our hot chocolate contains organic cacao, coconut milk powder, organic coconut sugar, Himalayan pink salt, natural electrolytes (sodium, potassium, magnesium), organic vanilla, and organic cinnamon. That's it. No gums, no fillers, no artificial anything."
      },
      {
        q: "Is it really only 118 calories?",
        a: "Yes! When prepared with water as directed, one serving contains 118 calories. It's designed to nourish without weighing you down, perfect for recovery without excess."
      },
      {
        q: "Where do you source your ingredients?",
        a: "We source organic cacao from small-batch farms in Ecuador and Peru. Our coconut products come from sustainable farms in Thailand. All ingredients are certified organic where applicable and tested for purity."
      }
    ]
  },
  {
    category: "Health & Nutrition",
    questions: [
      {
        q: "How does this support recovery?",
        a: "The combination of electrolytes helps restore hydration, organic cacao provides antioxidants and magnesium for muscle recovery, and the natural sugars help replenish glycogen stores. It's nutrition that works with your body."
      },
      {
        q: "Is it suitable for dietary restrictions?",
        a: "Our hot chocolate is naturally vegan, dairy-free, gluten-free, and soy-free. It's made with real, whole-food ingredients that most people can enjoy."
      },
      {
        q: "Does it contain caffeine?",
        a: "Yes, naturally from the cacao. Each serving contains approximately 12-15mg of caffeine (about 1/10th of a cup of coffee) plus theobromine, which provides a gentle, sustained energy."
      }
    ]
  },
  {
    category: "Ordering & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "We ship within 1-2 business days. Delivery typically takes 3-5 business days for standard shipping. Expedited options are available at checkout."
      },
      {
        q: "What's your return policy?",
        a: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied, contact us for a full refund. We stand behind the quality of our products."
      },
      {
        q: "Do you offer subscriptions?",
        a: "Coming soon! We're working on a subscription option that will save you 15% and ensure you never run out of your ritual."
      }
    ]
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-4">
              Questions? We've Got Answers
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Fuel Haus
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="border-0 shadow-subtle rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-medium mb-6 text-primary">{category.category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-border">
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-0 bg-gradient-to-br from-primary/5 to-secondary/10 shadow-subtle rounded-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help. Reach out anytime.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

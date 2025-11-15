import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle2, Loader2, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy"
  })
});

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    const result = emailSchema.safeParse({ email, agreedToPrivacy });
    
    if (!result.success) {
      const firstError = result.error.errors[0]?.message;
      toast.error(firstError || "Please check your input");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast.success("Welcome to The Haus!", {
        description: "You're now part of the community. Check your email for updates.",
      });
      
      // Reset form after success
      setTimeout(() => {
        setEmail("");
        setAgreedToPrivacy(false);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#d8c8b1' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden" style={{ backgroundColor: '#f5efea' }}>
            <CardContent className="p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center animate-scale-in">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-3xl mb-4">You're In!</h3>
                  <p className="text-muted-foreground">
                    Welcome to The Haus. Check your email for exclusive updates.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <Mail className="h-12 w-12 mx-auto mb-4" strokeWidth={1.5} style={{ color: '#8b5e46' }} />
                    <h2 className="text-3xl md:text-4xl mb-4 font-semibold" style={{ color: '#1c1c1c' }}>
                      Join The Haus
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#4a4a4a' }}>
                      Be first to know when new blends drop, get invited to test upcoming products, and share moments of calm with a community of recovery over rush
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 rounded-xl text-base"
                        style={{ 
                          backgroundColor: '#ffffff', 
                          borderColor: '#d8c8b1',
                          color: '#1c1c1c'
                        }}
                        disabled={isSubmitting}
                        maxLength={255}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="privacy" 
                        checked={agreedToPrivacy}
                        onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                        disabled={isSubmitting}
                      />
                      <Label 
                        htmlFor="privacy" 
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        I agree to receive marketing emails and accept the privacy policy
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      style={{ 
                        backgroundColor: '#8b5e46', 
                        color: '#f5efea' 
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Step Inside The Haus"
                      )}
                    </Button>
                  </form>

                  {/* Social Proof */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-sm mb-4" style={{ color: '#6b5d52' }}>
                      Join 5,000+ others in The Haus community
                    </p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href="https://www.instagram.com/shopfuelhaus/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
                        style={{ backgroundColor: 'rgba(139, 94, 70, 0.1)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 94, 70, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 94, 70, 0.1)'}
                      >
                        <Instagram className="h-5 w-5" style={{ color: '#8b5e46' }} />
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61581968607899" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
                        style={{ backgroundColor: 'rgba(139, 94, 70, 0.1)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 94, 70, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 94, 70, 0.1)'}
                      >
                        <Facebook className="h-5 w-5" style={{ color: '#8b5e46' }} />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

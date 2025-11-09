import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, MessageCircle, Clock, CheckCircle2, Loader2, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000)
});

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

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
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl mb-4">
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We're here to help make your recovery ritual perfect
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-0 shadow-subtle rounded-xl">
                  <CardContent className="p-6">
                    <Mail className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      We aim to respond within 24 hours
                    </p>
                    <a href="mailto:hello@fuelhaus.com" className="text-primary hover:underline text-sm">
                      hello@fuelhaus.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-subtle rounded-xl">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium mb-2">Response Time</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9am - 6pm EST<br />
                      Weekend: 10am - 4pm EST
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-subtle rounded-xl">
                  <CardContent className="p-6">
                    <MessageCircle className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium mb-2">Social Media</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Connect with us on social media
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary/30 hover:bg-secondary/50 flex items-center justify-center transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary/30 hover:bg-secondary/50 flex items-center justify-center transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-subtle rounded-xl">
                  <CardContent className="p-8">
                    {isSuccess ? (
                      <div className="text-center py-12 animate-scale-in">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl mb-3">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          We've received your message and will get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-base mb-2 block">
                            Your Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="h-12 rounded-xl"
                            disabled={isSubmitting}
                            maxLength={100}
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-base mb-2 block">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-12 rounded-xl"
                            disabled={isSubmitting}
                            maxLength={255}
                          />
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-base mb-2 block">
                            Your Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us how we can help..."
                            value={formData.message}
                            onChange={handleChange}
                            className="min-h-[150px] rounded-xl resize-none"
                            disabled={isSubmitting}
                            maxLength={1000}
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            {formData.message.length}/1000 characters
                          </p>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-12 rounded-xl shadow-subtle"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

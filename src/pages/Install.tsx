import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Smartphone, CheckCircle2, Zap, Wifi, Bell } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant loading and smooth navigation"
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "Browse products even without internet"
  },
  {
    icon: Bell,
    title: "Stay Updated",
    description: "Get notified about new products and offers"
  },
  {
    icon: Smartphone,
    title: "Native Feel",
    description: "Home screen access like a real app"
  }
];

export default function Install() {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
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
          <div className="max-w-2xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-primary/10 flex items-center justify-center">
                <Download className="h-12 w-12 text-primary" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl mb-4">
                Install Fuel Haus
              </h1>
              <p className="text-xl text-muted-foreground">
                Get the full app experience with faster access and offline support
              </p>
            </div>

            {/* Already Installed */}
            {isInstalled && (
              <Card className="mb-8 border-0 bg-primary/5 shadow-subtle rounded-xl">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl mb-2">Already Installed!</h2>
                  <p className="text-muted-foreground">
                    Fuel Haus is installed on your device. You can access it from your home screen.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Install Button - Android/Chrome */}
            {!isInstalled && deferredPrompt && (
              <Card className="mb-8 border-0 shadow-subtle rounded-xl">
                <CardContent className="p-8 text-center">
                  <Button
                    onClick={handleInstall}
                    size="lg"
                    className="w-full h-14 text-lg rounded-xl shadow-subtle mb-4"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Install Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Click to add Fuel Haus to your home screen
                  </p>
                </CardContent>
              </Card>
            )}

            {/* iOS Instructions */}
            {!isInstalled && isIOS && (
              <Card className="mb-8 border-0 shadow-subtle rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl mb-4 text-center">Install on iPhone/iPad</h3>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                      <span>Tap the <strong>Share</strong> button at the bottom of Safari</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                      <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                      <span>Tap <strong>"Add"</strong> in the top-right corner</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                      <span>Find the Fuel Haus icon on your home screen!</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-subtle hover:shadow-xl transition-all duration-300 animate-fade-in rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-primary mb-3" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Card className="border-0 bg-gradient-to-br from-accent/5 to-primary/5 shadow-subtle rounded-xl">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-6">
                  Join thousands of others enjoying the Fuel Haus app experience
                </p>
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="rounded-xl"
                >
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

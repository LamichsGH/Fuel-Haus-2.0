import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Instagram, Facebook, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Index() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          {/* Top Row: Search Icon - Logo - User/Cart Icons */}
          <div className="flex items-center justify-between mb-4">
            {/* Left: Search Icon */}
            <div className="flex items-center gap-2">
              {searchOpen ? (
                <div className="flex items-center gap-2 animate-fade-in">
                  <Input 
                    placeholder="Search products..." 
                    className="w-32 md:w-48"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => {
                      if (!searchQuery) setSearchOpen(false);
                    }}
                    autoFocus
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => {
                        setSearchQuery("");
                        setSearchOpen(false);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  className="min-w-[44px] min-h-[44px] touch-manipulation"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <img 
                src="/logo.png?v=4" 
                alt="Fuel Haus" 
                className="h-28 md:h-32 w-auto object-contain"
              />
            </div>

            {/* Right: Burger Menu (Mobile) + Cart Icon */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu - Visible Only on Mobile */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="md:hidden min-w-[44px] min-h-[44px] hover:bg-transparent touch-manipulation"
                    aria-label="Menu"
                  >
                    <Menu className="h-6 w-6" style={{ color: '#2C1810' }} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[320px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    <Button 
                      variant="ghost" 
                      className="justify-start text-lg font-normal hover:text-primary transition-colors"
                      onClick={() => {
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        setMobileMenuOpen(false);
                      }}
                    >
                      Shop
                    </Button>
                    <Button 
                      variant="ghost"
                      className="justify-start text-lg font-normal hover:text-primary transition-colors"
                      onClick={() => {
                        navigate('/ingredients');
                        setMobileMenuOpen(false);
                      }}
                    >
                      Ingredients
                    </Button>
                    <Button 
                      variant="ghost"
                      className="justify-start text-lg font-normal hover:text-primary transition-colors"
                      onClick={() => {
                        navigate('/contact');
                        setMobileMenuOpen(false);
                      }}
                    >
                      Contact
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Bottom Row: Navigation Links - Centered, Hidden on Mobile */}
          <nav className="hidden md:flex items-center justify-center gap-8 md:gap-12">
            <Button 
              variant="ghost" 
              className="text-base font-normal hover:text-primary hover:bg-transparent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop
            </Button>
            <Button 
              variant="ghost"
              className="text-base font-normal hover:text-primary hover:bg-transparent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              onClick={() => navigate('/ingredients')}
            >
              Ingredients
            </Button>
            <Button 
              variant="ghost"
              className="text-base font-normal hover:text-primary hover:bg-transparent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <div style={{
          padding: '40px',
          textAlign: 'center',
          minHeight: '400px',
          backgroundColor: '#f5efea'
        }}>
          <h1 style={{ color: '#1c1c1c', fontSize: '2rem', marginBottom: '20px' }}>
            Fuel Haus - Simplified Index
          </h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Header and basic layout working. Now testing components one by one...
          </p>
          <Button 
            onClick={() => alert('Navigation working!')}
            style={{ backgroundColor: '#8b5e46', color: 'white' }}
          >
            Test Navigation
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fuel Haus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-white via-accent/5 to-secondary/10 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl floating" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Alexander</span><br />
              <span className="text-primary">Hartwell</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-serif italic relative">
              <span className="shimmer">Classical Composer • Concert Pianist • Educator</span>
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Award-winning composer and pianist bridging classical tradition with contemporary innovation. Currently Artist-in-Residence at the Metropolitan Conservatory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 glow">
                <a href="#media">Listen to Music</a>
              </Button>
              <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
                alt="Alexander Hartwell at piano"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

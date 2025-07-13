import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
              Lewis<br />
              <span className="text-secondary">Chung</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-serif italic">
              Composer • Pianist
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-secondary">
                <a href="#media">Listen to Music</a>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Lewis Chung at piano"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-8 md:pt-16 pb-2 md:pb-6 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center min-h-[30vh] md:min-h-[60vh]">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 md:mb-6 leading-tight">
              Lewis<br />
              <span className="text-secondary">Chung</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-secondary">
                <a href="#media">Listen to Music</a>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

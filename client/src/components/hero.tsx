import { Button } from "@/components/ui/button";
import steinwayBg from "@assets/steinway-piano-bg.jpg";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="pt-8 md:pt-16 pb-2 md:pb-6 relative bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${steinwayBg})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center items-center min-h-[30vh] md:min-h-[60vh]">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 md:mb-6 leading-tight drop-shadow-lg">
              Lewis<br />
              <span className="text-yellow-200">Chung</span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-gray-100 shadow-lg">
                <a href="#media">Listen to Music</a>
              </Button>
              <Button asChild className="bg-gray-600 text-white hover:bg-gray-700 shadow-lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

        </div>
        
        {/* Photo Credits */}
        <div className="absolute bottom-2 right-4 z-10">
          <p className="text-[8px] md:text-xs text-white/70 drop-shadow-sm">
            Photo credit: Hadixos
          </p>
        </div>
      </div>
    </section>
  );
}

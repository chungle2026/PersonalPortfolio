import biographyImage from "@assets/biography-updated.jpg";
import personalPhoto from "@assets/Score by Door_V2_editedFOTOR_1752415188491.jpg";
import quotesImage from "@assets/quotes.jpg";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">About</h2>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Biography Image - Left Side - Larger */}
            <div className="lg:col-span-3 lg:order-1 flex flex-col">
              <div className="md:scale-90 md:origin-top">
                <img
                  src={biographyImage}
                  alt="Lewis Chung Biography"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Personal Photo - Right Side - Smaller */}
            <div className="lg:col-span-2 lg:order-2 flex flex-col">
              <img
                src={personalPhoto}
                alt="Lewis Chung"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <p className="text-[10px] md:text-xs text-gray-500 mt-2 text-center">
                Photo credit: MR. GUMBATRON<sup>TM</sup>
              </p>
            </div>
          </div>
          
          {/* Quotes Section */}
          <div className="mt-6 max-w-3xl mx-auto flex justify-center">
            <div className="w-full md:w-2/3 bg-white md:p-3 rounded-xl md:shadow-xl">
              <img
                src={quotesImage}
                alt="Press quotes about Lewis Chung"
                className="rounded-lg md:rounded-xl shadow-lg md:shadow-none w-full h-auto object-cover scale-125 md:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

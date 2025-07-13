import biographyImage from "@assets/biography-new.jpg";
import personalPhoto from "@assets/score_by_door_v2.jpg";
import quotesImage from "@assets/quotes.jpg";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">About</h2>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Biography Image - Left Side - Larger */}
            <div className="lg:col-span-3 lg:order-1">
              <img
                src={biographyImage}
                alt="Lewis Chung Biography"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Personal Photo - Right Side - Smaller */}
            <div className="lg:col-span-2 lg:order-2 flex justify-center">
              <img
                src={personalPhoto}
                alt="Lewis Chung"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Quotes Section */}
          <div className="mt-16 max-w-4xl mx-auto flex justify-center">
            <img
              src={quotesImage}
              alt="Press quotes about Lewis Chung"
              className="rounded-xl shadow-lg w-2/3 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

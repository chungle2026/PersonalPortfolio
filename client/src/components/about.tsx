import biographyImage from "@assets/Biography JPG_1752384268010.jpg";
import personalPhoto from "@assets/Score by Door_V2_1752384333596.JPG";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">About</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Biography Image */}
            <div className="order-1">
              <img
                src={biographyImage}
                alt="Lewis Chung Biography"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Personal Photo */}
            <div className="order-2">
              <img
                src={personalPhoto}
                alt="Lewis Chung"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import biographyImage from "@assets/biography.jpg";
import personalPhoto from "@assets/score_by_door_v2.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">About</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Biography Image - Left Side */}
            <div className="lg:order-1">
              <img
                src={biographyImage}
                alt="Lewis Chung Biography"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Personal Photo - Right Side */}
            <div className="lg:order-2">
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

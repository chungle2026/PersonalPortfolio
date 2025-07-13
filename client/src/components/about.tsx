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
                src="@assets/Biography JPG_1752384268010.jpg"
                alt="Lewis Chung Biography"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Personal Photo */}
            <div className="order-2">
              <img
                src="/api/placeholder/600/800"
                alt="Lewis Chung"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                style={{ display: 'none' }}
                id="personal-photo"
              />
              <div className="bg-gray-50 p-8 rounded-xl" id="photo-placeholder">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">Photo</h3>
                <p className="text-gray-600">Please upload your personal photo to replace this placeholder.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import artistStatementImage from "@assets/artist-statement.jpg";
import artistPhotoImage from "@assets/artist-photo.jpg";

export default function ArtistStatement() {
  return (
    <section id="artist-statement" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">
          Artist Statement
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Artist Statement Text Image */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src={artistStatementImage}
                alt="Artist Statement"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Artist Photo */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src={artistPhotoImage}
                alt="Lewis Chung - Composer and Pianist"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}